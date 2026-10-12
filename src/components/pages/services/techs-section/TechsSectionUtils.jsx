

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Matter from "matter-js";
import styles from "./techs-section.module.css";
import LazyImage from "../../../ui/lazy-image/LazyImage";

gsap.registerPlugin(ScrollTrigger);

const PhysicsConfig = {
  gravity: { x: 0, y: 1 },
  restitution: 0.5,
  friction: 0.15,
  frictionAir: 0.02,
  density: 0.002,
  wallThickness: 200,
  mouseStiffness: 0.6,
};

const TechsAnimation = ({ items = [] }) => {
  const objectsRef = useRef([]);
  const objectElementsRef = useRef([]);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const mouseConstraintRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

    const updatePositions = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();

      objectsRef.current.forEach(({ body, element, width, height }) => {
        const x = clamp(
          body.position.x - width / 2,
          0,
          containerRect.width - width
        );
        const y = clamp(
          body.position.y - height / 2,
          -height * 3,
          containerRect.height - height
        );

        element.style.left = x + "px";
        element.style.top = y + "px";
        element.style.transform = `rotate(${body.angle}rad)`;
      });

      requestAnimationFrame(updatePositions);
    };

    const initPhysics = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const wallThickness = PhysicsConfig.wallThickness;

      const engine = Matter.Engine.create();
      engine.gravity = PhysicsConfig.gravity;
      engine.constraintIterations = 10;
      engine.positionIterations = 20;
      engine.velocityIterations = 16;
      engine.timing.timeScale = 1;
      engineRef.current = engine;

      const walls = [
        Matter.Bodies.rectangle(
          containerRect.width / 2,
          containerRect.height + wallThickness / 2,
          containerRect.width + wallThickness * 2,
          wallThickness,
          { isStatic: true }
        ),
        Matter.Bodies.rectangle(
          -wallThickness / 2,
          containerRect.height / 2,
          wallThickness,
          containerRect.height + wallThickness * 2,
          { isStatic: true }
        ),
        Matter.Bodies.rectangle(
          containerRect.width + wallThickness / 2,
          containerRect.height / 2,
          wallThickness,
          containerRect.height + wallThickness * 2,
          { isStatic: true }
        ),
      ];
      Matter.World.add(engine.world, walls);

      // Use refs for objects
      objectElementsRef.current.forEach((obj, index) => {
        const objRect = obj.getBoundingClientRect();

        gsap.set(obj, {
          x: Math.random() * containerRect.width - objRect.width / 2,
          y: -objRect.height * 3,
        });

        const startX =
          Math.random() * (containerRect.width - objRect.width) +
          objRect.width / 2;
        const startY = -500 - index * 200;
        const startRotation = (Math.random() - 0.5) * Math.PI;

        const body = Matter.Bodies.rectangle(
          startX,
          startY,
          objRect.width,
          objRect.height,
          {
            restitution: PhysicsConfig.restitution,
            friction: PhysicsConfig.friction,
            frictionAir: PhysicsConfig.frictionAir,
            density: PhysicsConfig.density,
          }
        );

        Matter.Body.setAngle(body, startRotation);

        objectsRef.current.push({
          body,
          element: obj,
          width: objRect.width,
          height: objRect.height,
        });

        Matter.World.add(engine.world, body);
      });

      const runner = Matter.Runner.create();
      Matter.Runner.run(runner, engine);
      runnerRef.current = runner;
      updatePositions();

      const mouse = Matter.Mouse.create(container);
      mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse,
        constraint: {
          stiffness: PhysicsConfig.mouseStiffness,
          render: { visible: false },
        },
      });
      Matter.World.add(engine.world, mouseConstraint);
      mouseConstraintRef.current = mouseConstraint;

      mouseConstraint.mouse.element.oncontextmenu = () => false;

      let dragging = null;
      let originalInertia = null;

      Matter.Events.on(mouseConstraint, "startdrag", (event) => {
        dragging = event.body;
        if (dragging) {
          originalInertia = dragging.inertia;
          Matter.Body.setInertia(dragging, Number.POSITIVE_INFINITY);
          Matter.Body.setVelocity(dragging, { x: 0, y: 0 });
          Matter.Body.setAngularVelocity(dragging, 0);
        }
      });

      Matter.Events.on(mouseConstraint, "enddrag", () => {
        if (dragging) {
          Matter.Body.setInertia(dragging, originalInertia || 1);
          dragging = null;
          originalInertia = null;
        }
      });

      Matter.Events.on(engine, "beforeUpdate", () => {
        if (dragging) {
          const found = objectsRef.current.find((b) => b.body === dragging);
          if (found) {
            const minX = found.width / 2;
            const maxX = containerRect.width - found.width / 2;
            const minY = found.height / 2;
            const maxY = containerRect.height - found.height / 2;

            Matter.Body.setPosition(dragging, {
              x: clamp(dragging.position.x, minX, maxX),
              y: clamp(dragging.position.y, minY, maxY),
            });

            Matter.Body.setVelocity(dragging, {
              x: clamp(dragging.velocity.x, -20, 20),
              y: clamp(dragging.velocity.y, -20, 20),
            });
          }
        }
      });

      container.addEventListener("mouseleave", () => {
        mouseConstraint.constraint.bodyB = null;
        mouseConstraint.constraint.pointB = null;
      });

      document.addEventListener("mouseup", () => {
        if (mouseConstraint.constraint.bodyB) {
          mouseConstraint.constraint.bodyB = null;
        }
      });
    };

    let physicsInitialized = false;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 180%",
      onEnter: () => {
        if (!physicsInitialized) {
          initPhysics();
          physicsInitialized = true;
        }
      },
    });

    return () => {
      if (runnerRef.current) Matter.Runner.stop(runnerRef.current);
      if (engineRef.current) Matter.Engine.clear(engineRef.current);
    };
  }, []);

  return (
    <div>
      <section className={styles.footer} ref={containerRef}>
        <div  className={styles.objectContainer}>
          {items.length > 0
            ? items.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.object} bgGlassWGlow`}
                  ref={(el) => (objectElementsRef.current[index] = el)}
                >
                <LazyImage src={item.icon} alt="tech object icon" />
                  <p>{item.name}</p>
                </div>
              ))
            : [
                "Codegrid",
                "HTML",
                "CSS",
                "JavaScript",
                "GSAP",
                "ScrollTrigger",
                "Lenis",
                "React",
                "Next.js",
                "WebGL",
                "Three.js",
                "Creative Dev",
              ].map((item, index) => (
                <div
                  key={index}
                  className={styles.object}
                  ref={(el) => (objectElementsRef.current[index] = el)}
                >
                  <p>{item}</p>
                </div>
              ))}
        </div>
      </section>
    </div>
  );
};

export default TechsAnimation;
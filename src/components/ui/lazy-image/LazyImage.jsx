import { useState, useEffect, useRef } from "react";
import styles from "./lazy-image.module.css";

export default function LazyImage({ src, alt = "", className = "", ...props }) {
 

  return (
    <img
      src={src}
      alt={alt}
      className={`${styles.image} ${className} `}
      // onLoad={() => setIsLoaded(true)}
      // onError={() => setIsError(true)}
      {...props}
    />
  );
}


// import { useState, useEffect, useRef } from "react";
// import styles from "./lazy-image.module.css";

// export default function LazyImage({ src, alt = "", className = "", ...props }) {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const imgRef = useRef();

//   useEffect(() => {
//     if (!imgRef.current) return;

//     const imgEl = imgRef.current;

//     // Lazy load using IntersectionObserver
//     if ("IntersectionObserver" in window) {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               imgEl.src = imgEl.dataset.src;
//               observer.unobserve(imgEl);
//             }
//           });
//         },
//         {
//           threshold: 0.01,
//           rootMargin: "1200px", // 👈 start loading 200px before visible
//         }
//       );

//       observer.observe(imgEl);
//       return () => observer.disconnect();
//     } else {
//       // Fallback: immediately load
//       imgEl.src = imgEl.dataset.src;
//     }
//   }, [src]);

//   return (
//     <img
//       ref={imgRef}
//       data-src={src}
//       alt={alt}
//       className={`${styles.image} ${className} ${
//         isLoaded ? styles.visible : ""
//       }`}
//       onLoad={() => setIsLoaded(true)}
//       onError={() => setIsError(true)}
//       {...props}
//     />
//   );
// }

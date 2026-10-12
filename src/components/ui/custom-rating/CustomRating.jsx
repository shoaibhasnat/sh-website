// - Displays a customizable star rating UI.
// - `value` controls filled stars, `max` controls total stars.

export default function CustomRating({ value = 0, max = 5 }) {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {Array.from({ length: max }).map((_, index) => (
        <Star key={index} filled={index < value} />
      ))}
    </div>
  );
}
function Star({ filled = false, size = 23, color = "#ffae00" }) {
  return (
    <span style={{ paddingRight: "1px" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 274.81 263.26"
        xmlns="http://www.w3.org/2000/svg"
        fill={filled ? color : "none"}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M200,410c2-12.13,4-23.94,6-35.74q2.57-15,5.17-30c1.07-6.06-.6-10.95-5.15-15.29q-22.77-21.75-45.17-43.89c-9.33-9.25-7.78-22.81,3.21-30a16.85,16.85,0,0,1,6.46-2.37c20.08-3.06,40.14-6.2,60.28-8.82,8.62-1.12,14.11-5,17.82-13,8.15-17.49,16.77-34.78,25.67-51.9a26.37,26.37,0,0,1,9.15-10.1c9.3-5.6,20.06-2.28,25.5,7.75,6.1,11.25,11.52,22.88,17.22,34.36q5.66,11.4,11.25,22.84c2.52,5.15,6.38,8.29,12.2,9.14q32.1,4.73,64.19,9.65c12.76,1.95,19.9,16.49,13.15,27.47-2.66,4.32-6.39,8.07-10.05,11.66q-18.9,18.57-38.12,36.79c-5.15,4.86-6.58,10.3-5.33,17.14,3.72,20.3,7.17,40.65,10.63,61,1.36,8-1.61,14.63-8,19.21-6.12,4.38-12.9,4.66-19.75,1-18-9.48-36.05-18.72-53.91-28.38-7-3.76-13.2-3.94-20.25-.07C265,408,247.5,416.94,230.11,426.08,217.9,432.5,206.77,429,201.57,417,200.61,414.79,200.48,412.22,200,410Z"
          transform="translate(-154.77 -166.2)"
        />
      </svg>
    </span>
  );
}

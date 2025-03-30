export default function PlusIcon({ fill }) {
  return (
    <svg
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        stroke="currentColor"
        fill={fill ? "currentColor" : "none"}
        width="18"
        height="18"
        x="3"
        y="3"
        rx="3"
        ry="3"
      ></rect>
      <path
        stroke={fill ? "white" : "currentColor"}
        d="M12 17V7M17 12H7"
      ></path>
    </svg>
  );
}

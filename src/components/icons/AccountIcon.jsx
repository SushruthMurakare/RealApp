export default function AccountIcon({ fill }) {
  return (
    <svg
      viewBox="1 1 22 22"
      strokeWidth="1.8"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        fill={fill ? "currentColor" : "none"}
        stroke="none"
      ></circle>
      <circle
        cx="12"
        cy="9"
        r="3"
        fill="white"
        stroke={fill ? "white" : "currentColor"}
      ></circle>
      {fill ? (
        <path
          fill="white"
          stroke="none"
          d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20Q12 23 19 19"
        ></path>
      ) : (
        <path
          fill="none"
          stroke="currentColor"
          d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
        ></path>
      )}
      <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none"></circle>
    </svg>
  );
}

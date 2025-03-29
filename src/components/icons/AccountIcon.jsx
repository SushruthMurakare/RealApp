export default function AccountIcon(props) {
  return (
    <svg
      className={props.fill ? "outline-2 rounded-full" : ""}
      viewBox="1 1 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="9" r="3"></circle>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"></path>
    </svg>
  );
}

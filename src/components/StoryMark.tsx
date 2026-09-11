type StoryMarkProps = {
  className?: string;
};

export function StoryMark({ className }: StoryMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 10.5C8 9.12 9.12 8 10.5 8H22v32H10.5C9.12 40 8 38.88 8 37.5V10.5Z"
        fill="#E6F4FE"
        stroke="#208AEF"
        strokeWidth="1.6"
      />
      <path
        d="M40 10.5C40 9.12 38.88 8 37.5 8H26v32h11.5c1.38 0 2.5-1.12 2.5-2.5V10.5Z"
        fill="#E6F4FE"
        stroke="#208AEF"
        strokeWidth="1.6"
      />
      <path d="M24 8v32" stroke="#208AEF" strokeWidth="1.6" />
      <path
        d="M13 16h6M13 22h6M13 28h5M29 16h6M29 22h6M29 28h5"
        stroke="#38BDF8"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

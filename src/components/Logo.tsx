type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 40 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="20" cy="12" rx="16" ry="8.5" fill="#38BDF8" />
      <ellipse cx="20" cy="13" rx="11" ry="4" fill="#E0F2FE" opacity="0.85" />
      <ellipse cx="20" cy="22.5" rx="12.5" ry="7" fill="#208AEF" />
      <ellipse cx="20" cy="31" rx="8" ry="5.5" fill="#2563EB" />
      <path d="M16.5 35C16.5 35 20 47 23.5 35C21.8 38.5 18.2 38.5 16.5 35Z" fill="#1D4ED8" />
      <circle cx="15" cy="11.5" r="2" fill="#0F172A" />
      <circle cx="25" cy="11.5" r="2" fill="#0F172A" />
      <circle cx="14.3" cy="10.8" r="0.7" fill="#FFFFFF" />
      <circle cx="24.3" cy="10.8" r="0.7" fill="#FFFFFF" />
      <path
        d="M16.5 15.2C18 17.6 22 17.6 23.5 15.2"
        stroke="#0F172A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

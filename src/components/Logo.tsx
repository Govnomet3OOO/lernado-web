type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt=""
      width={345}
      height={157}
      className={["block", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    />
  );
}

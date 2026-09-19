type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt=""
      width={149}
      height={150}
      className={["block", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    />
  );
}

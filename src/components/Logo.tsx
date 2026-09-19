type LogoProps = {
  className?: string;
  src?: string;
  width?: number;
  height?: number;
};

export function Logo({
  className,
  src = "/logo.svg",
  width = 345,
  height = 157,
}: LogoProps) {
  return (
    <img
      src={src}
      alt=""
      width={width}
      height={height}
      className={["block", className].filter(Boolean).join(" ")}
      aria-hidden="true"
    />
  );
}

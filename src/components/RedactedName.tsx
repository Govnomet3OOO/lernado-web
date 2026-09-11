type RedactedNameProps = {
  className?: string;
};

export function RedactedName({ className = "" }: RedactedNameProps) {
  return (
    <span
      role="img"
      aria-label="Name hidden"
      title="Name hidden"
      className={`redacted-name ${className}`.trim()}
    />
  );
}

import { StarGlow } from "./StarGlow";
import { SunGlow } from "./SunGlow";

export function SkyDecorations() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-16 bottom-0 z-[1] overflow-visible">
      <SunGlow />
      <StarGlow />
    </div>
  );
}

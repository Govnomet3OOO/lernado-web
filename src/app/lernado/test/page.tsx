import { LegacyRedirect } from "../../../components/LegacyRedirect";
import { legacyRedirectMetadata } from "../legacy";

export const metadata = legacyRedirectMetadata;

export default function Page() {
  return <LegacyRedirect href="/test/" />;
}

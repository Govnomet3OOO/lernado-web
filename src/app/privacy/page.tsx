import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument, type LegalSection } from "../../components/LegalDocument";
import { products } from "../../lib/products";
import { site } from "../../lib/site";

const product = products.lernado;

export const metadata: Metadata = {
  title: {
    absolute: `Privacy Policy — ${product.name}`,
  },
  description: `Privacy Policy for the ${product.name} mobile app (${product.packageName}).`,
};

const lastUpdatedLabel = "Last updated October 5, 2026";

export default function LernadoPrivacyPage() {
  const sections: LegalSection[] = [
    {
      id: "who-we-are",
      title: "Who we are",
      content: (
        <p>
          The {product.name} app is made and operated by {site.operator}. There
          is no company behind it. Company website:{" "}
          <a href={site.url}>{site.host}</a>. Contact:{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          Android package name: <strong>{product.packageName}</strong>.
        </p>
      ),
    },
    {
      id: "scope",
      title: "Scope",
      content: (
        <p>
          This policy describes how we collect, use, and share information when
          you use the {product.name} app ({product.tagline}). The website at{" "}
          {site.host} is a static site and does not use advertising or analytics
          cookies.
        </p>
      ),
    },
    {
      id: "information-we-collect",
      title: "Information we collect",
      content: (
        <>
          <p>Depending on how you use the app, we may collect:</p>
          <ul>
            <li>
              <strong>Account data:</strong> your email address, account
              identifiers, and authentication tokens. You can sign in with an
              email code or magic link, or with Google.
            </li>
            <li>
              <strong>Profile data:</strong> the display name you choose, or the
              name your sign-in provider gives us, and your profile picture if
              your Google account has one.
            </li>
            <li>
              <strong>Future purchase data:</strong> when paid features launch,
              whether you have an active paid plan and when it expires. Purchases
              are unavailable during closed testing. Card numbers and billing
              addresses will go to the store or payment provider, not to us.
            </li>
            <li>
              <strong>Learning data:</strong> progress, XP, streaks, daily
              goals, dictionaries, and words you add. For signed-in accounts,
              this data is stored in our cloud backend and cached on your device
              so it can sync across devices.
            </li>
            <li>
              <strong>User content for AI:</strong> words, translations,
              sentences, and dialog replies you submit to AI features.
            </li>
            <li>
              <strong>Dictionary lookups:</strong> the word you look up is sent
              to third-party dictionary services. Your account is not attached
              to those requests.
            </li>
            <li>
              <strong>Technical data:</strong> app version, build number,
              operating system version, and filtered error stack traces used to
              investigate crashes and app freezes. Our Sentry configuration
              removes account identifiers, learner text, authentication tokens,
              and request bodies from error reports. We do not enable session
              replay, screenshots, or advertising tracking.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "future-data",
      title: "Features we may add",
      content: (
        <>
          <p>
            The app is still growing. We may add the features below. When we do,
            we will update this policy and the &quot;Last updated&quot; date
            before or when the feature ships.
          </p>
          <ul>
            <li>
              <strong>Your own profile picture:</strong> an image you upload,
              stored on our backend instead of coming from a sign-in provider.
            </li>
            <li>
              <strong>Social features:</strong> leaderboards, friends, and
              profiles that other learners can see.
            </li>
            <li>
              <strong>More sign-in options</strong> besides email and Google.
            </li>
            <li>
              <strong>Additional product data</strong> to build and improve
              features. We would collect it to run the app, never to show you
              advertising and never to sell.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "how-we-use-it",
      title: "How we use information",
      content: (
        <ul>
          <li>create and authenticate your account;</li>
          <li>
            provide training, dictionaries, translations, sentence checking, and
            mini-dialogs;
          </li>
          <li>unlock and maintain paid features if purchases become available;</li>
          <li>operate, maintain, and improve the app;</li>
          <li>
            send you service messages needed to run your account, such as
            sign-in codes;
          </li>
          <li>respond to support and account-deletion requests.</li>
        </ul>
      ),
    },
    {
      id: "emails",
      title: "Emails we send",
      content: (
        <p>
          We email you only to run your account: sign-in codes and magic links,
          purchase and account notices, security messages, and replies to
          support you start. We do not send newsletters or promotional mail
          about this app or any other app. Email providers send service
          messages on our behalf and are not authorized to market to you.
        </p>
      ),
    },
    {
      id: "what-we-dont-do",
      title: "What we do not do",
      content: (
        <ul>
          <li>We do not sell your personal information.</li>
          <li>
            We do not send promotional or marketing email, and we do not show
            advertising in the app. The app does not contain advertising SDKs or
            advertising identifiers.
          </li>
          <li>
            We do not use your learner content to train our own AI models.
          </li>
          <li>
            We do not collect precise location, your contacts, or your device
            photo library.
          </li>
        </ul>
      ),
    },
    {
      id: "payments",
      title: "Payments",
      content: (
        <p>
          During closed testing, access is free through the tester activation
          code; no payment or subscription is created. Purchases are not
          available in this test version. When paid features launch on Android,
          payments will be processed by <strong>Google Play</strong>. Google
          will keep payment details; we will receive the purchase entitlement
          needed to provide access. We will update this policy if we introduce
          another payment provider.
        </p>
      ),
    },
    {
      id: "processors",
      title: "Service providers",
      content: (
        <>
          <p>We use service providers to operate the {product.name} app:</p>
          <ul>
            <li>
              <strong>Supabase</strong> — account, authentication, and backend
              records, including profiles, personal dictionaries, learning
              progress, settings, and synchronization records tied to your account.
            </li>
            <li>
              <strong>Google</strong> — Google Sign-In, future Google Play billing, and
              Google Gemini, which processes prompts and learner text for card
              translations, sentence checking, and mini-dialogs.
            </li>
            <li>
              <strong>Dictionary services</strong> — Wiktionary (Wikimedia),
              Datamuse, and dictionaryapi.dev receive the word you look up.
            </li>
            <li>
              <strong>Sentry</strong> — filtered crash and app-freeze reports
              to help us find and fix errors. Our Sentry organization stores
              these reports in the United States.
            </li>
            <li>
              <strong>Resend</strong> — service email for website account-deletion
              codes and notifications to the developer.
            </li>
          </ul>
          <p>
            Those providers process data on our behalf, or under their own terms
            and privacy policies for the part of the service they run. They are
            not allowed to sell your data or use it for their own marketing to
            you.
          </p>
        </>
      ),
    },
    {
      id: "social",
      title: "Other learners",
      content: (
        <p>
          Today nothing you do in the app is visible to other users. If we add
          social features such as leaderboards or friends, we will say what
          becomes visible — typically your display name, profile picture, and
          progress — and update this policy before that ships.
        </p>
      ),
    },
    {
      id: "local-storage",
      title: "Data on your device",
      content: (
        <p>
          The app keeps a local database of learning content, progress, and
          settings. Signed-in learning data also syncs to our cloud backend.
          Uninstalling the app does not delete your cloud account or its synced
          progress. Demo data and changes that have not synced may be lost if
          you clear the app data or uninstall.
        </p>
      ),
    },
    {
      id: "sharing",
      title: "Sharing",
      content: (
        <p>
          We do not sell your personal information. We share data with the
          service providers above to operate the app, with other learners only
          through features you can see, and with authorities if the law requires
          it.
        </p>
      ),
    },
    {
      id: "retention",
      title: "Retention",
      content: (
        <p>
          Account and synced learning data are kept until you delete your
          account. Local data remains until you clear it, delete the account
          from that device, or uninstall. AI providers process prompts to
          generate a response. Filtered diagnostics and operational
          provider logs follow the retention periods configured for those
          services. Backups are kept for no more than 30 days. Correspondence
          about an account-deletion request is kept for no more than 90 days
          after the request is completed. Purchase records, when purchases
          become available, may be kept longer where the law requires it.
        </p>
      ),
    },
    {
      id: "deletion",
      title: "Account deletion",
      content: (
        <p>
          You can delete your account in the app, or on the{" "}
          <Link href={product.deleteAccountHref}>account deletion page</Link>{" "}
          at {site.host}. That removes your authentication account and related
          server records we control, and clears local learning data on that
          device if you delete from the app. The website form confirms your
          email with a one-time code, then asks why you are leaving. The survey
          database stores those answers without your email or account id.
          A deletion notification sent to the developer includes the account
          email, account id, and selected reasons. Copies of that correspondence
          may remain for up to 90 days after the request is completed; backup
          copies may remain for up to 30 days after the live account is removed.
          Card-error reports may remain after the account link is removed;
          avoid including personal information in report comments.
          Deleting on the website does not directly erase an offline device;
          clear its app data or uninstall to remove its local copy. You can also
          email{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          After deletion you can register again with the same email if you
          choose.
        </p>
      ),
    },
    {
      id: "children",
      title: "Children",
      content: (
        <p>
          The app is not directed at children under 13. We do not knowingly
          collect personal information from children under 13. If you believe a
          child has created an account, contact us and we will delete it.
        </p>
      ),
    },
    {
      id: "international",
      title: "International processing",
      content: (
        <p>
          We are based in the United States, and our providers may process data
          in the United States and other countries. By using the app you
          understand that your information may be transferred and processed
          outside your country, where privacy laws may differ.
        </p>
      ),
    },
    {
      id: "your-rights",
      title: "Your rights",
      content: (
        <p>
          Depending on where you live, you may have rights to access, correct,
          or delete personal data, or to object to certain processing. Contact
          us at{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. You
          can also delete your account in the app or on the{" "}
          <Link href={product.deleteAccountHref}>account deletion page</Link>{" "}
          as described above.
        </p>
      ),
    },
    {
      id: "changes",
      title: "Changes",
      content: (
        <p>
          We may update this policy. We will post the new version on this page
          and update the &quot;Last updated&quot; date.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <p>
          Privacy questions:{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. See
          also the <Link href={product.termsHref}>Terms of Use</Link>.
        </p>
      ),
    },
  ];

  return (
    <LegalDocument
      title="Privacy Policy"
      lastUpdated={lastUpdatedLabel}
      intro={
        <p>
          This policy applies to the {product.name} app ({product.tagline}) for
          Google Play Data safety disclosures and in-app use. Other Lernado
          products may have their own policies. Related terms are in the{" "}
          <Link href={product.termsHref}>Terms of Use</Link>.
        </p>
      }
      sections={sections}
    />
  );
}

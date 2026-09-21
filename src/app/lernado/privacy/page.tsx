import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument, type LegalSection } from "../../../components/LegalDocument";
import { products } from "../../../lib/products";
import { site } from "../../../lib/site";

const product = products.lernado;

export const metadata: Metadata = {
  title: {
    absolute: `Privacy Policy — ${product.name}`,
  },
  description: `Privacy Policy for the ${product.name} mobile app (${product.packageName}).`,
};

const lastUpdatedLabel = `Last updated ${site.lastUpdated}`;

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
          you use the {product.name} app ({product.tagline}). It does not
          automatically cover other Lernado apps, which may have their own
          policies. The company website at {site.host} is a static site and does
          not use advertising or analytics cookies.
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
              <strong>Purchase data:</strong> whether you have an active paid
              plan, and when it expires. Card numbers and billing addresses go
              to the store or payment provider, not to us.
            </li>
            <li>
              <strong>Learning data:</strong> progress, XP, streaks, daily
              goals, dictionaries, and words you add, stored primarily on your
              device.
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
              <strong>Technical data:</strong> information needed to run the
              app (for example app version) when you communicate with our
              backend.
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
          <li>unlock and maintain paid features you buy;</li>
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
          about this app or any other app. If we ever need an email delivery
          provider for those service messages, it would act only on our behalf
          and would not be allowed to market to you.
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
          Paid features are sold through <strong>Google Play</strong>. Google
          processes the payment and keeps your payment details; we receive the
          fact that a purchase happened and what it entitles you to, which we
          store with your account. If we later sell through other stores or
          payment providers, such as a web checkout, those providers will handle
          payment details in the same way and we will name them here.
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
              records (including profile data tied to your account).
            </li>
            <li>
              <strong>Google</strong> — Google Sign-In, Google Play billing, and
              Google Gemini, which processes prompts and learner text for card
              translations, sentence checking, and mini-dialogs.
            </li>
            <li>
              <strong>Dictionary services</strong> — Wiktionary (Wikimedia),
              Datamuse, and dictionaryapi.dev receive the word you look up.
            </li>
            <li>
              <strong>An email delivery provider</strong>, if we send account
              email such as sign-in codes through one.
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
          Learning progress and settings are stored locally on your device,
          including in a local database. Uninstalling the app removes that local
          data. Server-side account data is not removed until you delete your
          account.
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
          Account data is kept until you delete your account. Local learning
          data remains on the device until you clear it, delete the account from
          the app, or uninstall. Prompts sent to AI providers are processed to
          generate a response. Purchase records may be kept longer where tax or
          accounting rules require it.
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
          email with a one-time code, then asks why you are leaving. Those
          answers are stored without your email or account id. You can also
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

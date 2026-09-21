import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument, type LegalSection } from "../../../components/LegalDocument";
import { products } from "../../../lib/products";
import { site } from "../../../lib/site";

const product = products.lernado;

export const metadata: Metadata = {
  title: {
    absolute: `Terms of Use — ${product.name}`,
  },
  description: `Terms of Use for the ${product.name} mobile app (${product.packageName}).`,
};

const lastUpdatedLabel = `Last updated ${site.lastUpdated}`;

export default function LernadoTermsPage() {
  const sections: LegalSection[] = [
    {
      id: "agreement",
      title: "Agreement",
      content: (
        <>
          <p>
            These Terms of Use (&quot;Terms&quot;) govern your access to and use
            of the {product.name} mobile application ({product.tagline}, Android
            package <strong>{product.packageName}</strong>). The website at{" "}
            <a href={site.url}>{site.host}</a> is the Lernado company site and
            may list other apps. These Terms apply only to the {product.name}{" "}
            app, operated by {site.operator} (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;).
          </p>
          <p>
            By creating an account or using the {product.name} app, you agree to
            these Terms. If you do not agree, do not use the app.
          </p>
        </>
      ),
    },
    {
      id: "eligibility",
      title: "Eligibility",
      content: (
        <p>
          You must be at least 13 years old to use the app. If you are under
          the age of majority where you live, you may use it only with a parent
          or guardian&apos;s permission.
        </p>
      ),
    },
    {
      id: "account",
      title: "Account",
      content: (
        <p>
          You sign in with an email address using a one-time code or magic
          link, or with Google. We may add other sign-in providers later. You
          are responsible for the email account and any provider account you
          use, and for activity under your {product.name} account. Keep access
          to them secure.
        </p>
      ),
    },
    {
      id: "license",
      title: "License",
      content: (
        <p>
          We grant you a personal, limited, non-exclusive, non-transferable,
          revocable license to install and use the app for your own language
          learning. You may not copy, modify, distribute, sell, or sublicense
          the app except as allowed by these Terms or by law.
        </p>
      ),
    },
    {
      id: "acceptable-use",
      title: "Acceptable use",
      content: (
        <>
          <p>You agree not to:</p>
          <ul>
            <li>use the app for anything unlawful, harmful, or abusive;</li>
            <li>
              attempt to disrupt, overload, or reverse engineer the app except
              to the extent allowed by applicable law;
            </li>
            <li>
              submit content you do not have the right to use, or that includes
              sensitive personal data about other people;
            </li>
            <li>
              use automated means to abuse AI features or create accounts;
            </li>
            <li>
              harass, impersonate, or abuse other learners, or post anything
              hateful or obscene where other people can see it, if we add
              features that show your profile or activity to others.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "ai-features",
      title: "AI features",
      content: (
        <p>
          The app uses artificial intelligence, including Google Gemini, to
          translate vocabulary cards, check sentences, and run mini-dialogs. AI
          output can be incomplete, inaccurate, or inappropriate. It is not a
          substitute for a teacher, examiner, or professional advice. You are
          responsible for how you use that output.
        </p>
      ),
    },
    {
      id: "user-content",
      title: "Your content",
      content: (
        <>
          <p>
            You may add words, translations, example sentences, a display name,
            and a profile picture. You retain any rights you have in that
            content, and you must have the right to use anything you upload. You
            grant us a worldwide, non-exclusive license to host, process, and
            transmit it as needed to operate the app, including sending relevant
            text to our AI providers and sending the word you look up to
            third-party dictionary services. We do not claim ownership of your
            personal word lists.
          </p>
          <p>
            If we add features that show learners to each other, such as
            leaderboards or friends, your display name, profile picture, and
            progress may become visible to other users of the app.
          </p>
        </>
      ),
    },
    {
      id: "fees",
      title: "Purchases",
      content: (
        <>
          <p>
            The app is free to install. Some features may require a one-time
            purchase or a subscription. We show the price and what you get
            before you pay, and a subscription renews until you cancel it.
          </p>
          <p>
            Purchases made on Android are processed by{" "}
            <strong>Google Play</strong>, and Google&apos;s payment, renewal,
            and refund rules apply in addition to these Terms. Cancel or manage
            a subscription in your Google Play account. If we later sell through
            other stores or payment providers, that provider&apos;s rules will
            apply to those purchases.
          </p>
          <p>
            Except where the law or the store requires a refund, payments are
            not refundable. If we stop offering a paid feature you already paid
            for, we will give you a pro-rated refund or a comparable
            replacement.
          </p>
        </>
      ),
    },
    {
      id: "communications",
      title: "Communications",
      content: (
        <p>
          We send account email, such as sign-in codes, purchase notices, and
          support replies, for as long as you have an account. We do not send
          promotional email about this app or any other app. See the{" "}
          <Link href={product.privacyHref}>Privacy Policy</Link> for details.
        </p>
      ),
    },
    {
      id: "intellectual-property",
      title: "Intellectual property",
      content: (
        <p>
          {site.name}, the {product.name} app, built-in dictionaries, and
          related branding are owned by us or our licensors. These Terms do not
          transfer ownership of any intellectual property. Other Lernado apps
          may have their own terms.
        </p>
      ),
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      content: (
        <p>
          The app is provided &quot;as is&quot; and &quot;as available&quot;
          without warranties of any kind, express or implied, including
          merchantability, fitness for a particular purpose, and
          non-infringement. We do not warrant uninterrupted or error-free
          operation, or that your vocabulary progress will meet any particular
          result.
        </p>
      ),
    },
    {
      id: "liability",
      title: "Limitation of liability",
      content: (
        <p>
          To the maximum extent permitted by law, we are not liable for
          indirect, incidental, special, consequential, or punitive damages, or
          for lost data, profits, or learning outcomes. Our total liability for
          any claim relating to the app will not exceed the greater of (a) the
          amount you paid for the app in the twelve months before the claim or
          (b) ten US dollars (US $10). Some jurisdictions do not allow certain
          limitations; in those cases the limitation applies to the fullest
          extent permitted.
        </p>
      ),
    },
    {
      id: "termination",
      title: "Termination",
      content: (
        <p>
          You may stop using the app and delete your account in the app or on
          the{" "}
          <Link href={product.deleteAccountHref}>account deletion page</Link>.
          Deleting your account does not cancel a subscription on its own —
          cancel that in the store you bought it from. We may suspend or
          terminate access if you violate these Terms or if we discontinue the
          app. After deletion, some records may remain for a limited time as
          described in the{" "}
          <Link href={product.privacyHref}>Privacy Policy</Link>.
        </p>
      ),
    },
    {
      id: "changes",
      title: "Changes",
      content: (
        <p>
          We may update these Terms. We will post the new version on this page
          and update the &quot;Last updated&quot; date. Continued use after the
          effective date means you accept the revised Terms.
        </p>
      ),
    },
    {
      id: "governing-law",
      title: "Governing law",
      content: (
        <p>
          These Terms are governed by {site.governingLaw}, without regard to
          conflict-of-law rules, except where mandatory consumer protection law
          in your country applies.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      content: (
        <p>
          Questions about these Terms:{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
        </p>
      ),
    },
  ];

  return (
    <LegalDocument
      title="Terms of Use"
      lastUpdated={lastUpdatedLabel}
      intro={
        <p>
          This user agreement applies to the {product.name} app ({product.tagline}),
          not to other Lernado products. Related privacy details are in the{" "}
          <Link href={product.privacyHref}>Privacy Policy</Link>.
        </p>
      }
      sections={sections}
    />
  );
}

import { createFileRoute } from "@tanstack/react-router";

import LegalPage from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Use — PepRep" },
      {
        name: "description",
        content:
          "Terms for using the PepRep measurement and record-keeping app.",
      },
    ],
    links: [{ rel: "canonical", href: "https://peprep.co/terms" }],
  }),
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Measurement, not medical advice."
      summary="These terms describe the boundary of PepRep: you provide the inputs and make your own decisions; PepRep performs arithmetic and keeps records."
      updated="19 July 2026"
    >
      <h2>1. Acceptance</h2>
      <p>By using PepRep, you agree to these terms and the Privacy Policy.</p>

      <h2>2. What PepRep provides</h2>
      <p>
        PepRep converts user-entered vial, water, dose, and syringe information
        into visible arithmetic and supports personal record-keeping. It may
        also provide local reminders, exports, and optional encrypted backups.
      </p>

      <h2>3. What PepRep does not provide</h2>
      <p>
        PepRep does not diagnose, prescribe, recommend doses, create treatment
        plans, verify the contents or quality of a vial, supervise use, or
        replace a qualified healthcare professional. A displayed calculation is
        not approval that an input, product, plan, or action is safe or
        appropriate.
      </p>

      <h2>4. Your responsibilities</h2>
      <ul>
        <li>
          Enter and check every value, unit, vial label, and syringe capacity.
        </li>
        <li>
          Inspect warning messages and correct inputs before relying on a
          calculation.
        </li>
        <li>
          Keep independent records where loss of app data would cause harm.
        </li>
        <li>
          Use PepRep only where lawful and only for information you are entitled
          to record.
        </li>
      </ul>

      <h2>5. Accounts and backups</h2>
      <p>
        An account is not required for local use. If you create an optional
        cloud-backup account, you are responsible for access to its email
        address and for remembering each backup password. PepRep cannot decrypt
        or recover a backup without that password.
      </p>

      <h2>6. Availability and changes</h2>
      <p>
        Features may change, be corrected, or be withdrawn. Local operation and
        optional online services may be interrupted by device, network,
        platform, or provider failures.
      </p>

      <h2>7. Disclaimers and liability</h2>
      <p>
        To the extent permitted by law, PepRep is provided “as is” without
        warranties of fitness for a particular purpose. Nothing in these terms
        excludes rights or remedies that cannot legally be excluded under
        applicable consumer law.
      </p>

      <h2>8. Support and updates</h2>
      <p>
        Questions can be raised through the <a href="/contact">support page</a>.
        Continued use after an updated effective date means you accept the
        revised terms.
      </p>
    </LegalPage>
  );
}

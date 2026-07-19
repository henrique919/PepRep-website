import { createFileRoute } from "@tanstack/react-router";

import LegalPage from "@/components/LegalPage";

const ISSUE_URL = "https://github.com/henrique919/PepRep-app/issues/new";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Support — PepRep" },
      {
        name: "description",
        content: "PepRep help, troubleshooting, privacy controls, and support.",
      },
    ],
    links: [{ rel: "canonical", href: "https://peprep.co/contact" }],
  }),
});

function ContactPage() {
  return (
    <LegalPage
      eyebrow="Support"
      title="Help without the runaround."
      summary="Find the relevant control in the app, report a product problem, or review PepRep’s privacy and safety boundary."
      updated="19 July 2026"
    >
      <h2>Common tasks</h2>
      <ul>
        <li>Calculate a draw: Calculate tab</li>
        <li>
          Create or correct vial metadata: Vials → select a vial → Edit vial
          details
        </li>
        <li>
          Create a plan and reminders: Today → Create a plan, or Settings →
          Reminders
        </li>
        <li>Export, back up, restore, or erase records: Settings</li>
        <li>
          Delete an optional cloud account: Settings → Encrypted cloud backup
        </li>
      </ul>

      <h2>Report a technical problem</h2>
      <p>
        PepRep&apos;s public issue tracker is the current support channel.
        Include the app version, device model, operating-system version, what
        you expected, and what happened.
      </p>
      <p>
        <a
          className="legal-action"
          href={ISSUE_URL}
          target="_blank"
          rel="noreferrer"
        >
          Open a support request ↗
        </a>
      </p>
      <div className="legal-warning" role="note">
        Never include your name, email, vial labels, dose history, screenshots
        containing personal records, or other health information in a public
        GitHub issue.
      </div>

      <h2>Calculation or safety concern</h2>
      <p>
        Do not use a result that looks wrong. Recheck every unit and input
        against the physical vial and syringe. PepRep cannot tell you what dose
        or treatment is appropriate; seek help from an appropriately qualified
        healthcare professional for medical decisions.
      </p>

      <h2>Privacy</h2>
      <p>
        Read the <a href="/privacy">Privacy Policy</a> for local storage,
        optional encrypted cloud backup, exports, retention, and deletion
        controls.
      </p>
    </LegalPage>
  );
}

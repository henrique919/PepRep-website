import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/support")({
  component: SupportPage,
  head: () => ({
    meta: [
      { title: "Support — PepRep" },
      {
        name: "description",
        content:
          "Where to find each PepRep feature, how your data is handled, and how to reach support.",
      },
    ],
  }),
});

/* Rendered from peprep-app/docs/legal/SUPPORT.md — keep both in sync. */

const HELP_ROWS: Array<[string, string]> = [
  ["First-run safety acknowledgement", "Onboarding (required)"],
  ["Calculate a draw", "Calc tab"],
  ["Log a dose / plan", "Today, History, Log"],
  ["Vials & remaining amount", "Vials (ledger-derived)"],
  ["Local reminders", "Settings → Reminders"],
  ["Plaintext export", "Settings → Export (with warning)"],
  ["Encrypted backup / restore", "Settings → Encrypted backup"],
  ["Erase everything on device", "Settings → Erase all data"],
  ["Product boundary", "About"],
];

function SupportPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-[760px] items-center justify-between px-5 py-4">
          <Link to="/" className="text-[14px] font-semibold hover:text-carbon">
            ← PepRep
          </Link>
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted"
            style={{ fontFamily: "var(--font-m)" }}
          >
            Support
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-[760px] px-5 py-12">
        <h1
          className="text-[34px] font-bold leading-[1.1] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-d)" }}
        >
          Support
        </h1>
        <p
          className="mt-3 text-[13px] text-muted"
          style={{ fontFamily: "var(--font-m)" }}
        >
          PepRep · com.henrique919.peprep · v1.0.0
        </p>

        <p className="mt-8 text-[15px] leading-[1.65] text-fg/80">
          PepRep is a peptide <strong>measurement</strong> and personal{" "}
          <strong>record-keeping</strong> app. You enter the numbers; PepRep
          performs reconstitution arithmetic and keeps an auditable local
          history. It is <strong>not medical advice</strong> and does{" "}
          <strong>not</strong> recommend doses.
        </p>

        <section className="mt-10">
          <h2
            className="text-[20px] font-bold tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-d)" }}
          >
            Where to find things
          </h2>
          <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface">
            {HELP_ROWS.map(([topic, place], index) => (
              <div
                key={topic}
                className={`flex items-baseline justify-between gap-4 px-5 py-3 text-[14px] ${
                  index > 0 ? "border-t border-border" : ""
                }`}
              >
                <span className="text-fg/80">{topic}</span>
                <span
                  className="shrink-0 text-right text-[12px] text-muted"
                  style={{ fontFamily: "var(--font-m)" }}
                >
                  {place}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2
            className="text-[20px] font-bold tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-d)" }}
          >
            Data &amp; privacy
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-fg/80">
            v1 is local-first: calculation and logs work with no account.
            Optional encrypted file backups are user-controlled. Optional
            encrypted cloud backup (Supabase, PepRep project only) appears only
            when the build is configured — ciphertext only; the passphrase stays
            on device. No analytics SDK. The AI “Ask” feature is not included in
            v1. See the{" "}
            <Link to="/privacy" className="underline hover:text-carbon">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="mt-10">
          <h2
            className="text-[20px] font-bold tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-d)" }}
          >
            Contact
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-fg/80">
            A support contact will be published here before App Store
            submission.
          </p>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-[760px] px-5 text-[13px] text-muted">
          <Link to="/" className="hover:text-carbon">
            peprep.co
          </Link>{" "}
          ·{" "}
          <Link to="/privacy" className="hover:text-carbon">
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}

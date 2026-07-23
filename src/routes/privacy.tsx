import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — PepRep" },
      {
        name: "description",
        content:
          "PepRep is local-first: no account, no analytics, no ads. What the app stores on your device, what it never collects, and the controls you have.",
      },
    ],
  }),
});

/* Rendered from peprep-app/docs/legal/PRIVACY-POLICY.md — keep both in sync. */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2
        className="text-[20px] font-bold tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-d)" }}
      >
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-[1.65] text-fg/80">
        {children}
      </div>
    </section>
  );
}

function PrivacyPage() {
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
            Legal
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-[760px] px-5 py-12">
        <h1
          className="text-[34px] font-bold leading-[1.1] tracking-[-0.02em]"
          style={{ fontFamily: "var(--font-d)" }}
        >
          Privacy Policy
        </h1>
        <p
          className="mt-3 text-[13px] text-muted"
          style={{ fontFamily: "var(--font-m)" }}
        >
          Applies to the PepRep mobile app v1.0.0 (com.henrique919.peprep) ·
          Last updated 2026-07-23
        </p>

        <p className="mt-8 rounded-xl border border-border bg-surface p-5 text-[15px] leading-[1.65]">
          PepRep is a{" "}
          <strong>local-first measurement and personal record-keeping</strong>{" "}
          tool. In v1 it does <strong>not</strong> create accounts, does{" "}
          <strong>not</strong> include analytics or advertising SDKs, and does{" "}
          <strong>not</strong> transmit your vials, doses, plans, or history to
          PepRep or any third party as part of normal use.
        </p>

        <Section title="What PepRep stores">
          <p>On your device only (app storage), PepRep may store:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              Vial records you enter (name, amounts, optional lot / expiry /
              notes)
            </li>
            <li>Dose / event history you log</li>
            <li>Plans and schedules you define</li>
            <li>Local reminder settings you create</li>
            <li>
              App preferences (including onboarding / safety acknowledgement
              version)
            </li>
          </ul>
          <p>
            Inventory remaining is derived from an append-only local ledger.
            PepRep does not sell or share this data. On iOS and Android, PepRep
            additionally encrypts this local storage at rest with a device-held
            key kept in the platform keychain; the browser (web) version uses
            standard browser storage without that extra layer.
          </p>
        </Section>

        <Section title="What PepRep does not collect by default (v1)">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              No analytics, crash-reporting, or advertising identifiers sent by
              PepRep
            </li>
            <li>No automatic background sync</li>
            <li>
              No “Ask” / AI cloud feature in the v1 build (disabled; no AI SDK
              in the binary)
            </li>
          </ul>
        </Section>

        <Section title="Optional encrypted cloud backup (only if enabled in your build)">
          <p>
            If the build includes Supabase configuration for PepRep project{" "}
            <code style={{ fontFamily: "var(--font-m)" }}>
              opbqlsmwljqkkdvguojh
            </code>
            :
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>You may opt in with passwordless email (one-time code).</li>
            <li>
              PepRep uploads only a password-encrypted backup file you create —
              not your passphrase, not a plaintext database.
            </li>
            <li>
              Supabase stores account email + ciphertext object + non-health
              manifest metadata.
            </li>
            <li>
              Local calculation, logging, and file backups work without an
              account.
            </li>
            <li>
              You can delete individual cloud backups and sign out from
              Settings.
            </li>
          </ul>
          <p>
            Until that configuration is present, cloud backup UI does not appear
            and nothing is uploaded.
          </p>
        </Section>

        <Section title="Notifications">
          <p>
            Reminders use local notifications scheduled on your device.
            Notification content is not sent to a PepRep server.
          </p>
        </Section>

        <Section title="Export and encrypted backups">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong>Plaintext export</strong> (CSV/JSON): created only when
              you choose Export. Files are unencrypted; you control where they
              are shared (Files, Drive, email, etc.).
            </li>
            <li>
              <strong>Encrypted backup</strong>: created only when you choose
              Create encrypted backup. The file is password-protected on device
              (AES-GCM). PepRep does not upload it; you choose where to save or
              share it. Restore requires the password and replaces local PepRep
              data on that device after confirmation.
            </li>
          </ul>
          <p>
            These are user-controlled off-device copies, not PepRep-operated
            cloud sync.
          </p>
        </Section>

        <Section title="Deleting your data">
          <p>
            Use <strong>Settings → Erase all data</strong> to remove PepRep
            records from the device. Uninstalling the app also removes local app
            storage (subject to OS behavior). Encrypted backups or exports you
            previously saved elsewhere must be deleted by you from those
            locations.
          </p>
        </Section>

        <Section title="Children’s privacy">
          <p>
            PepRep is not directed at children. Do not use the app to store data
            about anyone who cannot consent to local record-keeping under
            applicable law.
          </p>
        </Section>

        <Section title="Medical disclaimer">
          <p>
            PepRep is a measurement instrument. It is{" "}
            <strong>not medical advice</strong> and does <strong>not</strong>{" "}
            recommend doses, schedules, or treatments. You are responsible for
            your own decisions and for verifying every result.
          </p>
        </Section>

        <Section title="Changes">
          <p>
            If this policy changes materially, we will update the “Last updated”
            date on this page. App safety acknowledgement copy is versioned in
            the app and may re-prompt when it changes.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            A support contact will be published here before App Store
            submission. Until then, see{" "}
            <Link to="/support" className="underline hover:text-carbon">
              Support
            </Link>
            .
          </p>
        </Section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-[760px] px-5 text-[13px] text-muted">
          <Link to="/" className="hover:text-carbon">
            peprep.co
          </Link>{" "}
          ·{" "}
          <Link to="/support" className="hover:text-carbon">
            Support
          </Link>
        </div>
      </footer>
    </div>
  );
}

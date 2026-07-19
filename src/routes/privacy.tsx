import { createFileRoute } from "@tanstack/react-router";

import LegalPage from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — PepRep" },
      {
        name: "description",
        content:
          "How PepRep stores local records and protects optional encrypted cloud backups.",
      },
    ],
    links: [{ rel: "canonical", href: "https://peprep.co/privacy" }],
  }),
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Your records stay yours."
      summary="PepRep is local-first. Calculation and record-keeping work without an account, advertising, or behavioural analytics. Optional cloud backup is encrypted on your device before upload."
      updated="19 July 2026"
    >
      <h2>1. What PepRep stores on your device</h2>
      <p>
        PepRep may store the vial details, plans, reminders, dose and event
        history, notes, injection sites, progress records, settings, and safety
        acknowledgements that you enter. This information is stored in the
        app&apos;s local storage. In the native iOS and Android apps, those
        records are encrypted at rest with a randomly generated key protected
        by the device Keychain or Keystore. Browser storage is protected by
        your browser and operating-system account, so use the web app only on a
        device you trust. Records are not automatically synced.
      </p>

      <h2>2. No advertising or behavioural analytics</h2>
      <p>
        PepRep does not include advertising SDKs and does not use behavioural
        analytics to build profiles or sell information. The optional Ask
        feature is disabled in the version 1 build.
      </p>

      <h2>3. Optional encrypted cloud backup</h2>
      <p>
        If you choose cloud backup, PepRep creates a password-encrypted backup
        on your device and uploads the ciphertext to PepRep&apos;s private
        Supabase project. The password and derived encryption key never leave
        your device. Supabase stores your passwordless account email, an
        internal user identifier, the encrypted file, and manifest metadata such
        as file size, checksum, format version, and creation time. The selected
        project region is Singapore (ap-southeast-1).
      </p>
      <p>
        Cloud backup is optional, manual, and not live sync. PepRep cannot
        recover a forgotten backup password or inspect the content of a
        password-encrypted backup.
      </p>

      <h2>4. Notifications, exports, and files</h2>
      <p>
        Reminders are scheduled locally by your device. Plaintext CSV and JSON
        exports are unencrypted and leave PepRep only when you choose where to
        share them. Local encrypted backup files leave the app only when you
        save or share them yourself.
      </p>

      <h2 id="your-choices">5. Your choices and deletion</h2>
      <ul>
        <li>
          Use Settings → Erase all data to remove records stored by PepRep on
          the device.
        </li>
        <li>Delete individual encrypted cloud backups from Settings.</li>
        <li>
          Use Delete cloud account in Settings to permanently remove the
          Supabase account, its encrypted backup files, and backup manifests.
          Local records remain until you erase them.
        </li>
        <li>
          Delete exports or backup files you previously saved in other apps or
          storage services.
        </li>
      </ul>

      <h2>6. Security and service providers</h2>
      <p>
        Supabase provides optional authentication, database, and
        encrypted-object storage. Access is restricted with row-level security
        and private storage policies. Session tokens are stored using the iOS
        Keychain or Android Keystore through Expo SecureStore. No system is
        risk-free, so keep your device secure and use a strong, unique backup
        password.
      </p>

      <h2>7. Medical information and children</h2>
      <p>
        PepRep is a measurement and personal record-keeping tool, not a
        healthcare provider. It is not directed to children. Do not use it to
        store another person&apos;s information without appropriate authority
        and consent.
      </p>

      <h2>8. Changes and support</h2>
      <p>
        Material changes will be reflected by the date above. For technical
        support or a privacy concern, visit the{" "}
        <a href="/contact">PepRep support page</a>. Do not post personal health
        information in a public support request.
      </p>
    </LegalPage>
  );
}

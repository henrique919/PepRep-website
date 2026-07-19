import type { ReactNode } from "react";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  children: ReactNode;
};

export default function LegalPage({
  eyebrow,
  title,
  summary,
  updated,
  children,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5 sm:px-8">
          <a
            href="/"
            className="text-[21px] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-d)" }}
            aria-label="PepRep home"
          >
            <span className="font-medium">Pep</span>
            <span className="font-bold">Rep</span>
          </a>
          <a
            href="/"
            className="rounded-lg border border-border px-4 py-2 text-[13px] font-semibold hover:bg-surface-2"
          >
            Back to product
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-border bg-carbon text-[#faf9f5]">
          <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-20">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-volt"
              style={{ fontFamily: "var(--font-m)" }}
            >
              {eyebrow}
            </p>
            <h1
              className="mt-5 max-w-[14ch] text-[clamp(38px,7vw,72px)] font-bold leading-[0.98] tracking-[-0.035em]"
              style={{ fontFamily: "var(--font-d)" }}
            >
              {title}
            </h1>
            <p className="mt-6 max-w-[64ch] text-[16px] leading-[1.65] text-white/72">
              {summary}
            </p>
            <p
              className="mt-6 text-[11px] uppercase tracking-[0.14em] text-white/45"
              style={{ fontFamily: "var(--font-m)" }}
            >
              Last updated {updated}
            </p>
          </div>
        </section>

        <article className="legal-copy mx-auto max-w-[900px] px-5 py-14 sm:px-8 sm:py-20">
          {children}
        </article>
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-5 px-5 py-10 text-[13px] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>Measurement and tracking only. Not medical advice.</span>
          <nav
            aria-label="Legal"
            className="flex flex-wrap gap-x-6 gap-y-3 font-semibold"
          >
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Support</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

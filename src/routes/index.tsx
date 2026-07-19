import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import editorialFigure from "@/assets/editorial-figure.webp";
import athleteBar from "@/assets/athlete-bar.webp";

const APP_URL = "https://peprep-app.expo.app/";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "PepRep — Peptide Calculator & Tracking" },
      {
        name: "description",
        content:
          "Turn vial, water and dose inputs into a clear syringe draw, then track vials, schedules and history. Measurement only—never dose recommendations.",
      },
    ],
    links: [{ rel: "canonical", href: "https://peprep.co/" }],
  }),
});

/* ─────────────────────────────  LOGO  ───────────────────────────── */
function BoldTally({
  size = 32,
  dark = false,
}: {
  size?: number;
  dark?: boolean;
}) {
  const bar = dark ? "#faf9f5" : "#16161a";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="10" y="12" width="52" height="9" rx="4.5" fill={bar} />
      <rect x="10" y="28" width="52" height="9" rx="4.5" fill={bar} />
      <rect x="10" y="44" width="52" height="9" rx="4.5" fill={bar} />
      <rect x="10" y="60" width="28" height="9" rx="4.5" fill={bar} />
      <path
        d="M46 54l14 18"
        stroke="#e8ff47"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Wordmark({
  dark = false,
  size = 22,
}: {
  dark?: boolean;
  size?: number;
}) {
  return (
    <span
      style={{
        fontFamily: "var(--font-d)",
        fontSize: size,
        letterSpacing: "-0.02em",
        color: dark ? "#faf9f5" : "#16161a",
        lineHeight: 1,
      }}
    >
      <span style={{ fontWeight: 500 }}>Pep</span>
      <span style={{ fontWeight: 700 }}>Rep</span>
    </span>
  );
}

/* ─────────────────────────────  NAV  ───────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#product", label: "Product" },
    { href: "#how", label: "How it works" },
    { href: "#safety", label: "Safety" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 sm:px-8">
        <a
          href="/"
          className="flex items-center gap-2.5"
          aria-label="PepRep home"
        >
          <BoldTally size={30} />
          <Wordmark size={20} />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-fg/80 transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-[10px] bg-carbon px-4 py-2.5 text-[13px] font-semibold text-[#faf9f5] transition-transform hover:scale-[0.98] sm:inline-flex"
          >
            Open PepRep
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <nav
            className="mx-auto flex max-w-[1440px] flex-col gap-1 px-5 py-4"
            aria-label="Mobile"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-fg hover:bg-surface-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-lg bg-carbon px-4 py-3 text-center text-[14px] font-semibold text-[#faf9f5]"
            >
              Open PepRep
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────  HERO SYRINGE  ─────────────────────────
   Reconstructs the "Exact Draw" card from the calculator screen.    */
function ExactDrawCard({
  units = 10,
  mL = "0.10",
}: {
  units?: number;
  mL?: string;
}) {
  // pct of 100u scale
  const pct = Math.min(100, Math.max(0, (units / 100) * 100));
  return (
    <div className="rounded-[18px] border border-white/10 bg-[#1c1c20] p-6 sm:p-7">
      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
        Exact Draw
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span
          className="text-[64px] font-bold leading-none text-white tabular-nums"
          style={{ fontFamily: "var(--font-m)" }}
        >
          {units}
        </span>
        <span
          className="text-[18px] font-semibold text-volt"
          style={{ fontFamily: "var(--font-m)" }}
        >
          units
        </span>
      </div>
      <div
        className="mt-2 text-[13px] text-white/50 tabular-nums"
        style={{ fontFamily: "var(--font-m)" }}
      >
        U-100 · {mL} mL
      </div>
      <div className="mt-5 border-t border-white/10 pt-5">
        <Syringe pct={pct} label={`${units} u`} />
      </div>
    </div>
  );
}

function Syringe({ pct, label }: { pct: number; label: string }) {
  // barrel: x=90 to x=560, width=470. Fill uses pct of barrel width.
  const barrelX = 90;
  const barrelW = 470;
  const fillW = (barrelW * pct) / 100;
  const markerX = barrelX + fillW;
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 680 200"
        className="h-auto w-full"
        role="img"
        aria-label={`Syringe filled to ${label}`}
      >
        {/* needle */}
        <line
          x1="4"
          y1="115"
          x2="70"
          y2="115"
          stroke="#8c8c94"
          strokeWidth="3"
        />
        <path d="M70 100 L94 100 L94 130 L70 130 Z" fill="#3a3a42" />
        {/* barrel */}
        <rect
          x={barrelX}
          y="86"
          width={barrelW}
          height="58"
          rx="4"
          fill="#111114"
          stroke="#3a3a42"
          strokeWidth="1.5"
        />
        {/* fluid */}
        <rect
          x={barrelX}
          y="86"
          width={fillW}
          height="58"
          fill="#e8ff47"
          opacity="0.9"
        />
        <rect
          x={barrelX}
          y="86"
          width={fillW}
          height="58"
          fill="url(#fluidShade)"
        />
        {/* plunger seal */}
        <rect
          x={markerX - 6}
          y="80"
          width="12"
          height="70"
          rx="2"
          fill="#f7fff0"
        />
        {/* barrel top+bottom accent */}
        <line
          x1={barrelX}
          y1="86"
          x2={barrelX + barrelW}
          y2="86"
          stroke="#4a4a52"
          strokeWidth="1"
        />
        <line
          x1={barrelX}
          y1="144"
          x2={barrelX + barrelW}
          y2="144"
          stroke="#4a4a52"
          strokeWidth="1"
        />
        {/* ticks (major every 10u => 47px, minor every 2u) */}
        {Array.from({ length: 51 }).map((_, i) => {
          const x = barrelX + (barrelW * i) / 50;
          const major = i % 5 === 0;
          return (
            <line
              key={i}
              x1={x}
              y1="88"
              x2={x}
              y2={major ? 106 : 98}
              stroke="#6b6b74"
              strokeWidth={major ? 1.4 : 1}
            />
          );
        })}
        {/* flange + plunger stem */}
        <path
          d="M560 74 L582 74 L582 156 L560 156 Z"
          fill="#2a2a30"
          stroke="#4a4a52"
        />
        <rect
          x="582"
          y="105"
          width="70"
          height="20"
          fill="#2a2a30"
          stroke="#4a4a52"
        />
        <rect
          x="652"
          y="90"
          width="14"
          height="50"
          rx="2"
          fill="#2a2a30"
          stroke="#4a4a52"
        />
        {/* pointer line + label */}
        <line
          x1={markerX}
          y1="60"
          x2={markerX}
          y2="168"
          stroke="#e8ff47"
          strokeWidth="2"
        />
        <path
          d={`M${markerX - 6} 60 L${markerX + 6} 60 L${markerX} 70 Z`}
          fill="#e8ff47"
        />
        <text
          x={markerX + 6}
          y="52"
          fill="#e8ff47"
          fontSize="18"
          fontWeight="700"
          fontFamily="var(--font-m)"
        >
          {label}
        </text>
        {/* scale labels */}
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((n, i) => {
          const x = barrelX + (barrelW * i) / 10;
          return (
            <text
              key={n}
              x={x}
              y="188"
              fill="#8c8c94"
              fontSize="12"
              fontFamily="var(--font-m)"
              textAnchor="middle"
            >
              {n}
            </text>
          );
        })}
        <defs>
          <linearGradient id="fluidShade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="1" stopColor="#000000" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ─────────────────────────  HERO CALC FIELDS  ───────────────────── */
function HeroCalcPanel() {
  return (
    <div className="rounded-[18px] border border-white/10 bg-[#1c1c20] p-6 sm:p-7">
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/50">
          Reconstitution
        </div>
        <div
          className="rounded-md border border-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-volt"
          style={{ fontFamily: "var(--font-m)" }}
        >
          Recon
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <Field
          label="Peptide in vial"
          hint="total content"
          value="5"
          unit="mg"
        />
        <Field
          label="Bacteriostatic water"
          hint="mL only"
          value="2"
          unit="mL"
          locked
        />
        <Field label="Desired dose" hint="your entry" value="250" unit="mcg" />
      </div>
    </div>
  );
}

function Field({
  label,
  hint,
  value,
  unit,
  locked,
}: {
  label: string;
  hint: string;
  value: string;
  unit: string;
  locked?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-[12px] font-medium text-white/70">{label}</span>
        <span className="text-[10px] text-white/60">{hint}</span>
      </div>
      <div className="mt-2 flex items-stretch overflow-hidden rounded-xl border border-white/10 bg-[#111114]">
        <div
          className="flex-1 px-4 py-3 text-[22px] font-semibold text-white tabular-nums"
          style={{ fontFamily: "var(--font-m)" }}
        >
          {value}
        </div>
        <div
          className={`grid min-w-[64px] place-items-center px-3 text-[13px] font-semibold ${
            locked ? "text-white/50" : "bg-carbon text-volt"
          }`}
          style={{ fontFamily: "var(--font-m)" }}
        >
          {unit}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────  PHONE FRAME  ───────────────────────── */
function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[288px] sm:max-w-[300px]">
      {/* device shell */}
      <div className="relative rounded-[46px] border border-white/12 bg-[#0e0e11] p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9),0_0_0_1px_rgba(232,255,71,0.06)]">
        {/* volt hairline */}
        <div className="pointer-events-none absolute inset-0 rounded-[46px] ring-1 ring-inset ring-white/5" />
        {/* screen */}
        <div className="relative overflow-hidden rounded-[36px] bg-[#141418]">
          {/* dynamic island */}
          <div className="absolute left-1/2 top-2.5 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
          {/* status bar */}
          <div
            className="flex items-center justify-between px-6 pt-3 pb-2 text-[10px] font-semibold text-white/70"
            style={{ fontFamily: "var(--font-m)" }}
          >
            <span>9:41</span>
            <span className="opacity-60">●●●● 5G</span>
          </div>
          <div className="px-3 pb-8 pt-4">{children}</div>
          {/* home indicator */}
          <div className="pointer-events-none absolute bottom-1.5 left-1/2 z-20 h-1 w-24 -translate-x-1/2 rounded-full bg-white/40" />
        </div>
        {/* side buttons */}
        <div className="pointer-events-none absolute -left-[3px] top-24 h-10 w-[3px] rounded-l-sm bg-white/10" />
        <div className="pointer-events-none absolute -left-[3px] top-40 h-16 w-[3px] rounded-l-sm bg-white/10" />
        <div className="pointer-events-none absolute -right-[3px] top-32 h-20 w-[3px] rounded-r-sm bg-white/10" />
      </div>
      {/* caption tag */}
      <div
        className="absolute -bottom-3 left-6 rounded-md border border-volt/40 bg-carbon px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-volt"
        style={{ fontFamily: "var(--font-m)" }}
      >
        Live in app
      </div>
    </div>
  );
}

/* Compact variants for the phone screen */
function PhoneCalcPanel() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1c1c20] p-4">
      <div className="flex items-center justify-between">
        <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/50">
          Reconstitution
        </div>
        <div
          className="rounded-md border border-white/10 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-widest text-volt"
          style={{ fontFamily: "var(--font-m)" }}
        >
          Recon
        </div>
      </div>
      <div className="mt-3 space-y-2.5">
        <PhoneField label="Peptide in vial" value="5" unit="mg" />
        <PhoneField label="Bac. water" value="2" unit="mL" locked />
        <PhoneField label="Desired dose" value="250" unit="mcg" />
      </div>
    </div>
  );
}

function PhoneField({
  label,
  value,
  unit,
  locked,
}: {
  label: string;
  value: string;
  unit: string;
  locked?: boolean;
}) {
  return (
    <div>
      <div className="text-[10px] font-medium text-white/60">{label}</div>
      <div className="mt-1 flex items-stretch overflow-hidden rounded-lg border border-white/10 bg-[#111114]">
        <div
          className="flex-1 px-3 py-2 text-[16px] font-semibold text-white tabular-nums"
          style={{ fontFamily: "var(--font-m)" }}
        >
          {value}
        </div>
        <div
          className={`grid min-w-[44px] place-items-center px-2 text-[11px] font-semibold ${
            locked ? "text-white/50" : "bg-carbon text-volt"
          }`}
          style={{ fontFamily: "var(--font-m)" }}
        >
          {unit}
        </div>
      </div>
    </div>
  );
}

function PhoneDrawCard({
  units = 10,
  mL = "0.10",
}: {
  units?: number;
  mL?: string;
}) {
  const pct = Math.min(100, Math.max(0, units));
  return (
    <div className="rounded-2xl border border-white/10 bg-[#1c1c20] p-4">
      <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/50">
        Exact Draw
      </div>
      <div className="mt-1 flex items-baseline gap-1.5">
        <span
          className="text-[40px] font-bold leading-none text-white tabular-nums"
          style={{ fontFamily: "var(--font-m)" }}
        >
          {units}
        </span>
        <span
          className="text-[12px] font-semibold text-volt"
          style={{ fontFamily: "var(--font-m)" }}
        >
          units
        </span>
      </div>
      <div
        className="mt-1 text-[10px] text-white/50 tabular-nums"
        style={{ fontFamily: "var(--font-m)" }}
      >
        U-100 · {mL} mL
      </div>
      <div className="mt-3 border-t border-white/10 pt-3">
        <Syringe pct={pct} label={`${units} u`} />
      </div>
    </div>
  );
}

/* ─────────────────────────────  HERO  ───────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-carbon text-[#faf9f5]">
      {/* subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#faf9f5 1px, transparent 1px), linear-gradient(90deg, #faf9f5 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-6 xl:col-span-6">
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-volt"
            style={{ fontFamily: "var(--font-m)" }}
          >
            Calculate · Track · Repeat
          </div>
          <h1
            className="mt-6 text-[clamp(40px,6vw,76px)] font-bold leading-[0.98] tracking-[-0.035em]"
            style={{ fontFamily: "var(--font-d)" }}
          >
            From vial to draw.
            <br />
            <span className="text-white/60">Every unit</span>{" "}
            <span>accounted for.</span>
          </h1>
          <p className="mt-7 max-w-[46ch] text-[16px] leading-[1.55] text-white/70 sm:text-[17px]">
            Enter your vial, water, dose, and syringe. PepRep shows the exact
            U-100 draw in units and mL, explains every step, and keeps an
            auditable record on your device.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-xl bg-volt px-6 text-[14px] font-semibold text-carbon transition-transform hover:scale-[0.98]"
            >
              Open the free web app
              <span className="ml-2">→</span>
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-1 border-b border-white/30 pb-1 text-[13px] font-medium text-white/80 hover:border-white/80"
            >
              See how it works ↓
            </a>
          </div>
          <div
            className="mt-6 flex max-w-[62ch] flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.12em] text-white/60"
            style={{ fontFamily: "var(--font-m)" }}
          >
            <span>Free to use</span>
            <span>No account required</span>
            <span>Local-first</span>
            <span>No dose recommendations</span>
          </div>
          <p className="mt-4 max-w-[54ch] text-[12px] leading-[1.55] text-white/45">
            Browser access is available now. Native iPhone and Android releases
            are being prepared for store review.
          </p>
        </div>

        <div className="relative lg:col-span-6 xl:col-span-6">
          <PhoneFrame>
            <div className="space-y-3">
              <PhoneCalcPanel />
              <PhoneDrawCard units={10} mL="0.10" />
            </div>
          </PhoneFrame>
          {/* corner tick marks */}
          <div className="pointer-events-none absolute -left-2 -top-2 h-4 w-4 border-l border-t border-volt/60" />
          <div className="pointer-events-none absolute -right-2 -bottom-2 h-4 w-4 border-r border-b border-volt/60" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────  CALCULATION PROOF STRIP  ────────────────── */
function ProofStrip() {
  const [open, setOpen] = useState(false);
  const steps = [
    { v: "5 mg", l: "Vial" },
    { v: "2 mL", l: "Water" },
    { v: "250 mcg", l: "Dose" },
    { v: "10 u / 0.10 mL", l: "Draw" },
  ];
  return (
    <section id="product" className="border-b border-border">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted"
              style={{ fontFamily: "var(--font-m)" }}
            >
              01 · The math
            </div>
            <h2
              className="mt-5 text-[clamp(30px,4vw,52px)] font-bold leading-[1.02] tracking-[-0.028em]"
              style={{ fontFamily: "var(--font-d)" }}
            >
              The math,
              <br />
              made visible.
            </h2>
            <p className="mt-6 max-w-[42ch] text-[15px] leading-[1.6] text-muted">
              PepRep keeps mg, mcg, mL and syringe units visibly separate, so
              the result can be checked instead of guessed.
            </p>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="mt-6 inline-flex items-center gap-2 border-b border-carbon/30 pb-1 text-[13px] font-semibold text-carbon hover:border-carbon"
            >
              {open ? "Hide the math" : "Show the math"}
              <span
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              >
                ↓
              </span>
            </button>
            {open && (
              <div
                className="mt-5 rounded-lg border border-border bg-surface p-5 text-[13px] leading-[1.9] text-fg"
                style={{ fontFamily: "var(--font-m)" }}
              >
                <div>
                  <span className="text-muted">Concentration:</span> 5 mg ÷ 2 mL
                  = <span className="font-semibold">2.5 mg/mL</span>
                </div>
                <div>
                  <span className="text-muted">Dose volume:</span> 0.25 mg ÷ 2.5
                  mg/mL = <span className="font-semibold">0.10 mL</span>
                </div>
                <div>
                  <span className="text-muted">U-100 draw:</span> 0.10 mL × 100
                  = <span className="font-semibold text-carbon">10 units</span>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-border bg-surface p-6 sm:p-9">
              <div
                className="mb-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted"
                style={{ fontFamily: "var(--font-m)" }}
              >
                Calculation trace
              </div>
              <ol className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((s, i) => (
                  <li key={s.l} className="relative">
                    <div
                      className="text-[10px] font-semibold uppercase tracking-widest text-muted"
                      style={{ fontFamily: "var(--font-m)" }}
                    >
                      0{i + 1} · {s.l}
                    </div>
                    <div
                      className="mt-3 text-[20px] font-bold text-carbon tabular-nums sm:text-[22px]"
                      style={{ fontFamily: "var(--font-m)" }}
                    >
                      {s.v}
                    </div>
                    <div className="mt-4 h-px w-full bg-border" />
                    {i === steps.length - 1 && (
                      <div className="mt-3 inline-block bg-volt px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-carbon">
                        Result
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  PRODUCT LOOP  ───────────────────────── */
const LOOP = [
  {
    n: "01",
    title: "Calculate",
    body: "Enter vial, water, dose, and syringe capacity.",
    art: <LoopCalculate />,
  },
  {
    n: "02",
    title: "Save the vial",
    body: "Keep concentration, remaining quantity, and preparation details together.",
    art: <LoopVial />,
  },
  {
    n: "03",
    title: "Schedule",
    body: "Create a routine from the user's own plan.",
    art: <LoopSchedule />,
  },
  {
    n: "04",
    title: "Log",
    body: "Record completed, skipped, missed, or edited events.",
    art: <LoopLog />,
  },
  {
    n: "05",
    title: "Review",
    body: "See history, injection-site rotation, vial status, and progress.",
    art: <LoopHistory />,
  },
];

function ProductLoop() {
  return (
    <section id="how" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-[42ch]">
          <div
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted"
            style={{ fontFamily: "var(--font-m)" }}
          >
            02 · The loop
          </div>
          <h2
            className="mt-5 text-[clamp(30px,4.4vw,56px)] font-bold leading-[1.02] tracking-[-0.028em]"
            style={{ fontFamily: "var(--font-d)" }}
          >
            One clean loop.
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
          {LOOP.map((s, i) => (
            <li
              key={s.n}
              className="relative flex flex-col border-t border-border pt-6"
            >
              <div
                className="text-[42px] font-semibold text-carbon/20 tabular-nums leading-none"
                style={{ fontFamily: "var(--font-m)" }}
              >
                {s.n}
              </div>
              <h3
                className="mt-4 text-[22px] font-semibold tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-d)" }}
              >
                {s.title}
              </h3>
              <p className="mt-2 max-w-[28ch] text-[14px] leading-[1.55] text-muted">
                {s.body}
              </p>
              <div className="mt-6 flex-1 rounded-xl border border-border bg-bg p-4">
                {s.art}
              </div>
              {i === LOOP.length - 1 && (
                <div
                  className="mt-4 text-[10px] uppercase tracking-widest text-muted"
                  style={{ fontFamily: "var(--font-m)" }}
                >
                  ↻ back to 01
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LoopCalculate() {
  return (
    <div className="space-y-2">
      <MiniRow label="Vial" value="5 mg" />
      <MiniRow label="Water" value="2 mL" />
      <MiniRow label="Dose" value="250 mcg" />
      <div className="mt-2 rounded-lg bg-carbon px-3 py-2.5 text-[#faf9f5]">
        <div className="text-[9px] uppercase tracking-widest text-white/50">
          Draw
        </div>
        <div
          className="text-[18px] font-bold tabular-nums"
          style={{ fontFamily: "var(--font-m)" }}
        >
          10 u <span className="text-volt">·</span> 0.10 mL
        </div>
      </div>
    </div>
  );
}

function LoopVial() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[13px] font-semibold">Retatrutide</div>
          <div
            className="text-[11px] text-muted"
            style={{ fontFamily: "var(--font-m)" }}
          >
            5 mg · 2 mL
          </div>
        </div>
        <VialGraphic pct={70} />
      </div>
      <div className="h-1 rounded-full bg-surface-2">
        <div className="h-1 rounded-full bg-carbon" style={{ width: "70%" }} />
      </div>
      <div
        className="flex justify-between text-[10px] text-muted"
        style={{ fontFamily: "var(--font-m)" }}
      >
        <span>1.40 mL left</span>
        <span>70%</span>
      </div>
    </div>
  );
}

function LoopSchedule() {
  const rows = [
    { d: "Mon", t: "08:00", on: true },
    { d: "Wed", t: "08:00", on: false },
    { d: "Fri", t: "08:00", on: true },
    { d: "Sun", t: "08:00", on: false },
  ];
  return (
    <div className="space-y-2">
      {rows.map((r) => (
        <div
          key={r.d}
          className="flex items-center justify-between border-b border-border pb-2 last:border-b-0"
        >
          <span className="text-[12px] font-semibold">{r.d}</span>
          <span
            className="text-[11px] tabular-nums text-muted"
            style={{ fontFamily: "var(--font-m)" }}
          >
            {r.t}
          </span>
          <span
            className={`h-2 w-2 rounded-full ${r.on ? "bg-carbon" : "bg-border"}`}
            aria-hidden
          />
        </div>
      ))}
    </div>
  );
}

function LoopLog() {
  const items = [
    { label: "Completed", tone: "carbon" },
    { label: "Skipped", tone: "muted" },
    { label: "Missed", tone: "danger" },
    { label: "Edited", tone: "volt" },
  ];
  return (
    <div className="space-y-2">
      {items.map((i) => (
        <div key={i.label} className="flex items-center gap-2">
          <span
            className={`h-2.5 w-2.5 rounded-sm ${
              i.tone === "carbon"
                ? "bg-carbon"
                : i.tone === "volt"
                  ? "bg-volt border border-carbon/20"
                  : i.tone === "danger"
                    ? "bg-[#c43c2e]"
                    : "bg-border"
            }`}
          />
          <span className="text-[12px] font-medium">{i.label}</span>
        </div>
      ))}
      <div
        className="mt-3 text-[10px] text-muted"
        style={{ fontFamily: "var(--font-m)" }}
      >
        7-day rolling
      </div>
    </div>
  );
}

function LoopHistory() {
  const cells = Array.from({ length: 28 }).map((_, i) => {
    const s = [0, 3, 6, 9, 12, 15, 18, 21, 24].includes(i)
      ? "carbon"
      : [2, 8, 17, 22].includes(i)
        ? "muted"
        : "empty";
    return s;
  });
  return (
    <div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((s, i) => (
          <div
            key={i}
            className={`aspect-square rounded-sm ${
              s === "carbon"
                ? "bg-carbon"
                : s === "muted"
                  ? "bg-border"
                  : "bg-surface"
            } ${s === "empty" ? "border border-border" : ""}`}
          />
        ))}
      </div>
      <div
        className="mt-3 flex justify-between text-[10px] text-muted"
        style={{ fontFamily: "var(--font-m)" }}
      >
        <span>Last 28 days</span>
        <span>9 logged</span>
      </div>
    </div>
  );
}

function MiniRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2">
      <span className="text-[11px] uppercase tracking-widest text-muted">
        {label}
      </span>
      <span
        className="text-[13px] font-semibold tabular-nums"
        style={{ fontFamily: "var(--font-m)" }}
      >
        {value}
      </span>
    </div>
  );
}

function VialGraphic({ pct }: { pct: number }) {
  return (
    <svg width="26" height="42" viewBox="0 0 26 42" aria-hidden>
      <rect x="7" y="1" width="12" height="4" rx="1" fill="#6b6a72" />
      <rect
        x="4"
        y="6"
        width="18"
        height="34"
        rx="3"
        fill="none"
        stroke="#16161a"
        strokeWidth="1.5"
      />
      <rect
        x="6"
        y={40 - (34 * pct) / 100}
        width="14"
        height={(34 * pct) / 100}
        fill="#e8ff47"
        opacity="0.6"
      />
    </svg>
  );
}

/* ─────────────────────────  PRODUCT PROOF  ──────────────────────── */
function ProductProof() {
  return (
    <section className="bg-carbon py-20 text-[#faf9f5] sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-volt"
              style={{ fontFamily: "var(--font-m)" }}
            >
              03 · Focus
            </div>
            <h2
              className="mt-5 text-[clamp(32px,5vw,64px)] font-bold leading-[1] tracking-[-0.032em]"
              style={{ fontFamily: "var(--font-d)" }}
            >
              Not another wellness dashboard.
            </h2>
          </div>
          <p className="lg:col-span-5 lg:mt-auto max-w-[46ch] text-[15px] leading-[1.6] text-white/60">
            PepRep stays focused on the work: calculate clearly, keep vial
            records, follow the schedule you created, and maintain an honest
            history.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Editorial image */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <img
                src={athleteBar}
                alt="Athlete mid pull-up in a training rig, back and shoulders engaged."
                className="h-full w-full object-cover grayscale contrast-110 opacity-45 mix-blend-luminosity"
                decoding="async"
                loading="lazy"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(ellipse at 50% 45%, black 25%, rgba(0, 0, 0, 0.86) 45%, rgba(0, 0, 0, 0.42) 68%, transparent 92%)",
                  maskImage:
                    "radial-gradient(ellipse at 50% 45%, black 25%, rgba(0, 0, 0, 0.86) 45%, rgba(0, 0, 0, 0.42) 68%, transparent 92%)",
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon via-carbon/55 to-carbon/35" />

              {/* editorial labels */}
              <div className="absolute left-4 top-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-volt" />
                <span
                  className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/80"
                  style={{ fontFamily: "var(--font-m)" }}
                >
                  Field notes · 07
                </span>
              </div>
              <div
                className="absolute bottom-5 left-5 max-w-[80%] text-[13px] font-medium leading-[1.35] text-white"
                style={{ fontFamily: "var(--font-d)" }}
              >
                The work is repetition. The tool is precision.
              </div>
            </div>
            <div
              className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-white/60"
              style={{ fontFamily: "var(--font-m)" }}
            >
              <span>Ref · PR-0724</span>
              <span>Carbon / Volt</span>
            </div>
          </div>

          {/* One phone, two surfaces stacked */}
          <div className="lg:col-span-7">
            <PhoneFrame>
              <div className="space-y-3">
                {/* App chrome */}
                <div className="flex items-center justify-between px-1">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-volt" />
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70"
                      style={{ fontFamily: "var(--font-m)" }}
                    >
                      PepRep
                    </span>
                  </div>
                  <span
                    className="text-[9px] text-white/60"
                    style={{ fontFamily: "var(--font-m)" }}
                  >
                    Today · Thu
                  </span>
                </div>

                {/* A · Exact draw */}
                <PhoneDrawCard units={14} mL="0.14" />

                {/* C · Today schedule (compact) */}
                <div className="rounded-2xl border border-white/10 bg-[#1c1c20] p-4">
                  <div
                    className="mb-3 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.14em] text-white/50"
                    style={{ fontFamily: "var(--font-m)" }}
                  >
                    <span>Today</span>
                    <span className="text-volt">2 / 4</span>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      {
                        t: "07:30",
                        n: "Retatrutide",
                        d: "250 mcg · 10 u",
                        s: "done",
                      },
                      {
                        t: "12:00",
                        n: "B-12",
                        d: "1000 mcg · 20 u",
                        s: "next",
                      },
                      {
                        t: "20:00",
                        n: "GHK-Cu",
                        d: "2 mg · 20 u",
                        s: "queued",
                      },
                    ].map((i) => (
                      <li
                        key={i.n}
                        className="flex items-center gap-2.5 border-b border-white/5 pb-2 last:border-b-0 last:pb-0"
                      >
                        <span
                          className="w-10 text-[10px] tabular-nums text-white/50"
                          style={{ fontFamily: "var(--font-m)" }}
                        >
                          {i.t}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-[11px] font-medium text-white">
                            {i.n}
                          </div>
                          <div
                            className="text-[9px] text-white/60 tabular-nums"
                            style={{ fontFamily: "var(--font-m)" }}
                          >
                            {i.d}
                          </div>
                        </div>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[8px] font-semibold uppercase tracking-widest ${
                            i.s === "done"
                              ? "bg-volt text-carbon"
                              : i.s === "next"
                                ? "bg-white text-carbon"
                                : "bg-white/10 text-white/70"
                          }`}
                          style={{ fontFamily: "var(--font-m)" }}
                        >
                          {i.s === "done"
                            ? "Logged"
                            : i.s === "next"
                              ? "Next"
                              : "Queued"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom tab bar */}
                <div className="mt-2 flex items-center justify-around rounded-2xl border border-white/10 bg-[#1c1c20] px-3 py-2.5">
                  {["Calc", "Vials", "Today", "Log"].map((t, i) => (
                    <div
                      key={t}
                      className={`text-[9px] font-semibold uppercase tracking-[0.14em] ${
                        i === 2 ? "text-volt" : "text-white/60"
                      }`}
                      style={{ fontFamily: "var(--font-m)" }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofLabel({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="grid h-8 w-8 place-items-center rounded-full border border-volt/40 text-[11px] font-semibold text-volt"
        style={{ fontFamily: "var(--font-m)" }}
      >
        {n}
      </div>
      <div
        className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60"
        style={{ fontFamily: "var(--font-m)" }}
      >
        {text}
      </div>
    </div>
  );
}

function VialCardDark({
  name,
  mg,
  mL,
  pct,
  left,
  status,
  warn,
}: {
  name: string;
  mg: string;
  mL: string;
  pct: number;
  left: string;
  status: string;
  warn?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="shrink-0">
        <VialGraphicDark pct={pct} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-semibold text-white">{name}</span>
          <span
            className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${
              warn
                ? "border-[#c47f00]/60 bg-[#c47f00]/15 text-[#e6b96b]"
                : "border-white/15 text-white/60"
            }`}
            style={{ fontFamily: "var(--font-m)" }}
          >
            {status}
          </span>
        </div>
        <div
          className="mt-1 text-[11px] tabular-nums text-white/50"
          style={{ fontFamily: "var(--font-m)" }}
        >
          {mg} · {mL} · {left} left
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-1 rounded-full bg-volt"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function VialGraphicDark({ pct }: { pct: number }) {
  return (
    <svg width="34" height="52" viewBox="0 0 34 52" aria-hidden>
      <rect x="10" y="1" width="14" height="5" rx="1" fill="#6b6a72" />
      <rect
        x="5"
        y="7"
        width="24"
        height="42"
        rx="3"
        fill="#111114"
        stroke="#3a3a42"
        strokeWidth="1.2"
      />
      <rect
        x="7"
        y={49 - (42 * pct) / 100}
        width="20"
        height={(42 * pct) / 100}
        fill="#e8ff47"
        opacity="0.85"
      />
    </svg>
  );
}

function TodayList() {
  const items = [
    {
      time: "07:30",
      name: "Retatrutide",
      dose: "250 mcg · 10 u",
      state: "done",
    },
    { time: "12:00", name: "B-12", dose: "1000 mcg · 20 u", state: "next" },
    { time: "20:00", name: "GHK-Cu", dose: "2 mg · 20 u", state: "queued" },
    { time: "—", name: "Semaglutide", dose: "0.5 mg · 25 u", state: "skipped" },
  ];
  return (
    <div>
      <div
        className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-white/50"
        style={{ fontFamily: "var(--font-m)" }}
      >
        Today
      </div>
      <ul className="space-y-3">
        {items.map((i) => (
          <li
            key={i.name}
            className="flex items-center gap-3 border-b border-white/5 pb-3 last:border-b-0"
          >
            <span
              className="w-14 text-[12px] tabular-nums text-white/50"
              style={{ fontFamily: "var(--font-m)" }}
            >
              {i.time}
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-[13px] font-medium text-white">{i.name}</div>
              <div
                className="text-[11px] text-white/60 tabular-nums"
                style={{ fontFamily: "var(--font-m)" }}
              >
                {i.dose}
              </div>
            </div>
            <StateChip state={i.state} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function StateChip({ state }: { state: string }) {
  const map: Record<string, { bg: string; fg: string; label: string }> = {
    done: { bg: "bg-volt", fg: "text-carbon", label: "Logged" },
    next: { bg: "bg-white", fg: "text-carbon", label: "Next" },
    queued: { bg: "bg-white/10", fg: "text-white/70", label: "Queued" },
    skipped: { bg: "bg-white/5", fg: "text-white/60", label: "Skipped" },
  };
  const s = map[state];
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest ${s.bg} ${s.fg}`}
      style={{ fontFamily: "var(--font-m)" }}
    >
      {s.label}
    </span>
  );
}

function SiteRotation() {
  // 8 injection sites, marked with usage
  const sites = [
    { x: 40, y: 50, count: 3 },
    { x: 60, y: 50, count: 2 },
    { x: 35, y: 72, count: 4 },
    { x: 65, y: 72, count: 1 },
    { x: 32, y: 92, count: 2 },
    { x: 68, y: 92, count: 0 },
    { x: 30, y: 112, count: 1 },
    { x: 70, y: 112, count: 3 },
  ];
  return (
    <div>
      <div
        className="mb-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-white/50"
        style={{ fontFamily: "var(--font-m)" }}
      >
        <span>Site rotation</span>
        <span>Last 14 days</span>
      </div>
      <div className="flex items-center gap-6">
        <svg
          viewBox="0 0 100 180"
          className="h-56 w-auto"
          role="img"
          aria-label="Injection site rotation map"
        >
          {/* torso outline */}
          <path
            d="M50 8 c-9 0 -14 6 -14 12 c0 4 -2 6 -6 8 c-8 3 -12 10 -12 20 v40 c0 6 2 10 5 14 v50 c0 6 4 10 10 10 h34 c6 0 10 -4 10 -10 v-50 c3 -4 5 -8 5 -14 v-40 c0 -10 -4 -17 -12 -20 c-4 -2 -6 -4 -6 -8 c0 -6 -5 -12 -14 -12 z"
            fill="none"
            stroke="#faf9f5"
            strokeOpacity="0.25"
            strokeWidth="1"
          />
          {/* midline */}
          <line
            x1="50"
            y1="30"
            x2="50"
            y2="160"
            stroke="#faf9f5"
            strokeOpacity="0.1"
            strokeDasharray="2 3"
          />
          {sites.map((s, i) => (
            <g key={i}>
              <circle
                cx={s.x}
                cy={s.y}
                r={s.count > 0 ? 3.5 : 3}
                fill={s.count === 0 ? "transparent" : "#e8ff47"}
                stroke={s.count === 0 ? "#faf9f5" : "#e8ff47"}
                strokeOpacity={s.count === 0 ? 0.3 : 1}
                strokeWidth="1"
              />
              {s.count > 0 && (
                <text
                  x={s.x}
                  y={s.y + 1.3}
                  fontSize="4"
                  textAnchor="middle"
                  fill="#16161a"
                  fontFamily="var(--font-m)"
                  fontWeight="700"
                >
                  {s.count}
                </text>
              )}
            </g>
          ))}
        </svg>
        <ul
          className="space-y-2 text-[11px] tabular-nums text-white/55"
          style={{ fontFamily: "var(--font-m)" }}
        >
          <li>L abdomen · 3</li>
          <li>R abdomen · 2</li>
          <li>L thigh · 4</li>
          <li>R thigh · 1</li>
          <li>L flank · 2</li>
          <li>R flank · 0</li>
        </ul>
      </div>
    </div>
  );
}

/* ─────────────────────────  SAFETY  ───────────────────────── */
function Safety() {
  const rows = [
    {
      t: "mg and mcg stay explicit",
      d: "Unit selection is always visible.",
    },
    {
      t: "Units and mL appear together",
      d: "The syringe draw is never shown without its volume.",
    },
    {
      t: "Capacity is checked",
      d: "PepRep warns when a calculated draw exceeds the selected syringe.",
    },
    {
      t: "The formula can be inspected",
      d: "Users can see how the result was calculated.",
    },
  ];
  return (
    <section id="safety" className="border-b border-border bg-bg">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted"
              style={{ fontFamily: "var(--font-m)" }}
            >
              04 · Clarity
            </div>
            <h2
              className="mt-5 text-[clamp(32px,4.6vw,60px)] font-bold leading-[1] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-d)" }}
            >
              Precision starts with visible units.
            </h2>
          </div>
          <ol className="lg:col-span-7">
            {rows.map((r, i) => (
              <li
                key={r.t}
                className="grid grid-cols-[auto_1fr] gap-6 border-t border-border py-6 last:border-b"
              >
                <span
                  className="text-[13px] font-semibold tabular-nums text-muted"
                  style={{ fontFamily: "var(--font-m)" }}
                >
                  0{i + 1}
                </span>
                <div>
                  <div
                    className="text-[18px] font-semibold tracking-[-0.02em] sm:text-[20px]"
                    style={{ fontFamily: "var(--font-d)" }}
                  >
                    {r.t}
                  </div>
                  <div className="mt-1.5 text-[14px] leading-[1.55] text-muted">
                    {r.d}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div
              className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted sm:w-40"
              style={{ fontFamily: "var(--font-m)" }}
            >
              Important
            </div>
            <p className="max-w-[80ch] text-[15px] leading-[1.6] text-fg">
              PepRep is a measurement and record-keeping tool. It does not
              provide medical advice, prescribe peptides, or recommend doses.
              Users should confirm their inputs and follow guidance from an
              appropriately qualified healthcare professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  FAQ  ───────────────────────── */
const FAQS = [
  {
    q: "Does PepRep recommend a dose?",
    a: "No. PepRep calculates only from values entered by the user.",
  },
  {
    q: "What does the calculator show?",
    a: "The calculated draw in both mL and U-100 syringe units, along with concentration and visible calculation steps.",
  },
  {
    q: "Can I keep track of vials and schedules?",
    a: "Yes. PepRep includes vial inventory, user-created schedules, logging, history, injection-site rotation, and progress records.",
  },
  {
    q: "Is PepRep free?",
    a: "Yes. The web app is free to use, and no account is required for calculation or local records.",
  },
  {
    q: "Where is my information stored?",
    a: "Your vials, plans and history stay on this device by default. Optional cloud backup uploads only a password-encrypted file you choose; it is not automatic sync.",
    link: { href: "/privacy", label: "Read the privacy policy →" },
  },
  {
    q: "Can I use it in a browser?",
    a: "Yes. The PepRep web app is available now. Native iPhone and Android releases will be linked here after store approval.",
    link: { href: APP_URL, label: "Open the PepRep web app →" },
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted"
              style={{ fontFamily: "var(--font-m)" }}
            >
              05 · Questions
            </div>
            <h2
              className="mt-5 text-[clamp(32px,4vw,52px)] font-bold leading-[1.02] tracking-[-0.028em]"
              style={{ fontFamily: "var(--font-d)" }}
            >
              Answers,
              <br />
              not marketing.
            </h2>
          </div>
          <ul className="lg:col-span-8">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-t border-border last:border-b">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className="text-[18px] font-semibold tracking-[-0.015em] sm:text-[20px]"
                      style={{ fontFamily: "var(--font-d)" }}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-[16px] transition-transform ${
                        isOpen ? "rotate-45 bg-carbon text-volt" : "text-fg"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-14 text-[15px] leading-[1.6] text-muted">
                      {f.a}
                      {f.link && (
                        <div className="mt-3">
                          <a
                            href={f.link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="border-b border-carbon/30 pb-0.5 text-[14px] font-semibold text-carbon hover:border-carbon"
                          >
                            {f.link.label}
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  FINAL CTA  ─────────────────────────── */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-carbon text-[#faf9f5]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#faf9f5 1px, transparent 1px), linear-gradient(90deg, #faf9f5 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <BoldTally size={64} dark />
          <h2
            className="mt-8 text-[clamp(36px,6vw,84px)] font-bold leading-[0.98] tracking-[-0.035em]"
            style={{ fontFamily: "var(--font-d)" }}
          >
            Know what to draw.
            <br />
            <span className="text-white/50">Know what you logged.</span>
          </h2>
          <p className="mt-8 max-w-[52ch] text-[16px] leading-[1.55] text-white/65 sm:text-[17px]">
            Clear calculations and a complete record. Free to use, local-first,
            and no account required for the core experience.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center rounded-xl bg-volt px-6 text-[14px] font-semibold text-carbon transition-transform hover:scale-[0.98]"
            >
              Open the free web app <span className="ml-2">→</span>
            </a>
            <span
              className="text-[12px] text-white/60"
              style={{ fontFamily: "var(--font-m)" }}
            >
              Calculate and track. Never prescribe.
            </span>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <img
              src={editorialFigure}
              alt="Figure in low light, arms raised in a controlled stretch."
              className="h-full w-full object-cover grayscale opacity-70"
              decoding="async"
              loading="lazy"
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse at 50% 45%, black 45%, transparent 95%)",
                maskImage:
                  "radial-gradient(ellipse at 50% 45%, black 45%, transparent 95%)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-carbon/10" />

            <div
              className="absolute bottom-4 left-4 rounded-md border border-volt/40 bg-carbon/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-volt backdrop-blur"
              style={{ fontFamily: "var(--font-m)" }}
            >
              Discipline · Measurement · Record
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  FOOTER  ─────────────────────────── */
function Footer() {
  return (
    <footer className="bg-bg">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 border-t border-border pt-10 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <BoldTally size={36} />
            <Wordmark size={24} />
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-8 gap-y-3 text-[13px] font-medium"
          >
            <a href="#product" className="text-fg hover:text-carbon">
              Product
            </a>
            <a href="#safety" className="text-fg hover:text-carbon">
              Safety
            </a>
            <a href="#faq" className="text-fg hover:text-carbon">
              FAQ
            </a>
            <a href="/privacy" className="text-fg hover:text-carbon">
              Privacy
            </a>
            <a href="/terms" className="text-fg hover:text-carbon">
              Terms
            </a>
            <a href="/contact" className="text-fg hover:text-carbon">
              Support
            </a>
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="text-fg hover:text-carbon"
            >
              Open PepRep ↗
            </a>
          </nav>
        </div>
        <div
          className="mt-10 flex flex-col gap-3 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between"
          style={{ fontFamily: "var(--font-m)" }}
        >
          <span>Measurement and tracking only. Not medical advice.</span>
          <span>© {new Date().getFullYear()} PepRep</span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────  PAGE  ─────────────────────────── */
function LandingPage() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <ProductLoop />
        <ProductProof />
        <Safety />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

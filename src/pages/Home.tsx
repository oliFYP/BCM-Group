import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import bcmVideo from "../assets/bcm.mp4";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Phone,
  Shield,
  Award,
  Clock,
} from "lucide-react";

import logoLayer1    from "../assets/experience/Layer_1.png";
import logoBrosse    from "../assets/experience/brosse.png";
import logoKirmina   from "../assets/experience/kirmina.png";
import logoResidence from "../assets/experience/residence.png";
import logoStjean    from "../assets/experience/stjean.png";

import imgVieuxDuluth from "../assets/projects/vieuxduluth.jpg";
import imgHup         from "../assets/projects/hup.jpg";
import imgAab         from "../assets/projects/abb.jpg";

import { useLanguage } from "../i18n/LanguageContext";

const logos = [
  { src: logoLayer1,    alt: "Logo partenaire" },
  { src: logoBrosse,    alt: "Brosse" },
  { src: logoKirmina,   alt: "Kirmina" },
  { src: logoResidence, alt: "Résidence" },
  { src: logoStjean,    alt: "Saint-Jean" },
];

const projectImgs = [imgVieuxDuluth, imgAab, imgHup];

/* ── Counter animation hook ────────────────────────────── */
function useCountUp(target: number, duration = 1800) {
  const [val, setVal]     = useState(0);
  const ref               = useRef<HTMLDivElement>(null);
  const started           = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.6 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return [val, ref] as const;
}

/* ─────────────────────────────────────────────────────── */

export default function Home() {
  const { t, ta } = useLanguage();

  const [count10, ref10]   = useCountUp(10);
  const [count100, ref100] = useCountUp(100);

  const services = ta<{ title: string; desc: string }>("home.services");

  const values = [
    { Icon: Award,  title: t("home.values.excellence.title"), desc: t("home.values.excellence.desc") },
    { Icon: Shield, title: t("home.values.reliability.title"), desc: t("home.values.reliability.desc") },
    { Icon: Clock,  title: t("home.values.punctuality.title"), desc: t("home.values.punctuality.desc") },
  ];

  const portfolioProjects = [
    { title: "Vieux Duluth",    loc: "Saint-Basile",          cat: t("projects.filters.renovation") },
    { title: "AAB",             loc: "Saint-Jean-Iberville",   cat: t("projects.filters.industrial") },
    { title: "HUP",             loc: "Delson",                 cat: t("projects.filters.renovation") },
  ];

  return (
    <>
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-bcm-dark">

        {/* Video */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-50"
            src={bcmVideo}
            autoPlay loop muted playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bcm-dark via-bcm-dark/85 to-bcm-dark/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-bcm-dark/40 via-transparent to-bcm-dark" />
        </div>

        {/* Blueprint dot grid overlay */}
        <div className="absolute inset-0 blueprint-dots opacity-40 pointer-events-none" />

        {/* Warning stripe overlay — very subtle */}
        <div className="absolute inset-0 warning-stripe pointer-events-none" />

        {/* Red radial glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-bcm-red/[0.06] rounded-full blur-[140px] pointer-events-none" />

        {/* Diagonal red slash — architectural accent */}
        <div
          className="absolute left-0 top-0 bottom-0 pointer-events-none"
          style={{
            width: "4px",
            background: "linear-gradient(to bottom, transparent 0%, #c8161d 30%, #c8161d 70%, transparent 100%)",
            opacity: 0.6,
          }}
        />
        <div
          className="absolute left-12 top-0 bottom-0 pointer-events-none"
          style={{
            width: "1px",
            background: "linear-gradient(to bottom, transparent 0%, rgba(200,22,29,0.3) 30%, rgba(200,22,29,0.3) 70%, transparent 100%)",
          }}
        />

        <div className="container-xl relative z-10 pt-24 pb-32">
          <div className="max-w-3xl">

            {/* Badge */}
            <span className="label mb-6 stagger-1">{t("home.hero.badge")}</span>

            {/* Headline */}
            <h1 className="page-title mb-6 stagger-2">
              {t("home.hero.title1")}
              <br />
              <span className="text-bcm-red relative">
                {t("home.hero.title2")}
                {/* Red underline bar */}
                <span
                  className="absolute bottom-0 left-0 h-1 bg-bcm-red beam-reveal"
                  style={{ width: "100%" }}
                />
              </span>
              <br />
              {t("home.hero.title3")}
            </h1>

            <p className="text-bcm-silver text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-light stagger-3">
              {t("home.hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4 stagger-4">
              <Link to="/services" className="btn-red relative overflow-hidden">
                {t("home.hero.servicesBtn")}
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                {t("home.hero.quoteBtn")}
              </Link>
            </div>
          </div>

          {/* ── Stats — architectural callout style ─────────── */}
          <div className="mt-20 flex flex-wrap gap-px">
            {/* Stat 1 */}
            <div
              ref={ref10 as React.RefObject<HTMLDivElement>}
              className="relative bg-bcm-dark/80 backdrop-blur-sm border border-white/[0.07] px-10 py-8 group"
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}
            >
              {/* Ruler tick marks */}
              <div className="absolute top-0 left-0 right-0 h-px bg-bcm-red/40" />
              <div className="absolute top-0 left-0 w-px h-4 bg-bcm-red/60" />
              <div className="absolute top-0 right-0 w-px h-4 bg-bcm-red/30" />

              <div className="font-['Barlow_Condensed'] font-black text-5xl md:text-6xl text-bcm-red leading-none mb-2">
                {count10}
                <span className="text-bcm-red">+</span>
              </div>
              <div className="text-bcm-silver text-[10px] font-['Barlow_Condensed'] font-semibold tracking-[0.2em] uppercase">
                {t("home.stats.experience")}
              </div>

              {/* Corner rivet */}
              <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full border border-white/10" />
            </div>

            {/* Stat 2 */}
            <div
              ref={ref100 as React.RefObject<HTMLDivElement>}
              className="relative bg-bcm-dark/80 backdrop-blur-sm border border-white/[0.07] px-10 py-8 group"
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-bcm-red/40" />
              <div className="absolute top-0 left-0 w-px h-4 bg-bcm-red/60" />
              <div className="absolute top-0 right-0 w-px h-4 bg-bcm-red/30" />

              <div className="font-['Barlow_Condensed'] font-black text-5xl md:text-6xl text-bcm-red leading-none mb-2">
                {count100}
                <span className="text-bcm-red">%</span>
              </div>
              <div className="text-bcm-silver text-[10px] font-['Barlow_Condensed'] font-semibold tracking-[0.2em] uppercase">
                {t("home.stats.satisfaction")}
              </div>
              <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full border border-white/10" />
            </div>
          </div>
        </div>

        {/* ── Ticker tape — steel rail style ───────────────── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
          {/* Rail beam — top */}
          <div className="h-px bg-gradient-to-r from-transparent via-bcm-red/40 to-transparent" />
          <div className="ruler-top relative bg-bcm-dark/80 backdrop-blur-sm">
            <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-bcm-dark to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-bcm-dark to-transparent z-10 pointer-events-none" />
            <div className="flex ticker-track">
              {[...logos, ...logos].map(({ src, alt }, i) => (
                <div key={i} className="flex-shrink-0 flex items-center justify-center px-12 py-5">
                  <img src={src} alt={alt} className="h-7 w-28 object-contain opacity-50 hover:opacity-80 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
          {/* Rail beam — bottom */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Scroll hint */}
        <a
          href="#intro"
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bcm-muted hover:text-bcm-silver transition-colors z-20"
        >
          <span className="font-['Barlow_Condensed'] text-[9px] tracking-[0.4em] uppercase">
            {t("home.scroll")}
          </span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </section>

      {/* ─── INTRO STRIP ─────────────────────────────────────── */}
      <section
        id="intro"
        className="relative border-b border-white/5 py-20"
        style={{ background: "#141414" }}
      >
        {/* Warning stripe background */}
        <div className="absolute inset-0 warning-stripe pointer-events-none" />

        {/* Structural left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-bcm-red to-transparent opacity-60" />

        <div className="container-xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label mb-4">{t("home.intro.badge")}</span>

              {/* Structural divider line */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-bcm-red via-bcm-red/40 to-transparent" style={{ maxWidth: "160px" }} />
              </div>

              <h2 className="section-heading mb-5">
                {t("home.intro.title1")}
                <br />
                {t("home.intro.title2")}
              </h2>
              <p className="text-bcm-silver leading-relaxed mb-6">
                {t("home.intro.desc")}
              </p>
              <Link to="/about" className="btn-ghost-red">
                {t("home.intro.btn")}
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Values — steel plate cards */}
            <div className="grid grid-cols-3 gap-3">
              {values.map(({ Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="relative bg-bcm-coal border border-white/5 hover:border-bcm-red/40 p-5 text-center transition-all duration-300 group rivet-corners"
                  style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}
                >
                  {/* Top red bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-bcm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="w-10 h-10 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-bcm-red transition-colors">
                    <Icon size={18} className="text-bcm-red group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-['Barlow_Condensed'] font-bold text-[11px] uppercase tracking-widest text-white mb-1 group-hover:text-bcm-red transition-colors">
                    {title}
                  </h4>
                  <p className="text-bcm-muted text-xs leading-snug">{desc}</p>

                  {/* Stagger index for visual depth */}
                  <div
                    className="absolute bottom-2 left-2 font-['Barlow_Condensed'] text-[9px] text-white/8 font-bold"
                  >
                    0{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ──────────────────────────────────── */}
      <section
        className="relative py-24 lg:py-32"
        style={{ background: "#0a0a0a" }}
      >
        {/* Blueprint dot grid */}
        <div className="absolute inset-0 blueprint-dots opacity-60 pointer-events-none" />

        <div className="container-xl relative z-10">
          <div className="flex items-end justify-between mb-16">
            <div>
              {/* Construction marker badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-bcm-red flex items-center justify-center flex-shrink-0"
                     style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)" }}>
                  <span className="font-['Barlow_Condensed'] font-black text-white text-[9px]">§</span>
                </div>
                <span
                  className="text-[10px] tracking-[0.2em] uppercase text-white/30"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {t("home.servicesSection.badge")}
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl section-heading text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                {t("home.servicesSection.title")}
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden md:inline-flex items-center gap-2 text-white/30 hover:text-bcm-red text-[12px] transition-colors"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {t("home.servicesSection.viewAll")}
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Service rows — steel plate style */}
          <div className="border-t border-white/[0.06]">
            {services.map(({ title, desc }, i) => (
              <Link
                key={i}
                to="/services"
                className="group flex items-center justify-between py-6 px-0 border-b border-white/[0.06] hover:border-bcm-red/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover fill */}
                <div className="absolute inset-0 bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Left red indicator bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-bcm-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <div className="flex items-center gap-8 pl-5">
                  {/* Construction index number */}
                  <span
                    className="text-[10px] text-white/15 w-8 flex-shrink-0 font-['Barlow_Condensed'] font-bold"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[22px] font-['Barlow_Condensed'] font-bold uppercase text-white group-hover:text-bcm-red transition-colors leading-tight tracking-wide">
                      {title}
                    </h3>
                    <p className="text-white/30 text-[13px] mt-1">{desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pr-2">
                  {/* Measurement bracket */}
                  <div className="hidden md:flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-6 h-px bg-bcm-red/60" />
                    <div className="w-px h-4 bg-bcm-red/40" />
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-white/15 group-hover:text-bcm-red group-hover:translate-x-1 transition-all flex-shrink-0"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─────────────────────────────────── */}
      <section
        className="relative py-24 lg:py-32"
        style={{ background: "#111" }}
      >
        {/* Diagonal top cut */}
        <div
          className="absolute top-0 left-0 right-0 h-12 pointer-events-none"
          style={{
            background: "#0a0a0a",
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)",
          }}
        />

        <div className="container-xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="label mb-4">{t("home.portfolio.badge")}</span>
              {/* I-beam accent */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[3px] w-16 bg-bcm-red" />
                <div className="h-[3px] w-4 bg-bcm-red/30" />
              </div>
              <h2 className="section-heading">{t("home.portfolio.title")}</h2>
            </div>
            <Link to="/projects" className="btn-ghost-red flex-shrink-0">
              {t("home.portfolio.viewAll")}
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Project grid */}
          <div className="grid md:grid-cols-3 gap-3">
            {portfolioProjects.map(({ title, cat, loc }, i) => (
              <Link
                key={i}
                to="/projects"
                className="group relative overflow-hidden block"
                style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={projectImgs[i]}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Blueprint corner marks */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-bcm-red/50" />
                <div className="absolute top-3 right-6 w-4 h-4 border-t border-r border-bcm-red/30" />
                <div className="absolute bottom-16 right-3 w-3 h-3 border-b border-r border-white/20" />

                <div className="absolute bottom-0 left-0 p-6 pointer-events-none">
                  {/* Category tag */}
                  <span
                    className="inline-block bg-bcm-red text-white font-['Barlow_Condensed'] font-bold text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 mb-3"
                    style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)" }}
                  >
                    {cat}
                  </span>
                  <p className="font-['Barlow_Condensed'] font-black text-xl uppercase tracking-widest text-white leading-tight mb-1">
                    {title}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-px bg-bcm-red/60" />
                    <p className="text-bcm-silver text-xs tracking-[0.15em] uppercase font-['Barlow_Condensed']">
                      {loc}
                    </p>
                  </div>
                </div>

                {/* Project index */}
                <div className="absolute top-4 right-4 font-['Barlow_Condensed'] font-black text-white/[0.06] text-5xl leading-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ─────────────────────────────────────────── */}
      <section className="relative py-20 bg-bcm-red overflow-hidden">
        {/* Warning stripe march */}
        <div className="absolute inset-0 warning-stripe-march pointer-events-none opacity-70" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Blueprint corner marks */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/20" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/20" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/20" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/20" />

        {/* Large background number */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-['Barlow_Condensed'] font-black text-white/[0.04] text-[200px] leading-none pointer-events-none select-none pr-8">
          BCM
        </div>

        <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-['Barlow_Condensed'] font-black text-3xl md:text-4xl uppercase text-white leading-tight mb-2">
              {t("home.cta.title")}
            </h2>
            <p className="text-white/75 text-base">{t("home.cta.subtitle")}</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link to="/contact" className="btn-ghost">
              {t("home.cta.write")}
              <ArrowRight size={14} />
            </Link>
            <a href="tel:450-741-1351" className="btn-ghost">
              <Phone size={14} />
              450-741-1351
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

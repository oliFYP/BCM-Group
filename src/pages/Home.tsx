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

import logoLayer1 from "../assets/experience/Layer_1.png";
import logoBrosse from "../assets/experience/brosse.png";
import logoKirmina from "../assets/experience/kirmina.png";
import logoResidence from "../assets/experience/residence.png";
import logoStjean from "../assets/experience/stjean.png";

import imgVieuxDuluth from "../assets/projects/vieuxduluth.jpg";
import imgHup from "../assets/projects/hup.jpg";
import imgAab from "../assets/projects/abb.jpg";

import { useLanguage } from "../i18n/LanguageContext";

const logos = [
  { src: logoLayer1, alt: "Logo partenaire" },
  { src: logoBrosse, alt: "Brosse" },
  { src: logoKirmina, alt: "Kirmina" },
  { src: logoResidence, alt: "Résidence" },
  { src: logoStjean, alt: "Saint-Jean" },
];

const projectImgs = [imgVieuxDuluth, imgAab, imgHup];

export default function Home() {
  const { t, ta } = useLanguage();

  const stats = [
    { val: "10+", lbl: t("home.stats.experience") },
    { val: "100%", lbl: t("home.stats.satisfaction") },
  ];

  const services = ta<{ title: string; desc: string }>("home.services");

  const values = [
    { Icon: Award, title: t("home.values.excellence.title"), desc: t("home.values.excellence.desc") },
    { Icon: Shield, title: t("home.values.reliability.title"), desc: t("home.values.reliability.desc") },
    { Icon: Clock, title: t("home.values.punctuality.title"), desc: t("home.values.punctuality.desc") },
  ];

  const portfolioProjects = [
    { title: "Vieux Duluth", loc: "Saint-Basile", cat: t("projects.filters.renovation") },
    { title: "AAB", loc: "Saint-Jean-Iberville", cat: t("projects.filters.industrial") },
    { title: "HUP", loc: "Delson", cat: t("projects.filters.renovation") },
  ];

  return (
    <>
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker 22s linear infinite;
          will-change: transform;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-bcm-dark">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-60"
            src={bcmVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bcm-dark via-bcm-dark/80 to-bcm-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-bcm-dark/30 via-transparent to-bcm-dark" />
        </div>

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Red radial */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-bcm-red/[0.07] rounded-full blur-[130px] pointer-events-none" />

        <div className="container-xl relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            <span className="label mb-6">{t("home.hero.badge")}</span>

            <h1 className="page-title mb-6">
              {t("home.hero.title1")}
              <br />
              <span className="text-bcm-red">{t("home.hero.title2")}</span>
              <br />
              {t("home.hero.title3")}
            </h1>

            <p className="text-bcm-silver text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-light">
              {t("home.hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-red">
                {t("home.hero.servicesBtn")}
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                {t("home.hero.quoteBtn")}
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-6 md:mb-10">
            {stats.map(({ val, lbl }) => (
              <div
                key={lbl}
                className="bg-bcm-dark hover:bg-bcm-coal px-6 py-8 text-center transition-colors group"
              >
                <div className="font-['Barlow_Condensed'] font-black text-4xl md:text-5xl text-bcm-red leading-none mb-1.5 group-hover:scale-105 transition-transform origin-bottom">
                  {val}
                </div>
                <div className="text-bcm-silver text-[10px] font-['Barlow_Condensed'] font-semibold tracking-[0.2em] uppercase">
                  {lbl}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── TICKER TAPE ─────────────────────────────────────── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/5 bg-bcm-dark/70 backdrop-blur-sm overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bcm-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bcm-dark to-transparent z-10 pointer-events-none" />
          <div className="flex ticker-track">
            {[...logos, ...logos].map(({ src, alt }, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center px-12 py-5">
                <img src={src} alt={alt} className="h-7 w-28 object-contain hover:opacity-60 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <a
          href="#intro"
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bcm-muted hover:text-bcm-silver transition-colors z-20"
        >
          <span className="font-['Barlow_Condensed'] text-[9px] tracking-[0.4em] uppercase">
            {t("home.scroll")}
          </span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </section>

      {/* ─── INTRO STRIP ─────────────────────────────────────────── */}
      <section id="intro" className="bg-bcm-coal border-y border-white/5 py-16">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label mb-4">{t("home.intro.badge")}</span>
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

            <div className="grid grid-cols-3 gap-px bg-white/5">
              {values.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-bcm-coal hover:bg-bcm-mid p-5 text-center transition-colors group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-bcm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="w-10 h-10 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-bcm-red/20 transition-colors">
                    <Icon size={18} className="text-bcm-red" />
                  </div>
                  <h4 className="font-['Barlow_Condensed'] font-bold text-[11px] uppercase tracking-widest text-white mb-1">
                    {title}
                  </h4>
                  <p className="text-bcm-muted text-xs leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─────────────────────────────────────── */}
      <section className="section-pad bg-[#0a0a0a]">
        <div className="container-xl">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-[#c8161d]" />
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
              className="hidden md:inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-[12px] transition-colors"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {t("home.servicesSection.viewAll")}
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/[0.06]">
            {services.map(({ title, desc }, i) => (
              <Link
                key={i}
                to="/services"
                className="group flex items-center justify-between py-7 px-6 bg-[#0a0a0a] hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="flex items-center gap-8">
                  <span
                    className="text-[11px] text-white/20 w-8 flex-shrink-0"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="text-[22px] section-heading text-white group-hover:text-[#c8161d] transition-colors leading-tight"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {title}
                    </h3>
                    <p className="text-white/30 text-[13px] mt-1">{desc}</p>
                  </div>
                </div>
                <ArrowRight
                  size={18}
                  className="text-white/20 group-hover:text-[#c8161d] group-hover:translate-x-1 transition-all flex-shrink-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECT ─────────────────────────────────────── */}
      <section className="section-pad bg-bcm-coal">
        <div className="container-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="label mb-4">{t("home.portfolio.badge")}</span>
              <h2 className="section-heading">{t("home.portfolio.title")}</h2>
            </div>
            <Link to="/projects" className="btn-ghost-red flex-shrink-0">
              {t("home.portfolio.viewAll")}
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {portfolioProjects.map(({ title, cat, loc }, i) => (
              <Link
                key={i}
                to="/projects"
                className="group relative overflow-hidden bg-bcm-coal block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={projectImgs[i]}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-6 pointer-events-none">
                  <span className="inline-block bg-bcm-red text-white font-display font-bold text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 mb-3">
                    {cat}
                  </span>
                  <p className="font-display font-black text-xl uppercase tracking-widest text-white leading-tight mb-1">
                    {title}
                  </p>
                  <p className="text-bcm-silver text-xs tracking-[0.15em] uppercase font-display">
                    {loc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ─────────────────────────────────────────── */}
      <section className="py-20 bg-bcm-red relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-2xl" />

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

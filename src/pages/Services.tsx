import { Link } from "react-router-dom";
import team3    from "../assets/3.JPG";
import accoustic from "../assets/accoustic.JPG";
import gypse     from "../assets/gypse.JPG";
import platre    from "../assets/platre.JPG";
import plafond   from "../assets/plafond.JPG";
import colombage from "../assets/colombage.JPG";
import isolation from "../assets/isolation.JPG";
import gestion   from "../assets/planning.jpg";

import {
  ClipboardList, Layers, Hammer, PaintBucket,
  Grid3x3, Waves, LayoutGrid, Users,
  ArrowRight, CheckCircle2, type LucideIcon,
} from "lucide-react";

import { useLanguage } from "../i18n/LanguageContext";

const serviceIcons: LucideIcon[] = [Grid3x3, Waves, Layers, PaintBucket, LayoutGrid, Hammer, ClipboardList, Users];
const serviceImgs = [colombage, isolation, gypse, platre, plafond, accoustic, gestion, team3];

export default function Services() {
  const { t, ta } = useLanguage();
  const services = ta<{ title: string; desc: string; features: string[] }>("services.items");
  const steps    = ta<{ title: string; desc: string }>("services.process.steps");

  return (
    <>
      {/* ─── PAGE HERO ──────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />

        {/* Warning stripe */}
        <div className="absolute inset-0 warning-stripe pointer-events-none opacity-40" />

        {/* Blueprint corners */}
        <div className="absolute top-24 left-8 w-8 h-8 border-t border-l border-bcm-red/30 pointer-events-none" />

        <div className="container-xl relative z-10">
          <span className="label mb-5">{t("services.hero.badge")}</span>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[3px] w-16 bg-bcm-red beam-reveal" />
            <div className="h-[3px] w-6 bg-bcm-red/30" />
          </div>
          <h1 className="page-title mb-4">
            {t("nav.our")}
            <br />
            <span className="text-bcm-red">Services</span>
          </h1>
          <p className="text-bcm-silver text-lg max-w-xl leading-relaxed font-light">
            {t("services.hero.subtitle")}
          </p>
        </div>
      </div>

      {/* ─── SERVICES GRID ──────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark relative">
        <div className="absolute inset-0 blueprint-dots opacity-40 pointer-events-none" />

        <div className="container-xl relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {services.map(({ title, desc, features }, i) => {
              const Icon = serviceIcons[i];
              const img  = serviceImgs[i];
              return (
                <div
                  key={i}
                  className="card-dark group flex flex-col card-steel-hover"
                  style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)" }}
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover opacity-55 group-hover:opacity-85 group-hover:scale-105 transition-all duration-600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bcm-coal to-transparent" />

                    {/* Blueprint corner on image */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-bcm-red/40" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/20" />

                    <div className="absolute bottom-4 left-4">
                      <div
                        className="w-9 h-9 bg-bcm-red flex items-center justify-center"
                        style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)" }}
                      >
                        <Icon size={18} className="text-white" />
                      </div>
                    </div>

                    {/* Index number */}
                    <div className="absolute top-3 right-3 font-['Barlow_Condensed'] font-black text-white/[0.07] text-4xl leading-none pointer-events-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="font-['Barlow_Condensed'] font-bold text-xl uppercase tracking-wide text-white mb-3 group-hover:text-bcm-red transition-colors">
                      {title}
                    </h3>
                    <p className="text-bcm-silver text-sm leading-relaxed mb-5 flex-1">{desc}</p>

                    <ul className="space-y-1.5 mb-6">
                      {features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 bg-bcm-red/15 border border-bcm-red/30 flex items-center justify-center flex-shrink-0"
                            style={{ clipPath: "polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 0 100%)" }}
                          >
                            <CheckCircle2 size={8} className="text-bcm-red" />
                          </div>
                          <span className="text-bcm-muted text-xs">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="mt-auto inline-flex items-center gap-1.5 text-bcm-red text-[11px] font-['Barlow_Condensed'] font-bold tracking-widest uppercase hover:gap-3 transition-all"
                    >
                      {t("services.request")} <ArrowRight size={13} />
                    </Link>
                  </div>

                  {/* Bottom red bar reveal */}
                  <div className="h-[3px] w-0 bg-bcm-red group-hover:w-full transition-all duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ────────────────────────────────────────────── */}
      <section className="section-pad relative" style={{ background: "#111" }}>
        {/* Warning stripe */}
        <div className="absolute inset-0 warning-stripe pointer-events-none opacity-40" />

        <div className="container-xl relative z-10">
          <div className="mb-14">
            <span className="label mb-5">{t("services.process.badge")}</span>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[3px] w-16 bg-bcm-red" />
              <div className="h-[3px] w-6 bg-bcm-red/30" />
            </div>
            <h2 className="section-heading">{t("services.process.title")}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {steps.map(({ title, desc }, i) => (
              <div
                key={i}
                className="relative p-8 transition-all duration-300 group"
                style={{
                  background: "#161616",
                  clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {/* Top structural bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-bcm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Massive ghost number */}
                <span className="font-['Barlow_Condensed'] font-black text-6xl text-white/[0.04] leading-none block mb-4 group-hover:text-bcm-red/8 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h4 className="font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide text-white mb-3 group-hover:text-bcm-red transition-colors">
                  {title}
                </h4>
                <p className="text-bcm-silver text-sm leading-relaxed">{desc}</p>

                {i < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 hidden lg:block z-10">
                    <ArrowRight size={14} className="text-bcm-red/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section className="py-20 bg-bcm-dark relative" style={{ borderTop: "1px solid rgba(200,22,29,0.15)" }}>
        <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="section-heading mb-2">{t("services.cta.title")}</h2>
            <p className="text-bcm-silver">{t("services.cta.desc")}</p>
          </div>
          <Link to="/contact" className="btn-red flex-shrink-0">
            {t("services.cta.btn")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

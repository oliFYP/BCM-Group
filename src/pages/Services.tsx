import { Link } from "react-router-dom";
import team3 from "../assets/3.JPG";
import accoustic from "../assets/accoustic.JPG";
import gypse from "../assets/gypse.JPG";
import platre from "../assets/platre.JPG";
import plafond from "../assets/plafond.JPG";
import colombage from "../assets/colombage.JPG";
import isolation from "../assets/isolation.JPG";
import gestion from "../assets/planning.jpg";

import {
  ClipboardList,
  Layers,
  Hammer,
  PaintBucket,
  Grid3x3,
  Waves,
  LayoutGrid,
  Users,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

import { useLanguage } from "../i18n/LanguageContext";

const serviceIcons: LucideIcon[] = [
  Grid3x3,
  Waves,
  Layers,
  PaintBucket,
  LayoutGrid,
  Hammer,
  ClipboardList,
  Users,
];
const serviceImgs = [
  colombage,
  isolation,
  gypse,
  platre,
  plafond,
  accoustic,
  gestion,
  team3,
];

export default function Services() {
  const { t, ta } = useLanguage();

  const services = ta<{ title: string; desc: string; features: string[] }>(
    "services.items",
  );
  const steps = ta<{ title: string; desc: string }>("services.process.steps");

  return (
    <>
      {/* ─── PAGE HERO ────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="container-xl relative z-10">
          <span className="label mb-5">{t("services.hero.badge")}</span>
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

      {/* ─── SERVICES GRID ────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ title, desc, features }, i) => {
              const Icon = serviceIcons[i];
              const img = serviceImgs[i];
              return (
                <div key={i} className="card-dark group flex flex-col">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bcm-coal to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-9 h-9 bg-bcm-red flex items-center justify-center">
                        <Icon size={18} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col p-7">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-bcm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <h3 className="font-['Barlow_Condensed'] font-bold text-xl uppercase tracking-wide text-white mb-3 group-hover:text-bcm-red transition-colors">
                      {title}
                    </h3>
                    <p className="text-bcm-silver text-sm leading-relaxed mb-5 flex-1">
                      {desc}
                    </p>
                    <ul className="space-y-1.5 mb-6">
                      {features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <CheckCircle2
                            size={13}
                            className="text-bcm-red flex-shrink-0"
                          />
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
                  <div className="h-[2px] w-0 bg-bcm-red group-hover:w-full transition-all duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-coal">
        <div className="container-xl">
          <div className="mb-14">
            <span className="label mb-5">{t("services.process.badge")}</span>
            <div className="red-bar mb-5" />
            <h2 className="section-heading">{t("services.process.title")}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {steps.map(({ title, desc }, i) => (
              <div
                key={i}
                className="bg-bcm-coal hover:bg-bcm-mid p-8 transition-colors group relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-bcm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="font-['Barlow_Condensed'] font-black text-5xl text-white/5 leading-none block mb-4 group-hover:text-bcm-red/10 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide text-white mb-3 group-hover:text-bcm-red transition-colors">
                  {title}
                </h4>
                <p className="text-bcm-silver text-sm leading-relaxed">
                  {desc}
                </p>
                {i < steps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="absolute top-1/2 -right-2 -translate-y-1/2 text-bcm-red/30 hidden lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-bcm-dark border-t border-white/5">
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

import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import ValueIcon1 from "../assets/ValueIcon1";
import ValueIcon2 from "../assets/ValueIcon2";
import ValueIcon3 from "../assets/ValueIcon3";
import ValueIcon4 from "../assets/ValueIcon4";
import CraneParallax from "../assets/CraneParallax";
import gestion from "../assets/projets.jpeg";

import { useLanguage } from "../i18n/LanguageContext";

const valueIcons = [ValueIcon1, ValueIcon2, ValueIcon3, ValueIcon4];

export default function About() {
  const { t, ta } = useLanguage();

  const advantages  = ta<string>("about.story.advantages");
  const milestones  = ta<{ year: string; event: string }>("about.timeline.milestones");
  const valueItems  = ta<{ title: string; desc: string }>("about.values.items");

  return (
    <>
      {/* Faded crane parallax */}
      <CraneParallax className="fixed inset-0 w-full h-full z-0" />

      {/* ─── PAGE HERO ─────────────────────────────────────────── */}
      <div className="page-hero relative z-10">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />

        {/* Blueprint corner marks */}
        <div className="absolute top-24 left-8 w-8 h-8 border-t border-l border-bcm-red/30 pointer-events-none" />
        <div className="absolute top-24 right-8 w-8 h-8 border-t border-r border-bcm-red/20 pointer-events-none" />

        {/* Warning stripe — subtle */}
        <div className="absolute inset-0 warning-stripe pointer-events-none opacity-50" />

        <div className="container-xl relative z-10">
          <span className="label mb-5">{t("about.hero.badge")}</span>

          {/* Structural I-beam accent */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[3px] w-16 bg-bcm-red beam-reveal" />
            <div className="h-[3px] w-6 bg-bcm-red/30" />
          </div>

          <h1 className="page-title mb-4">
            Groupe
            <br />
            <span className="text-bcm-red">B.C.M.</span>
          </h1>
          <p className="text-bcm-silver text-lg max-w-xl leading-relaxed font-light">
            {t("about.hero.subtitle")}
          </p>
        </div>
      </div>

      {/* ─── STORY ─────────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark relative z-10">
        {/* Blueprint dots */}
        <div className="absolute inset-0 blueprint-dots opacity-40 pointer-events-none" />

        <div className="container-xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="label mb-5">{t("about.story.badge")}</span>
              <div className="red-bar mb-6" />
              <h2 className="section-heading mb-6">{t("about.story.title")}</h2>
              <p className="text-bcm-silver leading-relaxed mb-5">{t("about.story.p1")}</p>
              <p className="text-bcm-silver leading-relaxed mb-8">{t("about.story.p2")}</p>

              <div className="space-y-3 mb-10">
                {advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {/* Chamfered checkbox */}
                    <div
                      className="w-5 h-5 bg-bcm-red/15 border border-bcm-red/30 flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)" }}
                    >
                      <CheckCircle2 size={11} className="text-bcm-red" />
                    </div>
                    <span className="text-bcm-silver text-sm">{adv}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-red">
                {t("about.story.btn")}
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right — photo + timeline */}
            <div className="space-y-6">
              {/* Photo */}
              <div
                className="relative overflow-hidden border border-white/5"
                style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }}
              >
                <img
                  src={gestion}
                  alt="Chantier Groupe B.C.M."
                  className="w-full h-72 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bcm-dark/90 to-transparent" />

                {/* Blueprint corners on photo */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-bcm-red/50" />
                <div className="absolute bottom-16 right-3 w-5 h-5 border-b border-r border-white/20" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div
                    className="border-l-4 border-bcm-red pl-4"
                    style={{ borderLeftWidth: "3px" }}
                  >
                    <p className="font-['Barlow_Condensed'] font-bold text-white text-lg uppercase tracking-wide leading-tight">
                      Grand-Montréal, QC
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline — construction schedule */}
              <div
                className="bg-bcm-coal border border-white/5 p-7 relative"
                style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
              >
                {/* Structural top bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-bcm-red to-bcm-red/30" />

                <h3 className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest text-white mb-5 pb-4 border-b border-white/5">
                  {t("about.timeline.title")}
                </h3>
                <div className="space-y-0">
                  {milestones.map(({ year, event }, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="flex flex-col items-center">
                        {/* Diamond marker instead of circle */}
                        <div
                          className="w-3 h-3 bg-bcm-red flex-shrink-0 mt-1 group-hover:scale-125 transition-transform"
                          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                        />
                        {i < milestones.length - 1 && (
                          <div className="w-px flex-1 bg-white/10 my-1" />
                        )}
                      </div>
                      <div className="pb-5 last:pb-0">
                        <span className="font-['Barlow_Condensed'] font-bold text-[10px] tracking-[0.2em] uppercase text-bcm-red block mb-0.5">
                          {year}
                        </span>
                        <span className="text-bcm-silver text-sm">{event}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─────────────────────────────────────────────── */}
      <section className="section-pad relative z-10" style={{ background: "#111" }}>
        {/* Warning stripe */}
        <div className="absolute inset-0 warning-stripe pointer-events-none opacity-40" />

        <div className="container-xl relative z-10">
          <div className="mb-12">
            <span className="label mb-5">{t("about.values.badge")}</span>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[3px] w-16 bg-bcm-red" />
              <div className="h-[3px] w-6 bg-bcm-red/30" />
            </div>
            <h2 className="section-heading">{t("about.values.title")}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {valueItems.map(({ title, desc }, i) => {
              const Icon = valueIcons[i];
              return (
                <div
                  key={i}
                  className="bg-bcm-coal hover:bg-bcm-mid p-8 transition-all duration-300 group relative overflow-hidden rivet-corners"
                  style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)" }}
                >
                  {/* Top red structural bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-bcm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                  {/* Ghost index number */}
                  <div className="absolute top-4 right-4 font-['Barlow_Condensed'] font-black text-white/[0.04] text-5xl leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div
                    className="w-14 h-14 bg-bcm-coal border border-bcm-red/30 flex items-center justify-center mb-5 group-hover:bg-bcm-red/20 group-hover:border-bcm-red/60 transition-all shadow-lg relative overflow-hidden"
                    style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}
                  >
                    <Icon className="w-10 h-10 text-bcm-red" />
                  </div>

                  <h3 className="font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide text-white mb-3 group-hover:text-bcm-red transition-colors">
                    {title}
                  </h3>
                  <p className="text-bcm-silver text-sm leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-bcm-dark relative z-10" style={{ borderTop: "1px solid rgba(200,22,29,0.15)" }}>
        <div className="container-xl text-center relative">
          {/* Blueprint corner marks */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-bcm-red/20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-bcm-red/20" />

          <span className="label justify-center mb-5">{t("about.cta.badge")}</span>
          <h2 className="section-heading mb-4">{t("about.cta.title")}</h2>
          <p className="text-bcm-silver mb-8 max-w-lg mx-auto">{t("about.cta.desc")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-red">
              {t("about.cta.contact")} <ArrowRight size={16} />
            </Link>
            <Link to="/projects" className="btn-ghost-red">
              {t("about.cta.projects")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Award,
  Shield,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";
import gestion from "../assets/projets.jpeg";

import { useLanguage } from "../i18n/LanguageContext";

const valueIcons = [Award, Shield, Clock, Users];

export default function About() {
  const { t, ta } = useLanguage();

  const advantages = ta<string>("about.story.advantages");
  const milestones = ta<{ year: string; event: string }>(
    "about.timeline.milestones",
  );
  const valueItems = ta<{ title: string; desc: string }>("about.values.items");

  return (
    <>
      {/* ─── PAGE HERO ────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="container-xl relative z-10">
          <span className="label mb-5">{t("about.hero.badge")}</span>
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

      {/* ─── STORY ────────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="label mb-5">{t("about.story.badge")}</span>
              <div className="red-bar mb-6" />
              <h2 className="section-heading mb-6">{t("about.story.title")}</h2>
              <p className="text-bcm-silver leading-relaxed mb-5">
                {t("about.story.p1")}
              </p>
              <p className="text-bcm-silver leading-relaxed mb-8">
                {t("about.story.p2")}
              </p>

              <div className="space-y-3 mb-10">
                {advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="text-bcm-red flex-shrink-0 mt-0.5"
                    />
                    <span className="text-bcm-silver text-sm">{adv}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-red">
                {t("about.story.btn")}
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right: photo + timeline */}
            <div className="space-y-6">
              <div className="relative overflow-hidden border border-white/5">
                <img
                  src={gestion}
                  alt="Chantier Groupe B.C.M."
                  className="w-full h-72 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bcm-dark/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="border-l-4 border-bcm-red pl-4">
                    <p className="font-['Barlow_Condensed'] font-bold text-white text-lg uppercase tracking-wide leading-tight">
                      Grand-Montréal, QC
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-bcm-coal border border-white/5 p-7">
                <h3 className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest text-white mb-5 pb-4 border-b border-white/5">
                  {t("about.timeline.title")}
                </h3>
                <div className="space-y-0">
                  {milestones.map(({ year, event }, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-bcm-red rounded-full flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
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

      {/* ─── VALUES ───────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark">
        <div className="container-xl">
          <div className="mb-12">
            <span className="label mb-5">{t("about.values.badge")}</span>
            <div className="red-bar mb-4" />
            <h2 className="section-heading">{t("about.values.title")}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {valueItems.map(({ title, desc }, i) => {
              const Icon = valueIcons[i];
              return (
                <div
                  key={i}
                  className="bg-bcm-dark hover:bg-bcm-mid p-8 transition-all duration-200 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-bcm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                  <div className="w-12 h-12 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center mb-5 group-hover:bg-bcm-red/20 transition-colors">
                    <Icon size={22} className="text-bcm-red" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide text-white mb-3 group-hover:text-bcm-red transition-colors">
                    {title}
                  </h3>
                  <p className="text-bcm-silver text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-bcm-dark border-t border-white/5">
        <div className="container-xl text-center">
          <span className="label justify-center mb-5">
            {t("about.cta.badge")}
          </span>
          <h2 className="section-heading mb-4">{t("about.cta.title")}</h2>
          <p className="text-bcm-silver mb-8 max-w-lg mx-auto">
            {t("about.cta.desc")}
          </p>
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

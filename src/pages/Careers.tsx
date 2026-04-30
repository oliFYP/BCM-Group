import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, CheckCircle2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import career from "../assets/career.jpeg";

export default function Careers() {
  const { t, ta } = useLanguage();

  const perks       = ta<string>("careers.intro.perks");
  const positions   = ta<{ title: string; desc: string }>("careers.positions.items");
  const applySteps  = ta<string>("careers.apply.steps");

  return (
    <>
      {/* ─── PAGE HERO ──────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="absolute inset-0 warning-stripe pointer-events-none opacity-40" />
        <div className="absolute top-24 left-8 w-8 h-8 border-t border-l border-bcm-red/30 pointer-events-none" />

        <div className="container-xl relative z-10">
          <span className="label mb-5">{t("careers.hero.badge")}</span>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[3px] w-16 bg-bcm-red beam-reveal" />
            <div className="h-[3px] w-6 bg-bcm-red/30" />
          </div>
          <h1 className="page-title mb-4">
            {t("careers.hero.title1")}
            <br />
            <span className="text-bcm-red">{t("careers.hero.title2")}</span>
          </h1>
          <p className="text-bcm-silver text-lg max-w-xl leading-relaxed font-light">
            {t("careers.hero.subtitle")}
          </p>
        </div>
      </div>

      {/* ─── INTRO ──────────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark relative">
        <div className="absolute inset-0 blueprint-dots opacity-40 pointer-events-none" />

        <div className="container-xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="label mb-5">{t("careers.intro.badge")}</span>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[3px] w-16 bg-bcm-red" />
                <div className="h-[3px] w-6 bg-bcm-red/30" />
              </div>
              <h2 className="section-heading mb-6">{t("careers.intro.title")}</h2>
              <p className="text-bcm-silver leading-relaxed mb-5">{t("careers.intro.p1")}</p>
              <p className="text-bcm-silver leading-relaxed mb-8">{t("careers.intro.p2")}</p>

              <div className="space-y-3 mb-10">
                {perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 bg-bcm-red/15 border border-bcm-red/30 flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)" }}
                    >
                      <CheckCircle2 size={11} className="text-bcm-red" />
                    </div>
                    <span className="text-bcm-silver text-sm">{perk}</span>
                  </div>
                ))}
              </div>

              <a href="mailto:info@groupe-bcm.com" className="btn-red">
                {t("careers.intro.btn")}
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Right — image */}
            <div
              className="relative overflow-hidden border border-white/5"
              style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)" }}
            >
              <img
                src={career}
                alt="Équipe Groupe B.C.M. sur chantier"
                className="w-full h-72 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bcm-dark/90 to-transparent" />
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-bcm-red/50" />
              <div className="absolute bottom-16 right-3 w-5 h-5 border-b border-r border-white/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="border-l-[3px] border-bcm-red pl-4">
                  <p className="font-['Barlow_Condensed'] font-bold text-white text-lg uppercase tracking-wide leading-tight">
                    Grand-Montréal, QC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── POSITIONS ──────────────────────────────────────────── */}
      <section className="section-pad relative" style={{ background: "#111" }}>
        <div className="absolute inset-0 warning-stripe pointer-events-none opacity-30" />

        <div className="container-xl relative z-10">
          <div className="mb-12">
            <span className="label mb-5">{t("careers.positions.badge")}</span>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[3px] w-16 bg-bcm-red" />
              <div className="h-[3px] w-6 bg-bcm-red/30" />
            </div>
            <h2 className="section-heading">{t("careers.positions.title")}</h2>
          </div>

          <div className="border-t border-white/[0.05]">
            {positions.map(({ title, desc }, i) => (
              <div
                key={i}
                className="group grid md:grid-cols-12 gap-6 py-7 border-b border-white/[0.05] items-center relative overflow-hidden transition-all duration-300"
              >
                {/* Hover left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-bcm-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                {/* Hover fill */}
                <div className="absolute inset-0 bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity" />

                <span className="md:col-span-1 font-['Barlow_Condensed'] text-xs tracking-widest text-white/15 pl-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="md:col-span-4 font-['Barlow_Condensed'] font-bold text-xl uppercase tracking-wide text-white group-hover:text-bcm-red transition-colors leading-snug relative z-10">
                  {title}
                </h3>
                <p className="md:col-span-5 text-bcm-silver text-sm leading-relaxed relative z-10">
                  {desc}
                </p>
                <div className="md:col-span-2 flex justify-end pr-4">
                  <a
                    href="mailto:info@groupe-bcm.com"
                    className="inline-flex items-center gap-2 text-bcm-red text-xs font-['Barlow_Condensed'] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all"
                  >
                    {t("careers.positions.apply")}
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark relative">
        <div className="absolute inset-0 blueprint-dots opacity-40 pointer-events-none" />

        <div className="container-xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="label mb-5">{t("careers.contact.badge")}</span>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[3px] w-16 bg-bcm-red" />
                <div className="h-[3px] w-6 bg-bcm-red/30" />
              </div>
              <h2 className="section-heading mb-6">{t("careers.contact.title")}</h2>
              <p className="text-bcm-silver leading-relaxed mb-8">{t("careers.contact.desc")}</p>

              <div className="space-y-3">
                {[
                  { href: "mailto:info@groupe-bcm.com", Icon: Mail, label: t("careers.contact.emailLabel"), text: "info@groupe-bcm.com" },
                  { href: "tel:450-741-1351",           Icon: Phone, label: t("careers.contact.phoneLabel"), text: "450-741-1351" },
                ].map(({ href, Icon, label, text }) => (
                  <a
                    key={href}
                    href={href}
                    className="group flex items-center gap-4 p-5 border border-white/5 hover:border-bcm-red/30 bg-bcm-coal transition-all card-steel-hover"
                    style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}
                  >
                    <div
                      className="w-11 h-11 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-bcm-red/20 transition-colors"
                      style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)" }}
                    >
                      <Icon size={17} className="text-bcm-red" />
                    </div>
                    <div>
                      <p className="font-['Barlow_Condensed'] text-[10px] tracking-[0.2em] uppercase text-white/30 mb-0.5">
                        {label}
                      </p>
                      <p className="text-white text-sm font-medium">{text}</p>
                    </div>
                    <ArrowRight size={14} className="text-white/15 group-hover:text-bcm-red ml-auto transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — application card */}
            <div
              className="bg-bcm-coal border border-white/5 p-8 relative"
              style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-bcm-red to-bcm-red/30" />

              <h3 className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest text-white mb-5 pb-4 border-b border-white/5">
                {t("careers.apply.title")}
              </h3>
              <p className="text-bcm-silver text-sm leading-relaxed mb-8">
                {t("careers.apply.desc")}{" "}
                <a href="mailto:info@groupe-bcm.com" className="text-white hover:text-bcm-red underline underline-offset-2 transition-colors">
                  info@groupe-bcm.com
                </a>{" "}
                {t("careers.apply.descEnd")}
              </p>

              <div className="space-y-4 mb-8">
                {applySteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      className="w-7 h-7 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center flex-shrink-0"
                      style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)" }}
                    >
                      <span className="font-['Barlow_Condensed'] font-bold text-bcm-red text-xs">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-bcm-silver text-sm leading-relaxed mt-0.5">{step}</span>
                  </div>
                ))}
              </div>

              <a href="mailto:info@groupe-bcm.com" className="btn-red w-full justify-center">
                {t("careers.apply.btn")}
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM LINK ────────────────────────────────────────── */}
      <section className="py-20 bg-bcm-dark relative" style={{ borderTop: "1px solid rgba(200,22,29,0.15)" }}>
        <div className="container-xl text-center relative">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-bcm-red/20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-bcm-red/20" />

          <span className="label justify-center mb-5">{t("careers.bottom.badge")}</span>
          <h2 className="section-heading mb-4">{t("careers.bottom.title")}</h2>
          <p className="text-bcm-silver mb-8 max-w-lg mx-auto">{t("careers.bottom.desc")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-red">
              {t("careers.bottom.contactBtn")} <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-ghost-red">
              {t("careers.bottom.aboutBtn")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

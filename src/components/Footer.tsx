import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, ArrowRight } from "lucide-react";
import bcmLogo from "../assets/BCM_New.png";
import { useLanguage } from "../i18n/LanguageContext";

const companyRoutes = ["/about", "/services", "/projects", "/about", "/contact"];

export default function Footer() {
  const year = new Date().getFullYear();
  const { t, ta } = useLanguage();

  const serviceLinks    = ta<string>("footer.serviceLinks");
  const companyLinks    = ta<string>("footer.companyLinks");
  const certifications  = ta<string>("footer.certifications");

  return (
    <footer className="bg-[#0e0e0e]" style={{ borderTop: "1px solid rgba(200,22,29,0.2)" }}>

      {/* ── CTA strip — warning stripe ───────────────────────── */}
      <div className="relative overflow-hidden bg-bcm-red">
        {/* Warning stripes march */}
        <div className="absolute inset-0 warning-stripe-march opacity-60 pointer-events-none" />

        {/* Blueprint corners */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/20" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-white/20" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-white/20" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/20" />

        {/* Large ghost text */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 font-['Barlow_Condensed'] font-black text-white/[0.05] text-8xl leading-none pointer-events-none select-none">
          BCM
        </div>

        <div className="container-xl py-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-['Barlow_Condensed'] font-black text-2xl md:text-3xl uppercase text-white leading-tight">
              {t("footer.cta.title")}
            </p>
            <p className="text-white/70 text-sm mt-1">{t("footer.cta.subtitle")}</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link to="/contact" className="btn-ghost">
              {t("footer.cta.btn")} <ArrowRight size={14} />
            </Link>
            <a href="tel:450-741-1351" className="btn-ghost">
              <Phone size={13} />
              450-741-1351
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer ──────────────────────────────────────── */}
      <div className="relative">
        {/* Subtle blueprint dots */}
        <div className="absolute inset-0 blueprint-dots opacity-30 pointer-events-none" />

        {/* Structural left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-bcm-red/40 via-bcm-red/20 to-transparent" />

        <div className="container-xl py-16 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

            {/* Brand */}
            <div className="lg:col-span-4">
              <img src={bcmLogo} alt="Groupe B.C.M." className="h-14 w-auto mb-5" />
              <p className="text-bcm-silver text-sm leading-relaxed mb-6 max-w-xs">
                {t("footer.brand.desc")}
              </p>
              <div className="space-y-3">
                {[
                  { Icon: MapPin, text: t("footer.brand.location"), href: null },
                  { Icon: Phone, text: "450-741-1351",              href: "tel:450-741-1351" },
                  { Icon: Mail,  text: "info@groupe-bcm.com",       href: "mailto:info@groupe-bcm.com" },
                ].map(({ Icon, text, href }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={11} className="text-bcm-red" />
                    </div>
                    {href ? (
                      <a href={href} className="text-bcm-silver hover:text-white text-xs leading-relaxed transition-colors">
                        {text}
                      </a>
                    ) : (
                      <span className="text-bcm-silver text-xs leading-relaxed">{text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h4
                className="font-['Barlow_Condensed'] font-bold text-[10px] tracking-[0.22em] uppercase text-white mb-5 pb-3"
                style={{ borderBottom: "1px solid rgba(200,22,29,0.2)" }}
              >
                {t("footer.sections.services")}
              </h4>
              <ul className="space-y-2.5">
                {serviceLinks.map((link, i) => (
                  <li key={i}>
                    <Link to="/services" className="text-bcm-silver hover:text-white text-xs transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-bcm-red group-hover:w-4 transition-all duration-200 flex-shrink-0" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h4
                className="font-['Barlow_Condensed'] font-bold text-[10px] tracking-[0.22em] uppercase text-white mb-5 pb-3"
                style={{ borderBottom: "1px solid rgba(200,22,29,0.2)" }}
              >
                {t("footer.sections.company")}
              </h4>
              <ul className="space-y-2.5">
                {companyLinks.map((label, i) => (
                  <li key={i}>
                    <Link to={companyRoutes[i]} className="text-bcm-silver hover:text-white text-xs transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-bcm-red group-hover:w-4 transition-all duration-200 flex-shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-3">
              <h4
                className="font-['Barlow_Condensed'] font-bold text-[10px] tracking-[0.22em] uppercase text-white mb-5 pb-3"
                style={{ borderBottom: "1px solid rgba(200,22,29,0.2)" }}
              >
                {t("footer.sections.certifications")}
              </h4>
              <div className="space-y-2">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 bg-bcm-red/20 border border-bcm-red/40 flex-shrink-0"
                      style={{ clipPath: "polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)" }}
                    />
                    <span className="text-bcm-silver text-xs">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <p className="font-['Barlow_Condensed'] text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-3">
                  {t("footer.sections.follow")}
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://www.facebook.com/groupebcm604"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 bg-bcm-steel/30 hover:bg-bcm-red border border-white/5 hover:border-bcm-red flex items-center justify-center transition-all duration-200"
                    style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)" }}
                  >
                    <Facebook size={14} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(200,22,29,0.15)" }}
          >
            {/* Left measurement marks */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-px h-3 bg-bcm-red/40" />
                <div className="w-px h-2 bg-bcm-red/20" />
                <div className="w-px h-3 bg-bcm-red/40" />
              </div>
              <p className="text-bcm-muted text-[11px]">
                © {year} Groupe BCM Inc. {t("footer.legal.rights")}
              </p>
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-bcm-muted hover:text-bcm-silver text-[11px] transition-colors">
                {t("footer.legal.privacy")}
              </Link>
              <a href="#" className="text-bcm-muted hover:text-bcm-silver text-[11px] transition-colors">
                {t("footer.legal.terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, ArrowRight } from "lucide-react";
import bcmLogo from "../assets/BCM_New.png";

const serviceLinks = [
  "Gestion de projet",
  "Pose de gypse",
  "Charpente",
  "Plâtre",
  "Colombage métallique",
  "Isolation & Insonorisation",
  "Plafonds suspendus",
  "Location de main-d'œuvre",
];

const companyLinks = [
  { label: "À Propos", to: "/about" },
  { label: "Nos Services", to: "/services" },
  { label: "Nos Projets", to: "/projects" },
  { label: "Carrières", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bcm-coal border-t border-white/5">
      {/* CTA strip */}
      <div className="bg-bcm-red">
        <div className="container-xl py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-['Barlow_Condensed'] font-black text-2xl md:text-3xl uppercase text-white leading-tight">
              Prêt à démarrer votre projet?
            </p>
            <p className="text-white/70 text-sm mt-1">
              Contactez-nous pour une soumission gratuite et sans engagement.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link to="/contact" className="btn-ghost">
              Obtenir une soumission <ArrowRight size={14} />
            </Link>
            <a href="tel:450-741-1351" className="btn-ghost">
              <Phone size={13} />
              450-741-1351
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-xl py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <img
              src={bcmLogo}
              alt="Groupe B.C.M."
              className="h-14 w-auto mb-5"
            />
            <p className="text-bcm-silver text-sm leading-relaxed mb-6 max-w-xs">
              Entrepreneur général spécialisé en systèmes intérieurs depuis plus
              de 10 ans. Excellence, fiabilité et innovation à chaque projet.
            </p>
            <div className="space-y-3">
              {[
                {
                  Icon: MapPin,
                  text: "Rive-Sud de Montréal",
                  href: null,
                },
                { Icon: Phone, text: "450-741-1351", href: "tel:450-741-1351" },
                {
                  Icon: Mail,
                  text: "info@groupe-bcm.com",
                  href: "mailto:info@groupe-bcm.com",
                },
              ].map(({ Icon, text, href }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon
                    size={14}
                    className="text-bcm-red flex-shrink-0 mt-0.5"
                  />
                  {href ? (
                    <a
                      href={href}
                      className="text-bcm-silver hover:text-white text-xs leading-relaxed transition-colors"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-bcm-silver text-xs leading-relaxed">
                      {text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-['Barlow_Condensed'] font-bold text-[10px] tracking-[0.22em] uppercase text-white mb-5 pb-3 border-b border-white/5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <Link
                    to="/services"
                    className="text-bcm-silver hover:text-white text-xs transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-bcm-red group-hover:w-4 transition-all duration-200 flex-shrink-0" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-['Barlow_Condensed'] font-bold text-[10px] tracking-[0.22em] uppercase text-white mb-5 pb-3 border-b border-white/5">
              Entreprise
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-bcm-silver hover:text-white text-xs transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-bcm-red group-hover:w-4 transition-all duration-200 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications / trust */}
          <div className="lg:col-span-3">
            <h4 className="font-['Barlow_Condensed'] font-bold text-[10px] tracking-[0.22em] uppercase text-white mb-5 pb-3 border-b border-white/5">
              Certifications
            </h4>
            <div className="space-y-2">
              {["Licence RBQ", "CCQ Certifié", "SST Conforme"].map((cert) => (
                <div key={cert} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-bcm-red rounded-full flex-shrink-0" />
                  <span className="text-bcm-silver text-xs">{cert}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="font-['Barlow_Condensed'] text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-3">
                Suivez-nous
              </p>
              <div className="flex gap-2">
                <a
                  href="https://www.facebook.com/groupebcm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 bg-bcm-steel/50 hover:bg-bcm-red border border-white/5 hover:border-bcm-red flex items-center justify-center transition-all duration-200"
                >
                  <Facebook size={14} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-bcm-muted text-[11px]">
            © {year} Groupe BCM Inc. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Politique de confidentialité", "Conditions d'utilisation"].map(
              (t) => (
                <a
                  key={t}
                  href="#"
                  className="text-bcm-muted hover:text-bcm-silver text-[11px] transition-colors"
                >
                  {t}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

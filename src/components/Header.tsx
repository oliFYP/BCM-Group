import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import bcmLogo from "../assets/BCM_New.png";
import { useLanguage } from "../i18n/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { to: "/",         label: t("nav.home"),     end: true  },
    { to: "/services", label: t("nav.services"), end: false },
    { to: "/projects", label: t("nav.projects"), end: false },
    { to: "/about",    label: t("nav.about"),    end: false },
    { to: "/careers",  label: t("nav.careers"),  end: false },
    { to: "/contact",  label: t("nav.contact"),  end: false },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#080808]/97 backdrop-blur-xl shadow-[0_1px_0_rgba(200,22,29,0.3),0_2px_0_rgba(255,255,255,0.03)]"
            : "bg-transparent"
        }`}
      >
        {/* Top structural accent bar — ruler ticks */}
        {scrolled && (
          <div className="ruler-top absolute top-0 left-0 right-0 h-[3px]" />
        )}

        <div className="container-xl">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link to="/" onClick={() => setMenuOpen(false)} className="flex-shrink-0 group">
              <img src={bcmLogo} alt="Groupe B.C.M." className="h-9 w-auto group-hover:opacity-90 transition-opacity" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Navigation principale">
              {navLinks.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-[12px] font-['Barlow_Condensed'] font-bold tracking-[0.08em] uppercase transition-all duration-200 group ${
                      isActive
                        ? "text-white"
                        : "text-white/45 hover:text-white/85"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {/* Active indicator — left structural bar */}
                      {isActive && (
                        <>
                          <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-bcm-red" />
                          <span className="absolute bottom-0 left-3 w-[2px] h-2 bg-bcm-red opacity-60" />
                          <span className="absolute bottom-0 right-3 w-[2px] h-2 bg-bcm-red opacity-40" />
                        </>
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* Language toggle */}
              <button
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                className="ml-4 text-[10px] font-['Barlow_Condensed'] font-bold tracking-[0.2em] uppercase text-white/35 hover:text-white border border-white/8 hover:border-white/25 px-3 py-1.5 transition-all"
                style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)" }}
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>

              {/* CTA button */}
              <Link
                to="/contact"
                className="ml-3 inline-flex items-center gap-2 bg-bcm-red hover:bg-[#9e1015] text-white text-[11px] font-['Barlow_Condensed'] font-bold tracking-[0.12em] uppercase px-5 py-2.5 transition-all duration-200 relative overflow-hidden"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}
              >
                <Phone size={11} />
                {t("nav.cta")}
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden text-white/70 hover:text-white p-2 -mr-2 transition-colors"
              aria-label={menuOpen ? "Fermer" : "Menu"}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile drawer — steel panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[#0e0e0e]
                    flex flex-col transition-transform duration-300 ease-out md:hidden ${
                      menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
        style={{ borderLeft: "1px solid rgba(200,22,29,0.2)" }}
      >
        {/* Left structural accent */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-bcm-red to-transparent opacity-60" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.05]">
          <img src={bcmLogo} alt="Groupe B.C.M." className="h-8 w-auto" />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white/40 hover:text-white p-1 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-3 py-6 flex flex-col gap-0.5 overflow-y-auto">
          {navLinks.map(({ to, label, end }, i) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `relative px-4 py-3.5 text-[13px] font-['Barlow_Condensed'] font-bold uppercase tracking-[0.08em] transition-all duration-150 ${
                  isActive
                    ? "text-white bg-white/[0.04]"
                    : "text-white/45 hover:text-white hover:bg-white/[0.03]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="mr-3 text-[10px] text-white/15 font-['DM_Mono',monospace]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {label}
                  {isActive && (
                    <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-bcm-red" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="px-4 pb-8 pt-4 border-t border-white/[0.05] space-y-3">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="w-full text-[10px] font-['Barlow_Condensed'] font-bold tracking-[0.2em] uppercase text-white/35 hover:text-white border border-white/8 hover:border-white/25 py-2.5 transition-all"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}
          >
            {lang === "fr" ? "English" : "Français"}
          </button>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-bcm-red hover:bg-[#9e1015] text-white text-[12px] font-['Barlow_Condensed'] font-bold uppercase tracking-[0.12em] py-3.5 transition-colors"
            style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)" }}
          >
            {t("nav.getQuote")}
          </Link>
          <a
            href="tel:450-741-1351"
            className="flex items-center justify-center gap-2 text-white/35 hover:text-white/70 text-[12px] transition-colors"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <Phone size={12} className="text-bcm-red" />
            450-741-1351
          </a>
        </div>
      </div>
    </>
  );
}

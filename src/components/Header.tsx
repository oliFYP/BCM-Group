import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import bcmLogo from "../assets/BCM_New.png";

const navLinks = [
  { to: "/", label: "Accueil", end: true },
  { to: "/services", label: "Services", end: false },
  { to: "/projects", label: "Projets", end: false },
  { to: "/about", label: "À Propos", end: false },
  { to: "/careers", label: "Carrières", end: false },
  { to: "/contact", label: "Contact", end: false },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="flex-shrink-0"
            >
              <img src={bcmLogo} alt="Groupe B.C.M." className="h-9 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Navigation principale"
            >
              {navLinks.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-white/50 hover:text-white/80"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <span className="absolute bottom-0 left-4 right-4 h-px bg-[#c8161d]" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              <Link
                to="/contact"
                className="ml-6 inline-flex items-center gap-2 bg-[#c8161d] hover:bg-[#9e1015] text-white text-[12px] font-medium tracking-wide px-5 py-2.5 transition-colors duration-200"
              >
                <Phone size={12} />
                Soumission gratuite
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
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-[#111111] border-l border-white/[0.06]
                    flex flex-col transition-transform duration-300 ease-out md:hidden ${
                      menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
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
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3.5 text-[14px] font-medium rounded-sm transition-all duration-150 ${
                  isActive
                    ? "text-white bg-white/[0.06]"
                    : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="px-4 pb-8 pt-4 border-t border-white/[0.06] space-y-3">
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#c8161d] hover:bg-[#9e1015] text-white text-[13px] font-medium py-3.5 transition-colors"
          >
            Obtenir une soumission
          </Link>
          <a
            href="tel:450-741-1351"
            className="flex items-center justify-center gap-2 text-white/40 hover:text-white/70 text-[12px] transition-colors"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <Phone size={12} className="text-[#c8161d]" />
            450-741-1351
          </a>
        </div>
      </div>
    </>
  );
}

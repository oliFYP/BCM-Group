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

const stats = [
  { val: "10+", lbl: "Ans d'expérience" },
  { val: "500+", lbl: "Projets réalisés" },
  { val: "100%", lbl: "Satisfaction client" },
  { val: "20+", lbl: "Experts qualifiés" },
];
{
  /* Add the other services */
}
const services = [
  {
    num: "01",
    title: "Gestion de projet",
    desc: "Planification, coordination et suivi rigoureux de vos chantiers du début à la fin.",
  },
  {
    num: "02",
    title: "Pose de gypse & Plâtre",
    desc: "Installation professionnelle de gypse, plâtre et finitions intérieures soignées.",
  },
  {
    num: "03",
    title: "Colombage métallique",
    desc: "Structures métalliques pour tous types de projets commerciaux et industriels.",
  },
  {
    num: "04",
    title: "Location de main-d'œuvre",
    desc: "Personnel certifié CCQ disponible pour renforcer vos équipes selon vos besoins.",
  },
];

const values = [
  {
    Icon: Award,
    title: "Excellence",
    desc: "Standards irréprochables à chaque étape.",
  },
  {
    Icon: Shield,
    title: "Fiabilité",
    desc: "Un partenaire solide sur qui compter.",
  },
  {
    Icon: Clock,
    title: "Ponctualité",
    desc: "Délais et budgets toujours respectés.",
  },
];

const logos = [
  { src: logoLayer1, alt: "Logo partenaire" },
  { src: logoBrosse, alt: "Brosse" },
  { src: logoKirmina, alt: "Kirmina" },
  { src: logoResidence, alt: "Résidence" },
  { src: logoStjean, alt: "Saint-Jean" },
];

export default function Home() {
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
          {/* remove hand and wires */}
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
            <span className="label mb-6">
              Entrepreneur Général — Rive-Sud de Montréal
            </span>

            <h1 className="page-title mb-6">
              Construire
              <br />
              <span className="text-bcm-red">l'Excellence</span>
              <br />
              depuis 10&nbsp;ans
            </h1>

            <p className="text-bcm-silver text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-light">
              Spécialistes en systèmes intérieurs et construction générale.
              Résidentiel, commercial et industriel — de A à Z, dans les délais
              et selon votre budget.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-red">
                Découvrir nos services
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                Obtenir une soumission
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 mb-6 md:mb-0">
            {stats.map(({ val, lbl }) => (
              <div
                key={lbl}
                className="bg-bcm-dark hover:bg-bcm-coal px-6 py-8 text-center transition-colors group"
              >
                <div
                  className="font-['Barlow_Condensed'] font-black text-4xl md:text-5xl text-bcm-red leading-none mb-1.5
                                group-hover:scale-105 transition-transform origin-bottom"
                >
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
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bcm-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bcm-dark to-transparent z-10 pointer-events-none" />

          <div className="flex ticker-track">
            {/* Duplicated for seamless infinite loop */}
            {[...logos, ...logos].map(({ src, alt }, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center px-12 py-5"
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-7 w-28 object-contain  hover:opacity-60 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint — moved up to clear the ticker */}
        <a
          href="#intro"
          className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bcm-muted hover:text-bcm-silver transition-colors z-20"
        >
          <span className="font-['Barlow_Condensed'] text-[9px] tracking-[0.4em] uppercase">
            Défiler
          </span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </section>

      {/* ─── INTRO STRIP ─────────────────────────────────────────── */}
      <section id="intro" className="bg-bcm-coal border-y border-white/5 py-16">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label mb-4">Qui sommes-nous</span>
              <h2 className="section-heading mb-5">
                Groupe B.C.M.
                <br />
                en quelques mots
              </h2>
              <p className="text-bcm-silver leading-relaxed mb-6">
                Établis sur la Rive-Sud de Montréal, à Saint-Jean-sur-Richelieu,
                nous planifions, gérons et exécutons vos projets de construction
                de A à Z. Notre équipe de spécialistes combine plus de 10 ans
                d'expertise avec une approche résolument moderne et innovante.
              </p>
              <Link to="/about" className="btn-ghost-red">
                En savoir plus sur BCM
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
                  Ce que nous faisons
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl section-heading text-white"
                style={{ letterSpacing: "-0.02em" }}
              >
                Nos Services
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden md:inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-[12px] transition-colors"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Voir tout
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Service list rows */}
          <div className="divide-y divide-white/[0.06]">
            {services.map(({ num, title, desc }) => (
              <Link
                key={num}
                to="/services"
                className="group flex items-center justify-between py-7 hover:px-4 transition-all duration-300"
              >
                <div className="flex items-center gap-8">
                  <span
                    className="text-[11px] text-white/20 w-8 flex-shrink-0"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {num}
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
              <span className="label mb-4">Portfolio</span>
              <h2 className="section-heading">Réalisations récentes</h2>
            </div>
            <Link to="/projects" className="btn-ghost-red flex-shrink-0">
              Voir tous les projets
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                img: "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Centre Commercial Promenade",
                cat: "Commercial",
                loc: "Saint-Jean-sur-Richelieu",
              },
              {
                img: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Usine de Production",
                cat: "Industriel",
                loc: "Longueuil",
              },
              {
                img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Rénovation Hôtel Prestige",
                cat: "Rénovation",
                loc: "Québec",
              },
            ].map(({ img, title, cat, loc }) => (
              <Link
                key={title}
                to="/projects"
                className="group relative overflow-hidden border border-white/5 hover:border-bcm-red/30 transition-colors block"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bcm-dark via-bcm-dark/30 to-transparent" />
                  <span className="absolute top-4 left-4 bg-bcm-red font-['Barlow_Condensed'] font-bold text-[10px] tracking-widest uppercase text-white px-3 py-1">
                    {cat}
                  </span>
                </div>
                <div className="bg-bcm-coal p-5">
                  <h3 className="font-['Barlow_Condensed'] font-bold text-base uppercase tracking-wide text-white group-hover:text-bcm-red transition-colors leading-tight mb-1">
                    {title}
                  </h3>
                  <p className="text-bcm-muted text-[11px] font-['Barlow_Condensed'] tracking-wider">
                    {loc}
                  </p>
                </div>
                <div className="h-[2px] w-0 bg-bcm-red group-hover:w-full transition-all duration-500" />
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
              Parlons de votre projet
            </h2>
            <p className="text-white/75 text-base">
              Soumission gratuite · Réponse en 24h · Saint-Jean-sur-Richelieu
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link to="/contact" className="btn-ghost">
              Nous écrire
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

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Cat = "all" | "commercial" | "industrial" | "renovation";

const filters: { id: Cat | "all"; label: string }[] = [
  { id: "all", label: "Tous les projets" },
  { id: "commercial", label: "Commercial" },
  { id: "industrial", label: "Industriel" },
  { id: "renovation", label: "Rénovation" },
];

export default function Projects() {
  const [active, setActive] = useState<Cat | "all">("all");

  return (
    <>
      {/* ─── PAGE HERO ───────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="container-xl relative z-10">
          <span className="label mb-5">Notre portfolio</span>
          <h1 className="page-title mb-4">
            Nos
            <br />
            <span className="text-bcm-red">Réalisations</span>
          </h1>
          <p className="text-bcm-silver text-lg max-w-xl leading-relaxed font-light">
            Plus de 500 projets livrés avec excellence sur la Rive-Sud et à
            travers le Québec.
          </p>
        </div>
      </div>

      {/* ─── GALLERY ─────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark">
        <div className="container-xl">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id as Cat | "all")}
                className={`font-display font-bold text-[10px] tracking-[0.22em] uppercase px-5 py-2.5 border transition-all duration-200 ${
                  active === id
                    ? "bg-bcm-red border-bcm-red text-white"
                    : "bg-transparent border-bcm-steel text-bcm-silver hover:border-bcm-red/50 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Coming soon */}
          <div className="border border-white/5 bg-bcm-coal py-24 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center mb-6">
              <span className="font-['Barlow_Condensed'] font-black text-bcm-red text-2xl">
                ?
              </span>
            </div>
            <h3 className="font-['Barlow_Condensed'] font-bold text-2xl uppercase tracking-widest text-white mb-3">
              À venir...
            </h3>
            <p className="text-bcm-silver text-sm max-w-sm leading-relaxed">
              Notre portfolio de réalisations sera bientôt disponible. Revenez
              nous voir prochainement.
            </p>
          </div>
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-coal border-t border-white/5">
        <div className="container-xl">
          <div className="mb-14">
            <span className="label mb-5">Notre bilan</span>
            <div className="red-bar mb-5" />
            <h2 className="section-heading">Des chiffres qui parlent</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {[
              { val: "500+", lbl: "Projets complétés" },
              { val: "$20M+", lbl: "Valeur de construction" },
              { val: "12 ans", lbl: "D'expertise" },
              { val: "100%", lbl: "Taux de conformité" },
            ].map(({ val, lbl }) => (
              <div
                key={lbl}
                className="bg-bcm-coal hover:bg-bcm-mid px-8 py-10 text-center transition-colors group"
              >
                <span className="font-display font-black text-4xl md:text-5xl text-bcm-red leading-none block mb-2 group-hover:scale-105 transition-transform origin-bottom">
                  {val}
                </span>
                <span className="text-bcm-silver text-[10px] font-display font-semibold tracking-[0.2em] uppercase">
                  {lbl}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section className="py-20 bg-bcm-dark border-t border-white/5">
        <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="section-heading mb-2">
              Votre projet pourrait être ici
            </h2>
            <p className="text-bcm-silver">
              Parlons de ce que nous pouvons accomplir ensemble.
            </p>
          </div>
          <Link to="/contact" className="btn-red flex-shrink-0">
            Lancer mon projet
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

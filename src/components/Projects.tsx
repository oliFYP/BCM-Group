import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

type Cat = "all" | "commercial" | "industrial" | "renovation";

interface Project {
  id: number;
  title: string;
  category: Cat;
  location: string;
  image: string;
  description: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Centre Commercial Promenade",
    category: "commercial",
    location: "Saint-Jean-sur-Richelieu",
    image:
      "https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Construction complète d'un centre commercial moderne de 12 000 m².",
    year: "2023",
  },
  {
    id: 2,
    title: "Complexe de Bureaux Tech Hub",
    category: "commercial",
    location: "Montréal",
    image:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Aménagement de 3 étages de bureaux contemporains avec systèmes CVAC intégrés.",
    year: "2023",
  },
  {
    id: 3,
    title: "Usine de Production Automatisée",
    category: "industrial",
    location: "Longueuil",
    image:
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Installation industrielle de pointe avec systèmes mécaniques et logistiques intégrés.",
    year: "2022",
  },
  {
    id: 4,
    title: "Rénovation Hôtel Prestige",
    category: "renovation",
    location: "Québec",
    image:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Rénovation complète de 80 chambres et espaces communs sans interruption des activités.",
    year: "2022",
  },
  {
    id: 5,
    title: "Entrepôt Logistique Brossard",
    category: "industrial",
    location: "Brossard",
    image:
      "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Infrastructure logistique de 8 500 m² avec quais de chargement et mezzanines acier.",
    year: "2021",
  },
  {
    id: 6,
    title: "Expansion Retail Laval",
    category: "commercial",
    location: "Laval",
    image:
      "https://images.pexels.com/photos/3851254/pexels-photo-3851254.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Agrandissement et réaménagement complet d'un espace commercial existant.",
    year: "2021",
  },
  {
    id: 7,
    title: "Rénovation Clinique Médicale",
    category: "renovation",
    location: "Brossard",
    image:
      "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Transformation complète d'une clinique médicale — cloisons, CVAC et électricité.",
    year: "2020",
  },
  {
    id: 8,
    title: "Complexe Industriel SJ",
    category: "industrial",
    location: "Saint-Jean-sur-Richelieu",
    image:
      "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Nouveau bâtiment industriel de 15 000 m² avec bureaux intégrés et systèmes mécaniques.",
    year: "2020",
  },
  {
    id: 9,
    title: "Bureaux Corporatifs Rive-Sud",
    category: "commercial",
    location: "Longueuil",
    image:
      "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Construction et aménagement de 2 000 m² de bureaux corporatifs haut de gamme.",
    year: "2019",
  },
];

const filters: { id: Cat | "all"; label: string }[] = [
  { id: "all", label: "Tous les projets" },
  { id: "commercial", label: "Commercial" },
  { id: "industrial", label: "Industriel" },
  { id: "renovation", label: "Rénovation" },
];

const catLabel: Record<string, string> = {
  commercial: "Commercial",
  industrial: "Industriel",
  renovation: "Rénovation",
};

export default function Projects() {
  const [active, setActive] = useState<Cat | "all">("all");
  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

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
                className={`font-['Barlow_Condensed'] font-bold text-[10px] tracking-[0.22em] uppercase px-5 py-2.5 border transition-all duration-200 ${
                  active === id
                    ? "bg-bcm-red border-bcm-red text-white"
                    : "bg-transparent border-bcm-steel text-bcm-silver hover:border-bcm-red/50 hover:text-white"
                }`}
              >
                {label}
                {active === id && (
                  <span className="ml-2 bg-white/20 text-white text-[9px] px-1.5 py-0.5 rounded-sm">
                    {filtered.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(
              ({ id, title, category, location, image, description, year }) => (
                <div
                  key={id}
                  className="group relative bg-bcm-coal border border-white/5 hover:border-bcm-red/30 overflow-hidden transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bcm-coal via-bcm-coal/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="font-['Barlow_Condensed'] font-bold text-[10px] tracking-[0.18em] uppercase bg-bcm-red text-white px-2.5 py-1">
                        {catLabel[category]}
                      </span>
                      <span className="font-['Barlow_Condensed'] font-semibold text-[10px] tracking-wider text-bcm-silver/80 bg-bcm-dark/70 px-2 py-1">
                        {year}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="font-['Barlow_Condensed'] font-bold text-base uppercase tracking-wide text-white group-hover:text-bcm-red transition-colors leading-tight mb-2">
                      {title}
                    </h3>
                    <div className="flex items-center gap-1.5 mb-3">
                      <MapPin
                        size={11}
                        className="text-bcm-red flex-shrink-0"
                      />
                      <span className="text-bcm-muted text-[11px] font-['Barlow_Condensed'] tracking-wider">
                        {location}
                      </span>
                    </div>
                    <p className="text-bcm-silver text-xs leading-relaxed flex-1">
                      {description}
                    </p>
                  </div>

                  {/* Bottom red bar */}
                  <div className="h-[2px] w-0 bg-bcm-red group-hover:w-full transition-all duration-500 flex-shrink-0" />
                </div>
              ),
            )}
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
              { val: "$2B+", lbl: "Valeur de construction" },
              { val: "12 ans", lbl: "D'expertise" },
              { val: "100%", lbl: "Taux de conformité" },
            ].map(({ val, lbl }) => (
              <div
                key={lbl}
                className="bg-bcm-coal hover:bg-bcm-mid px-8 py-10 text-center transition-colors group"
              >
                <span className="font-['Barlow_Condensed'] font-black text-4xl md:text-5xl text-bcm-red leading-none block mb-2 group-hover:scale-105 transition-transform origin-bottom">
                  {val}
                </span>
                <span className="text-bcm-silver text-[10px] font-['Barlow_Condensed'] font-semibold tracking-[0.2em] uppercase">
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

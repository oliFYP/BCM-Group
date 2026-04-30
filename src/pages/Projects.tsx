import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import imgVieuxDuluth from "../assets/projects/vieuxduluth.jpg";
import imgHup         from "../assets/projects/hup.jpg";
import imgAab         from "../assets/projects/abb.jpg";
import imgKubota1     from "../assets/projects/kubota1.jpg";
import imgKubota2     from "../assets/projects/kubota2.jpg";
import { useLanguage } from "../i18n/LanguageContext";

type Cat = "all" | "commercial" | "industrial" | "renovation";

const projects: { name: string; location: string; cat: Cat; images: string[] }[] = [
  { name: "Vieux Duluth", location: "Saint-Basile",          cat: "renovation", images: [imgVieuxDuluth] },
  { name: "HUP",          location: "Delson",                cat: "renovation", images: [imgHup] },
  { name: "AAB",          location: "Saint-Jean-Iberville",  cat: "industrial", images: [imgAab] },
  { name: "Kubota",       location: "Saint-Jean",            cat: "commercial", images: [imgKubota1, imgKubota2] },
];

function ProjectCard({
  name, location, images, catLabel,
}: { name: string; location: string; cat: Cat; images: string[]; catLabel: string }) {
  const [idx, setIdx] = useState(0);
  const multi = images.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % images.length);
  };

  return (
    <div
      className="group relative overflow-hidden bg-bcm-coal cursor-pointer"
      style={{ clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)" }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={images[idx]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Blueprint corner marks */}
      <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-bcm-red/50 z-10" />
      <div className="absolute top-3 right-6 w-5 h-5 border-t border-r border-bcm-red/30 z-10" />
      <div className="absolute bottom-14 right-3 w-4 h-4 border-b border-r border-white/20 z-10" />

      {multi && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/70 hover:bg-bcm-red flex items-center justify-center transition-all duration-200 z-10"
            style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)" }}
          >
            <ChevronLeft size={16} className="text-white" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/70 hover:bg-bcm-red flex items-center justify-center transition-all duration-200 z-10"
            style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)" }}
          >
            <ChevronRight size={16} className="text-white" />
          </button>
          <div className="absolute top-3 right-3 flex gap-1 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                className={`w-1.5 h-1.5 transition-colors ${i === idx ? "bg-bcm-red" : "bg-white/40"}`}
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />
            ))}
          </div>
        </>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

      {/* Red reveal bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-bcm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

      <div className="absolute bottom-0 left-0 p-6 pointer-events-none">
        <span
          className="inline-block bg-bcm-red text-white font-['Barlow_Condensed'] font-bold text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 mb-3"
          style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)" }}
        >
          {catLabel}
        </span>
        <p className="font-['Barlow_Condensed'] font-black text-xl uppercase tracking-widest text-white leading-tight mb-1">
          {name}
        </p>
        <div className="flex items-center gap-2">
          <div className="w-3 h-px bg-bcm-red/60" />
          <p className="text-bcm-silver text-xs tracking-[0.15em] uppercase font-['Barlow_Condensed']">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Cat | "all">("all");
  const { t } = useLanguage();

  const filters: { id: Cat | "all"; label: string }[] = [
    { id: "all",         label: t("projects.filters.all") },
    { id: "commercial",  label: t("projects.filters.commercial") },
    { id: "industrial",  label: t("projects.filters.industrial") },
    { id: "renovation",  label: t("projects.filters.renovation") },
  ];

  return (
    <>
      {/* ─── PAGE HERO ──────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="absolute inset-0 warning-stripe pointer-events-none opacity-40" />
        <div className="absolute top-24 left-8 w-8 h-8 border-t border-l border-bcm-red/30 pointer-events-none" />

        <div className="container-xl relative z-10">
          <span className="label mb-5">{t("projects.hero.badge")}</span>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[3px] w-16 bg-bcm-red beam-reveal" />
            <div className="h-[3px] w-6 bg-bcm-red/30" />
          </div>
          <h1 className="page-title mb-4">
            {t("nav.our")}
            <br />
            <span className="text-bcm-red">{t("nav.realisations")}</span>
          </h1>
          <p className="text-bcm-silver text-lg max-w-xl leading-relaxed font-light">
            {t("projects.hero.subtitle")}
          </p>
        </div>
      </div>

      {/* ─── GALLERY ─────────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark relative">
        <div className="absolute inset-0 blueprint-dots opacity-40 pointer-events-none" />

        <div className="container-xl relative z-10">
          {/* Filter tabs — industrial style */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActive(id as Cat | "all")}
                className={`font-['Barlow_Condensed'] font-bold text-[10px] tracking-[0.22em] uppercase px-5 py-2.5 transition-all duration-200 ${
                  active === id
                    ? "bg-bcm-red text-white"
                    : "bg-transparent border border-bcm-steel text-bcm-silver hover:border-bcm-red/50 hover:text-white"
                }`}
                style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects
              .filter((p) => active === "all" || p.cat === active)
              .map((p) => (
                <ProjectCard
                  key={p.name}
                  {...p}
                  catLabel={filters.find((f) => f.id === p.cat)?.label ?? ""}
                />
              ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-bcm-dark relative" style={{ borderTop: "1px solid rgba(200,22,29,0.15)" }}>
        <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="section-heading mb-2">{t("projects.cta.title")}</h2>
            <p className="text-bcm-silver">{t("projects.cta.desc")}</p>
          </div>
          <Link to="/contact" className="btn-red flex-shrink-0">
            {t("projects.cta.btn")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

import { Link } from "react-router-dom";
import team3 from "../assets/3.JPG";
import accoustic from "../assets/accoustic.JPG";
import gypse from "../assets/gypse.JPG";
import platre from "../assets/platre.JPG";
import plafond from "../assets/plafond.JPG";
import colombage from "../assets/colombage.JPG";
import gestion from "../assets/gestion.JPG";
import isolation from "../assets/isolation.JPG";

import {
  ClipboardList,
  Layers,
  Hammer,
  PaintBucket,
  Grid3x3,
  Waves,
  LayoutGrid,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    Icon: Grid3x3,
    title: "Colombage métallique",
    desc: "Installation de systèmes de colombage métallique pour cloisons intérieures et murs extérieurs, offrant résistance, précision et rapidité d'exécution.",
    features: [
      "Cloisons non porteuses",
      "Murs extérieurs",
      "Structures complexes",
      "Conformité aux normes",
    ],
    img: colombage,
  },
  {
    Icon: Waves,
    title: "Isolation & Insonorisation",
    desc: "Installation de systèmes d'isolation thermique et acoustique performants pour améliorer le confort et réduire les coûts énergétiques de vos bâtiments.",
    features: [
      "Isolation thermique",
      "Insonorisation acoustique",
      "Pare-vapeur",
      "Certification énergétique",
    ],
    img: isolation,
  },
  {
    Icon: Layers,
    title: "Pose de gypse",
    desc: "Installation professionnelle de panneaux de gypse pour cloisons et plafonds, avec finitions soignées adaptées aux exigences commerciales et industrielles.",
    features: [
      "Cloisons intérieures",
      "Plafonds plats et en pente",
      "Murs courbes",
      "Finition prête à peindre",
    ],
    img: gypse,
  },

  {
    Icon: PaintBucket,
    title: "Plâtre",
    desc: "Application de plâtre traditionnel et contemporain pour des surfaces durables et esthétiques. Expertise reconnue sur chantiers commerciaux et institutionnels.",
    features: [
      "Plâtre traditionnel",
      "Enduits spéciaux",
      "Réparations et raccords",
      "Finitions texturées",
    ],
    img: platre,
  },
  {
    Icon: LayoutGrid,
    title: "Plafonds suspendus",
    desc: "Conception et installation de systèmes de plafonds suspendus acoustiques et décoratifs pour espaces commerciaux, bureaux et établissements institutionnels.",
    features: [
      "Plafonds acoustiques",
      "Grilles et tuiles",
      "Plafonds spéciaux",
      "Intégration mécanique",
    ],
    img: plafond,
  },
  {
    Icon: Hammer,
    title: "Traitement acoustique",
    desc: "Conception et installation de solutions acoustiques pour améliorer le confort sonore dans vos espaces résidentiels, commerciaux et industriels.",
    features: [
      "Panneaux acoustiques",
      "Plafond metallique",
      "Plafond de bois",
      "Solutions sur mesure",
    ],
    img: accoustic,
  },

  {
    Icon: ClipboardList,
    title: "Gestion de projet",
    desc: "Planification, coordination et suivi rigoureux de vos chantiers du début à la fin. Votre interlocuteur unique qui gère chaque détail pour vous.",
    features: [
      "Planification et échéancier",
      "Coordination des sous-traitants",
      "Contrôle budgétaire",
      "Rapports d'avancement",
    ],
    img: gestion,
  },

  {
    Icon: Users,
    title: "Location de main-d'œuvre",
    desc: "Mise à disposition de travailleurs qualifiés et certifiés pour renforcer vos équipes selon vos besoins ponctuels ou à long terme, avec flexibilité totale.",
    features: [
      "Personnel certifié CCQ",
      "Flexibilité court/long terme",
      "Superviseurs disponibles",
      "Toutes spécialités",
    ],
    img: team3,
  },
];

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Rencontre initiale gratuite pour comprendre vos besoins, votre budget et vos délais.",
  },
  {
    num: "02",
    title: "Planification",
    desc: "Élaboration du plan de projet, des devis détaillés et de l'échéancier.",
  },
  {
    num: "03",
    title: "Exécution",
    desc: "Réalisation des travaux avec supervision continue et communication régulière.",
  },
  {
    num: "04",
    title: "Livraison",
    desc: "Remise des clés avec inspection finale, documentation et garanties complètes.",
  },
];

export default function Services() {
  return (
    <>
      {/* ─── PAGE HERO ────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="container-xl relative z-10">
          <span className="label mb-5">Ce que nous faisons</span>
          <h1 className="page-title mb-4">
            Nos
            <br />
            <span className="text-bcm-red">Services</span>
          </h1>
          <p className="text-bcm-silver text-lg max-w-xl leading-relaxed font-light">
            Spécialistes en systèmes intérieurs — de la gestion de projet
            jusqu'à la location de main-d'œuvre qualifiée.
          </p>
        </div>
      </div>

      {/* ─── SERVICES GRID ────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ Icon, title, desc, features, img }) => (
              <div key={title} className="card-dark group flex flex-col">
                {/* Image */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bcm-coal to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-9 h-9 bg-bcm-red flex items-center justify-center">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-7">
                  {/* Top red reveal bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-bcm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <h3 className="font-['Barlow_Condensed'] font-bold text-xl uppercase tracking-wide text-white mb-3 group-hover:text-bcm-red transition-colors">
                    {title}
                  </h3>
                  <p className="text-bcm-silver text-sm leading-relaxed mb-5 flex-1">
                    {desc}
                  </p>
                  <ul className="space-y-1.5 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle2
                          size={13}
                          className="text-bcm-red flex-shrink-0"
                        />
                        <span className="text-bcm-muted text-xs">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-auto inline-flex items-center gap-1.5 text-bcm-red text-[11px] font-['Barlow_Condensed'] font-bold tracking-widest uppercase hover:gap-3 transition-all"
                  >
                    Demander ce service <ArrowRight size={13} />
                  </Link>
                </div>
                {/* Bottom hover bar */}
                <div className="h-[2px] w-0 bg-bcm-red group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-coal">
        <div className="container-xl">
          <div className="mb-14">
            <span className="label mb-5">Comment on travaille</span>
            <div className="red-bar mb-5" />
            <h2 className="section-heading">Notre Processus</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {steps.map(({ num, title, desc }, i) => (
              <div
                key={num}
                className="bg-bcm-coal hover:bg-bcm-mid p-8 transition-colors group relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-bcm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="font-['Barlow_Condensed'] font-black text-5xl text-white/5 leading-none block mb-4 group-hover:text-bcm-red/10 transition-colors">
                  {num}
                </span>
                <h4 className="font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide text-white mb-3 group-hover:text-bcm-red transition-colors">
                  {title}
                </h4>
                <p className="text-bcm-silver text-sm leading-relaxed">
                  {desc}
                </p>
                {i < steps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="absolute top-1/2 -right-2 -translate-y-1/2 text-bcm-red/30 hidden lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-bcm-dark border-t border-white/5">
        <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="section-heading mb-2">
              Besoin d'un service spécifique?
            </h2>
            <p className="text-bcm-silver">
              Nous offrons des solutions sur mesure adaptées à votre réalité.
            </p>
          </div>
          <Link to="/contact" className="btn-red flex-shrink-0">
            Obtenir une soumission gratuite
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

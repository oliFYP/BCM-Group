import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Award,
  Shield,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

import team1 from "../assets/1.jpg";
import team3 from "../assets/3.jpg";
import team5 from "../assets/5.jpg";
import team7 from "../assets/7.jpg";

const advantages = [
  "Plus de 10 ans d'expérience en construction au Québec",
  "Équipe de professionnels qualifiés et certifiés (RBQ)",
  "Gestion de projet complète et transparente du début à la fin",
  "Respect rigoureux des normes de sécurité SST",
  "Utilisation exclusive de matériaux de qualité supérieure",
  "Service après-vente et garanties complètes sur nos travaux",
];

const values = [
  {
    Icon: Award,
    title: "Excellence",
    desc: "Des standards irréprochables guident chacune de nos décisions, de la conception à la livraison.",
  },
  {
    Icon: Shield,
    title: "Fiabilité",
    desc: "Nous tenons parole. Nos clients comptent sur nous pour respecter engagements, délais et budgets.",
  },
  {
    Icon: Clock,
    title: "Ponctualité",
    desc: "Un chantier livré en retard coûte cher. Nous maîtrisons nos échéanciers avec rigueur.",
  },
  {
    Icon: Users,
    title: "Collaboration",
    desc: "Nous travaillons avec vous, pas juste pour vous. Communication ouverte à chaque étape.",
  },
];

const milestones = [
  {
    year: "Fondation",
    event:
      "Création du Groupe B.C.M. à Saint-Jean-sur-Richelieu, axé sur l'excellence du service résidentiel",
  },
  {
    year: "5 ans",
    event:
      "Virage majeur vers les secteurs commercial et industriel, avec l'obtention de contrats innovants sur la Rive-Sud",
  },
  {
    year: "10 ans",
    event:
      "Consolidation de notre expertise en systèmes intérieurs et déploiement d'équipes spécialisées en gypse et colombage",
  },

  {
    year: "Aujourd'hui",
    event: "Toujours en croissance",
  },
];

export default function About() {
  return (
    <>
      {/* ─── PAGE HERO ────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="container-xl relative z-10">
          <span className="label mb-5">Notre histoire</span>
          <h1 className="page-title mb-4">
            Groupe
            <br />
            <span className="text-bcm-red">B.C.M.</span>
          </h1>
          <p className="text-bcm-silver text-lg max-w-xl leading-relaxed font-light">
            Entrepreneur général spécialisé en systèmes intérieurs depuis plus
            de 10 ans, enraciné sur la Rive-Sud de Montréal.
          </p>
        </div>
      </div>

      {/* ─── STORY ────────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="label mb-5">Notre mission</span>
              <div className="red-bar mb-6" />
              <h2 className="section-heading mb-6">Qui nous sommes</h2>
              <p className="text-bcm-silver leading-relaxed mb-5">
                Situé sur la Rive-Sud de Montréal, dans la région de
                Saint-Jean-sur-Richelieu, Groupe B.C.M. s'est établi comme un
                acteur de confiance dans l'industrie de la construction au
                Québec. Notre vision a pris forme au fil des années grâce à une
                équipe de spécialistes unis par des relations solides et une
                passion commune pour l'excellence.
              </p>
              <p className="text-bcm-silver leading-relaxed mb-8">
                Entrepreneur général spécialisé en systèmes intérieurs, nous
                planifions, gérons et exécutons vos projets de A à Z — qu'il
                s'agisse de construction résidentielle, commerciale ou
                industrielle. Notre approche combine l'expérience de trois
                décennies avec une ouverture constante à l'innovation et aux
                nouvelles technologies.
              </p>

              <div className="space-y-3 mb-10">
                {advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="text-bcm-red flex-shrink-0 mt-0.5"
                    />
                    <span className="text-bcm-silver text-sm">{adv}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-red">
                Démarrer un projet
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right: photo + timeline */}
            <div className="space-y-6">
              <div className="relative overflow-hidden border border-white/5">
                <img
                  src={team7}
                  alt="Chantier Groupe B.C.M."
                  className="w-full h-72 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bcm-dark/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="border-l-4 border-bcm-red pl-4">
                    <p className="font-['Barlow_Condensed'] font-bold text-white text-lg uppercase tracking-wide leading-tight">
                      Saint-Jean-sur-Richelieu, QC
                    </p>
                    <p className="text-bcm-silver text-xs mt-1 font-['Barlow_Condensed'] tracking-wider">
                      Rive-Sud de Montréal
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-bcm-coal border border-white/5 p-7">
                <h3 className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest text-white mb-5 pb-4 border-b border-white/5">
                  Notre Parcours
                </h3>
                <div className="space-y-0">
                  {milestones.map(({ year, event }, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-bcm-red rounded-full flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                        {i < milestones.length - 1 && (
                          <div className="w-px flex-1 bg-white/10 my-1" />
                        )}
                      </div>
                      <div className="pb-5 last:pb-0">
                        <span className="font-['Barlow_Condensed'] font-bold text-[10px] tracking-[0.2em] uppercase text-bcm-red block mb-0.5">
                          {year}
                        </span>
                        <span className="text-bcm-silver text-sm">{event}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark">
        <div className="container-xl">
          <div className="mb-12">
            <span className="label mb-5">Ce qui nous guide</span>
            <div className="red-bar mb-4" />
            <h2 className="section-heading">Nos Valeurs</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {values.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-bcm-dark hover:bg-bcm-mid p-8 transition-all duration-200 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-bcm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="w-12 h-12 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center mb-5 group-hover:bg-bcm-red/20 transition-colors">
                  <Icon size={22} className="text-bcm-red" />
                </div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-lg uppercase tracking-wide text-white mb-3 group-hover:text-bcm-red transition-colors">
                  {title}
                </h3>
                <p className="text-bcm-silver text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-bcm-dark border-t border-white/5">
        <div className="container-xl text-center">
          <span className="label justify-center mb-5">
            Travaillons ensemble
          </span>
          <h2 className="section-heading mb-4">Prêt à bâtir quelque chose?</h2>
          <p className="text-bcm-silver mb-8 max-w-lg mx-auto">
            Notre équipe est disponible pour discuter de votre projet et vous
            fournir une estimation gratuite sans engagement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-red">
              Contactez-nous <ArrowRight size={16} />
            </Link>
            <Link to="/projects" className="btn-ghost-red">
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

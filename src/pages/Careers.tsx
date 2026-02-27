import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, CheckCircle2 } from "lucide-react";

const positions = [
  {
    title: "Poseur de système intérieur",
    desc: "Installation de gypse, cloisons, plafonds suspendus et systèmes intérieurs.",
  },
  {
    title: "Plâtrier",
    desc: "Application de plâtre traditionnel et contemporain sur projets commerciaux et institutionnels.",
  },
  {
    title: "Charpentier",
    desc: "Construction de structures bois et acier pour tous types de projets de construction.",
  },
];

const perks = [
  "Équipe dynamique et soudée",
  "Projets variés et stimulants",
  "Formation et développement professionnel",
  "Environnement de travail respectueux",
  "Normes SST rigoureusement respectées",
  "Stabilité et croissance de l'entreprise",
];

export default function Careers() {
  return (
    <>
      {/* ─── PAGE HERO ────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="container-xl relative z-10">
          <span className="label mb-5">Rejoignez l'équipe</span>
          <h1 className="page-title mb-4">
            À la recherche
            <br />
            <span className="text-bcm-red">d'un emploi?</span>
          </h1>
          <p className="text-bcm-silver text-lg max-w-xl leading-relaxed font-light">
            Envoyez-nous directement votre candidature. Nous sommes toujours à
            la recherche de travailleurs passionnés pour développer notre
            entreprise.
          </p>
        </div>
      </div>

      {/* ─── INTRO ────────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="label mb-5">Notre entreprise</span>
              <div className="red-bar mb-6" />
              <h2 className="section-heading mb-6">
                Construisez votre carrière avec nous
              </h2>
              <p className="text-bcm-silver leading-relaxed mb-5">
                Étant un entrepreneur général spécialisé dans le système
                intérieur bien établi, nous sommes toujours à la recherche de
                travailleurs pour continuer de développer notre entreprise.
              </p>
              <p className="text-bcm-silver leading-relaxed mb-8">
                Venez transmettre votre expérience ou apprendre au sein d'une
                équipe dynamique. Que vous soyez un professionnel aguerri ou en
                début de carrière, nous avons une place pour vous.
              </p>

              <div className="space-y-3 mb-10">
                {perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={17}
                      className="text-bcm-red flex-shrink-0 mt-0.5"
                    />
                    <span className="text-bcm-silver text-sm">{perk}</span>
                  </div>
                ))}
              </div>

              <a href="mailto:info@groupe-bcm.com" className="btn-red">
                Envoyer ma candidature
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Right — image */}
            <div className="relative overflow-hidden border border-white/5">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Équipe Groupe B.C.M. sur chantier"
                className="w-full h-72 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bcm-dark/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="border-l-4 border-bcm-red pl-4">
                  <p className="font-['Barlow_Condensed'] font-bold text-white text-lg uppercase tracking-wide leading-tight">
                    Grand-Montréal, QC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── POSITIONS ────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-coal">
        <div className="container-xl">
          <div className="mb-12">
            <span className="label mb-5">Postes disponibles</span>
            <div className="red-bar mb-4" />
            <h2 className="section-heading">Emplois disponibles</h2>
          </div>

          <div className="divide-y divide-white/5">
            {positions.map(({ title, desc }, i) => (
              <div
                key={title}
                className="group grid md:grid-cols-12 gap-6 py-8 items-center hover:px-4 transition-all duration-300"
              >
                <span className="md:col-span-1 font-['Barlow_Condensed'] text-xs tracking-widest text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="md:col-span-4 font-['Barlow_Condensed'] font-bold text-xl uppercase tracking-wide text-white group-hover:text-bcm-red transition-colors leading-snug">
                  {title}
                </h3>
                <p className="md:col-span-5 text-bcm-silver text-sm leading-relaxed">
                  {desc}
                </p>
                <div className="md:col-span-2 flex justify-end">
                  <a
                    href="mailto:info@groupe-bcm.com"
                    className="inline-flex items-center gap-2 text-bcm-red text-xs font-['Barlow_Condensed'] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all"
                  >
                    Postuler
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ──────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="label mb-5">Contactez-nous</span>
              <div className="red-bar mb-6" />
              <h2 className="section-heading mb-6">
                Faites le premier pas aujourd'hui
              </h2>
              <p className="text-bcm-silver leading-relaxed mb-8">
                Contactez-nous dès aujourd'hui pour vous informer sur nos
                perspectives d'emploi, par téléphone ou par courriel. Nous
                serons heureux de discuter de votre profil et des opportunités
                disponibles.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:info@groupe-bcm.com"
                  className="group flex items-center gap-4 p-5 border border-white/5 hover:border-white/10 bg-bcm-coal transition-colors"
                >
                  <div className="w-11 h-11 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-bcm-red/20 transition-colors">
                    <Mail size={17} className="text-bcm-red" />
                  </div>
                  <div>
                    <p className="font-['Barlow_Condensed'] text-[10px] tracking-[0.2em] uppercase text-white/30 mb-0.5">
                      Courriel
                    </p>
                    <p className="text-white text-sm font-medium">
                      info@groupe-bcm.com
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-white/20 group-hover:text-bcm-red ml-auto transition-colors"
                  />
                </a>

                <a
                  href="tel:450-741-1351"
                  className="group flex items-center gap-4 p-5 border border-white/5 hover:border-white/10 bg-bcm-coal transition-colors"
                >
                  <div className="w-11 h-11 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center flex-shrink-0 group-hover:bg-bcm-red/20 transition-colors">
                    <Phone size={17} className="text-bcm-red" />
                  </div>
                  <div>
                    <p className="font-['Barlow_Condensed'] text-[10px] tracking-[0.2em] uppercase text-white/30 mb-0.5">
                      Téléphone
                    </p>
                    <p className="text-white text-sm font-medium font-['Barlow_Condensed'] tracking-wider">
                      450-741-1351
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-white/20 group-hover:text-bcm-red ml-auto transition-colors"
                  />
                </a>
              </div>
            </div>

            {/* Right — application card */}
            <div className="bg-bcm-coal border border-white/5 p-8">
              <h3 className="font-['Barlow_Condensed'] font-bold text-sm uppercase tracking-widest text-white mb-5 pb-4 border-b border-white/5">
                Pour postuler
              </h3>
              <p className="text-bcm-silver text-sm leading-relaxed mb-8">
                Envoyez-nous votre CV et une brève présentation à{" "}
                <a
                  href="mailto:info@groupe-bcm.com"
                  className="text-white hover:text-bcm-red underline underline-offset-2 transition-colors"
                >
                  info@groupe-bcm.com
                </a>{" "}
                en mentionnant le poste qui vous intéresse. Nous communiquerons
                avec vous dans les plus brefs délais.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Mentionnez le poste visé",
                  "Joignez votre CV à jour",
                  "Décrivez brièvement votre expérience",
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-['Barlow_Condensed'] font-bold text-bcm-red text-xs">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-bcm-silver text-sm leading-relaxed mt-0.5">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="mailto:info@groupe-bcm.com"
                className="btn-red w-full justify-center"
              >
                Envoyer ma candidature
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM LINK ──────────────────────────────────────── */}
      <section className="py-20 bg-bcm-dark border-t border-white/5">
        <div className="container-xl text-center">
          <span className="label justify-center mb-5">
            Travaillons ensemble
          </span>
          <h2 className="section-heading mb-4">
            Des questions sur nos services?
          </h2>
          <p className="text-bcm-silver mb-8 max-w-lg mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions et
            vous orienter vers les bonnes ressources.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-red">
              Page contact <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-ghost-red">
              En savoir plus sur BCM
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { CheckCircle2, Award, Shield, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Des standards de qualité élevés dans chaque projet',
    },
    {
      icon: Shield,
      title: 'Fiabilité',
      description: 'Un partenaire de confiance pour vos projets',
    },
    {
      icon: Clock,
      title: 'Ponctualité',
      description: 'Respect des délais et des engagements',
    },
  ];

  const advantages = [
    'Plus de 30 ans d\'expérience en construction',
    'Équipe de professionnels qualifiés et certifiés',
    'Gestion de projet complète et transparente',
    'Respect rigoureux des normes de sécurité',
    'Utilisation de matériaux de qualité supérieure',
    'Service après-vente et garanties complètes',
  ];

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Groupe B.C.M.
            </h2>
            <div className="w-24 h-1 bg-blue-500 mb-8" />

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Depuis plus de trois décennies, Groupe B.C.M. s'est imposé comme un leader
              dans le domaine de la construction générale au Québec. Notre engagement envers
              l'excellence et la satisfaction client guide chacun de nos projets.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Nous offrons une gamme complète de services, de la construction commerciale
              à la rénovation, en passant par la gestion de projet et les systèmes intérieurs.
              Notre équipe de professionnels qualifiés travaille avec passion pour transformer
              vos visions en réalité.
            </p>

            <div className="space-y-3 mb-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">{advantage}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-blue-500/50"
            >
              Démarrer un projet
            </a>
          </div>

          <div className="space-y-6">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="text-blue-500" size={24} />
                    </div>
                    <h3 className="text-white font-bold text-sm mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-tight">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

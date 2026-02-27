import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

const contactCards = [
  {
    Icon: MapPin,
    title: 'Adresse',
    lines: ['Rive-Sud de Montréal'],
    href: 'https://maps.google.com/?q=604+Rue+Rhéaume,+Saint-Jean-sur-Richelieu,+QC',
    linkLabel: 'Voir sur la carte',
  },
  {
    Icon: Phone,
    title: 'Téléphone',
    lines: ['450-741-1351'],
    href: 'tel:450-741-1351',
    linkLabel: 'Appeler maintenant',
  },
  {
    Icon: Mail,
    title: 'Courriel',
    lines: ['info@groupe-bcm.com'],
    href: 'mailto:info@groupe-bcm.com',
    linkLabel: 'Envoyer un courriel',
  },
  {
    Icon: Clock,
    title: 'Heures d\'ouverture',
    lines: ['Lundi – Vendredi', '8h00 à 17h00'],
    href: null,
    linkLabel: null,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:'', phone:'', email:'', type:'', message:'' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* ─── PAGE HERO ────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="container-xl relative z-10">
          <span className="label mb-5">Travaillons ensemble</span>
          <h1 className="page-title mb-4">
            Contactez<br />
            <span className="text-bcm-red">-nous</span>
          </h1>
          <p className="text-bcm-silver text-lg max-w-xl leading-relaxed font-light">
            Soumission gratuite et sans engagement. Notre équipe vous répond
            sous 24 heures ouvrables.
          </p>
        </div>
      </div>

      {/* ─── CONTACT CARDS ────────────────────────────────────── */}
      <section className="bg-bcm-coal border-b border-white/5">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {contactCards.map(({ Icon, title, lines, href, linkLabel }) => (
              <div key={title} className="group bg-bcm-coal hover:bg-bcm-mid p-8 transition-colors relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-bcm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center mb-5 group-hover:bg-bcm-red/20 transition-colors">
                  <Icon size={18} className="text-bcm-red" />
                </div>
                <p className="form-label mb-3">{title}</p>
                {lines.map((line, i) => (
                  <p key={i} className={`text-sm ${i === 0 ? 'text-white font-semibold' : 'text-bcm-silver'}`}>
                    {line}
                  </p>
                ))}
                {href && linkLabel && (
                  <a href={href} className="inline-flex items-center gap-1 text-bcm-red text-[10px] font-display font-bold tracking-widest uppercase mt-3 hover:gap-2 transition-all">
                    {linkLabel} <ArrowRight size={11} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM + MAP ───────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3 bg-bcm-coal border border-white/5 p-8 md:p-10">
              <h2 className="font-display font-bold text-2xl uppercase tracking-wide text-white mb-1">
                Demande de soumission
              </h2>
              <p className="text-bcm-silver text-sm mb-8">
                Remplissez le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais.
              </p>

              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 bg-bcm-red flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase text-white">Message envoyé!</h3>
                  <p className="text-bcm-silver max-w-sm">
                    Merci de nous avoir contactés. Un membre de notre équipe vous répondra
                    dans les 24 heures ouvrables.
                  </p>
                  <button onClick={() => setSent(false)} className="btn-ghost-red mt-2">
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Nom complet *</label>
                      <input
                        name="name" type="text" required
                        value={form.name} onChange={onChange}
                        placeholder="Jean Tremblay"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Téléphone</label>
                      <input
                        name="phone" type="tel"
                        value={form.phone} onChange={onChange}
                        placeholder="450-000-0000"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Courriel *</label>
                    <input
                      name="email" type="email" required
                      value={form.email} onChange={onChange}
                      placeholder="jean.tremblay@exemple.com"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="form-label">Type de projet</label>
                    <select
                      name="type"
                      value={form.type} onChange={onChange}
                      className="form-input cursor-pointer"
                    >
                      <option value="">Sélectionnez un type de projet</option>
                      <option>Construction commerciale</option>
                      <option>Construction industrielle</option>
                      <option>Systèmes intérieurs</option>
                      <option>Rénovation & agrandissement</option>
                      <option>Gestion de chantier</option>
                      <option>Design & planification</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Détails du projet *</label>
                    <textarea
                      name="message" required rows={5}
                      value={form.message} onChange={onChange}
                      placeholder="Décrivez votre projet — type de travaux, superficie approximative, localisation, délais souhaités..."
                      className="form-input resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-red w-full justify-center">
                    Envoyer la demande
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-bcm-muted text-[11px] text-center">
                    En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
                  </p>
                </form>
              )}
            </div>

            {/* Map + CTA — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Map */}
              <div className="flex-1 min-h-[300px] bg-bcm-coal border border-white/5 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.4567890123456!2d-73.27670!3d45.31670!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9b4f5f5f5f5f5%3A0x0!2s604+Rue+Rh%C3%A9aume%2C+Saint-Jean-sur-Richelieu%2C+QC+J3B+1B3!5e0!3m2!1sfr!2sca!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border:0, minHeight:'280px', filter:'grayscale(70%) contrast(1.1) brightness(0.8)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Groupe BCM — Rive-Sud de Montréal"
                />
              </div>

              {/* Phone CTA card */}
              <div className="bg-bcm-red p-7 relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/5 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-black/10 rounded-full" />
                <div className="relative z-10">
                  <p className="form-label text-white/60 mb-1">Préférez appeler?</p>
                  <h3 className="font-display font-black text-2xl uppercase text-white mb-2 leading-tight">
                    Réponse immédiate
                  </h3>
                  <p className="text-white/75 text-sm mb-5 leading-relaxed">
                    Notre équipe est disponible du lundi au vendredi, de 8h à 17h.
                  </p>
                  <a
                    href="tel:450-741-1351"
                    className="inline-flex items-center gap-2 bg-white text-bcm-red font-display font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-bcm-light transition-colors"
                  >
                    <Phone size={15} />
                    450-741-1351
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

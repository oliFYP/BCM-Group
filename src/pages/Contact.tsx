import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t, ta } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${t("contact.form.emailSubject")}${form.type ? ` — ${form.type}` : ""}`,
    );
    const body = encodeURIComponent(
      `Nom: ${form.name}\nTéléphone: ${form.phone || "—"}\nCourriel: ${form.email}\nType de projet: ${form.type || "—"}\n\n${form.message}`,
    );
    window.location.href = `mailto:info@groupe-bcm.com?subject=${subject}&body=${body}`;
  };

  const contactCards = [
    {
      Icon: MapPin,
      title: t("contact.cards.address.title"),
      lines: [t("contact.cards.address.line")],
      href: "https://maps.google.com/?q=604+Rue+Rhéaume,+Saint-Jean-sur-Richelieu,+QC",
      linkLabel: t("contact.cards.address.link"),
    },
    {
      Icon: Phone,
      title: t("contact.cards.phone.title"),
      lines: ["450-741-1351"],
      href: "tel:450-741-1351",
      linkLabel: t("contact.cards.phone.link"),
    },
    {
      Icon: Mail,
      title: t("contact.cards.email.title"),
      lines: ["info@groupe-bcm.com"],
      href: "mailto:info@groupe-bcm.com",
      linkLabel: t("contact.cards.email.link"),
    },
    {
      Icon: Clock,
      title: t("contact.cards.hours.title"),
      lines: [t("contact.cards.hours.line1"), t("contact.cards.hours.line2")],
      href: null,
      linkLabel: null,
    },
  ];

  const projectTypes = ta<string>("contact.form.types");

  return (
    <>
      {/* ─── PAGE HERO ────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="container-xl relative z-10">
          <span className="label mb-5">{t("contact.hero.badge")}</span>
          <h1 className="page-title mb-4">
            Contactez
            <br />
            <span className="text-bcm-red">-nous</span>
          </h1>
          <p className="text-bcm-silver text-lg max-w-xl leading-relaxed font-light">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </div>

      {/* ─── CONTACT CARDS ────────────────────────────────────── */}
      <section className="bg-bcm-coal border-b border-white/5">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {contactCards.map(({ Icon, title, lines, href, linkLabel }) => (
              <div
                key={title}
                className="group bg-bcm-coal hover:bg-bcm-mid p-8 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-bcm-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center mb-5 group-hover:bg-bcm-red/20 transition-colors">
                  <Icon size={18} className="text-bcm-red" />
                </div>
                <p className="form-label mb-3">{title}</p>
                {lines.map((line, i) => (
                  <p key={i} className={`text-sm ${i === 0 ? "text-white font-semibold" : "text-bcm-silver"}`}>
                    {line}
                  </p>
                ))}
                {href && linkLabel && (
                  <a
                    href={href}
                    className="inline-flex items-center gap-1 text-bcm-red text-[10px] font-display font-bold tracking-widest uppercase mt-3 hover:gap-2 transition-all"
                  >
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
                {t("contact.form.title")}
              </h2>
              <p className="text-bcm-silver text-sm mb-8">{t("contact.form.subtitle")}</p>

              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">{t("contact.form.name")}</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={onChange}
                      placeholder={t("contact.form.namePlaceholder")}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">{t("contact.form.phone")}</label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={onChange}
                      placeholder={t("contact.form.phonePlaceholder")}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">{t("contact.form.email")}</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder={t("contact.form.emailPlaceholder")}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="form-label">{t("contact.form.type")}</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={onChange}
                    className="form-input cursor-pointer"
                  >
                    <option value="">{t("contact.form.typeDefault")}</option>
                    {projectTypes.map((type, i) => (
                      <option key={i}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="form-label">{t("contact.form.message")}</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    placeholder={t("contact.form.messagePlaceholder")}
                    className="form-input resize-none"
                  />
                </div>

                <button type="submit" className="btn-red w-full justify-center">
                  {t("contact.form.submit")}
                  <ArrowRight size={16} />
                </button>
                <p className="text-bcm-muted text-[11px] text-center">
                  {t("contact.form.note")}
                </p>
              </form>
            </div>

            {/* Map + CTA — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Map */}
              <div className="flex-1 min-h-[300px] bg-bcm-coal border border-white/5 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Montreal,+QC,+Canada&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: "280px",
                    filter: "grayscale(70%) contrast(1.1) brightness(0.8)",
                  }}
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
                  <p className="form-label text-white/60 mb-1">{t("contact.phoneCard.badge")}</p>
                  <h3 className="font-display font-black text-2xl uppercase text-white mb-2 leading-tight">
                    {t("contact.phoneCard.title")}
                  </h3>
                  <p className="text-white/75 text-sm mb-5 leading-relaxed">
                    {t("contact.phoneCard.desc")}
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

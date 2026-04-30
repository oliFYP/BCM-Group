import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t, ta } = useLanguage();
  const [form, setForm] = useState({ name: "", phone: "", email: "", type: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${t("contact.form.emailSubject")}${form.type ? ` — ${form.type}` : ""}`);
    const body = encodeURIComponent(
      `Nom: ${form.name}\nTéléphone: ${form.phone || "—"}\nCourriel: ${form.email}\nType de projet: ${form.type || "—"}\n\n${form.message}`
    );
    window.location.href = `mailto:info@groupe-bcm.com?subject=${subject}&body=${body}`;
  };

  const contactCards = [
    { Icon: MapPin, title: t("contact.cards.address.title"), lines: [t("contact.cards.address.line")],     href: "https://maps.google.com/?q=604+Rue+Rhéaume,+Saint-Jean-sur-Richelieu,+QC", linkLabel: t("contact.cards.address.link") },
    { Icon: Phone,  title: t("contact.cards.phone.title"),   lines: ["450-741-1351"],                       href: "tel:450-741-1351",           linkLabel: t("contact.cards.phone.link") },
    { Icon: Mail,   title: t("contact.cards.email.title"),   lines: ["info@groupe-bcm.com"],                href: "mailto:info@groupe-bcm.com", linkLabel: t("contact.cards.email.link") },
    { Icon: Clock,  title: t("contact.cards.hours.title"),   lines: [t("contact.cards.hours.line1"), t("contact.cards.hours.line2")], href: null, linkLabel: null },
  ];

  const projectTypes = ta<string>("contact.form.types");

  return (
    <>
      {/* ─── PAGE HERO ──────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="absolute inset-0 warning-stripe pointer-events-none opacity-40" />
        <div className="absolute top-24 left-8 w-8 h-8 border-t border-l border-bcm-red/30 pointer-events-none" />

        <div className="container-xl relative z-10">
          <span className="label mb-5">{t("contact.hero.badge")}</span>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[3px] w-16 bg-bcm-red beam-reveal" />
            <div className="h-[3px] w-6 bg-bcm-red/30" />
          </div>
          <h1 className="page-title mb-4">
            {t("nav.contact")}
            <br />
            <span className="text-bcm-red">-{t("nav.us")}</span>
          </h1>
          <p className="text-bcm-silver text-lg max-w-xl leading-relaxed font-light">
            {t("contact.hero.subtitle")}
          </p>
        </div>
      </div>

      {/* ─── CONTACT CARDS ──────────────────────────────────────── */}
      <section className="relative" style={{ background: "#111", borderBottom: "1px solid rgba(200,22,29,0.15)" }}>
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 py-6">
            {contactCards.map(({ Icon, title, lines, href, linkLabel }, i) => (
              <div
                key={title}
                className="group bg-[#161616] hover:bg-bcm-mid p-8 transition-all duration-300 relative overflow-hidden rivet-corners card-steel-hover"
                style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}
              >
                {/* Index */}
                <div className="absolute top-3 right-4 font-['Barlow_Condensed'] font-black text-white/[0.04] text-4xl leading-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div
                  className="w-10 h-10 bg-bcm-red/10 border border-bcm-red/20 flex items-center justify-center mb-5 group-hover:bg-bcm-red/20 transition-colors"
                  style={{ clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)" }}
                >
                  <Icon size={18} className="text-bcm-red" />
                </div>

                <p className="form-label mb-3">{title}</p>
                {lines.map((line, j) => (
                  <p key={j} className={`text-sm ${j === 0 ? "text-white font-semibold" : "text-bcm-silver"}`}>
                    {line}
                  </p>
                ))}
                {href && linkLabel && (
                  <a
                    href={href}
                    className="inline-flex items-center gap-1 text-bcm-red text-[10px] font-['Barlow_Condensed'] font-bold tracking-widest uppercase mt-3 hover:gap-2 transition-all"
                  >
                    {linkLabel} <ArrowRight size={11} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM + MAP ─────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark relative">
        <div className="absolute inset-0 blueprint-dots opacity-40 pointer-events-none" />

        <div className="container-xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-6">

            {/* Form — 3 cols */}
            <div
              className="lg:col-span-3 bg-bcm-coal border border-white/5 p-8 md:p-10 relative"
              style={{ clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)" }}
            >
              {/* Top structural bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-bcm-red to-bcm-red/30" />

              {/* Blueprint corner marks */}
              <div className="absolute top-4 right-8 w-5 h-5 border-t border-r border-bcm-red/20 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-white/10 pointer-events-none" />

              <h2 className="font-['Barlow_Condensed'] font-bold text-2xl uppercase tracking-wide text-white mb-1">
                {t("contact.form.title")}
              </h2>
              <p className="text-bcm-silver text-sm mb-8">{t("contact.form.subtitle")}</p>

              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">{t("contact.form.name")}</label>
                    <input name="name" type="text" required value={form.name} onChange={onChange}
                      placeholder={t("contact.form.namePlaceholder")} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">{t("contact.form.phone")}</label>
                    <input name="phone" type="tel" value={form.phone} onChange={onChange}
                      placeholder={t("contact.form.phonePlaceholder")} className="form-input" />
                  </div>
                </div>

                <div>
                  <label className="form-label">{t("contact.form.email")}</label>
                  <input name="email" type="email" required value={form.email} onChange={onChange}
                    placeholder={t("contact.form.emailPlaceholder")} className="form-input" />
                </div>

                <div>
                  <label className="form-label">{t("contact.form.type")}</label>
                  <select name="type" value={form.type} onChange={onChange} className="form-input cursor-pointer">
                    <option value="">{t("contact.form.typeDefault")}</option>
                    {projectTypes.map((type, i) => <option key={i}>{type}</option>)}
                  </select>
                </div>

                <div>
                  <label className="form-label">{t("contact.form.message")}</label>
                  <textarea name="message" required rows={5} value={form.message} onChange={onChange}
                    placeholder={t("contact.form.messagePlaceholder")} className="form-input resize-none" />
                </div>

                <button type="submit" className="btn-red w-full justify-center">
                  {t("contact.form.submit")}
                  <ArrowRight size={16} />
                </button>
                <p className="text-bcm-muted text-[11px] text-center">{t("contact.form.note")}</p>
              </form>
            </div>

            {/* Map + CTA — 2 cols */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Map */}
              <div
                className="flex-1 min-h-[300px] bg-bcm-coal border border-white/5 overflow-hidden"
                style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}
              >
                <iframe
                  src="https://www.google.com/maps?q=Montreal,+QC,+Canada&output=embed"
                  width="100%" height="100%"
                  style={{ border: 0, minHeight: "280px", filter: "grayscale(80%) contrast(1.1) brightness(0.7)" }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Groupe BCM — Rive-Sud de Montréal"
                />
              </div>

              {/* Phone CTA card */}
              <div
                className="bg-bcm-red p-7 relative overflow-hidden"
                style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)" }}
              >
                {/* Warning stripes */}
                <div className="absolute inset-0 warning-stripe-march opacity-50 pointer-events-none" />

                {/* Blueprint corners */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-white/20" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-white/15" />

                <div className="relative z-10">
                  <p className="form-label text-white/60 mb-1">{t("contact.phoneCard.badge")}</p>
                  <h3 className="font-['Barlow_Condensed'] font-black text-2xl uppercase text-white mb-2 leading-tight">
                    {t("contact.phoneCard.title")}
                  </h3>
                  <p className="text-white/75 text-sm mb-5 leading-relaxed">{t("contact.phoneCard.desc")}</p>
                  <a
                    href="tel:450-741-1351"
                    className="inline-flex items-center gap-2 bg-white text-bcm-red font-['Barlow_Condensed'] font-bold text-sm tracking-widest uppercase px-6 py-3 hover:bg-gray-100 transition-colors"
                    style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}
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

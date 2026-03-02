import { useLanguage } from "../i18n/LanguageContext";

/* ─────────────────────────────────────────────────────────
   POLICY DATA  (FR / EN)
   Placeholders to fill in before publishing:
     [NOM_RESPONSABLE]  – Privacy officer full name
───────────────────────────────────────────────────────── */

const policy = {
  fr: {
    effectiveDate: "Date d'entrée en vigueur : 01 Mars 2026",
    lastUpdated: "Dernière mise à jour : 01 Mars 2026",
    intro:
      "Groupe B.C.M. Inc. (« nous », « notre ») s'engage à protéger la vie privée des visiteurs de son site Web et des personnes qui communiquent avec nous. La présente Politique de confidentialité explique quelles informations nous collectons, pourquoi nous les collectons, comment nous les utilisons et vos droits à cet égard. Elle est conforme à la Loi 25 (Loi modernisant des dispositions législatives en matière de protection des renseignements personnels, Québec), à la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE/PIPEDA), au Règlement général sur la protection des données (RGPD/GDPR) et au California Consumer Privacy Act (CCPA).",
    sections: [
      {
        id: "1",
        title: "1. Coordonnées et responsable de la protection des données",
        content: [
          {
            type: "text",
            text: "Le responsable du traitement de vos renseignements personnels est :",
          },
          {
            type: "block",
            lines: [
              "Groupe B.C.M. Inc.",
              "Montréal (Québec)",
              "Téléphone : 450-741-1351",
              "Courriel : info@groupe-bcm.com",
            ],
          },
          {
            type: "text",
            text: "Pour exercer vos droits ou pour toute question relative à cette politique, veuillez communiquer avec notre responsable aux coordonnées ci-dessus.",
          },
        ],
      },
      {
        id: "2",
        title: "2. Quelles informations personnelles collectons-nous ?",
        content: [
          {
            type: "subtitle",
            text: "2.1 Informations que vous nous fournissez directement",
          },
          {
            type: "text",
            text: "Lorsque vous remplissez notre formulaire de demande de soumission ou envoyez une candidature d'emploi, nous pouvons collecter :",
          },
          {
            type: "list",
            items: [
              "Nom complet",
              "Adresse courriel",
              "Numéro de téléphone",
              "Type et description du projet",
              "Curriculum vitæ et informations professionnelles (candidatures seulement)",
            ],
          },
          {
            type: "subtitle",
            text: "2.2 Informations collectées automatiquement par des tiers",
          },
          {
            type: "text",
            text: "Notre site intègre des services tiers qui peuvent, dans le cadre de leur propre fonctionnement, collecter certaines données techniques. Nous ne contrôlons pas ces collectes (voir section 6).",
          },
          {
            type: "list",
            items: [
              "Adresse IP (via Google Fonts, Google Maps, hébergement GitHub Pages)",
              "Type de navigateur et système d'exploitation (journaux de serveur GitHub Pages)",
              "Pages consultées et date/heure de la visite",
            ],
          },
          { type: "subtitle", text: "2.3 Ce que nous ne collectons PAS" },
          {
            type: "list",
            items: [
              "Aucun témoin (cookie) n'est déposé par notre site Web",
              "Aucune donnée de géolocalisation de l'utilisateur",
              "Aucune information de paiement ou financière",
              "Aucune donnée de navigation inter-sites",
              "Aucun outil d'analyse ou de pistage (Google Analytics, Meta Pixel, etc.)",
            ],
          },
        ],
      },
      {
        id: "3",
        title:
          "3. Pourquoi collectons-nous vos informations ? (Finalités et bases légales)",
        content: [
          {
            type: "table",
            headers: ["Finalité", "Type de données", "Base légale"],
            rows: [
              [
                "Répondre à votre demande de soumission",
                "Nom, courriel, téléphone, description du projet",
                "Consentement (LPRPDE, RGPD art. 6(1)(a)) ; exécution d'un contrat (RGPD art. 6(1)(b))",
              ],
              [
                "Traiter votre candidature d'emploi",
                "Nom, courriel, téléphone, CV",
                "Consentement (LPRPDE, RGPD art. 6(1)(a))",
              ],
              [
                "Améliorer nos services et communiquer avec vous",
                "Courriel, téléphone",
                "Intérêt légitime (RGPD art. 6(1)(f)) ; consentement (LPRPDE)",
              ],
              [
                "Respect des obligations légales",
                "Toutes informations pertinentes",
                "Obligation légale (RGPD art. 6(1)(c))",
              ],
            ],
          },
          {
            type: "text",
            text: "Nous n'utilisons vos renseignements qu'aux fins pour lesquelles ils ont été recueillis, sauf si la loi l'exige ou si vous y consentez expressément.",
          },
        ],
      },
      {
        id: "4",
        title:
          "4. Comment vos informations sont-elles transmises et stockées ?",
        content: [
          {
            type: "subtitle",
            text: "4.1 Mode de transmission du formulaire de contact",
          },
          {
            type: "text",
            text: "Notre formulaire de contact fonctionne via le protocole mailto. Lorsque vous soumettez le formulaire, votre navigateur ouvre votre application de messagerie avec les informations pré-remplies. Les données ne transitent pas par nos serveurs ; elles sont envoyées directement depuis votre client de messagerie vers info@groupe-bcm.com. La sécurité de cette transmission dépend de votre fournisseur de messagerie.",
          },
          { type: "subtitle", text: "4.2 Hébergement du site Web" },
          {
            type: "text",
            text: "Notre site est hébergé sur GitHub Pages (GitHub Inc., filiale de Microsoft Corporation), dont les serveurs sont situés aux États-Unis. GitHub peut collecter des données de journalisation (adresse IP, navigateur, heure d'accès) conformément à sa propre politique de confidentialité.",
          },
          { type: "subtitle", text: "4.3 Stockage de vos messages" },
          {
            type: "text",
            text: "Les messages reçus par courriel sont conservés dans notre système de messagerie sécurisé. Aucune base de données centralisée des demandes reçues via le site Web n'est maintenue.",
          },
        ],
      },
      {
        id: "5",
        title: "5. Durées de conservation",
        content: [
          {
            type: "table",
            headers: [
              "Type de données",
              "Durée de conservation",
              "Justification",
            ],
            rows: [
              [
                "Demandes de soumission (courriels)",
                "2 ans à compter de la dernière communication",
                "Relation d'affaires potentielle ; délai de prescription civil (Québec)",
              ],
              [
                "Candidatures d'emploi non retenues",
                "6 mois à compter de la décision",
                "Droit du travail (Loi sur les normes du travail, Québec)",
              ],
              [
                "Candidatures retenues (employés)",
                "Durée de l'emploi + 7 ans",
                "Obligations fiscales et légales",
              ],
              [
                "Journaux de serveur (GitHub Pages)",
                "Selon la politique de GitHub (généralement 30 jours)",
                "Sécurité et détection d'abus",
              ],
            ],
          },
          {
            type: "text",
            text: "À l'expiration de ces délais, les données sont supprimées de manière sécurisée ou anonymisées.",
          },
        ],
      },
      {
        id: "6",
        title: "6. Services tiers intégrés au site",
        content: [
          {
            type: "table",
            headers: [
              "Service",
              "Fournisseur",
              "Pays",
              "Données transmises",
              "Politique de confidentialité",
            ],
            rows: [
              [
                "Google Fonts",
                "Google LLC",
                "États-Unis",
                "Adresse IP, navigateur (chargement des polices)",
                "policies.google.com/privacy",
              ],
              [
                "Google Maps (carte intégrée)",
                "Google LLC",
                "États-Unis",
                "Adresse IP, interactions avec la carte",
                "policies.google.com/privacy",
              ],
              [
                "GitHub Pages (hébergement)",
                "GitHub Inc. (Microsoft)",
                "États-Unis",
                "Adresse IP, navigateur, pages visitées",
                "docs.github.com/site-policy",
              ],
              [
                "Pexels (images)",
                "Canva Pty Ltd",
                "Australie / CDN mondial",
                "Adresse IP (chargement des images)",
                "pexels.com/privacy-policy",
              ],
              [
                "Facebook (lien externe)",
                "Meta Platforms Inc.",
                "États-Unis",
                "Données collectées par Meta uniquement si vous cliquez",
                "facebook.com/privacy/policy",
              ],
            ],
          },
          {
            type: "text",
            text: "Les transferts vers les États-Unis et l'Australie s'effectuent sur la base des clauses contractuelles types (RGPD art. 46) ou du consentement. Nous vous encourageons à consulter les politiques de confidentialité de ces services.",
          },
        ],
      },
      {
        id: "7",
        title: "7. Témoins (cookies) et technologies de pistage",
        content: [
          {
            type: "text",
            text: "Notre site Web n'utilise AUCUN témoin (cookie) de notre fait. Aucun outil d'analyse comportementale, de reciblage publicitaire ou de pistage inter-sites n'est présent.",
          },
          {
            type: "text",
            text: "Les services tiers intégrés (Google Fonts, Google Maps, Pexels) peuvent déposer leurs propres témoins lors de votre visite, hors de notre contrôle.",
          },
        ],
      },
      {
        id: "8",
        title: "8. Vos droits",
        content: [
          {
            type: "subtitle",
            text: "8.1 Droits en vertu de la Loi 25 (Québec) et de la LPRPDE (Canada)",
          },
          {
            type: "list",
            items: [
              "Droit d'accès : obtenir une copie des renseignements que nous détenons sur vous.",
              "Droit de rectification : corriger tout renseignement inexact ou incomplet.",
              "Droit au retrait du consentement : retirer votre consentement en tout temps.",
              "Droit à la portabilité (Loi 25) : recevoir vos données dans un format structuré couramment utilisé.",
              "Droit à l'effacement (Loi 25) : demander la suppression de vos renseignements lorsque leur conservation n'est plus nécessaire.",
              "Droit de déposer une plainte auprès de la Commission d'accès à l'information (CAI) du Québec.",
            ],
          },
          { type: "subtitle", text: "8.2 Droits RGPD (visiteurs de l'UE/EEE)" },
          {
            type: "list",
            items: [
              "Droit d'accès (art. 15)",
              "Droit de rectification (art. 16)",
              "Droit à l'effacement / droit à l'oubli (art. 17)",
              "Droit à la limitation du traitement (art. 18)",
              "Droit à la portabilité des données (art. 20)",
              "Droit d'opposition (art. 21)",
              "Droit de ne pas faire l'objet d'une décision automatisée (art. 22)",
              "Droit de déposer une plainte auprès de votre autorité nationale de protection des données.",
            ],
          },
          {
            type: "subtitle",
            text: "8.3 Droits CCPA (résidents de la Californie)",
          },
          {
            type: "list",
            items: [
              "Droit de savoir quelles informations personnelles sont collectées, utilisées, partagées ou vendues.",
              "Droit de supprimer les informations personnelles collectées.",
              "Droit d'opt-out de la vente d'informations personnelles (nota : nous ne vendons PAS vos données).",
              "Droit à la non-discrimination lors de l'exercice de vos droits CCPA.",
            ],
          },
          {
            type: "text",
            text: "Pour exercer l'un de ces droits, contactez-nous à info@groupe-bcm.com. Nous répondrons dans les délais légalement prescrits : 30 jours (LPRPDE/RGPD) ou 45 jours (CCPA).",
          },
        ],
      },
      {
        id: "9",
        title: "9. Sécurité des renseignements personnels",
        content: [
          {
            type: "text",
            text: "Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos renseignements contre la perte, l'accès non autorisé, la divulgation ou la modification :",
          },
          {
            type: "list",
            items: [
              "Communications par courriel protégées par les mesures de sécurité de notre fournisseur",
              "Site Web servi exclusivement via HTTPS",
              "Accès limité aux renseignements personnels aux seuls employés qui en ont besoin",
              "Absence de base de données exposée sur Internet",
            ],
          },
          {
            type: "text",
            text: "En cas d'incident de confidentialité, nous agirons conformément à la Loi 25, notamment en notifiant la Commission d'accès à l'information et les personnes concernées lorsque l'incident présente un risque de préjudice sérieux.",
          },
        ],
      },
      {
        id: "10",
        title: "10. Mineurs",
        content: [
          {
            type: "text",
            text: "Notre site ne s'adresse pas aux personnes de moins de 14 ans et nous ne collectons pas sciemment de renseignements personnels les concernant. Si vous avez connaissance qu'un mineur nous a fourni des renseignements, contactez-nous afin que nous puissions les supprimer.",
          },
        ],
      },
      {
        id: "11",
        title: "11. Liens vers des sites tiers",
        content: [
          {
            type: "text",
            text: "Notre site peut contenir des liens vers des sites tiers (Facebook, Google Maps). Ces sites ont leurs propres politiques de confidentialité sur lesquelles nous n'avons aucun contrôle. Nous vous encourageons à lire leur politique de confidentialité.",
          },
        ],
      },
      {
        id: "12",
        title: "12. Modifications de la présente politique",
        content: [
          {
            type: "text",
            text: "Nous nous réservons le droit de modifier cette politique à tout moment. Toute modification importante sera affichée sur cette page avec une date de mise à jour révisée. En continuant à utiliser notre site après toute modification, vous acceptez la politique mise à jour.",
          },
        ],
      },
      {
        id: "13",
        title: "13. Nous contacter",
        content: [
          {
            type: "text",
            text: "Pour toute question, demande d'accès, rectification ou suppression de vos données :",
          },
          {
            type: "block",
            lines: [
              "Groupe B.C.M. Inc.",
              "À l'attention de : [NOM_RESPONSABLE], Responsable de la protection des renseignements personnels",
              "604, rue Rhéaume, Saint-Jean-sur-Richelieu (Québec)",
              "Courriel : info@groupe-bcm.com",
              "Téléphone : 450-741-1351",
            ],
          },
          {
            type: "text",
            text: "Vous pouvez également déposer une plainte auprès de la Commission d'accès à l'information du Québec (www.cai.gouv.qc.ca) ou, pour les résidents de l'UE, auprès de votre autorité nationale de protection des données.",
          },
        ],
      },
    ],
  },

  en: {
    effectiveDate: "Effective date: March 1, 2026",
    lastUpdated: "Last updated: March 1, 2026",
    intro:
      "Groupe B.C.M. Inc. ('we', 'our', 'us') is committed to protecting the privacy of visitors to our website and individuals who contact us. This Privacy Policy explains what information we collect, why we collect it, how we use it, and your rights in relation to it. It complies with Quebec Law 25 (Act to modernize legislative provisions as regards the protection of personal information), the Personal Information Protection and Electronic Documents Act (PIPEDA), the General Data Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA).",
    sections: [
      {
        id: "1",
        title: "1. Contact Information and Privacy Officer",
        content: [
          {
            type: "text",
            text: "The data controller responsible for your personal information is:",
          },
          {
            type: "block",
            lines: [
              "Groupe B.C.M. Inc.",
              "Montreal, Quebec",
              "Phone: 450-741-1351",
              "Email: info@groupe-bcm.com",
            ],
          },
          {
            type: "text",
            text: "To exercise your rights or for any questions relating to this policy, please contact our Privacy Officer at the address above.",
          },
        ],
      },
      {
        id: "2",
        title: "2. What Personal Information Do We Collect?",
        content: [
          { type: "subtitle", text: "2.1 Information You Provide Directly" },
          {
            type: "text",
            text: "When you submit our quote request form or send a job application, we may collect:",
          },
          {
            type: "list",
            items: [
              "Full name",
              "Email address",
              "Phone number",
              "Project type and description",
              "CV and professional information (job applications only)",
            ],
          },
          {
            type: "subtitle",
            text: "2.2 Information Collected Automatically by Third Parties",
          },
          {
            type: "text",
            text: "Our website integrates third-party services that may collect certain technical data as part of their own operation. We do not control these collections (see Section 6).",
          },
          {
            type: "list",
            items: [
              "IP address (via Google Fonts, Google Maps, GitHub Pages hosting)",
              "Browser type and operating system (GitHub Pages server logs)",
              "Pages visited and date/time of visit",
            ],
          },
          { type: "subtitle", text: "2.3 What We Do NOT Collect" },
          {
            type: "list",
            items: [
              "No cookies are placed by our website",
              "No user geolocation data",
              "No payment or financial information",
              "No cross-site browsing data",
              "No analytics or tracking tools (Google Analytics, Meta Pixel, etc.)",
            ],
          },
        ],
      },
      {
        id: "3",
        title:
          "3. Why Do We Collect Your Information? (Purposes and Legal Bases)",
        content: [
          {
            type: "table",
            headers: ["Purpose", "Data Type", "Legal Basis"],
            rows: [
              [
                "Responding to your quote request",
                "Name, email, phone, project description",
                "Consent (PIPEDA, GDPR Art. 6(1)(a)); performance of a contract (GDPR Art. 6(1)(b))",
              ],
              [
                "Processing your job application",
                "Name, email, phone, CV",
                "Consent (PIPEDA, GDPR Art. 6(1)(a))",
              ],
              [
                "Improving services and communicating with you",
                "Email, phone",
                "Legitimate interest (GDPR Art. 6(1)(f)); consent (PIPEDA)",
              ],
              [
                "Compliance with legal obligations",
                "All relevant information",
                "Legal obligation (GDPR Art. 6(1)(c))",
              ],
            ],
          },
          {
            type: "text",
            text: "We only use your information for the purposes for which it was collected, unless required by law or with your express consent.",
          },
        ],
      },
      {
        id: "4",
        title: "4. How Is Your Information Transmitted and Stored?",
        content: [
          { type: "subtitle", text: "4.1 Contact Form Transmission" },
          {
            type: "text",
            text: "Our contact form uses the mailto protocol. When you submit the form, your browser opens your personal email application with the information pre-filled. The data does not pass through our servers — it is sent directly from your email client to info@groupe-bcm.com. Security of this transmission depends on your email provider.",
          },
          { type: "subtitle", text: "4.2 Website Hosting" },
          {
            type: "text",
            text: "Our website is hosted on GitHub Pages (GitHub Inc., a Microsoft subsidiary), with servers in the United States. GitHub may collect server log data (IP address, browser, access time) per its own privacy policy.",
          },
          { type: "subtitle", text: "4.3 Message Storage" },
          {
            type: "text",
            text: "Emails you send us are stored in our secure email system. We do not maintain any centralized database of website requests.",
          },
        ],
      },
      {
        id: "5",
        title: "5. Data Retention Periods",
        content: [
          {
            type: "table",
            headers: ["Data Type", "Retention Period", "Justification"],
            rows: [
              [
                "Quote requests (emails)",
                "2 years from last communication",
                "Potential business relationship; civil prescription period (Quebec)",
              ],
              [
                "Unsuccessful job applications",
                "6 months from decision",
                "Employment law (Act respecting labour standards, Quebec)",
              ],
              [
                "Successful applications (employees)",
                "Duration of employment + 7 years",
                "Tax and legal obligations",
              ],
              [
                "Server logs (GitHub Pages)",
                "Per GitHub policy (generally 30 days)",
                "Security and abuse detection",
              ],
            ],
          },
          {
            type: "text",
            text: "Upon expiry of these periods, data is securely deleted or anonymized.",
          },
        ],
      },
      {
        id: "6",
        title: "6. Third-Party Services",
        content: [
          {
            type: "table",
            headers: [
              "Service",
              "Provider",
              "Country",
              "Data Transmitted",
              "Privacy Policy",
            ],
            rows: [
              [
                "Google Fonts",
                "Google LLC",
                "United States",
                "IP address, browser (font loading)",
                "policies.google.com/privacy",
              ],
              [
                "Google Maps (embedded)",
                "Google LLC",
                "United States",
                "IP address, map interaction data",
                "policies.google.com/privacy",
              ],
              [
                "GitHub Pages (hosting)",
                "GitHub Inc. (Microsoft)",
                "United States",
                "IP address, browser, pages visited",
                "docs.github.com/site-policy",
              ],
              [
                "Pexels (images)",
                "Canva Pty Ltd",
                "Australia / Global CDN",
                "IP address (image loading)",
                "pexels.com/privacy-policy",
              ],
              [
                "Facebook (external link)",
                "Meta Platforms Inc.",
                "United States",
                "Data collected by Meta only if you click the link",
                "facebook.com/privacy/policy",
              ],
            ],
          },
          {
            type: "text",
            text: "Transfers to the United States and Australia are made on the basis of standard contractual clauses (GDPR Art. 46) or consent. We encourage you to consult the privacy policies of these services.",
          },
        ],
      },
      {
        id: "7",
        title: "7. Cookies and Tracking Technologies",
        content: [
          {
            type: "text",
            text: "Our website uses NO cookies of our own. No behavioral analytics, advertising retargeting, or cross-site tracking tools are present on this site.",
          },
          {
            type: "text",
            text: "Integrated third-party services (Google Fonts, Google Maps, Pexels) may place their own cookies during your visit, beyond our control.",
          },
        ],
      },
      {
        id: "8",
        title: "8. Your Rights",
        content: [
          {
            type: "subtitle",
            text: "8.1 Rights under Quebec Law 25 and PIPEDA (Canada)",
          },
          {
            type: "list",
            items: [
              "Right of access: obtain a copy of the personal information we hold about you.",
              "Right of rectification: correct any inaccurate or incomplete information.",
              "Right to withdraw consent: withdraw your consent at any time.",
              "Right to portability (Law 25): receive your data in a structured, commonly used format.",
              "Right to deletion (Law 25): request deletion when retention is no longer necessary.",
              "Right to file a complaint with the Commission d'accès à l'information (CAI) of Quebec.",
            ],
          },
          { type: "subtitle", text: "8.2 GDPR Rights (EU/EEA visitors)" },
          {
            type: "list",
            items: [
              "Right of access (Art. 15)",
              "Right of rectification (Art. 16)",
              "Right to erasure / right to be forgotten (Art. 17)",
              "Right to restriction of processing (Art. 18)",
              "Right to data portability (Art. 20)",
              "Right to object (Art. 21)",
              "Right not to be subject to automated decision-making (Art. 22)",
              "Right to lodge a complaint with your national data protection authority.",
            ],
          },
          { type: "subtitle", text: "8.3 CCPA Rights (California Residents)" },
          {
            type: "list",
            items: [
              "Right to know what personal information is collected, used, shared, or sold.",
              "Right to delete personal information collected.",
              "Right to opt-out of sale of personal information (note: we do NOT sell your data).",
              "Right to non-discrimination when exercising your CCPA rights.",
            ],
          },
          {
            type: "text",
            text: "To exercise any of these rights, contact us at info@groupe-bcm.com. We will respond within legally required timeframes: 30 days (PIPEDA/GDPR) or 45 days (CCPA).",
          },
        ],
      },
      {
        id: "9",
        title: "9. Security",
        content: [
          {
            type: "text",
            text: "We implement appropriate security measures to protect your personal information against loss, unauthorized access, disclosure, or alteration:",
          },
          {
            type: "list",
            items: [
              "Email communications protected by our provider's security measures",
              "Website served exclusively via HTTPS",
              "Access to personal information limited to employees who need it",
              "No database exposed on the Internet",
            ],
          },
          {
            type: "text",
            text: "In the event of a privacy breach, we will act in accordance with Law 25, notifying the Commission d'accès à l'information and affected individuals when there is a risk of serious harm.",
          },
        ],
      },
      {
        id: "10",
        title: "10. Minors",
        content: [
          {
            type: "text",
            text: "Our website is not directed at persons under the age of 14 and we do not knowingly collect their personal information. If you become aware that a minor has provided us with data, please contact us so we can delete it.",
          },
        ],
      },
      {
        id: "11",
        title: "11. Links to Third-Party Sites",
        content: [
          {
            type: "text",
            text: "Our site may contain links to third-party websites (Facebook, Google Maps). These sites have their own privacy policies over which we have no control. We encourage you to read their privacy policies.",
          },
        ],
      },
      {
        id: "12",
        title: "12. Changes to This Policy",
        content: [
          {
            type: "text",
            text: "We reserve the right to modify this policy at any time. Significant changes will be posted on this page with a revised update date. By continuing to use our site after any changes, you accept the updated policy.",
          },
        ],
      },
      {
        id: "13",
        title: "13. Contact Us",
        content: [
          {
            type: "text",
            text: "For any questions, access requests, data corrections or deletions:",
          },
          {
            type: "block",
            lines: [
              "Groupe B.C.M. Inc.",
              "Attention: [NOM_RESPONSABLE], Privacy Officer",
              "604 Rue Rhéaume, Saint-Jean-sur-Richelieu, Quebec",
              "Email: info@groupe-bcm.com",
              "Phone: 450-741-1351",
            ],
          },
          {
            type: "text",
            text: "You may also file a complaint with the Commission d'accès à l'information du Québec (www.cai.gouv.qc.ca) or, for EU residents, with your national data protection authority.",
          },
        ],
      },
    ],
  },
};

type AnyItem =
  | { type: "text"; text: string }
  | { type: "subtitle"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "block"; lines: readonly string[] }
  | {
      type: "table";
      headers: readonly string[];
      rows: readonly (readonly string[])[];
    };

function renderItem(item: AnyItem, idx: number) {
  switch (item.type) {
    case "text":
      return (
        <p key={idx} className="text-bcm-silver text-sm leading-relaxed mb-4">
          {item.text}
        </p>
      );
    case "subtitle":
      return (
        <h3
          key={idx}
          className="font-display font-bold text-base uppercase tracking-wide text-white mt-7 mb-3"
        >
          {item.text}
        </h3>
      );
    case "list":
      return (
        <ul key={idx} className="space-y-2 mb-4 pl-1">
          {item.items.map((li, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-bcm-silver text-sm"
            >
              <span className="w-1.5 h-1.5 bg-bcm-red rounded-full flex-shrink-0 mt-1.5" />
              {li}
            </li>
          ))}
        </ul>
      );
    case "block":
      return (
        <div
          key={idx}
          className="bg-bcm-coal border-l-4 border-bcm-red px-6 py-4 my-4"
        >
          {item.lines.map((line, i) => (
            <p key={i} className="text-bcm-silver text-sm leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      );
    case "table":
      return (
        <div key={idx} className="overflow-x-auto my-5">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-bcm-red/10 border-b border-bcm-red/30">
                {item.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 font-display font-bold uppercase tracking-wider text-white text-[10px] whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-bcm-coal" : "bg-white/[0.02]"}
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 text-bcm-silver border-b border-white/5 align-top leading-relaxed"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function PrivacyPolicy() {
  const { lang } = useLanguage();
  const data = policy[lang];

  return (
    <>
      {/* ─── PAGE HERO ───────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-glow" />
        <div className="container-xl relative z-10">
          <span className="label mb-5">
            {lang === "fr" ? "Vie privée" : "Privacy"}
          </span>
          <h1 className="page-title mb-4">
            {lang === "fr" ? (
              <>
                Politique de
                <br />
                <span className="text-bcm-red">confidentialité</span>
              </>
            ) : (
              <>
                Privacy
                <br />
                <span className="text-bcm-red">Policy</span>
              </>
            )}
          </h1>
          <p className="text-bcm-silver text-sm mt-4">
            {data.effectiveDate}
            <span className="mx-3 text-white/20">|</span>
            {data.lastUpdated}
          </p>
        </div>
      </div>

      {/* ─── CONTENT ─────────────────────────────────────────── */}
      <section className="section-pad bg-bcm-dark">
        <div className="container-xl">
          <div className="max-w-4xl">
            {/* Intro box */}
            <div className="bg-bcm-coal border border-white/5 border-l-4 border-l-bcm-red px-8 py-6 mb-12">
              <p className="text-bcm-silver text-sm leading-relaxed">
                {data.intro}
              </p>
            </div>

            {/* Sections */}
            {data.sections.map((section) => (
              <div
                key={section.id}
                className="mb-10 pb-10 border-b border-white/5 last:border-0"
              >
                <h2 className="font-display font-black text-lg uppercase tracking-wide text-white mb-5 flex items-start gap-3">
                  <span className="text-bcm-red text-sm mt-0.5">§</span>
                  {section.title}
                </h2>
                {(section.content as AnyItem[]).map((item, idx) =>
                  renderItem(item, idx),
                )}
              </div>
            ))}

            {/* Jurisdiction footer */}
            <div className="bg-bcm-coal border border-bcm-red/20 p-6 mt-4">
              <p className="font-display font-bold text-[10px] uppercase tracking-[0.2em] text-bcm-red mb-2">
                {lang === "fr"
                  ? "Juridiction principale"
                  : "Primary Jurisdiction"}
              </p>
              <p className="text-bcm-silver text-xs leading-relaxed">
                {lang === "fr"
                  ? "Cette politique est régie par les lois de la province de Québec et du Canada. Elle constitue un effort de bonne foi pour se conformer simultanément à la Loi 25 (Québec), à la LPRPDE (Canada), au RGPD (Union européenne) et au CCPA (Californie, É.-U.)."
                  : "This policy is governed by the laws of the Province of Quebec and Canada. It represents a good-faith effort to simultaneously comply with Law 25 (Quebec), PIPEDA (Canada), GDPR (European Union), and CCPA (California, U.S.A.)."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

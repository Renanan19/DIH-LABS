// Progressive enhancement: reveal animations only when JS is available
document.documentElement.classList.add('js');

// Translations
const translations = {
    fr: {
        head_title: "DIH LABS | StreamVision : Le Meilleur Lecteur IPTV Gratuit Sans Pub",
        description: "Découvrez StreamVision, le meilleur lecteur IPTV gratuit et sans publicité de 2026. Une solution 100% légale et performante pour iPhone et Android. Rejoignez le Lab.",
        "og:title": "DIH LABS | Laboratoire d'Innovation Digitale",
        "og:description": "DIH LABS - Association de conception, développement et édition d'applications mobiles et web.",
        "twitter:title": "DIH LABS | Laboratoire d'Innovation Digitale",
        "twitter:description": "DIH LABS - Association de conception, développement et édition d'applications mobiles et web.",
        skip_link: "Passer au contenu principal",
        nav_apps: "Applications",
        nav_purpose: "Le Lab",
        nav_method: "Méthode",
        nav_membership: "Adhésion",
        nav_support: "Soutenir",
        nav_contact: "Contact",
        hero_eyebrow: "Laboratoire d'innovation digitale — Paris",
        hero_title: "L'innovation digitale, <em class=\"serif\">façonnée</em> par le collectif.",
        hero_desc: "Association à but non lucratif dédiée à la conception d'applications mobiles et web de nouvelle génération. Nous développons, nous apprenons, nous diffusons.",
        hero_cta_apps: "Découvrir les applications",
        hero_cta_join: "Rejoindre le Lab",
        marquee_items: "StreamVision <i>&#10022;</i> Sun Day <i>&#10022;</i> SmartCaddie <i>&#10022;</i> Sauna Cycle <i>&#10022;</i> Pulse <i>&#10022;</i> Sillon <i>&#10022;</i> iOS <i>&#10022;</i> Android <i>&#10022;</i> Google TV <i>&#10022;</i> Fire TV <i>&#10022;</i> 100% gratuit <i>&#10022;</i> Sans publicité <i>&#10022;</i>",
        apps_label: "01 — Applications",
        apps_title: "Six applications, <span class=\"serif\">une exigence.</span>",
        sv_desc: "Le lecteur IPTV 100% gratuit et sans publicité. Playlists M3U & Xtream Codes, guide EPG complet — sur iPhone, Android, Google TV et Fire TV.",
        sv_link: "Découvrir StreamVision",
        tag_health: "Santé",
        sd_desc: "L'indice UV en temps réel et votre synthèse de vitamine D, calculés selon votre type de peau. Le soleil, en toute connaissance.",
        sd_link: "Découvrir Sun Day",
        tag_ai: "IA embarquée",
        sc_desc: "L'analyse de swing de golf par intelligence artificielle, directement sur votre téléphone. Vision par ordinateur 100% embarquée.",
        sc_link: "Découvrir SmartCaddie",
        tag_recovery: "Récupération",
        sy_desc: "Le compagnon de vos séances sauna & bain froid : cycles guidés chaud-froid-repos, Score d'Adaptation Thermique et suivi Apple Health optionnel. Chaud. Froid. Repos.",
        sy_link: "Découvrir Sauna Cycle",
        pl_desc: "Votre risque de burn-out en un score, avec une prévision à 7 jours. Sommeil, VFC, fréquence cardiaque et un point quotidien de 30 secondes — tout est calculé sur l'iPhone, rien n'en sort.",
        pl_link: "Découvrir Pulse",
        tag_sleep: "Sommeil",
        tag_offline: "Hors ligne",
        si_desc: "Une carte de santé par jour : un geste principal, deux ou trois appuis, une idée. 109 pratiques notées A, B ou C, 153 sources primaires vérifiées. Aucun compte, aucune publicité — et pas une ligne de code réseau.",
        si_link: "Découvrir Sillon",
        lab_label: "02 — Le Lab",
        lab_title: "Un ADN <span class=\"serif\">d'expérimentation.</span>",
        lab_lead: "DIH LABS est une association à but non lucratif : chaque application est conçue comme un objet <span class=\"serif\">soigné</span> — gratuit, respectueux de la vie privée, pensé pour durer.",
        purpose_card_1_title: "Ingénierie Mobile",
        purpose_card_1_desc: "Nous concevons des applications robustes pour iOS et Android, de la première ligne de code à la mise en ligne sur les stores (App Store & Google Play).",
        purpose_card_2_title: "Contenus Innovants",
        purpose_card_2_desc: "Plus que des outils, nous créons des expériences numériques riches, axées sur l'ergonomie et la valeur ajoutée pour l'utilisateur final.",
        purpose_card_3_title: "Diffusion & Partage",
        purpose_card_3_desc: "Nous organisons des événements, des sessions de formation et des actions de communication pour faire vivre nos projets.",
        stat_1l: "Applications publiées",
        stat_2l: "Plateformes couvertes",
        stat_3l: "Publicité intrusive",
        stat_4l: "Des revenus réinvestis",
        method_label: "03 — La méthode",
        method_title: "Du premier commit <span class=\"serif\">au store.</span>",
        activities_item_1_title: "Cycle de Vie Logiciel",
        activities_item_1_desc: "Nous couvrons l'intégralité du cycle de vie des produits : conception UI/UX, développement full-stack, exploitation et maintenance évolutive.",
        activities_item_2_title: "Économie Circulaire Numérique",
        activities_item_2_desc: "Nos revenus (publicité, in-app, abonnements) sont réinvestis pour financer nos futurs projets et soutenir l'objet social de l'association.",
        activities_item_3_title: "Collaboration Ouverte",
        activities_item_3_desc: "Nous accueillons membres actifs et bienfaiteurs pour enrichir notre laboratoire de nouvelles compétences et perspectives.",
        join_label: "04 — Adhésion",
        membership_title: "Rejoindre <span class=\"serif\">le Lab.</span>",
        membership_desc: "DIH LABS est avant tout un collectif. Que vous soyez développeur, designer ou stratège, venez transformer vos idées en applications concrètes.",
        membership_btn: "Envoyer une candidature",
        membership_address: "Siège social : 31 Rue Linné, 75005 Paris",
        faq_q1: "Comment fonctionne l'admission ?",
        faq_a1: "L'admission est soumise à l'agrément du bureau (Art. 6). Envoyez-nous un court mail avec vos motivations.",
        faq_q2: "Quelles sont les ressources ?",
        faq_a2: "Cotisations, dons et revenus des applications (pub/achats in-app) sont réinvestis dans nos projets (Art. 8).",
        faq_q3: "Rémunération des membres ?",
        faq_a3: "Les fonctions sont bénévoles par défaut. Des rémunérations spécifiques peuvent être votées par l'AG (Art. 13).",
        faq_q4: "Sur quels stores publiez-vous ?",
        faq_a4: "Prioritairement App Store et Google Play, conformément à notre objet social de diffusion globale (Art. 2).",
        faq_q5: "Puis-je devenir bienfaiteur ?",
        faq_a5: "Oui, toute personne peut soutenir l'association par un don ou un apport exceptionnel (Art. 5).",
        sup_label: "05 — Soutenir",
        sup_title: "Un don, <span class=\"serif\">en un éclair.</span>",
        sup_desc: "Nos applications sont gratuites et sans publicité. Si elles vous sont utiles, vous pouvez soutenir le Lab d'un don en Bitcoin via le réseau Lightning : instantané, sans intermédiaire, dès quelques satoshis.",
        sup_note: "Conformément à nos statuts (Art. 8), chaque don est intégralement réinvesti dans le développement des applications.",
        sup_copy: "Copier l'adresse",
        sup_copied: "Copié !",
        sup_how: "Comment faire un don Lightning",
        sup_qr_hint: "Scannez avec un portefeuille Lightning",
        donate_url: "/dons/",
        contact_label: "Contact",
        contact_title: "Une idée, une question&nbsp;? <span class=\"serif\">Travaillons ensemble.</span>",
        meta_org: "Association",
        meta_org_val: "Loi 1901 — fondée à Paris le 18/02/2026",
        meta_hq: "Siège social",
        footer_copy: "&copy; 2026 DIH LABS — Laboratoire d'Innovation Digitale",
        footer_press: "Presse & Media Kit",
        footer_legal: "Légal & Confidentialité",
        footer_donate: "Faire un don"
    },
    en: {
        head_title: "DIH LABS | Digital Innovation Laboratory",
        description: "DIH LABS - Association for the design, development and publishing of mobile and web applications.",
        "og:title": "DIH LABS | Digital Innovation Laboratory",
        "og:description": "DIH LABS - Association for the design, development and publishing of mobile and web applications.",
        "twitter:title": "DIH LABS | Digital Innovation Laboratory",
        "twitter:description": "DIH LABS - Association for the design, development and publishing of mobile and web applications.",
        skip_link: "Skip to main content",
        nav_apps: "Apps",
        nav_purpose: "The Lab",
        nav_method: "Method",
        nav_membership: "Membership",
        nav_support: "Support",
        nav_contact: "Contact",
        hero_eyebrow: "Digital innovation laboratory — Paris",
        hero_title: "Digital innovation, <em class=\"serif\">shaped</em> by the collective.",
        hero_desc: "Non-profit association dedicated to the design of next-generation mobile and web applications. We develop, we learn, we disseminate.",
        hero_cta_apps: "Explore the apps",
        hero_cta_join: "Join the Lab",
        marquee_items: "StreamVision <i>&#10022;</i> Sun Day <i>&#10022;</i> SmartCaddie <i>&#10022;</i> Sauna Cycle <i>&#10022;</i> Pulse <i>&#10022;</i> Sillon <i>&#10022;</i> iOS <i>&#10022;</i> Android <i>&#10022;</i> Google TV <i>&#10022;</i> Fire TV <i>&#10022;</i> Free forever <i>&#10022;</i> No ads <i>&#10022;</i>",
        apps_label: "01 — Applications",
        apps_title: "Six apps, <span class=\"serif\">one standard.</span>",
        sv_desc: "The 100% free, ad-free IPTV player. M3U & Xtream Codes playlists, full EPG guide — on iPhone, Android, Google TV and Fire TV.",
        sv_link: "Discover StreamVision",
        tag_health: "Health",
        sd_desc: "Real-time UV index and your vitamin D synthesis, tailored to your skin type. Enjoy the sun, knowingly.",
        sd_link: "Discover Sun Day",
        tag_ai: "On-device AI",
        sc_desc: "AI-powered golf swing analysis, right on your phone. Computer vision running 100% on-device.",
        sc_link: "Discover SmartCaddie",
        tag_recovery: "Recovery",
        sy_desc: "The companion for your sauna & cold plunge sessions: guided heat-cold-rest cycles, a Thermal Adaptation Score and optional Apple Health tracking. Heat. Cold. Rest.",
        sy_link: "Discover Sauna Cycle",
        pl_desc: "Your burnout risk as one score, with a 7-day forecast. Sleep, HRV, heart rate and a 30-second daily check-in — all computed on the iPhone, nothing leaves it.",
        pl_link: "Discover Pulse",
        tag_sleep: "Sleep",
        tag_offline: "Offline",
        si_desc: "One health card a day: an anchor practice, two or three supports, one idea. 109 practices graded A, B or C, 153 verified primary sources. No account, no ads — and not one line of networking code.",
        si_link: "Discover Sillon",
        lab_label: "02 — The Lab",
        lab_title: "A DNA of <span class=\"serif\">experimentation.</span>",
        lab_lead: "DIH LABS is a non-profit collective: every app is crafted like a <span class=\"serif\">considered</span> object — free, privacy-first, built to last.",
        purpose_card_1_title: "Mobile Engineering",
        purpose_card_1_desc: "We design robust applications for iOS and Android, from the first line of code to the release on the stores (App Store & Google Play).",
        purpose_card_2_title: "Innovative Content",
        purpose_card_2_desc: "More than tools, we create rich digital experiences, focused on ergonomics and added value for the end user.",
        purpose_card_3_title: "Dissemination & Sharing",
        purpose_card_3_desc: "We organize events, training sessions and communication actions to bring our projects to life.",
        stat_1l: "Apps published",
        stat_2l: "Platforms covered",
        stat_3l: "Intrusive ads",
        stat_4l: "Revenue reinvested",
        method_label: "03 — The method",
        method_title: "From first commit <span class=\"serif\">to the store.</span>",
        activities_item_1_title: "Software Life Cycle",
        activities_item_1_desc: "We cover the entire product life cycle: UI/UX design, full-stack development, operation and evolutive maintenance.",
        activities_item_2_title: "Digital Circular Economy",
        activities_item_2_desc: "Our revenues (advertising, in-app, subscriptions) are reinvested to finance our future projects and support the social purpose of the association.",
        activities_item_3_title: "Open Collaboration",
        activities_item_3_desc: "We welcome active members and benefactors to enrich our laboratory with new skills and perspectives.",
        join_label: "04 — Membership",
        membership_title: "Join <span class=\"serif\">the Lab.</span>",
        membership_desc: "DIH LABS is above all a collective. Whether you are a developer, designer or strategist, come and transform your ideas into concrete applications.",
        membership_btn: "Send an application",
        membership_address: "Registered office: 31 Rue Linné, 75005 Paris",
        faq_q1: "How does admission work?",
        faq_a1: "Admission is subject to the approval of the board (Art. 6). Send us a short email with your motivations.",
        faq_q2: "What are the resources?",
        faq_a2: "Membership fees, donations and app revenue (ads/in-app purchases) are reinvested in our projects (Art. 8).",
        faq_q3: "Member remuneration?",
        faq_a3: "Positions are voluntary by default. Specific remunerations can be voted by the General Assembly (Art. 13).",
        faq_q4: "On which stores do you publish?",
        faq_a4: "Primarily App Store and Google Play, in accordance with our social purpose of global dissemination (Art. 2).",
        faq_q5: "Can I become a benefactor?",
        faq_a5: "Yes, anyone can support the association through a donation or an exceptional contribution (Art. 5).",
        sup_label: "05 — Support",
        sup_title: "A donation, <span class=\"serif\">at lightning speed.</span>",
        sup_desc: "Our apps are free and ad-free. If they are useful to you, you can support the Lab with a Bitcoin donation over the Lightning Network: instant, permissionless, from just a few satoshis.",
        sup_note: "As per our statutes (Art. 8), every donation is fully reinvested in the development of our applications.",
        sup_copy: "Copy address",
        sup_copied: "Copied!",
        sup_how: "How to send a Lightning donation",
        sup_qr_hint: "Scan with a Lightning wallet",
        donate_url: "/donate/",
        contact_label: "Contact",
        contact_title: "An idea, a question? <span class=\"serif\">Let's build together.</span>",
        meta_org: "Association",
        meta_org_val: "French Law 1901 non-profit — founded in Paris on 02/18/2026",
        meta_hq: "Registered office",
        footer_copy: "&copy; 2026 DIH LABS — Digital Innovation Laboratory",
        footer_press: "Press Room & Media Kit",
        footer_legal: "Legal & Privacy",
        footer_donate: "Donate"
    }
};

// Language Switching Logic
function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('preferred-lang', lang);

    // Update text content for elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update href for language-dependent links
    document.querySelectorAll('[data-i18n-href]').forEach(el => {
        const key = el.getAttribute('data-i18n-href');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('href', translations[lang][key]);
        }
    });

    // Update meta tags
    document.querySelectorAll('[data-i18n-meta]').forEach(el => {
        const key = el.getAttribute('data-i18n-meta');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('content', translations[lang][key]);
        }
    });

    // Update Head Title separately
    if (translations[lang] && translations[lang].head_title) {
        document.title = translations[lang].head_title;
    }

    // Update active state of buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update aria-labels for buttons
    const frBtn = document.querySelector('.lang-btn[data-lang="fr"]');
    const enBtn = document.querySelector('.lang-btn[data-lang="en"]');
    if (frBtn) frBtn.setAttribute('aria-label', lang === 'fr' ? 'Passer en français' : 'Switch to French');
    if (enBtn) enBtn.setAttribute('aria-label', lang === 'fr' ? 'Passer en anglais' : 'Switch to English');
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Language
    const savedLang = localStorage.getItem('preferred-lang') || (navigator.language.startsWith('en') ? 'en' : 'fr');
    setLanguage(savedLang);

    // Language Button Listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Header scrolled state
    const header = document.querySelector('header');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('open');
            menuToggle.classList.toggle('open', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            document.body.style.overflow = isOpen ? 'hidden' : '';

            const lang = document.documentElement.lang;
            menuToggle.setAttribute('aria-label', isOpen
                ? (lang === 'fr' ? 'Fermer le menu' : 'Close menu')
                : (lang === 'fr' ? 'Ouvrir le menu' : 'Open menu'));
        });

        // Close menu when clicking a link
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('open');
                menuToggle.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                const lang = document.documentElement.lang;
                menuToggle.setAttribute('aria-label', lang === 'fr' ? 'Ouvrir le menu' : 'Open menu');
            });
        });
    }

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            const isOpen = item.classList.toggle('open');
            question.setAttribute('aria-expanded', String(isOpen));
        });
    });

    // Copy Lightning address
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const address = btn.getAttribute('data-copy');
            const label = btn.querySelector('[data-i18n="sup_copy"]') || btn;
            const lang = document.documentElement.lang;
            const done = () => {
                const original = label.innerHTML;
                label.innerHTML = (translations[lang] && translations[lang].sup_copied) || 'Copié !';
                btn.classList.add('copied');
                setTimeout(() => {
                    label.innerHTML = original;
                    btn.classList.remove('copied');
                }, 2000);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(address).then(done);
            } else {
                const ta = document.createElement('textarea');
                ta.value = address;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
                done();
            }
        });
    });

    // Reveal on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

export type Language = "en" | "fr" | "es" | "ar";

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    pricing: string;
    contact: string;
    getStarted: string;
    toggleTheme: string;
    selectLanguage: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    slogan: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  collection: {
    title: string;
    subtitle: string;
    adNoteTitle: string;
    adNoteText: string;
    adNoteExample: string;
    startingAt: string;
    items: {
      name: string;
      price: string;
    }[];
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    viewProject: string;
    items: {
      title: string;
      category: string;
      description: string;
    }[];
  };
  pricing: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    mostPopular: string;
    getStarted: string;
    serviceBreakdown: string;
    plans: {
      name: string;
      price: string;
      period: string;
      description: string;
      features: string[];
    }[];
  };
  about: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    stats: {
      label: string;
      value: string;
    }[];
  };
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    fullName: string;
    emailAddress: string;
    subject: string;
    serviceInterested: string;
    selectService: string;
    message: string;
    sendMessage: string;
    messageSent: string;
    infoTitle: string;
    emailUs: string;
    callUs: string;
    visitUs: string;
    locationText: string;
    workingHours: string;
    workingHoursText: string;
  };
  footer: {
    slogan: string;
    quickLinks: string;
    servicesTitle: string;
    contactUs: string;
    rightsReserved: string;
  };
  bottomNav: {
    home: string;
    about: string;
    projects: string;
    pricing: string;
    contact: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      projects: "Projects",
      pricing: "Pricing",
      contact: "Contact",
      getStarted: "Get Started",
      toggleTheme: "Toggle theme",
      selectLanguage: "Language",
    },
    hero: {
      badge: "Empowering Digital Growth for Modern Brands",
      titlePart1: "Scale Your Business with",
      titlePart2: "Smart Digital Solutions",
      subtitle: "ATLAS 1337 scales businesses with web development, automation, and growth marketing that convert — fast, reliable, and global.",
      slogan: "ATLAS 1337 • Internet For Everyone",
      ctaPrimary: "Get Started",
      ctaSecondary: "Explore Services",
    },
    services: {
      badge: "Our Capabilities",
      title: "Engineered for Exponential Growth",
      subtitle: "Comprehensive solutions tailored to accelerate your business across all digital touchpoints.",
      items: [
        {
          title: "Custom Web Development",
          description: "High-performance, modern websites and web applications built with the latest technologies.",
        },
        {
          title: "AI & Workflow Automation",
          description: "Integrate custom AI chatbots, agents, and automated pipelines to optimize your business operations.",
        },
        {
          title: "Digital Marketing & Ads",
          description: "Data-driven advertising campaigns across Meta, Google, and TikTok designed to maximize ROI.",
        },
        {
          title: "E-Commerce Systems",
          description: "Robust online stores on Shopify, WooCommerce, and custom platforms engineered for conversions.",
        },
        {
          title: "Brand Identity & Design",
          description: "Distinctive visual branding, logos, and UI/UX design systems that leave a lasting impression.",
        },
        {
          title: "Local SEO & Google Maps",
          description: "Rank #1 on Google local search and Google Maps to drive nearby paying customers directly to you.",
        },
      ],
    },
    collection: {
      title: "ATLAS 1337 Collection",
      subtitle: "Individual services tailored to your needs",
      adNoteTitle: "Note on Paid Ads:",
      adNoteText: "Ad spend is paid directly from the client’s account and is not included in our package. Our service only covers campaign setup and management.",
      adNoteExample: "Example: Advertising budgets typically start from $10 per day and may increase depending on the campaign objective and advertising strategy.",
      startingAt: "Starting at",
      items: [
        { name: "Custom Web Development", price: "Starting at $1,500" },
        { name: "AI Chatbots & Assistants", price: "Starting at $500" },
        { name: "Workflow Automation", price: "Starting at $1,000" },
        { name: "Social Media Management", price: "Starting at $400/mo" },
        { name: "Paid Advertising Management", price: "Starting at $600/mo" },
        { name: "Brand Identity & Design", price: "Starting at $800" },
        { name: "SEO & Content Strategy", price: "Starting at $500/mo" },
        { name: "Landing Pages & Funnels", price: "Starting at $700" },
        { name: "NFC Cards & Smart Profiles", price: "Starting at $120" },
        { name: "Google Maps & Local SEO", price: "Starting at $150" },
      ],
    },
    whyUs: {
      badge: "Why Choose Us",
      title: "Why High-Growth Companies Choose ATLAS 1337",
      subtitle: "We combine engineering precision, creative mastery, and AI capabilities to drive measurable revenue.",
      items: [
        {
          title: "Rapid Execution & Delivery",
          description: "We deliver world-class digital products and marketing campaigns with unrivaled speed and agility.",
        },
        {
          title: "Advanced AI-Powered Systems",
          description: "Automate manual tasks, scale customer service 24/7, and harness intelligent analytics.",
        },
        {
          title: "Tailored Growth Strategies",
          description: "No cookie-cutter templates. Every system is specifically architected for your target market and goals.",
        },
        {
          title: "Dedicated Global Support",
          description: "24/7 responsive communication and technical support ensuring continuous uptime and growth.",
        },
      ],
    },
    projects: {
      badge: "Our Portfolio",
      title: "Featured Client Projects",
      subtitle: "Explore some of our recent work across web development, automation, and digital growth.",
      all: "All",
      viewProject: "View Project",
      items: [
        {
          title: "Apex Logistics Platform",
          category: "Web Development",
          description: "Full-scale logistics management portal with real-time fleet tracking and automated client billing.",
        },
        {
          title: "Luxe Glow E-Commerce",
          category: "E-Commerce",
          description: "High-converting Shopify cosmetics store featuring customized product bundles and 3D preview.",
        },
        {
          title: "Nova CRM & AI Support",
          category: "AI & Automation",
          description: "Autonomous customer care agent reducing response times by 85% with multi-channel integration.",
        },
        {
          title: "Global FinTech Funnel",
          category: "Marketing",
          description: "Targeted multi-stage acquisition campaign generating over 12,000 qualified enterprise leads.",
        },
      ],
    },
    pricing: {
      title: "Smart Pricing for",
      titleHighlight: "Smart Businesses",
      subtitle: "Transparent packages designed to scale with your business needs. No hidden fees, just results.",
      mostPopular: "Most Popular",
      getStarted: "Get Started",
      serviceBreakdown: "Service Breakdown",
      plans: [
        {
          name: "ATLAS 1337 Starter",
          price: "$499",
          period: "/month",
          description: "Essential digital presence and automation for growing businesses.",
          features: [
            "Basic Website (Up to 5 pages)",
            "Standard SEO Optimization",
            "1 AI Customer Support Chatbot",
            "Basic Social Media Management (8 posts/mo)",
            "Monthly Performance Report",
            "Email Support",
          ],
        },
        {
          name: "ATLAS 1337 Pro",
          price: "$999",
          period: "/month",
          description: "Comprehensive growth engine with advanced AI and marketing.",
          features: [
            "Custom Web Application / E-commerce",
            "Advanced SEO & Content Strategy",
            "Custom AI Agents & Workflow Automation",
            "Full Social Media Management (15 posts + 4 Reels/mo)",
            "Paid Ads Management (Meta/Google)",
            "Priority 24/7 Support & Weekly Analytics",
          ],
        },
        {
          name: "ATLAS 1337 Elite",
          price: "Custom",
          period: "",
          description: "Tailored enterprise solutions for maximum scale and efficiency.",
          features: [
            "Full-Stack Custom Software Development",
            "Enterprise-grade AI & Automation Systems",
            "Dedicated Account Manager & Growth Strategist",
            "Omnichannel Marketing Campaigns",
            "Brand Identity & Design System",
            "Unlimited Revisions & On-demand Support",
          ],
        },
      ],
    },
    about: {
      badge: "About ATLAS 1337",
      title: "Empowering Next-Gen Businesses with",
      titleHighlight: "Technology & Strategy",
      description: "ATLAS 1337 was founded with a clear mission: to bring elite digital infrastructure, state-of-the-art AI automation, and high-impact marketing to ambitious companies worldwide.",
      missionTitle: "Our Mission",
      missionText: "To bridge the gap between complex technological breakthroughs and real-world business revenue, delivering bespoke solutions that outpace competition.",
      visionTitle: "Our Vision",
      visionText: "To become the global standard for modern digital agency excellence — where intelligence, speed, and design converge.",
      stats: [
        { label: "Successful Projects", value: "150+" },
        { label: "Client Retention Rate", value: "98%" },
        { label: "Countries Served", value: "24+" },
        { label: "Average ROI Multiplier", value: "4.8x" },
      ],
    },
    contact: {
      badge: "Get In Touch",
      title: "Let's Build Something",
      titleHighlight: "Extraordinary Together",
      subtitle: "Ready to scale your business? Reach out to our team of specialists for a consultation and free proposal.",
      fullName: "Full Name",
      emailAddress: "Email Address",
      subject: "Subject",
      serviceInterested: "Service Interested In",
      selectService: "Select a service...",
      message: "Message",
      sendMessage: "Send Message",
      messageSent: "Thank you! Your message has been sent successfully. We will reply within 24 hours.",
      infoTitle: "Contact Information",
      emailUs: "Email Us",
      callUs: "Call / WhatsApp",
      visitUs: "Office Location",
      locationText: "Rabat, Morocco — Serving Clients Globally",
      workingHours: "Operating Hours",
      workingHoursText: "Monday – Saturday: 9:00 AM – 7:00 PM (GMT+1)",
    },
    footer: {
      slogan: "Empowering businesses with AI, websites, marketing & automation.",
      quickLinks: "Quick Links",
      servicesTitle: "Services",
      contactUs: "Contact Us",
      rightsReserved: "All rights reserved.",
    },
    bottomNav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      pricing: "Pricing",
      contact: "Contact",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      projects: "Projets",
      pricing: "Tarifs",
      contact: "Contact",
      getStarted: "Démarrer",
      toggleTheme: "Changer de thème",
      selectLanguage: "Langue",
    },
    hero: {
      badge: "Propulsez la Croissance Digitale de Votre Marque",
      titlePart1: "Développez Votre Entreprise avec des",
      titlePart2: "Solutions Digitales Intelligentes",
      subtitle: "ATLAS 1337 propulse les entreprises grâce au développement web, à l'automatisation et au marketing de croissance qui convertissent — rapide, fiable et mondial.",
      slogan: "ATLAS 1337 • Internet Pour Tous",
      ctaPrimary: "Commencer Maintenant",
      ctaSecondary: "Explorer les Services",
    },
    services: {
      badge: "Nos Compétences",
      title: "Conçu pour une Croissance Exponentielle",
      subtitle: "Des solutions complètes et sur mesure pour accélérer votre entreprise sur tous les canaux digitaux.",
      items: [
        {
          title: "Développement Web Sur Mesure",
          description: "Sites web modernes et applications ultra-performantes conçus avec les technologies les plus récentes.",
        },
        {
          title: "IA & Automatisation des Processus",
          description: "Intégrez des chatbots IA, agents intelligents et flux de travail automatisés pour optimiser vos opérations.",
        },
        {
          title: "Marketing Digital & Publicité",
          description: "Campagnes publicitaires ciblées sur Meta, Google et TikTok conçues pour maximiser votre retour sur investissement.",
        },
        {
          title: "Systèmes E-Commerce",
          description: "Boutiques en ligne optimisées sur Shopify, WooCommerce et solutions personnalisées pour générer des ventes.",
        },
        {
          title: "Identité de Marque & Design",
          description: "Identités visuelles distinctives, logos percutants et interfaces UI/UX mémorables.",
        },
        {
          title: "SEO Local & Google Maps",
          description: "Positionnez-vous n°1 sur la recherche locale et Google Maps pour attirer directement des clients qualifiés.",
        },
      ],
    },
    collection: {
      title: "Collection ATLAS 1337",
      subtitle: "Services individuels adaptés à vos besoins",
      adNoteTitle: "Note sur les Publicités Payantes :",
      adNoteText: "Le budget publicitaire est réglé directement depuis le compte client et n'est pas inclus dans nos forfaits. Notre prestation couvre la configuration et la gestion.",
      adNoteExample: "Exemple : Les budgets publicitaires commencent généralement à partir de 10 $ par jour selon l'objectif de la campagne.",
      startingAt: "À partir de",
      items: [
        { name: "Développement Web Personnalisé", price: "À partir de 1 500 $" },
        { name: "Chatbots & Assistants IA", price: "À partir de 500 $" },
        { name: "Automatisation des Flux", price: "À partir de 1 000 $" },
        { name: "Gestion des Réseaux Sociaux", price: "À partir de 400 $/mois" },
        { name: "Gestion des Campagnes Publicitaires", price: "À partir de 600 $/mois" },
        { name: "Identité de Marque & Graphisme", price: "À partir de 800 $" },
        { name: "Stratégie SEO & Contenu", price: "À partir de 500 $/mois" },
        { name: "Pages d'Atterrissage & Tunnels", price: "À partir de 700 $" },
        { name: "Cartes NFC & Profils Intelligents", price: "À partir de 120 $" },
        { name: "Google Maps & SEO Local", price: "À partir de 150 $" },
      ],
    },
    whyUs: {
      badge: "Pourquoi Nous Choisir",
      title: "Pourquoi les Entreprises d'Élite Choisissent ATLAS 1337",
      subtitle: "Nous combinons excellence technique, créativité et puissance de l'IA pour générer un chiffre d'affaires mesurable.",
      items: [
        {
          title: "Exécution et Déploiement Rapides",
          description: "Nous livrons des produits digitaux de classe mondiale et des campagnes marketing avec une réactivité inégalée.",
        },
        {
          title: "Systèmes Basés sur l'IA",
          description: "Automatisez vos tâches manuelles, assurez un service client 24h/24 et 7j/7 et exploitez l'analytique prédictive.",
        },
        {
          title: "Stratégies de Croissance Sur Mesure",
          description: "Pas de modèles génériques. Chaque système est spécifiquement conçu pour votre marché cible et vos objectifs.",
        },
        {
          title: "Support Dédié & International",
          description: "Assistance technique et communication réactive 24/7 pour garantir la continuité et la croissance.",
        },
      ],
    },
    projects: {
      badge: "Notre Portefeuille",
      title: "Projets Récents",
      subtitle: "Découvrez nos réalisations en développement web, automatisation et marketing de croissance.",
      all: "Tous",
      viewProject: "Voir le Projet",
      items: [
        {
          title: "Plateforme Logistique Apex",
          category: "Développement Web",
          description: "Portail de gestion logistique avec suivi de flotte en temps réel et facturation automatisée.",
        },
        {
          title: "Luxe Glow E-Commerce",
          category: "E-Commerce",
          description: "Boutique cosmétique Shopify à fort taux de conversion avec aperçu 3D et paniers intelligents.",
        },
        {
          title: "CRM Nova & Support IA",
          category: "IA & Automatisation",
          description: "Agent de support client autonome réduisant les délais de réponse de 85% sur tous les canaux.",
        },
        {
          title: "Tunnel FinTech International",
          category: "Marketing",
          description: "Campagne d'acquisition multi-canaux ayant généré plus de 12 000 prospects qualifiés.",
        },
      ],
    },
    pricing: {
      title: "Tarification Intelligente pour",
      titleHighlight: "Entreprises Ambitieuses",
      subtitle: "Des formules transparentes conçues pour s'adapter à votre rythme de croissance. Aucun frais caché.",
      mostPopular: "Le Plus Populaire",
      getStarted: "Commencer",
      serviceBreakdown: "Détail des Services",
      plans: [
        {
          name: "ATLAS 1337 Starter",
          price: "499 $",
          period: "/mois",
          description: "Présence digitale essentielle et automatisation pour les entreprises en expansion.",
          features: [
            "Site Web Moderne (Jusqu'à 5 pages)",
            "Optimisation SEO Standard",
            "1 Chatbot IA pour le Support Client",
            "Gestion des Réseaux Sociaux (8 publications/mois)",
            "Rapport Mensuel de Performance",
            "Support par E-mail",
          ],
        },
        {
          name: "ATLAS 1337 Pro",
          price: "999 $",
          period: "/mois",
          description: "Moteur de croissance complet avec IA avancée et marketing omnicanal.",
          features: [
            "Application Web Sur Mesure / E-commerce",
            "Stratégie SEO Avancée & Contenu",
            "Agents IA & Automatisation des Flux",
            "Gestion Complète des Réseaux (15 posts + 4 Reels/mois)",
            "Gestion Publicitaire (Meta/Google Ads)",
            "Support Prioritaire 24/7 & Analyses Hebdomadaires",
          ],
        },
        {
          name: "ATLAS 1337 Elite",
          price: "Sur Mesure",
          period: "",
          description: "Solutions d'entreprise personnalisées pour une envergure et une efficacité maximales.",
          features: [
            "Développement Logiciel Full-Stack Personnalisé",
            "Systèmes d'IA & Automatisation Entreprise",
            "Gestionnaire de Compte Dédié & Stratège",
            "Campagnes Marketing Omnicanales",
            "Identité de Marque & Système de Design",
            "Révisions Illimitées & Support Dédié",
          ],
        },
      ],
    },
    about: {
      badge: "À Propos d'ATLAS 1337",
      title: "Donner aux Entreprises les Clés de la",
      titleHighlight: "Technologie & de la Stratégie",
      description: "ATLAS 1337 a été fondée avec une mission précise : offrir aux entreprises ambitieuses l'infrastructure digitale d'élite, l'automatisation IA et le marketing à fort impact.",
      missionTitle: "Notre Mission",
      missionText: "Combler le fossé entre les innovations technologiques et la rentabilité concrète, en offrant des solutions qui surpassent la concurrence.",
      visionTitle: "Notre Vision",
      visionText: "Devenir la référence mondiale de l'agence digitale moderne — là où l'intelligence, la vélocité et le design convergent.",
      stats: [
        { label: "Projets Réussis", value: "150+" },
        { label: "Taux de Rétention Client", value: "98%" },
        { label: "Pays Desservis", value: "24+" },
        { label: "Multiplicateur Moyen de ROI", value: "4.8x" },
      ],
    },
    contact: {
      badge: "Contactez-Nous",
      title: "Créons Quelque Chose",
      titleHighlight: "d'Extraordinaire Ensemble",
      subtitle: "Prêt à propulser votre entreprise ? Échangez avec notre équipe d'experts pour une consultation et un devis gratuit.",
      fullName: "Nom Complet",
      emailAddress: "Adresse E-mail",
      subject: "Sujet",
      serviceInterested: "Service Souhaité",
      selectService: "Sélectionnez un service...",
      message: "Message",
      sendMessage: "Envoyer le Message",
      messageSent: "Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les 24 heures.",
      infoTitle: "Coordonnées de Contact",
      emailUs: "Écrivez-nous",
      callUs: "Téléphone / WhatsApp",
      visitUs: "Adresse du Bureau",
      locationText: "Rabat, Maroc — Clients Partout dans le Monde",
      workingHours: "Heures d'Ouverture",
      workingHoursText: "Du Lundi au Samedi : 9h00 – 19h00 (GMT+1)",
    },
    footer: {
      slogan: "Propulser les entreprises grâce à l'IA, aux sites web, au marketing et à l'automatisation.",
      quickLinks: "Liens Rapides",
      servicesTitle: "Services",
      contactUs: "Contact",
      rightsReserved: "Tous droits réservés.",
    },
    bottomNav: {
      home: "Accueil",
      about: "À Propos",
      projects: "Projets",
      pricing: "Tarifs",
      contact: "Contact",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      projects: "Proyectos",
      pricing: "Precios",
      contact: "Contacto",
      getStarted: "Comenzar",
      toggleTheme: "Cambiar tema",
      selectLanguage: "Idioma",
    },
    hero: {
      badge: "Impulsando el Crecimiento Digital de Marcas Modernas",
      titlePart1: "Escala Tu Negocio con",
      titlePart2: "Soluciones Digitales Inteligentes",
      subtitle: "ATLAS 1337 escala negocios con desarrollo web, automatización con IA y marketing de alto impacto que convierten — rápido, confiable y global.",
      slogan: "ATLAS 1337 • Internet Para Todos",
      ctaPrimary: "Empezar Ahora",
      ctaSecondary: "Explorar Servicios",
    },
    services: {
      badge: "Nuestras Capacidades",
      title: "Diseñado para el Crecimiento Exponencial",
      subtitle: "Soluciones integrales diseñadas para acelerar tu empresa en todos los canales digitales.",
      items: [
        {
          title: "Desarrollo Web a Medida",
          description: "Sitios web y aplicaciones de alto rendimiento construidas con las tecnologías más avanzadas del mercado.",
        },
        {
          title: "IA y Automatización de Procesos",
          description: "Integra chatbots de IA, agentes autónomos y flujos de trabajo automatizados para optimizar tus operaciones.",
        },
        {
          title: "Marketing Digital y Publicidad",
          description: "Campañas publicitarias en Meta, Google y TikTok diseñadas para maximizar el retorno de inversión.",
        },
        {
          title: "Comercio Electrónico",
          description: "Tiendas online en Shopify, WooCommerce y plataformas a medida diseñadas para convertir visitas en ventas.",
        },
        {
          title: "Identidad de Marca y Diseño",
          description: "Identidades visuales distintivas, logotipos profesionales y sistemas de diseño UI/UX que impactan.",
        },
        {
          title: "SEO Local y Google Maps",
          description: "Posiciónate #1 en búsquedas locales y Google Maps para atraer clientes cercanos directamente a tu negocio.",
        },
      ],
    },
    collection: {
      title: "Colección ATLAS 1337",
      subtitle: "Servicios individuales adaptados a tus necesidades",
      adNoteTitle: "Nota sobre Anuncios Pagados:",
      adNoteText: "El presupuesto publicitario se paga directamente desde la cuenta del cliente y no está incluido en nuestros paquetes. Nuestro servicio cubre la configuración y optimización.",
      adNoteExample: "Ejemplo: Los presupuestos publicitarios suelen comenzar desde $10 por día según el objetivo de la campaña.",
      startingAt: "Desde",
      items: [
        { name: "Desarrollo Web a Medida", price: "Desde $1,500" },
        { name: "Chatbots y Asistentes IA", price: "Desde $500" },
        { name: "Automatización de Procesos", price: "Desde $1,000" },
        { name: "Gestión de Redes Sociales", price: "Desde $400/mes" },
        { name: "Gestión de Publicidad Pagada", price: "Desde $600/mes" },
        { name: "Identidad de Marca y Diseño", price: "Desde $800" },
        { name: "Estrategia SEO y Contenidos", price: "Desde $500/mes" },
        { name: "Páginas de Aterrizaje y Embudos", price: "Desde $700" },
        { name: "Tarjetas NFC y Perfiles Inteligentes", price: "Desde $120" },
        { name: "Google Maps y SEO Local", price: "Desde $150" },
      ],
    },
    whyUs: {
      badge: "¿Por Qué Elegirnos?",
      title: "Por Qué Empresas Líderes Eligen ATLAS 1337",
      subtitle: "Unimos precisión técnica, creatividad y el poder de la IA para generar ingresos medibles.",
      items: [
        {
          title: "Ejecución y Entrega Rápida",
          description: "Entregamos soluciones digitales de clase mundial y campañas de marketing con velocidad y agilidad inigualables.",
        },
        {
          title: "Sistemas Impulsados por IA",
          description: "Automatiza tareas repetitivas, ofrece soporte al cliente 24/7 y aprovecha análisis predictivos inteligentes.",
        },
        {
          title: "Estrategias de Crecimiento Personalizadas",
          description: "Sin plantillas genéricas. Cada proyecto está diseñado específicamente para tu mercado y objetivos.",
        },
        {
          title: "Soporte Global Dedicado",
          description: "Comunicación fluida y asistencia técnica 24/7 para garantizar un funcionamiento continuo.",
        },
      ],
    },
    projects: {
      badge: "Portafolio",
      title: "Proyectos Destacados",
      subtitle: "Descubre nuestros proyectos recientes en desarrollo web, IA y marketing estratégico.",
      all: "Todos",
      viewProject: "Ver Proyecto",
      items: [
        {
          title: "Plataforma Logística Apex",
          category: "Desarrollo Web",
          description: "Portal de gestión logística con seguimiento de flota en tiempo real y facturación automatizada.",
        },
        {
          title: "Luxe Glow E-Commerce",
          category: "Comercio Electrónico",
          description: "Tienda Shopify de cosmética de alta conversión con vista previa 3D y ofertas dinámicas.",
        },
        {
          title: "Nova CRM y Soporte IA",
          category: "IA y Automatización",
          description: "Agente de atención al cliente que reduce los tiempos de respuesta en un 85% de forma multicanal.",
        },
        {
          title: "Embudo FinTech Global",
          category: "Marketing",
          description: "Campaña de adquisición multietapa que generó más de 12,000 leads empresariales calificados.",
        },
      ],
    },
    pricing: {
      title: "Precios Inteligentes para",
      titleHighlight: "Negocios Inteligentes",
      subtitle: "Paquetes transparentes diseñados para escalar con tu negocio. Sin costos ocultos, solo resultados.",
      mostPopular: "Más Popular",
      getStarted: "Comenzar",
      serviceBreakdown: "Desglose de Servicios",
      plans: [
        {
          name: "ATLAS 1337 Starter",
          price: "$499",
          period: "/mes",
          description: "Presencia digital esencial y automatizaciones básicas para empresas en crecimiento.",
          features: [
            "Sitio Web Básico (Hasta 5 páginas)",
            "Optimización SEO Estándar",
            "1 Chatbot de Atención al Cliente con IA",
            "Gestión Básica de Redes (8 publicaciones/mes)",
            "Informe Mensual de Rendimiento",
            "Soporte por Correo",
          ],
        },
        {
          name: "ATLAS 1337 Pro",
          price: "$999",
          period: "/mes",
          description: "Motor integral de crecimiento con IA avanzada y marketing multicanal.",
          features: [
            "Aplicación Web a Medida / Tienda Online",
            "Estrategia Avanzada de SEO y Contenidos",
            "Agentes de IA y Automatización de Flujos",
            "Gestión Completa de Redes (15 posts + 4 Reels/mes)",
            "Gestión de Anuncios (Meta / Google Ads)",
            "Soporte Prioritario 24/7 y Análisis Semanal",
          ],
        },
        {
          name: "ATLAS 1337 Elite",
          price: "A Medida",
          period: "",
          description: "Soluciones empresariales personalizadas para máxima escala y eficiencia.",
          features: [
            "Desarrollo de Software Full-Stack a Medida",
            "Sistemas de IA y Automatización Empresarial",
            "Gerente de Cuenta Dedicado y Estratega",
            "Campañas de Marketing Omnicanal",
            "Identidad de Marca y Sistema de Diseño",
            "Revisiones Ilimitadas y Soporte Continuo",
          ],
        },
      ],
    },
    about: {
      badge: "Sobre ATLAS 1337",
      title: "Impulsando Negocios con",
      titleHighlight: "Tecnología y Estrategia",
      description: "ATLAS 1337 nació con una misión clara: ofrecer infraestructura digital de primer nivel, automatización con IA y marketing de alto impacto a empresas de todo el mundo.",
      missionTitle: "Nuestra Misión",
      missionText: "Conectar los avances tecnológicos con la rentabilidad real de los negocios, creando soluciones que superen a la competencia.",
      visionTitle: "Nuestra Visión",
      visionText: "Convertirnos en el referente mundial de la agencia digital moderna — donde convergen inteligencia, velocidad y diseño.",
      stats: [
        { label: "Proyectos Exitosos", value: "150+" },
        { label: "Retención de Clientes", value: "98%" },
        { label: "Países Atendidos", value: "24+" },
        { label: "Multiplicador de ROI Promedio", value: "4.8x" },
      ],
    },
    contact: {
      badge: "Contacto",
      title: "Construyamos Algo",
      titleHighlight: "Extraordinario Juntos",
      subtitle: "¿Listo para escalar tu negocio? Contáctanos para recibir una asesoría estratégica y un presupuesto sin compromiso.",
      fullName: "Nombre Completo",
      emailAddress: "Correo Electrónico",
      subject: "Asunto",
      serviceInterested: "Servicio de Interés",
      selectService: "Selecciona un servicio...",
      message: "Mensaje",
      sendMessage: "Enviar Mensaje",
      messageSent: "¡Gracias! Tu mensaje ha sido enviado con éxito. Te responderemos en un plazo de 24 horas.",
      infoTitle: "Información de Contacto",
      emailUs: "Escríbenos",
      callUs: "Llámanos / WhatsApp",
      visitUs: "Ubicación",
      locationText: "Rabat, Marruecos — Atendiendo Clientes a Nivel Global",
      workingHours: "Horario de Atención",
      workingHoursText: "Lunes a Sábado: 9:00 AM – 7:00 PM (GMT+1)",
    },
    footer: {
      slogan: "Empoderando empresas con IA, sitios web, marketing y automatización.",
      quickLinks: "Enlaces Rápidos",
      servicesTitle: "Servicios",
      contactUs: "Contacto",
      rightsReserved: "Todos los derechos reservados.",
    },
    bottomNav: {
      home: "Inicio",
      about: "Nosotros",
      projects: "Proyectos",
      pricing: "Precios",
      contact: "Contacto",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      projects: "مشاريعنا",
      pricing: "الأسعار",
      contact: "اتصل بنا",
      getStarted: "ابدأ الآن",
      toggleTheme: "تبديل المظهر",
      selectLanguage: "اللغة",
    },
    hero: {
      badge: "تمكين النمو الرقمي للشركات والعلامات التجارية الحديثة",
      titlePart1: "طوّر ونمّ أعمالك مع",
      titlePart2: "حلول رقمية ذكية ومبتكرة",
      subtitle: "تساعد وكالة ATLAS 1337 الشركات على مضاعفة نموها من خلال تطوير الويب المتطور، الأتمتة بالذكاء الاصطناعي، والتسويق الرقمي الفعّال — بسرعة، موثوقية، ونطاق عالمي.",
      slogan: "ATLAS 1337 • الإنترنت للجميع",
      ctaPrimary: "ابدأ مشروعك الآن",
      ctaSecondary: "استكشف خدماتنا",
    },
    services: {
      badge: "قدراتنا وخدماتنا",
      title: "حلول مصممة لتحقيق نمو استثنائي",
      subtitle: "منظومة رقمية متكاملة مصممة خصيصاً لتسريع أداء عملك عبر جميع القنوات الرقمية.",
      items: [
        {
          title: "تطوير مواقع الويب المخصصة",
          description: "مواقع وتطبيقات ويب سريعة وعصرية مبنية بأحدث التقنيات وأعلى معايير الأمان والتجاوب.",
        },
        {
          title: "الذكاء الاصطناعي وأتمتة العمليات",
          description: "دمج روبوتات دردشة ذكية ومساعدات افتراضية وأتمتة المهام اليومية لتقليل التكاليف ورفع الإنتاجية.",
        },
        {
          title: "التسويق الرقمي وإدارة الإعلانات",
          description: "حملات إعلانية مدفوعة وموجهة بدقة على فيسبوك، جوجل وتيك توك لتحقيق أعلى عائد استثماري.",
        },
        {
          title: "حلول المتاجر الإلكترونية",
          description: "متاجر إلكترونية احترافية على منصات شوبيفاي، ووكومرس، ومتاجر مخصصة مهيأة لتحقيق أعلى مبيعات.",
        },
        {
          title: "الهوية البصرية وتصميم التجربة",
          description: "هويات بصرية متميزة، شعارات احترافية، وتصميم واجهات مستخدم جذابة تترك انطباعاً دائماً.",
        },
        {
          title: "خرائط جوجل وتحسين البحث المحلي",
          description: "تصدر المرتبة الأولى في نتائج خرائط جوجل وبحث Google لجلب العملاء المحليين لمشروعك مباشرة.",
        },
      ],
    },
    collection: {
      title: "مجموعة ATLAS 1337",
      subtitle: "خدمات فردية متخصصة ومصممة حسب احتياجك",
      adNoteTitle: "ملاحظة بخصوص الإعلانات الممولة:",
      adNoteText: "ميزانية الإعلانات تُدفع مباشرة من حساب العميل ولا تشملها باقاتنا. تغطي خدماتنا إدارة وإعداد واستراتيجية الحملات الإعلانية.",
      adNoteExample: "مثال: تبدأ ميزانيات الإعلانات عادةً من 10 دولارات يومياً حسب هدف الحملة واستراتيجية الاستهداف.",
      startingAt: "ابتداءً من",
      items: [
        { name: "تطوير مواقع الويب المخصصة", price: "ابتداءً من 1,500$" },
        { name: "روبوتات الدردشة ومساعدات الذكاء الاصطناعي", price: "ابتداءً من 500$" },
        { name: "أتمتة العمليات والمهام", price: "ابتداءً من 1,000$" },
        { name: "إدارة وسائل التواصل الاجتماعي", price: "ابتداءً من 400$/شهرياً" },
        { name: "إدارة الإعلانات الممولة", price: "ابتداءً من 600$/شهرياً" },
        { name: "تصميم الهوية البصرية والشعارات", price: "ابتداءً من 800$" },
        { name: "تحسين محركات البحث واستراتيجية المحتوى", price: "ابتداءً من 500$/شهرياً" },
        { name: "صفحات الهبوط ومسارات المبيعات", price: "ابتداءً من 700$" },
        { name: "بطاقات NFC والملفات الشخصية الذكية", price: "ابتداءً من 120$" },
        { name: "خرائط جوجل وتحسين البحث المحلي", price: "ابتداءً من 150$" },
      ],
    },
    whyUs: {
      badge: "لماذا نحن؟",
      title: "لماذا تختار الشركات الرائدة ATLAS 1337؟",
      subtitle: "نجمع بين الدقة الهندسية، الإبداع التسويقي، وقوة الذكاء الاصطناعي لتحقيق نتائج ملموسة وأرباح حقيقية.",
      items: [
        {
          title: "سرعة فائقة في التنفيذ والتسليم",
          description: "نقدم حلولاً رقمية بمواصفات عالمية وحملات تسويقية بسرعة استثنائية دون المساس بالجودة.",
        },
        {
          title: "أنظمة مدعومة بالذكاء الاصطناعي",
          description: "أتمتة الأعمال الروتينية، خدمة عملاء ذكية على مدار 24 ساعة، وتحليلات بيانات دقيقة.",
        },
        {
          title: "استراتيجيات نمو مخصصة بالكامل",
          description: "لا نعتمد على قوالب جاهزة، بل نبني لكل عميل نظاماً استراتيجياً ملائماً لطبيعة سوقه وأهدافه.",
        },
        {
          title: "دعم فني واستراتيجي متواصل",
          description: "تواصل سريع ودعم تقني على مدار الساعة لضمان استمرارية نجاح وتوسع عملك الرقمي.",
        },
      ],
    },
    projects: {
      badge: "أعمالنا المتميزة",
      title: "نماذج من مشاريع عملائنا",
      subtitle: "استكشف أبرز أعمالنا الأخيرة في مجالات تطوير الويب، الأتمتة، والتسويق الرقمي.",
      all: "الكل",
      viewProject: "عرض المشروع",
      items: [
        {
          title: "منصة Apex للخدمات اللوجستية",
          category: "تطوير الويب",
          description: "بوابة متكاملة لإدارة الأساطيل والتتبع اللحظي للشحنات مع نظام فوترة آلي دقيق.",
        },
        {
          title: "متجر Luxe Glow لمستحضرات التجميل",
          category: "التجارة الإلكترونية",
          description: "متجر شوبيفاي فائق السرعة يتميز بعرض المنتجات ثلاثي الأبعاد وعروض ديناميكية ذكية.",
        },
        {
          title: "نظام Nova لإدارة العملاء ودعم الذكاء الاصطناعي",
          category: "الذكاء الاصطناعي والأتمتة",
          description: "مساعد دعم فني ذاتي قلل وقت الاستجابة بنسبة 85% عبر منصات متعددة.",
        },
        {
          title: "حملة FinTech العالمية للتحويل",
          category: "التسويق الرقمي",
          description: "حملة استقطاب متعددة المراحل جذبت أكثر من 12,000 عميل محتمل مؤهل للخدمات المالية.",
        },
      ],
    },
    pricing: {
      title: "أسعار مدروسة تناسب",
      titleHighlight: "طموحات أعمالك",
      subtitle: "باقات واضحة وشفافة مصممة للنمو مع مشروعك خطوة بخطوة. لا توجد رسوم خفية، فقط نتائج حقيقية.",
      mostPopular: "الأكثر طلباً",
      getStarted: "ابدأ الآن",
      serviceBreakdown: "تفاصيل الخدمات الفردية",
      plans: [
        {
          name: "باقة ATLAS 1337 Starter",
          price: "499$",
          period: "/شهرياً",
          description: "حضور رقمي أساسي وأتمتة ذكية تلبي احتياجات الشركات الناشئة.",
          features: [
            "موقع ويب احترافي (حتى 5 صفحات)",
            "تهيئة أساسية لمحركات البحث (SEO)",
            "روبوت ذكاء اصطناعي واحد لخدمة العملاء",
            "إدارة وسائل التواصل (8 منشورات شهرياً)",
            "تقرير شهري شامل للأداء",
            "دعم فني عبر البريد الإلكتروني",
          ],
        },
        {
          name: "باقة ATLAS 1337 Pro",
          price: "999$",
          period: "/شهرياً",
          description: "محرك نمو رقمي شامل يجمع بين الذكاء الاصطناعي والتسويق متعدد القنوات.",
          features: [
            "تطبيق ويب مخصص أو متجر إلكتروني متكامل",
            "استراتيجية متقدمة لتحسين محركات البحث والمحتوى",
            "أنظمة ذكاء اصطناعي مخصصة وأتمتة المهام",
            "إدارة كاملة لمنصات التواصل (15 منشوراً + 4 ريلز/شهرياً)",
            "إدارة الإعلانات الممولة (Meta / Google)",
            "دعم ذو أولوية على مدار الساعة وتحليلات أسبوعية",
          ],
        },
        {
          name: "باقة ATLAS 1337 Elite",
          price: "مخصصة",
          period: "",
          description: "حلول شاملة للشركات الكبرى والمؤسسات التي تبحث عن أعلى درجات التوسع والتميز.",
          features: [
            "تطوير برمجي متكامل ومخصص بالكامل",
            "أنظمة ذكاء اصطناعي وأتمتة بمواصفات المؤسسات الكبرى",
            "مدير حسابات وخبير نمو رقمي مخصص",
            "حملات تسويق شاملة عبر كافة القنوات",
            "نظام تصميم كامل وهوية بصرية متطورة",
            "تعديلات غير محدودة ودعم فني مخصص ومباشر",
          ],
        },
      ],
    },
    about: {
      badge: "عن وكالة ATLAS 1337",
      title: "تمكين الشركات الرائدة من خلال",
      titleHighlight: "التكنولوجيا والاستراتيجية",
      description: "تأسست وكالة ATLAS 1337 برؤية واضحة: إتاحة أحدث البنى التحتية الرقمية، أنظمة الأتمتة المتقدمة بالذكاء الاصطناعي، والتسويق الرقمي عالي التأثير للشركات الطموحة حول العالم.",
      missionTitle: "مهمتنا",
      missionText: "سد الفجوة بين التطور التكنولوجي السريع وتحقيق العوائد المالية الحقيقية، عبر تقديم حلول مبتكرة تتفوق بها على منافسيك.",
      visionTitle: "رؤيتنا",
      visionText: "أن نكون المعيار العالمي الأول للوكالات الرقمية الحديثة — حيث يلتقي الذكاء الاصطناعي والسرعة والتصميم المتقن.",
      stats: [
        { label: "مشاريع ناجحة", value: "+150" },
        { label: "نسبة رضا العملاء", value: "98%" },
        { label: "دول نخدمها", value: "+24" },
        { label: "متوسط مضاعفة العائد", value: "4.8x" },
      ],
    },
    contact: {
      badge: "تواصل معنا",
      title: "دعنا نبني معاً شيئاً",
      titleHighlight: "استثنائياً وناجحاً",
      subtitle: "جاهز لتوسيع نطاق عملك الرقمي؟ تواصل مع خبرائنا اليوم للحصول على استشارة متخصصة وخطة عمل مجانية.",
      fullName: "الاسم الكامل",
      emailAddress: "البريد الإلكتروني",
      subject: "الموضوع",
      serviceInterested: "الخدمة المطلوبة",
      selectService: "اختر خدمة...",
      message: "رسالتك",
      sendMessage: "إرسال الرسالة",
      messageSent: "شكراً لك! تم استلام رسالتك بنجاح، وسيقوم فريقنا بالرد عليك خلال 24 ساعة.",
      infoTitle: "معلومات التواصل",
      emailUs: "راسلنا عبر البريد",
      callUs: "اتصل بنا / واتساب",
      visitUs: "موقعنا",
      locationText: "الرباط، المغرب — نخدم عملاءنا في كافة أنحاء العالم",
      workingHours: "ساعات العمل",
      workingHoursText: "من الإثنين إلى السبت: 9:00 صباحاً – 7:00 مساءً (GMT+1)",
    },
    footer: {
      slogan: "تمكين الشركات وتطوير أعمالها بالذكاء الاصطناعي، المواقع الحديثة، التسويق والأتمتة.",
      quickLinks: "روابط سريعة",
      servicesTitle: "الخدمات",
      contactUs: "اتصل بنا",
      rightsReserved: "جميع الحقوق محفوظة.",
    },
    bottomNav: {
      home: "الرئيسية",
      about: "من نحن",
      projects: "مشاريعنا",
      pricing: "الأسعار",
      contact: "اتصل بنا",
    },
  },
};

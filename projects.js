// ==========================
// PROJECTS DATABASE
// ==========================
const projectsData = [
  {
    id: "komunitrade",
    title: "KomuniTrade",
    subtitle: "AI-Powered Hyperlocal P2P Trading System",
    shortDescription: "A smart peer-to-peer marketplace featuring E2EE chat, AI listing automation, and double-PIN handshake verification.",
    longDescription: "KomuniTrade is a hyperlocal peer-to-peer trading system featuring AI-powered posting (using Roboflow and Google Cloud Vision OCR to auto-populate categories, descriptions, and expiry tags), End-to-End Encrypted chat (ECDH P-256 + AES-GCM) with automated midpoint safe meetup suggestions, a double-PIN handshake verification protocol to secure final exchange, and automated moderation dashboards.",
    tech: ["React", "Firebase", "Genkit", "Google Cloud Vision", "Roboflow", "Tailwind CSS", "Vite"],
    image: "assets/projects/komunitrade.png",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "web"
  },
  {
    id: "evolve-by-cams",
    title: "Evolve by Cams",
    subtitle: "Pilates Reformer & Fitness Booking App",
    shortDescription: "A high-fidelity mobile application featuring dynamic class booking, slot management, and user wallet balances.",
    longDescription: "Evolve by Cams is a premium fitness application engineered for pilates reformer bookings and gym session management. Built as a high-fidelity Next.js web application wrapped in Capacitor for native Android and iOS compatibility, it features dynamic class spot booking, billing details, instructor directories, credit balances, and receipt summaries.",
    tech: ["Next.js", "Base UI", "Tailwind CSS v4", "TypeScript", "Capacitor", "Android", "iOS"],
    image: "assets/projects/evolve_by_cams.png",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "web"
  },
  {
    id: "maharlika-republic",
    title: "Maharlika Republic",
    subtitle: "Luxury Reseller Storefront & Cart System",
    shortDescription: "A premium boutique storefront designed with custom neumorphism, GSAP animations, and integrated store management.",
    longDescription: "Maharlika Republic is a luxury web storefront for high-end Apple reseller operations in Davao City. Built with Next.js, Supabase, Drizzle ORM, and GSAP/ScrollTrigger for elite product entry animations, it integrates an interactive local Davao map (Leaflet.js/MapLibre), custom glassmorphic cart drawers, full-screen search overlays, and a live store manager admin dashboard.",
    tech: ["Next.js", "Supabase", "Drizzle ORM", "GSAP", "Leaflet.js", "Tailwind CSS", "Zustand"],
    image: "assets/projects/maharlika_republic.png",
    demoUrl: "https://github.com",
    githubUrl: "https://github.com",
    category: "web"
  },
  {
    id: "vitalink",
    title: "VitaLink",
    subtitle: "Web-Based Health Records, Decision Support & CRM",
    shortDescription: "An advanced EHR application built to optimize patient management, clinical records, and hospital communication.",
    longDescription: "VitaLink is an enterprise-grade medical information system that integrates full-scale electronic health records (EHR) with clinical decision support workflows. It helps healthcare providers manage appointments, maintain secure treatment histories, issue automated prescriptions, and track patient follow-ups with built-in CRM capabilities.",
    tech: ["React", "Firebase", "Node.js", "Express", "Tailwind CSS"],
    image: "assets/projects/VITALINK.png",
    demoUrl: "https://studio--studio-1475651717-cc253.us-central1.hosted.app/login",
    githubUrl: "https://github.com",
    category: "web"
  },
  {
    id: "strokesense",
    title: "StrokeSense",
    subtitle: "Health AI & Diagnostic Web Platform",
    shortDescription: "AI-assisted clinical tool designed to predict, visualize, and analyze stroke patient risk indicators.",
    longDescription: "StrokeSense utilizes machine learning models to assess a patient's risk of stroke by analyzing key health factors (age, BMI, hypertension history, average glucose levels, and heart disease status). The dashboard provides clinicians with predictive scores and diagnostic visualizations to aid early prevention.",
    tech: ["Python", "Flask", "Scikit-Learn", "HTML", "CSS", "JavaScript"],
    image: "assets/projects/Sensestroke.png",
    demoUrl: "https://strokesense.oneapp.dev/",
    githubUrl: "https://github.com",
    category: "ai"
  },
  {
    id: "kenzovan",
    title: "KenzoVan Agrivet Hub",
    subtitle: "Retail Inventory & Management System",
    shortDescription: "Custom point-of-sale (POS) and inventory platform for agrivet retail outlets.",
    longDescription: "KenzoVan Agrivet Management Hub is a responsive web application designed for agricultural retail store operations. It features secure point-of-sale transactions, inventory tracking, stock replenishment alerts, and automated monthly sales reporting.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage", "Chart.js"],
    image: "assets/projects/khenzo logo.jpg",
    demoUrl: "https://khenzo-agrivet.vercel.app",
    githubUrl: "https://github.com",
    category: "web"
  },
  {
    id: "bambu-vibe",
    title: "Bambu Vibe System",
    subtitle: "Desktop Inventory & Supply Chain Tracker",
    shortDescription: "Java-based warehouse logging, inventory management, and database synchronization.",
    longDescription: "Bambu Vibe bridges native desktop applications with tabular database systems (Excel/CSV sheets). Engineered for warehouse supervisors, the system manages barcoding databases, calculates safety stock alerts, and compiles automated inventory status reports.",
    tech: ["Java", "Excel API", "Visual Studio", "Swing"],
    image: "assets/projects/myLogo.png",
    demoUrl: "https://github.com/pjmVillaraiz/Bambu-Vibe",
    githubUrl: "https://github.com/pjmVillaraiz/Bambu-Vibe",
    category: "desktop"
  },
  {
    id: "machine-portal",
    title: "Machine Portal",
    subtitle: "Student Activities & Automation Portal",
    shortDescription: "Educational student platform for lab logging, assignment tracking, and machine scheduling.",
    longDescription: "A fully responsive portal that manages laboratory logs, schedules machinery usage hours, and structures assignment submissions. Designed to automate routine laboratory administrative workflows for instructors and students alike.",
    tech: ["HTML", "CSS", "JavaScript", "JSON"],
    image: "assets/projects/machine-portal.png",
    demoUrl: "https://machine_portal.oneapp.dev",
    githubUrl: "https://github.com",
    category: "web"
  }
];

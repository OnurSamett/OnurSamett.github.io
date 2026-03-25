// ─── Bilingual Content Data ───

export const PERSONAL = {
  name: "Onur Samet Özkan",
  shortName: "onur samet",
  title: { tr: "Bilişim Sistemleri Müh. · Full-Stack Dev", en: "Information Systems Eng. · Full-Stack Dev" },
  description: {
    tr: "Temiz kod standartlarında, donanım ve yazılımı entegre eden sistemler inşa ediyorum. Uluslararası iş birliklerine ve eğitimlere açığım.",
    en: "I build systems that integrate hardware and software to clean code standards. Open to international collaborations and training.",
  },
  email: "onurozkan0808@gmail.com",
  phone: "+90 545 809 04 63",
  github: "https://github.com/OnurSamett",
  linkedin: "https://www.linkedin.com/in/onur-samet-özkan-21065826b",
  location: { tr: "Ankara, Türkiye", en: "Ankara, Turkey" },
};

export const STATS = {
  tr: [
    { number: "7+",  label: "Proje" },
    { number: "2",   label: "Yıl Deneyim" },
    { number: "C2",  label: "İngilizce" },
    { number: "5",   label: "Dil Bilgisi" },
  ],
  en: [
    { number: "7+",  label: "Projects" },
    { number: "2",   label: "Years Exp." },
    { number: "C2",  label: "English" },
    { number: "5",   label: "Languages" },
  ],
};

export const INFO_CARDS = {
  tr: [
    { icon: "graduation-cap", title: "Atılım Üniversitesi", sub: "Bilişim Sistemleri Müh. — 2024–2028" },
    { icon: "briefcase",      title: "OdakGIS — Full Stack Developer", sub: "Ekim 2025 – Devam · Ankara" },
    { icon: "bot",             title: "TEKNOFEST Otonom Araç", sub: "Derin Öğrenme Sorumlusu · 2026" },
    { icon: "bar-chart",       title: "Miuul Veri Analitiği Bootcamp", sub: "2025–2026 · Online" },
    { icon: "map-pin",         title: "Ankara, Türkiye", sub: "Uzaktan ve yerinde çalışmaya açık" },
  ],
  en: [
    { icon: "graduation-cap", title: "Atılım University", sub: "Information Systems Eng. — 2024–2028" },
    { icon: "briefcase",      title: "OdakGIS — Full Stack Developer", sub: "Oct 2025 – Present · Ankara" },
    { icon: "bot",             title: "TEKNOFEST Autonomous Vehicle", sub: "Deep Learning Lead · 2026" },
    { icon: "bar-chart",       title: "Miuul Data Analytics Bootcamp", sub: "2025–2026 · Online" },
    { icon: "map-pin",         title: "Ankara, Turkey", sub: "Open to remote & on-site work" },
  ],
};

export const ABOUT_TEXT = {
  tr: [
    `Full-stack geliştirme, yapay zeka ve veri analitiği odaklı <strong>Bilişim Sistemleri Mühendisi</strong> adayıyım.`,
    `<strong>OdakGIS'te</strong> kurumsal ölçekli GIS platformları geliştiriyor; <strong>TEKNOFEST</strong> otonom aracının YOLOv11 tabanlı Derin Öğrenme mimarisini yönetiyorum.`,
    `Donanım ve yazılımı entegre eden, yüksek performanslı sistemler inşa ediyorum. <strong>Uluslararası iş birliklerine ve eğitimlere açığım.</strong>`,
  ],
  en: [
    `I am an <strong>Information Systems Engineering</strong> student focused on full-stack development, artificial intelligence, and data analytics.`,
    `At <strong>OdakGIS</strong>, I develop enterprise-scale GIS platforms; I lead the YOLOv11-based Deep Learning architecture of the <strong>TEKNOFEST</strong> autonomous vehicle.`,
    `I build high-performance systems that integrate hardware and software. <strong>Open to international collaborations and training.</strong>`,
  ],
};

export const EXPERIENCE = {
  tr: [
    {
      date: "Eki 2025 — Devam",
      company: "OdakGIS",
      role: "Full Stack Developer · Yetenek Kuşağı",
      location: "Ankara, TR",
      bullets: [
        "Gayrimenkul Yönetim Sistemi (REMS) altyapısında aktif geliştirici olarak görev alıyorum",
        ".NET ve Angular tabanlı GIS çözümlerinin frontend/backend entegrasyonlarını sağlıyorum",
        "Semgrep ve SonarQube ile SAST süreçlerini yürütüyor, güvenlik zafiyetlerini proaktif olarak önlüyorum",
        "Clean Code prensiplerine uygun, yüksek standartlarda geliştirmeler yapıyorum",
      ],
      tags: [".NET", "Angular", "GIS", "SAST", "C#", "TypeScript"],
    },
    {
      date: "Kas 2024 — Ağu 2025",
      company: "Yandex",
      role: "Arama Motoru Kalite Geliştirme Uzmanı · Uzaktan",
      location: "Remote",
      bullets: [
        "İçerik kalitesi, reklam yoğunluğu ve UX kriterlerine göre site analizi yaparak ranking skorlarını belirledim",
        "Kullanıcı niyeti analizleriyle algoritmaları besleyerek site görünürlüklerini 10 ay boyunca optimize ettim",
      ],
      tags: ["SEO", "UX Analiz", "Algoritmik Değerlendirme", "Uzaktan"],
    },
  ],
  en: [
    {
      date: "Oct 2025 — Present",
      company: "OdakGIS",
      role: "Full Stack Developer · Talent Program",
      location: "Ankara, TR",
      bullets: [
        "Active developer on the Real Estate Management System (REMS) infrastructure",
        "Integrating frontend/backend of .NET and Angular-based GIS solutions",
        "Running SAST processes with Semgrep and SonarQube, proactively preventing security vulnerabilities",
        "Developing to high standards following Clean Code principles",
      ],
      tags: [".NET", "Angular", "GIS", "SAST", "C#", "TypeScript"],
    },
    {
      date: "Nov 2024 — Aug 2025",
      company: "Yandex",
      role: "Search Engine Quality Specialist · Remote",
      location: "Remote",
      bullets: [
        "Analyzed websites based on content quality, ad density, and UX criteria to determine ranking scores",
        "Optimized site visibility for 10 months by feeding algorithms with user intent analyses",
      ],
      tags: ["SEO", "UX Analysis", "Algorithmic Evaluation", "Remote"],
    },
  ],
};

export const PROJECTS = {
  tr: [
    {
      icon: "zap", name: "REMS — Gayrimenkul Yönetim Sistemi",
      desc: "Mülk adresi ve harita koordinatları girilip alan analizi yapılabilen, modal/pop-up mimarileriyle minimum tıklama gerektiren kapsamlı kurumsal emlak platformu.",
      tech: [".NET", "Angular", "GIS", "C#", "TypeScript", "Full-Stack"], span: 7, large: true,
    },
    {
      icon: "bot", name: "TEKNOFEST Otonom Araç",
      desc: "Türkiye trafik işaretlerine özel veri setiyle YOLOv11 modeli eğitimi, kamera ve LiDAR sensör füzyonu, şerit takip algoritmaları ve ROS tabanlı gerçek zamanlı işlem hattı.",
      tech: ["YOLOv11", "Python", "Derin Öğrenme", "ROS", "C++"], span: 5,
    },
    {
      icon: "wrench", name: "Giyilebilir Robotik Kol",
      desc: "Eldiven aracılığıyla insan el hareketlerini eş zamanlı taklit eden uzaktan kontrollü robotik kol prototipi. STM32 mikrodenetleyici, IoT haberleşmesi ve C++ yazılım altyapısı.",
      tech: ["IoT", "C++", "STM32", "Donanım", "Teleoperasyon"], span: 4,
    },
    {
      icon: "leaf", name: "MealBuddy",
      desc: "Dolaptaki malzemelere ve fitness hedeflerine göre kişiselleştirilmiş, dinamik makro planı sunan sağlıklı beslenme uygulaması. 100+ Türk mutfağı tarifi içerir.",
      tech: ["React Native", "Mobil", "API"], span: 4, github: "https://github.com/OnurSamett",
    },
    {
      icon: "trending-up", name: "SmartInvest AI",
      desc: "Gemini LLM entegrasyonuyla finansal haber duyarlılık analizi ve teknik indikatörlerle al-sat sinyalleri sunan AI yatırım asistanı.",
      tech: ["Flutter", "Gemini LLM", "Fintech", "Dart"], span: 4, github: "https://github.com/OnurSamett",
    },
    {
      icon: "shield", name: "Sigorta Risk Skorlama",
      desc: "%30 eksik veri içeren veri setinde istatistiksel yöntemler, Leaflet coğrafi haritalama ve Power BI görselleştirme ile risk sınıflandırma modeli.",
      tech: ["Python", "Power BI", "Leaflet", "ML", "Veri Analizi"], span: 5,
    },
    {
      icon: "gamepad", name: "Oyun Geliştirme & Dijital Varlık",
      desc: "Unreal Engine asset paketleri, indie oyunlar (Space Shooter, Hack 'n' Slash, Neon Arena Survival) ve Game Jam Ankara 2024 — Cat Hotel.",
      tech: ["Unreal Engine", "C++", "Game Dev", "JavaScript"], span: 7, large: true,
    },
  ],
  en: [
    {
      icon: "zap", name: "REMS — Real Estate Management System",
      desc: "Comprehensive enterprise real estate platform with property address and map coordinate input for area analysis, using modal/pop-up architectures for minimal clicks.",
      tech: [".NET", "Angular", "GIS", "C#", "TypeScript", "Full-Stack"], span: 7, large: true,
    },
    {
      icon: "bot", name: "TEKNOFEST Autonomous Vehicle",
      desc: "YOLOv11 model training with custom Turkish traffic sign dataset, camera and LiDAR sensor fusion, lane tracking algorithms and ROS-based real-time pipeline.",
      tech: ["YOLOv11", "Python", "Deep Learning", "ROS", "C++"], span: 5,
    },
    {
      icon: "wrench", name: "Wearable Robotic Arm",
      desc: "Remote-controlled robotic arm prototype that mimics human hand movements in real-time via a glove. STM32 microcontroller, IoT communication and C++ software.",
      tech: ["IoT", "C++", "STM32", "Hardware", "Teleoperation"], span: 4,
    },
    {
      icon: "leaf", name: "MealBuddy",
      desc: "A healthy eating app that offers personalized, dynamic macro plans based on fridge ingredients and fitness goals. 100+ Turkish cuisine recipes included.",
      tech: ["React Native", "Mobile", "API"], span: 4, github: "https://github.com/OnurSamett",
    },
    {
      icon: "trending-up", name: "SmartInvest AI",
      desc: "AI investment assistant providing financial news sentiment analysis and buy-sell signals with technical indicators via Gemini LLM integration.",
      tech: ["Flutter", "Gemini LLM", "Fintech", "Dart"], span: 4, github: "https://github.com/OnurSamett",
    },
    {
      icon: "shield", name: "Insurance Risk Scoring",
      desc: "Risk classification model using statistical methods, Leaflet geographic mapping, and Power BI visualization on a dataset with 30% missing data.",
      tech: ["Python", "Power BI", "Leaflet", "ML", "Data Analytics"], span: 5,
    },
    {
      icon: "gamepad", name: "Game Development & Digital Assets",
      desc: "Unreal Engine asset packages, indie games (Space Shooter, Hack 'n' Slash, Neon Arena Survival) and Game Jam Ankara 2024 — Cat Hotel.",
      tech: ["Unreal Engine", "C++", "Game Dev", "JavaScript"], span: 7, large: true,
    },
  ],
};

export const SKILL_CATEGORIES = {
  tr: [
    { label: "Programlama Dilleri", items: ["C#", "TypeScript", "Python", "C++", "C", "Dart", "SQL", "JavaScript"] },
    { label: "Framework & Araçlar", items: [".NET", "Angular", "Flutter", "React Native", "Unreal Engine", "Power BI", "Leaflet", "SonarQube", "Semgrep", "ROS", "TensorFlow"] },
    { label: "Geliştirme Alanları", items: ["Full-Stack Web", "Mobil Geliştirme", "Derin Öğrenme / ML", "IoT & Gömülü Sistem", "Veri Analitiği", "GIS / CBS", "Oyun Geliştirme", "Otonom Sistemler"] },
  ],
  en: [
    { label: "Programming Languages", items: ["C#", "TypeScript", "Python", "C++", "C", "Dart", "SQL", "JavaScript"] },
    { label: "Frameworks & Tools", items: [".NET", "Angular", "Flutter", "React Native", "Unreal Engine", "Power BI", "Leaflet", "SonarQube", "Semgrep", "ROS", "TensorFlow"] },
    { label: "Development Areas", items: ["Full-Stack Web", "Mobile Development", "Deep Learning / ML", "IoT & Embedded", "Data Analytics", "GIS / Geospatial", "Game Development", "Autonomous Systems"] },
  ],
};

export const LANGUAGES_DATA = [
  { name: { tr: "Türkçe", en: "Turkish" },     level: { tr: "Anadil", en: "Native" }, pct: 100 },
  { name: { tr: "İngilizce", en: "English" },   level: "C2",     pct: 97  },
  { name: { tr: "Almanca", en: "German" },      level: "B1",     pct: 55  },
  { name: { tr: "İspanyolca", en: "Spanish" },  level: "A2",     pct: 28  },
  { name: { tr: "Fransızca", en: "French" },    level: "A1",     pct: 14  },
];

export const CERTIFICATIONS = [
  { icon: "graduation-cap", name: "CS50",                              org: "Harvard" },
  { icon: "layers",         name: "IBM Full Stack Development",        org: "IBM" },
  { icon: "brain",          name: "IBM Machine Learning",              org: "IBM" },
  { icon: "clipboard",      name: "Foundations of Project Management", org: "Google" },
  { icon: "bar-chart",      name: "Lean Six Sigma",                    org: "Yellow/White Belt" },
  { icon: "code",           name: "Introduction to Software Engineering", org: "IBM" },
  { icon: "code",           name: "CodeHub & Tech Camp",               org: "Talentcoders" },
  { icon: "code",           name: "Angular 101",                       org: "Turkcell Geleceği Yazanlar" },
  { icon: "brain",          name: "Introduction to Machine Learning",  org: "Atılım Robot Topluluğu" },
  { icon: "shield",         name: { tr: "Kariyer ve Yetkinlik Buluşmaları", en: "Career & Competency Meetings" },  org: "Savunma Sanayii Akademi" },
  { icon: "globe",          name: "Vodafone'da Bir Gün: Network",      org: "Vodafone" },
  { icon: "trending-up",    name: { tr: "Genç Yeni Nesil Kariyer Okulu", en: "Young New Gen Career School" }, org: "Garanti BBVA" },
];

export const FOCUS_AREAS = {
  tr: [
    { icon: "globe",    title: "Full-Stack Web & Mobil",        sub: ".NET · Angular · Flutter · React Native" },
    { icon: "brain",    title: "Yapay Zeka & Derin Öğrenme",     sub: "YOLOv11 · TensorFlow · LLM Entegrasyon" },
    { icon: "cpu",      title: "Gömülü Sistem & IoT",           sub: "STM32 · C/C++ · Robotik · Teleoperasyon" },
    { icon: "bar-chart",title: "Veri Analitiği & GIS",          sub: "Power BI · Leaflet · Python · SQL" },
  ],
  en: [
    { icon: "globe",    title: "Full-Stack Web & Mobile",        sub: ".NET · Angular · Flutter · React Native" },
    { icon: "brain",    title: "AI & Deep Learning",             sub: "YOLOv11 · TensorFlow · LLM Integration" },
    { icon: "cpu",      title: "Embedded Systems & IoT",         sub: "STM32 · C/C++ · Robotics · Teleoperation" },
    { icon: "bar-chart",title: "Data Analytics & GIS",           sub: "Power BI · Leaflet · Python · SQL" },
  ],
};

export const MARQUEE_ITEMS = [
  ".NET", "Angular", "Python", "YOLOv11", "Flutter", "React Native",
  "C++", "STM32", "Power BI", "Leaflet", "Unreal Engine", "Gemini LLM",
  "SonarQube", "Semgrep", "SQL", "IoT", "GIS/CBS", "Deep Learning",
  "TensorFlow", "ROS", "Dart", "C#",
];

export const NAV_LINKS = {
  tr: [
    { label: "Hakkımda",   href: "#about" },
    { label: "Deneyim",    href: "#experience" },
    { label: "Projeler",   href: "#projects" },
    { label: "Yetenekler", href: "#skills" },
  ],
  en: [
    { label: "About",      href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects",   href: "#projects" },
    { label: "Skills",     href: "#skills" },
  ],
};

export const CONTACT_LINKS = [
  { href: `mailto:${PERSONAL.email}`,   label: PERSONAL.email,           cls: "p" },
  { href: PERSONAL.github,              label: "GitHub / OnurSamett",    cls: "o" },
  { href: PERSONAL.linkedin,            label: "LinkedIn",               cls: "o" },
  { href: `tel:${PERSONAL.phone}`,      label: PERSONAL.phone,           cls: "o" },
];

// ─── UI Strings ───
export const UI = {
  tr: {
    seeProjects: "Projeleri Gör",
    email: "E-posta",
    discover: "Keşfet",
    profile: "Profil",
    whoAmI: "Kim<br>miyim?",
    aboutDesc: "Full-stack geliştirme, yapay zeka ve veri analitiği odaklı bir mühendis adayıyım. Temiz kod ve uçtan uca entegrasyon benim için vazgeçilmez.",
    career: "Kariyer",
    experience: "Deneyim",
    expDesc: "Kurumsal ölçekli projelerde aktif geliştirici rolü ve uluslararası uzaktan iş deneyimi.",
    portfolio: "Portföy",
    projectsTitle: "Projeler &<br>AR-GE",
    projectsDesc: "Enerji yönetiminden otonom araçlara, yapay zeka destekli uygulamalardan robotik donanıma geniş bir yelpaze.",
    viewOnGithub: "GitHub'da gör",
    competencies: "Yetkinlikler",
    skillsTitle: "Yetenekler &<br>Teknolojiler",
    skillsDesc: "Full-stack'ten gömülü sistemlere, veri analitiğinden oyun geliştirmeye uzanan çok katmanlı teknik yetkinlik.",
    certsLabel: "Sertifikalar & Eğitimler",
    showMore: "sertifika daha göster",
    showLess: "Daha az göster",
    langLevels: "Dil Seviyeleri",
    focusAreas: "Odak Alanları",
    letsChat: "Hadi konuşalım",
    contactTitle: "Birlikte",
    contactHighlight: "üretelim.",
    contact: "İletişim",
  },
  en: {
    seeProjects: "See Projects",
    email: "Email",
    discover: "Explore",
    profile: "Profile",
    whoAmI: "Who<br>am I?",
    aboutDesc: "An engineering student focused on full-stack development, AI, and data analytics. Clean code and end-to-end integration are essential to me.",
    career: "Career",
    experience: "Experience",
    expDesc: "Active developer roles in enterprise-scale projects and international remote work experience.",
    portfolio: "Portfolio",
    projectsTitle: "Projects &<br>R&D",
    projectsDesc: "A wide spectrum from energy management to autonomous vehicles, AI-powered apps to robotic hardware.",
    viewOnGithub: "View on GitHub",
    competencies: "Competencies",
    skillsTitle: "Skills &<br>Technologies",
    skillsDesc: "Multi-layered technical competency spanning full-stack to embedded systems, data analytics to game development.",
    certsLabel: "Certifications & Training",
    showMore: "more certifications",
    showLess: "Show less",
    langLevels: "Language Levels",
    focusAreas: "Focus Areas",
    letsChat: "Let's talk",
    contactTitle: "Let's",
    contactHighlight: "create.",
    contact: "Contact",
  },
};

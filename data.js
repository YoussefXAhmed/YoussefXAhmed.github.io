// All site content lives here. Every text field has an English (en) and Arabic (ar) version.

const SITE = {
  name: { en: "Youssef Ahmed", ar: "يوسف أحمد" },
  role: {
    en: "Computer Science Graduate | Web Developer | Technical & Business Operations",
    ar: "خريج علوم حاسب | مطوّر ويب | العمليات التقنية والتجارية",
  },
  tagline: {
    en: "I bridge software and business — from full-stack web apps and ERP systems to hands-on financial operations.",
    ar: "أربط بين البرمجة والبيزنس — من تطبيقات الويب وأنظمة الـERP لحد إدارة العمليات المالية على أرض الواقع.",
  },
  location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
  availableForWork: false,
  githubUser: "YoussefXAhmed",
  cvFile: "assets/Youssef_Ahmed_CV.pdf",

  contact: {
    email: "yossefayyman@gmail.com",
    phone: "+20 102 079 7395",
    linkedin: "https://www.linkedin.com/in/youssef911/",
    github: "https://github.com/YoussefXAhmed",
  },

  about: {
    en: "I'm a Computer Science graduate from the Arab Academy for Science, Technology and Maritime Transport (AAST). I've worked in cash management at Henkel Egypt while building hands-on experience in software development and ERP systems. That mix gives me a practical view of how technology supports real business operations. I'm a strong problem solver, adapt quickly, and I'm always eager to learn and grow.",
    ar: "أنا خريج علوم حاسب من الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري (AAST). اشتغلت في إدارة النقدية في هنكل مصر، وفي نفس الوقت اكتسبت خبرة عملية في تطوير البرمجيات وأنظمة الـERP. الخلطة دي بتديني نظرة عملية لإزاي التكنولوجيا بتخدم عمليات البيزنس الحقيقية. عندي مهارات قوية في حل المشكلات، بتأقلم بسرعة، ودايماً حابب أتعلم وأتطور.",
  },

  services: [
    {
      icon: "web",
      title: { en: "Web Development", ar: "تطوير الويب" },
      desc: {
        en: "Full-stack web apps with React, Vue and Node.js — secure authentication, REST APIs, and clean, responsive interfaces.",
        ar: "تطبيقات ويب full-stack بـ React و Vue و Node.js — تسجيل دخول آمن، REST APIs، وواجهات نظيفة ومتجاوبة.",
      },
    },
    {
      icon: "erp",
      title: { en: "ERP Systems", ar: "أنظمة ERP" },
      desc: {
        en: "Building on ERPNext and the Frappe Framework — POS, inventory, purchasing and accounting workflows, with Arabic / RTL support.",
        ar: "تطوير على ERPNext و Frappe Framework — نقاط البيع، المخزون، المشتريات والحسابات، مع دعم العربي والـRTL.",
      },
    },
    {
      icon: "ops",
      title: { en: "Technical & Business Operations", ar: "العمليات التقنية والتجارية" },
      desc: {
        en: "Hands-on financial operations experience at Henkel — I understand the processes software has to support, not just the code.",
        ar: "خبرة عملية في العمليات المالية في هنكل — بفهم العمليات اللي البرنامج المفروض يخدمها، مش الكود بس.",
      },
    },
  ],

  stats: [
    { value: "3", label: { en: "Projects", ar: "مشاريع" } },
    { value: "162h", label: { en: "ITI Training", ar: "تدريب ITI" } },
    { value: "2026", label: { en: "Graduate", ar: "سنة التخرج" } },
  ],

  skills: [
    {
      title: { en: "Programming Languages", ar: "لغات البرمجة" },
      items: ["C", "C++", "JavaScript"],
    },
    {
      title: { en: "Web Development", ar: "تطوير الويب" },
      items: ["React.js", "Vue.js", "Node.js", "Express.js", "REST APIs", "HTML5", "CSS3"],
    },
    {
      title: { en: "ERP & Databases", ar: "أنظمة ERP وقواعد البيانات" },
      items: ["ERPNext", "Frappe Framework", "MySQL", "MariaDB", "MongoDB", "Database Management"],
    },
    {
      title: { en: "Tools & Technologies", ar: "أدوات وتقنيات" },
      items: ["Git", "GitHub", "Linux", "AWS"],
    },
    {
      title: { en: "Professional Skills", ar: "مهارات مهنية" },
      items: {
        en: ["Problem Solving", "Attention to Detail", "Adaptability", "Teamwork", "Cash Management"],
        ar: ["حل المشكلات", "الاهتمام بالتفاصيل", "سرعة التأقلم", "العمل الجماعي", "إدارة النقدية"],
      },
    },
    {
      title: { en: "Languages", ar: "اللغات" },
      items: {
        en: ["Arabic — Native", "English — Conversational"],
        ar: ["العربية — اللغة الأم", "الإنجليزية — مستوى محادثة"],
      },
    },
  ],

  experience: [
    {
      role: { en: "Cash Custodian", ar: "أمين خزينة" },
      company: { en: "Henkel Egypt — Aswan", ar: "هنكل مصر — أسوان" },
      period: { en: "Sep 2025 — Jun 2026", ar: "سبتمبر ٢٠٢٥ — يونيو ٢٠٢٦" },
      points: {
        en: [
          "Managed daily cash receipts and maintained accurate financial records.",
          "Collected and verified invoices, and recorded expenses.",
        ],
        ar: [
          "إدارة المقبوضات النقدية اليومية والحفاظ على دقة السجلات المالية.",
          "تحصيل الفواتير ومراجعتها وتسجيل المصروفات.",
        ],
      },
    },
    {
      role: { en: "Embedded Systems Diploma (Internship)", ar: "دبلومة النظم المدمجة (تدريب)" },
      company: { en: "Information Technology Institute (ITI)", ar: "معهد تكنولوجيا المعلومات (ITI)" },
      period: { en: "Aug 2023 — Sep 2023", ar: "أغسطس ٢٠٢٣ — سبتمبر ٢٠٢٣" },
      points: {
        en: [
          "Completed 162 hours of Embedded Systems AVR training: C programming, AVR interfacing, RTOS, and software testing.",
          "Developed and delivered a Temperature Control System as the final project.",
        ],
        ar: [
          "أتممت ١٦٢ ساعة تدريب على النظم المدمجة AVR: برمجة C، التعامل مع AVR، الـRTOS، واختبار البرمجيات.",
          "طورت وسلمت نظام تحكم في درجة الحرارة كمشروع نهائي.",
        ],
      },
    },
  ],

  projects: [
    {
      title: { en: "Password Manager Web App", ar: "تطبيق ويب لإدارة كلمات المرور" },
      desc: {
        en: "Secure full-stack password manager with JWT authentication, password hashing, a personal vault, and secure CRUD operations — plus visibility controls, clipboard copy, and trash recovery.",
        ar: "تطبيق full-stack آمن لإدارة كلمات المرور فيه تسجيل دخول بـJWT، تشفير كلمات المرور، خزنة شخصية، وعمليات CRUD آمنة — بالإضافة لإظهار/إخفاء الباسورد، النسخ السريع، واسترجاع المحذوفات.",
      },
      category: "web",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/YoussefXAhmed/Secure-2",
      demo: "",
    },
    {
      title: { en: "Supermarket ERP System", ar: "نظام ERP لإدارة السوبر ماركت" },
      badge: { en: "Graduation Project", ar: "مشروع التخرج" },
      desc: {
        en: "A supermarket management system that integrates core business operations, with a React frontend connected to an ERPNext/Frappe backend.",
        ar: "نظام لإدارة السوبر ماركت بيجمع عمليات البيزنس الأساسية في مكان واحد، بواجهة React متصلة بـbackend مبني على ERPNext/Frappe.",
      },
      points: {
        en: [
          "Point of Sale (POS), inventory management, purchasing, and accounting.",
          "Bilingual Arabic / English interface with full right-to-left (RTL) layout support.",
          "Business workflows and stock consistency across sales and purchasing.",
          "Accounting-related functionality integrated with daily operations.",
        ],
        ar: [
          "نقطة البيع (POS)، إدارة المخزون، المشتريات، والحسابات.",
          "واجهة بالعربي والإنجليزي مع دعم كامل للاتجاه من اليمين للشمال (RTL).",
          "تنظيم سير عمليات البيزنس وضمان دقة المخزون بين المبيعات والمشتريات.",
          "وظائف محاسبية مربوطة بالعمليات اليومية.",
        ],
      },
      category: "erp",
      tags: ["React.js", "ERPNext", "Frappe Framework", "POS", "RTL / i18n"],
      github: "https://github.com/YoussefXAhmed/supermarket",
      demo: "",
    },
    {
      title: { en: "Smart Aircraft Parking Guidance System", ar: "نظام ذكي لتوجيه ركن الطائرات" },
      desc: {
        en: "Hardware prototype simulating aircraft parking guidance using an Arduino Uno, ultrasonic distance sensing, LCD feedback, LEDs, and audio alerts — with distance-based guidance logic and an interrupt-triggered emergency stop.",
        ar: "نموذج هاردوير بيحاكي نظام توجيه ركن الطائرات باستخدام Arduino Uno وحساس مسافة ultrasonic وشاشة LCD و LEDs وتنبيهات صوتية — مع منطق توجيه حسب المسافة وزرار إيقاف طوارئ بالـinterrupts.",
      },
      category: "embedded",
      tags: ["Arduino", "C/C++", "Embedded", "Sensors"],
      github: "https://github.com/YoussefXAhmed/SMART-AIRCRAFT-PARKING-GUIDANCE-SYSTEM",
      demo: "",
    },
  ],

  education: [
    {
      degree: { en: "B.Sc. in Computer Science", ar: "بكالوريوس علوم الحاسب" },
      school: {
        en: "Arab Academy for Science, Technology and Maritime Transport (AAST) — Aswan",
        ar: "الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري (AAST) — أسوان",
      },
      period: { en: "Oct 2022 — Jun 2026", ar: "أكتوبر ٢٠٢٢ — يونيو ٢٠٢٦" },
      note: {
        en: "Graduation project: Supermarket Management System (React.js + ERPNext / Frappe).",
        ar: "مشروع التخرج: نظام إدارة سوبر ماركت (React.js + ERPNext / Frappe).",
      },
    },
  ],

  certifications: [
    {
      title: { en: "Embedded Systems AVR Diploma (162 hrs)", ar: "دبلومة النظم المدمجة AVR (١٦٢ ساعة)" },
      issuer: "ITI",
      year: { en: "Aug 2023 — Sep 2023", ar: "أغسطس ٢٠٢٣ — سبتمبر ٢٠٢٣" },
      link: "",
    },
  ],
};

const UI = {
  nav: {
    about: { en: "About", ar: "عني" },
    skills: { en: "Skills", ar: "المهارات" },
    experience: { en: "Experience", ar: "الخبرات" },
    projects: { en: "Projects", ar: "المشاريع" },
    education: { en: "Education", ar: "التعليم" },
    contact: { en: "Contact", ar: "تواصل" },
  },
  hello: { en: "Hi, I'm", ar: "أهلاً، أنا" },
  available: { en: "Available for work", ar: "متاح للعمل" },
  whatIDo: { en: "What I Do", ar: "مجالات شغلي" },
  backToTop: { en: "Back to top", ar: "الرجوع لأعلى" },
  filters: {
    all: { en: "All", ar: "الكل" },
    web: { en: "Web", ar: "ويب" },
    erp: { en: "ERP", ar: "ERP" },
    embedded: { en: "Embedded", ar: "نظم مدمجة" },
  },
  more: {
    title: { en: "More projects on GitHub", ar: "مشاريع أكتر على GitHub" },
    text: {
      en: "These are just the highlights. Explore {n} public repositories built with {langs} and more.",
      ar: "دي مجرد أبرز المشاريع. اكتشف {n} مستودع عام معمولين بـ {langs} وغيرهم.",
    },
    fallback: {
      en: "These are just the highlights — there's a lot more on my GitHub.",
      ar: "دي مجرد أبرز المشاريع — فيه حاجات كتير تانية على GitHub.",
    },
    cta: { en: "Browse all repositories", ar: "تصفح كل المستودعات" },
  },
  downloadCv: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
  contactMe: { en: "Contact Me", ar: "تواصل معي" },
  certifications: { en: "Certifications", ar: "الشهادات" },
  contactText: {
    en: "Open to new opportunities and collaborations. Feel free to reach out!",
    ar: "متاح لفرص وتعاونات جديدة. تقدر تتواصل معايا في أي وقت!",
  },
  code: { en: "Code", ar: "الكود" },
  demo: { en: "Live Demo", ar: "عرض مباشر" },
  rights: { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
};

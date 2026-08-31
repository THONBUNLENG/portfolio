import React, { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    homeim: "I'M",
    navbarHome: "Home",
    navbarAbout: "About",
    navbarProjects: "Projects",
    navbarResume: "Resume",
    navbarBlogs: "Blogs",
    navbarContact: "Contact",
    homeGreeting: "Hi There!",
    homeNameTranslation: "Thon Bunleng",
    homeIntroPrefix: "LET ME",
    homeIntroMiddle: "INTRODUCE",
    homeIntroSuffix: "MYSELF",
    homeIntroRole: "Web & Mobile Specialist",
    availableFreelance: "Available for Freelance",
    homeHeroTitle: "SOFTWARE",
    homeHeroTitleHighlight: "ENGINEER",
    homeHeroTagline: "Building Quality Software, Fast",
    homeImPrefix: "I'M",
    homeImName: "Thon Bunleng",
    homeIntroParagraph:
      "I'm a Software Engineer who loves transforming ideas into reliable, scalable products. Over time, I've explored several technologies and found my passion in building high-performance systems and intuitive user experiences.<br/><br/>I work across both frontend and backend stacks, with primary expertise in <span class=\"tech-flutter\">Flutter</span>, <span class=\"tech-react-native\">React Native</span>, <span class=\"tech-swift\">Swift</span>, <span class=\"tech-kotlin\">Kotlin</span>, <span class=\"tech-javascript\">JavaScript</span>, <span class=\"tech-laravel\">Laravel</span>, <span class=\"tech-nodejs\">Node.js</span>, and <span class=\"tech-python\">Python</span>.<br/><br/>My key areas of interest include Mobile & Web Applications, Blockchain Solutions, and exploring new ways to bridge on-chain and off-chain systems.",
    homeFindMe: "Find Me On",
    homeConnect: "Feel free to connect with me",
    homeConnectHighlight: "connect",
    contactPhone: "+855 011 820 595",
    contactEmail: "leng94570@gmail.com",
    telegramAriaLabel: "Open Telegram",
    telegramQrAlt: "Telegram QR code",
    telegramLabel: "Telegram",
    aboutTitlePrefix: "Know Who ",
    aboutTitleHighlight: "I'M",
    aboutTitleSuffix: "...!",
    aboutCardName: "THON BUNLENG",
    aboutCardCity: "Phnom Penh, Cambodia",
    aboutCardRole: "Software Developer",
    aboutCardParagraph:
      "Hi everyone! I'm Thon Bunleng from Phnom Penh, Cambodia. I'm a Software Developer passionate about building scalable mobile and web applications with clean architecture and modern tools.",
    aboutCardEducation: "Computer Science",
    aboutCardUniversity: "BELTEI International University",
    aboutCardActivitiesPrefix:
      "Outside of coding, I love engaging in activities that keep me creative and inspired",
    aboutCardActivities: {
      games: "Playing Games 🎮",
      blogs: "Writing Tech Blogs ✍️",
      travel: "Traveling and Exploring New Places 🌍",
    },
    aboutCardQuote: '"Strive to build things that make a difference!"',
    aboutCardFooter: "THON BUNLENG",
    professionalSkills: "Professional Skillset",
    toolsTitle: "Tools I use",
    toolsTitlePrefix: "Tools",
    toolsTitleSuffix: "I use",
    projectsTitlePrefix: "My",
    projectsTitleHighlight: "Recent",
    projectsTitleSuffix: "Works",
    projectsSubtitle: "Here are a few projects I've worked on recently.",
    resumeTitlePrefix: "My",
    resumeTitleHighlight: "Resume",
    resumeTitleSuffix: "",
    resumeSummary: "A summary of my professional journey, skills, and education.",
    resume: {
      experience: [
        {
          title: "Mobile App Developer (Flutter/Dart)",
          company: "Wintech Software Development Cambodia Co. Ltd",
          period: "2025 – 2026",
          details: [
            "Developed and maintained a complete Coffee Shop Management System (Wintech Software Development Cambodia Co. Ltd) as a production-ready mobile application.",
            "Built core features including POS, inventory management, sales reporting, and user authentication using Flutter/Dart.",
            "Collaborated with backend and QA teams to integrate APIs and ensure smooth deployment in a live business environment.",
          ],
        },
        {
          title: "Backend Developer Intern",
          company: "VANNA (Siem Reap, Cambodia)",
          period: "July 2024 – October 2024",
          details: [
            "Developed and maintained RESTful APIs using Node.js and Express, delivering reliable endpoints for mobile and web clients.",
            "Integrated MongoDB and PostgreSQL into backend services, improving data access speed by up to 30%.",
            "Collaborated with cross-functional teams to deliver features in sprints and participated in code reviews.",
          ],
        },
        {
          title: "Developer Freelancer & Open Source Contributor",
          company: "Freelance & Open Source",
          period: "2024 – Present",
          details: [
            "Built and deployed full-stack applications using Laravel, React, and Flutter for various clients.",
            "Contributed to open-source projects and created technical content (blogs and tutorials) for the developer community.",
            "Designed efficient SQL queries and REST APIs, reducing application response time by 25%.",
          ],
        },
        {
          title: "Designer & Video Editor",
          company: "Freelance",
          period: "2024 – Present",
          details: [
            "Provided freelance design and video editing services for clients, creating visual content for social media, branding, and marketing campaigns.",
            "Edited and produced high-quality videos using modern tools, improving client engagement and online presence.",
            "Collaborated with diverse teams to deliver creative solutions tailored to client needs.",
          ],
        },
      ],
      education: [
        {
          title: "Bachelor of Science in Computer Science",
          school: "Beltei International University (Phnom Penh, Cambodia)",
          period: "2023 – 2026",
          details: [
            "Focused on software engineering, algorithms, databases, and web/mobile technologies.",
            "Capstone project: Automated School Management System.",
          ],
        },
        {
          title: "High School Diploma – Social Sciences",
          school: "Preah Bat Samdech Preah Boromneath Norodom Sihamoni General and Technical High School",
          period: "2019 – 2023",
          details: [
            "Graduated with a focus on Social Sciences and mathematics, achieving top grades in computer science and physics.",
          ],
        },
      ],
      skills: [
        "Flutter / Dart",
        "JavaScript / TypeScript",
        "React.js / Next.js",
        "Node.js / Express",
        "Laravel / PHP",
        "MongoDB / PostgreSQL",
        "Docker / Git / CI-CD",
        "Tailwind CSS / Bootstrap",
      ],
      tools: [
        "VS Code",
        "Postman",
        "IntelliJ IDEA",
        "Android Studio",
        "Figma",
        "GitHub / GitLab",
        "Linux",
      ],
    },
    experienceTitle: "Experience",
    educationTitle: "Education",
    skillsTitle: "Skills",
    technicalSkillsTitle: "Technical",
    technicalSkillsHighlight: "Skills",
    technicalSkillsSubtitle: "Tools and technologies I work with on a daily basis.",
    githubButton: "GitHub",
    demoButton: "Demo",
    blogButton: "Blog",
    readArticle: "Read Article",
    backToBlogs: "Back to Blogs",
    blogTitle: "My Blogs",
    blogSubtitle:
      "Deep dives into mobile app architecture, UI/UX implementation, and clean code.",
    blogNotFound: "Blog not found",
    codeDays: "Days I Code",
    codeDaysHighlight: "Code",
    footerDesigned: "Designed and Developed by Thon Bunleng",
    footerCopyright: "Copyright ©",
    footerBy: "Thon Bunleng",
    languagePageTitle: "Choose Your Language",
    languagePageSubtitle: "Select a language to continue",
    languagePageEnglish: "English",
    languagePageKhmer: "Khmer",
    languagePageContinue: "Continue",
    typeOptions: {
      softwareDeveloper: "Software Developer",
      mobileAppDeveloper: "Mobile App Developer",
      webDeveloper: "Web Developer",
      uxUiDesigner: "UX/UI Designer",
      freelancer: "Freelancer",
      mernStackDeveloper: "MERN Stack Developer",
      openSourceContributor: "Open Source Contributor",
    },
    servicesTitle: "Services",
    services: {
      webDevelopment: "Web Development",
      mobileAppDevelopment: "Mobile App Development",
      customSoftwareDevelopment: "Custom Software Development",
      apiIntegration: "API Integration",
      databaseDesign: "Database Design",
      bugFixingMaintenance: "Bug Fixing & Maintenance",
      systemDevelopment: "System Development for Businesses",
    },
    socialLabels: {
      github: "GitHub",
      gitlab: "GitLab",
      linkedin: "LinkedIn",
      telegram: "Telegram",
      facebook: "Facebook",
      youtube: "YouTube",
      tiktok: "TikTok",
      phone: "Phone",
    },
    meWelcome: "Welcome to my portfolio",
    meHeroDescription:
      "Full-Stack & Mobile Application Developer crafting responsive web solutions, intuitive UI/UX designs, and scalable cross-platform mobile apps for iOS and Android.",
    meAvailableForHire: "Available for Hire",
    meSpecialist: "Web & Mobile Specialist",
    meHireMe: "Hire Me",
    meLearnMore: "Learn More",
    meCancel: "Cancel",
    meGoToPortfolio: "Go To Portfolio",
    meGetInTouch: "Get in touch",
    meBrandName: "THON BUNLENG",
  },
  nan: {
    homeim: "我是",
    navbarHome: "首頁",
    navbarAbout: "關於我",
    navbarProjects: "專案",
    navbarResume: "履歷",
    navbarBlogs: "部落格",
    navbarContact: "聯繫我",
    homeGreeting: "你好！",
    homeNameTranslation: "何文霖",
    homeIntroPrefix: "讓",
    homeIntroMiddle: "我介紹",
    homeIntroSuffix: "自己",
    homeIntroRole: "Web & Mobile Specialist",
    availableFreelance: "接案中",
    homeHeroTitle: "軟體",
    homeHeroTitleHighlight: "工程師",
    homeHeroTagline: "快速打造高品質軟體",
    homeImPrefix: "我是",
    homeImName: "何文霖",
    homeIntroParagraph:
      "我是一名熱愛將創意轉化為可靠、可擴充產品的軟體工程師。多年來，我探索了多種技術，並在打造高效能系統與直覺化使用者體驗中找到我的熱情。我精通 <span class=\"tech-flutter\">Flutter</span>、<span class=\"tech-react-native\">React Native</span>、<span class=\"tech-swift\">Swift</span>、<span class=\"tech-kotlin\">Kotlin</span>、<span class=\"tech-javascript\">JavaScript</span>、<span class=\"tech-cpp\">C++</span>、<span class=\"tech-csharp\">C#</span>、<span class=\"tech-rust\">Rust</span>、<span class=\"tech-nodejs\">Node.js</span>、<span class=\"tech-laravel\">Laravel</span>、<span class=\"tech-python\">Python</span> 和 <span class=\"tech-java\">Java</span> — 我喜歡在後端與前端的技術堆疊中工作。我的主要興趣領域包括開發行動應用程式與網頁應用程式、區塊鏈解決方案，以及探索連接鏈上與鏈下系統的新方法。只要有可能，我喜歡使用 Flutter 和現代框架如 <span class=\"tech-reactjs\">React.js</span> 和 <span class=\"tech-nextjs\">Next.js</span> 來打造專案。",
    homeFindMe: "找到我",
    homeConnect: "歡迎與我聯絡",
    homeConnectHighlight: "聯絡",
    contactPhone: "+855 011 820 595",
    contactEmail: "leng94570@gmail.com",
    telegramAriaLabel: "開啟 Telegram",
    telegramQrAlt: "Telegram 二維碼",
    telegramLabel: "Telegram",
    aboutTitlePrefix: "了解",
    aboutTitleHighlight: "我",
    aboutTitleSuffix: "...！",
    aboutCardName: "何文霖",
    aboutCardCity: "柬埔寨金邊",
    aboutCardRole: "軟體開發人員",
    aboutCardParagraph:
      "大家好！我是何文霖，來自柬埔寨金邊。我是一名充滿熱情的軟體開發人員，致力於使用簡潔架構與現代工具打造可擴充的行動與網頁應用程式。",
    aboutCardEducation: "電腦科學",
    aboutCardUniversity: "BELTEI國際大學",
    aboutCardActivitiesPrefix:
      "除了寫程式，我喜歡做一些能讓我保持創造力與靈感的活動",
    aboutCardActivities: {
      games: "玩遊戲 🎮",
      blogs: "寫技術部落格 ✍️",
      travel: "旅行與探索新地方 🌍",
    },
    aboutCardQuote: "努力創造有價值的事物！",
    aboutCardFooter: "THON BUNLENG",
    professionalSkills: "專業技能",
    toolsTitle: "我使用的工具",
    toolsTitlePrefix: "我使用的",
    toolsTitleSuffix: "工具",
    projectsTitlePrefix: "我的",
    projectsTitleHighlight: "近期",
    projectsTitleSuffix: "作品",
    projectsSubtitle: "以下是我最近完成的一些專案。",
    resumeTitlePrefix: "我的",
    resumeTitleHighlight: "履歷",
    resumeTitleSuffix: "",
    resumeSummary: "我的職涯歷程、技能與教育背景概覽。",
    resume: {
      experience: [
        {
          title: "行動應用程式開發工程師（Flutter/Dart）",
          company: "Wintech Software Development Cambodia Co. Ltd",
          period: "2025 – 2026",
          details: [
            "為 Wintech Software Development Cambodia Co. Ltd 開發並維護一套完整的咖啡店管理系統（行動應用程式）。",
            "使用 Flutter/Dart 建置核心功能，包括 POS、庫存管理、銷售報表與使用者驗證。",
            "與後端及 QA 團隊合作，整合 API，並確保在實際商業環境中順利部署。",
          ],
        },
        {
          title: "後端開發實習生",
          company: "VANNA（暹粒，柬埔寨）",
          period: "2024年7月 – 2024年10月",
          details: [
            "使用 Node.js 與 Express 開發並維護 RESTful API，為行動裝置與網頁用戶端提供穩定的端點。",
            "將 MongoDB 與 PostgreSQL 整合進後端服務，將資料存取速度提升 30%。",
            "與跨職能團隊合作，於衝刺（Sprint）中交付功能並參與程式碼審查。",
          ],
        },
        {
          title: "自由接案開發者與開源貢獻者",
          company: "自由接案與開源",
          period: "2024年 – 至今",
          details: [
            "使用 Laravel、React 與 Flutter 為各種客戶建置並部署全端應用程式。",
            "為開源專案做出貢獻，並為開發者社群創作技術內容（部落格與教學文章）。",
            "設計高效率的 SQL 查詢與 REST API，將應用程式回應時間縮短 25%。",
          ],
        },
        {
          title: "設計師與影片剪輯師",
          company: "自由接案",
          period: "2024年 – 至今",
          details: [
            "為客戶提供自由接案設計與影片剪輯服務，為社群媒體、品牌與行銷活動創作視覺內容。",
            "使用現代工具剪輯與製作高品質影片，提升客戶參與度與線上形象。",
            "與多元團隊合作，提供量身打造的創意解決方案以滿足客戶需求。",
          ],
        },
      ],
      education: [
        {
          title: "電腦科學學士",
          school: "BELTEI國際大學（柬埔寨金邊）",
          period: "2023年 – 2026年",
          details: [
            "專注於軟體工程、演算法、資料庫與網頁／行動技術。",
            "畢業專題：自動化學校管理系統。",
          ],
        },
        {
          title: "高中文憑 – 社會科學",
          school: "諾羅敦・西哈莫尼國王綜合技術高中",
          period: "2019年 – 2023年",
          details: [
            "以社會科學與數學為主修畢業，在電腦科學與物理方面表現優異。",
          ],
        },
      ],
      skills: [
        "Flutter / Dart",
        "JavaScript / TypeScript",
        "React.js / Next.js",
        "Node.js / Express",
        "Laravel / PHP",
        "MongoDB / PostgreSQL",
        "Docker / Git / CI-CD",
        "Tailwind CSS / Bootstrap",
      ],
      tools: [
        "VS Code",
        "Postman",
        "IntelliJ IDEA",
        "Android Studio",
        "Figma",
        "GitHub / GitLab",
        "Linux",
      ],
    },
    experienceTitle: "工作經歷",
    educationTitle: "教育背景",
    skillsTitle: "技能",
    technicalSkillsTitle: "技術",
    technicalSkillsHighlight: "技能",
    technicalSkillsSubtitle: "我日常使用的工具與技術。",
    githubButton: "GitHub",
    demoButton: "展示",
    blogButton: "部落格",
    readArticle: "閱讀文章",
    backToBlogs: "返回部落格",
    blogTitle: "我的部落格",
    blogSubtitle:
      "深入探討行動應用程式架構、UI/UX 實作與簡潔程式碼。",
    blogNotFound: "找不到部落格文章",
    codeDays: "寫程式天數",
    codeDaysHighlight: "程式碼",
    footerDesigned: "由何文霖設計開發",
    footerCopyright: "版權所有 ©",
    footerBy: "何文霖",
    languagePageTitle: "選擇您的語言",
    languagePageSubtitle: "選擇一種語言以繼續",
    languagePageEnglish: "英文",
    languagePageKhmer: "高棉語",
    languagePageContinue: "繼續",
    typeOptions: {
      softwareDeveloper: "軟體開發人員",
      mobileAppDeveloper: "行動應用程式開發人員",
      webDeveloper: "網頁開發人員",
      uxUiDesigner: "UX/UI 設計師",
      freelancer: "自由接案者",
      mernStackDeveloper: "MERN 全端開發人員",
      openSourceContributor: "開源貢獻者",
    },
    servicesTitle: "服務",
    services: {
      webDevelopment: "網頁開發",
      mobileAppDevelopment: "行動應用程式開發",
      customSoftwareDevelopment: "客製化軟體開發",
      apiIntegration: "API 整合",
      databaseDesign: "資料庫設計",
      bugFixingMaintenance: "錯誤修復與維護",
      systemDevelopment: "企業系統開發",
    },
    socialLabels: {
      github: "GitHub",
      gitlab: "GitLab",
      linkedin: "LinkedIn",
      telegram: "Telegram",
      facebook: "Facebook",
      youtube: "YouTube",
      tiktok: "TikTok",
      phone: "電話",
    },
    meWelcome: "歡迎來到我的作品集",
    meHeroDescription:
      "全端與行動應用程式開發人員，打造響應式網頁解決方案、直觀的 UI/UX 設計，以及適用於 iOS 和 Android 的可擴展跨平台行動應用程式。",
    meAvailableForHire: "誠徵中",
    meSpecialist: "網頁與行動專員",
    meHireMe: "僱用我",
    meLearnMore: "了解更多",
    meCancel: "取消",
    meGoToPortfolio: "前往作品集",
    meGetInTouch: "與我聯繫",
    meBrandName: "何文霖",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") return "en";
    const stored = localStorage.getItem("language");
    if (stored === "km") {
      localStorage.removeItem("language");
      return "en";
    }
    if (stored === "zh") {
      localStorage.setItem("language", "nan");
      return "nan";
    }
    return stored || "en";
  });

  // Persist every change immediately.
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // --- Cross-instance sync -------------------------------------------
  // If <LanguageProvider> ends up mounted more than once in the tree
  // (e.g. wrapped around a single route instead of once at the app root),
  // each instance holds its OWN `language` state — selecting a language
  // in one updates localStorage but the other instance never re-renders,
  // so parts of the UI (like the navbar flag) look stuck on English.
  //
  // The native "storage" event only fires in OTHER tabs/windows, not the
  // same one, so we dispatch a custom event locally whenever this
  // instance changes the language, and every instance (including this
  // one) listens for it and stays in sync. This makes the symptom
  // disappear even if the duplicate-provider issue in the component tree
  // isn't fixed yet — though fixing the tree structure is still the
  // correct long-term solution (see the App.js note below).
  useEffect(() => {
    function handleSync(e) {
      const next = e.detail;
      if (next && next !== language && translations[next]) {
        setLanguageState(next);
      }
    }
    window.addEventListener("language-sync", handleSync);
    return () => window.removeEventListener("language-sync", handleSync);
  }, [language]);

  const setLanguage = (lang) => {
    if (!translations[lang]) {
      console.warn(`LanguageContext: "${lang}" is not a supported language, ignoring.`);
      return;
    }
    setLanguageState(lang);
    window.dispatchEvent(new CustomEvent("language-sync", { detail: lang }));
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      }
    }
    return value !== undefined && value !== null ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
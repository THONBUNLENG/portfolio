import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    navbarHome: "Home",
    navbarAbout: "About",
    navbarProjects: "Projects",
    navbarResume: "Resume",
    navbarBlogs: "Blogs",
    homeGreeting: "Hi There!",
    homeIntroPrefix: "LET ME",
    homeIntroMiddle: "INTRODUCE",
    homeIntroSuffix: "MYSELF",
    homeIntroParagraph:
      "I'm a Software Engineer who loves transforming ideas into reliable, scalable products. Over time, I've explored several technologies and found my passion in building high-performance systems and intuitive user experiences. I'm proficient in Flutter, React Native, Swift, Kotlin, JavaScript, C++, C#, Rust, Node.js, Laravel, Python and Java — and I enjoy working across both backend and frontend stacks. My key areas of interest include developing Mobile Applications and Web Applications, Blockchain Solutions and exploring new ways to bridge on-chain and off-chain systems. Whenever possible, I love building projects with Flutter and modern frameworks like React.js and Next.js.",
    homeFindMe: "Find Me On",
    homeConnect: "Feel free to connect with me",
    homeConnectHighlight: "connect",
    aboutTitlePrefix: "Know Who ",
    aboutTitleHighlight: "I'M",
    aboutTitleSuffix: "....",
    aboutCardName: "THON BUNLENG",
    aboutCardCity: "Phnom Penh, Cambodia",
    aboutCardRole: "Software Developer",
    aboutCardParagraph:
      "Hi everyone! I&apos;m Thon Bunleng from Phnom Penh, Cambodia. I&apos;m a Software Developer passionate about building scalable mobile and web applications with clean architecture and modern tools.",
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
          period: "2023 – Present",
          details: [
            "Built and deployed full-stack applications using Laravel, React, and Flutter for various clients.",
            "Contributed to open-source projects and created technical content (blogs and tutorials) for the developer community.",
            "Designed efficient SQL queries and REST APIs, reducing application response time by 25%.",
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
          title: "High School Diploma – Science",
          school: "Beltei International School",
          period: "2019 – 2023",
          details: [
            "Graduated with a focus on science and mathematics, achieving top grades in computer science and physics.",
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
    blogTitle: "My Blogs",
    blogSubtitle:
      "Deep dives into mobile app architecture, UI/UX implementation, and clean code.",
    codeDays: "Days I Code",
    codeDaysHighlight: "Code",
    footerDesigned: "Designed and Developed by Thon Bunleng",
    footerCopyright: "Copyright ©",
    footerBy: "Thon Bunleng",
    typeOptions: {
      softwareDeveloper: "Software Developer",
      mobileAppDeveloper: "Mobile App Developer",
      webDeveloper: "Web Developer",
      uxUiDesigner: "UX/UI Designer",
      freelancer: "Freelancer",
      mernStackDeveloper: "MERN Stack Developer",
      openSourceContributor: "Open Source Contributor",
    },
  },
  km: {
    navbarHome: "ទំព័រដើម",
    navbarAbout: "អំពីខ្ញុំ",
    navbarProjects: "គម្រោង",
    navbarResume: "ប្រវត្តិរូប",
    navbarBlogs: "អត្ថបទ",
    homeGreeting: "សួស្តី!",
    homeIntroPrefix: "សូមអនុញ្ញាត",
    homeIntroMiddle: "ណែនាំ",
    homeIntroSuffix: "ខ្លួនឯង",
    homeIntroParagraph:
      "ខ្ញុំជាវិស្វករកម្មវិធីដែលស្រឡាញ់ការប្រែក្លាយគំនិតទៅជាផលិតផលដែលអាចជឿទុកចិត្តបាន និងស្រួលបន្ថែម។ តាមពេលវេលា ខ្ញុំបានសិក្សារស់ន័យបច្ចេកវិទ្យាជាច្រើន ហើយរកឃើញចំណង់ចំណូលចិត្តរបស់ខ្ញុំក្នុងការបង្កើតប្រព័ន្ធដែលមានប្រសិទ្ធភាពខ្ពស់ និងបទពិសោធន៍អ្នកប្រើប្រាស់ដ៏ងាយស្រួល។ ខ្ញុំស្ទាត់ជំនាញក្នុង Flutter, React Native, Swift, Kotlin, JavaScript, C++, C#, Rust, Node.js, Laravel, Python និង Java — ហើយខ្ញុំរីករាយក្នុងការធ្វើការទាំងផ្នែក Backend និង Frontend។ ចំណុចចាប់អារម្មណ៍សំខាន់របស់ខ្ញុំរួមមាន ការអភិវឌ្ឍកម្មវិធីទូរស័ព្ទ វេបសាយ ដំណោះស្រាយ Blockchain និងការស្វែងរកវិធីសាស្ត្រថ្មីៗដើម្បីភ្ជាប់ប្រព័ន្ធ on-chain និង off-chain។ នៅពេលណាដែលអាចធ្វើទៅបាន ខ្ញុំស្រឡាញ់ការសាងសង់គម្រោងជាមួយ Flutter និងគ្រោងការណ៍ទំនើបៗដូចជា React.js និង Next.js។",
    homeFindMe: "រកឃើញខ្ញុំនៅ",
    homeConnect: "សូមទំនាក់ទំនងជាមួយខ្ញុំ",
    homeConnectHighlight: "ទំនាក់ទំនង",
    aboutTitlePrefix: "ណែនាំអំពី",
    aboutTitleHighlight: "ខ្ញុំ",
    aboutTitleSuffix: "...",
    aboutCardName: "ថុន ប៊ុនឡេង​ ",
    aboutCardCity: "រាជ្យធានីភ្នំពេញ,ប្រទេសកម្ពុជា",
    aboutCardRole: "អ្នកអភិវឌ្ឍន៍កម្មវិធី",
    aboutCardParagraph:
      "សួស្តីអ្នកគ្រប់គ្នា! ខ្ញុំបាទឈ្មោះ​ ថុន ប៊ុនឡេងមកពីរាជ្យធានីភ្នំពេញប្រទេសកម្ពុជា។ ខ្ញុំជាអ្នកអភិវឌ្ឍន៍កម្មវិធីដែលមានចំណង់ចំណូលចិត្តក្នុងការបង្កើតកម្មវិធីទូរស័ព្ទ និងវេបសាយដែលអាចពង្រីកបាន ដែលមានស្ថាបត្យកម្មស្អាត និងឧបករណ៍ទំនើប។",
    aboutCardEducation: "វិទ្យាសាស្ត្រកុំព្យូទ័រ",
    aboutCardUniversity: "សាកលវិទ្យាល័យអន្តរជាតិ ប៊ែលធី",
    aboutCardActivitiesPrefix:
      "ក្រៅពីការសរសេរកូដ ខ្ញុំស្រឡាញ់ធ្វើសកម្មភាពដែលធ្វើឱ្យខ្ញុំមានភាពច្នៃប្រឌិត និងទទួលការបំផុសគំនិត៖",
    aboutCardActivities: {
      games: "កំពុងលេងហ្គេម 🎮",
      blogs: "សរសេរប្លុកបច្ចេកវិទ្យា ✍️",
      travel: "ធ្វើដំណើរនិងរកមើលទីកន្លែងថ្មីៗ 🌍",
    },
    aboutCardQuote: '"ខិតខំបង្កើតអ្វីៗដែលបង្កើតការផ្លាស់ប្តូរ!"',
    aboutCardFooter: "ថុន ប៊ុនឡេង",
    professionalSkills: "ជំនាញវិជ្ជាជីវៈ",
    toolsTitle: "ឧបករណ៍ដែលខ្ញុំប្រើ",
    projectsTitlePrefix: "គម្រោង",
    projectsTitleHighlight: "ថ្មីៗ",
    projectsTitleSuffix: "របស់ខ្ញុំ",
    projectsSubtitle: "នេះជាគម្រោងខ្លះដែលខ្ញុំបានធ្វើថ្មីៗនេះ។",
    resumeTitlePrefix: "ប្រវត្តិរូប",
    resumeTitleHighlight: "សង្ខេប",
    resumeTitleSuffix: "របស់ខ្ញុំ",
    resumeSummary: "សេចក្តីសង្ខេបនៃដំណើរវិជ្ជាជីវៈ ជំនាញ និងការសិក្សារបស់ខ្ញុំ។",
    resume: {
      experience: [
        {
          title: "អ្នកអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ (Flutter/Dart)",
          company: "Wintech Software Development Cambodia Co. Ltd",
          period: "2025 – 2026",
          details: [
            "អភិវឌ្ឍន៍និងថែរក្សាប្រព័ន្ធគ្រប់គ្រងហាងកាហ្វេជាកម្មវិធីទូរស័ព្ទដែលរួចរាល់សម្រាប់ប្រើការ។",
            "បង្កើតមុខងារដូចជា POS ការគ្រប់គ្រងស្តុក របាយការណ៍លក់ និងការផ្ទៀងផ្ទាត់អ្នកប្រើប្រាស់ ដោយប្រើ Flutter/Dart។",
            "សហការជាមួយក្រុម Backend និង QA ដើម្បីភ្ជាប់ API និងធានាការដំណើរការរលូននៅក្នុងបរិយាកាសធ្វើការពិតប្រាកដ។",
          ],
        },
        {
          title: "អ្នកអភិវឌ្ឍន៍ Backend ក្រោមការបណ្តុះបណ្តាល",
          company: "VANNA (សៀមរាប, កម្ពុជា)",
          period: "កក្កដា 2024 – តុលា 2024",
          details: [
            "អភិវឌ្ឍន៍និងថែរក្សា RESTful APIs ដោយប្រើ Node.js និង Express ផ្តល់ endpoint ដែលអាចជឿទុកចិត្តបានសម្រាប់កម្មវិធីទូរស័ព្ទ និងវេបសាយ។",
            "ដាក់បញ្ចូល MongoDB និង PostgreSQL ទៅក្នុងសេវាកម្ម Backend ធ្វើឲ្យល្បឿនចូលដំណើរទិន្នន័យកើនឡើងដល់ ៣០%។",
            "សហការជាមួយក្រុមមុខងារផ្សេងៗ ដើម្បីដំណើរការផ្ដល់ feature នៅក្នុង sprint និងចូលរួមក្នុងការត្រួតពិនិត្យកូដ។",
          ],
        },
        {
          title: "អ្នកអភិវឌ្ឍន៍ឯករាជ្យ & អ្នករួមចំណែក Open Source",
          company: "Freelance & Open Source",
          period: "2023 – បច្ចុប្បន្ន",
          details: [
            "បង្កើតនិងដំណើរការកម្មវិធី Full-Stack ដោយប្រើ Laravel, React, និង Flutter សម្រាប់អតិថិជនជាច្រើន។",
            "រួមចំណែកនៅក្នុងគម្រោង Open Source និងបង្កើតមាតិកាបច្ចេកទេស (ប្លុក និង tutorial) សម្រាប់សហគមន៍អ្នកអភិវឌ្ឍន៍។",
            "រចនាសំណួរ SQL និង REST API ដែលមានប្រសិទ្ធភាព ធ្វើឲ្យពេលវេលាឆ្លើយតបនៃកម្មវិធីប្រសើរឡើង ២៥%។",
          ],
        },
      ],
      education: [
        {
          title: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ",
          school: "សាកលវិទ្យាល័យអន្តរជាតិ ប៊ែលធី (ភ្នំពេញ, កម្ពុជា)",
          period: "២០២៣ – ២០២៦",
          details: [
            "ផ្តោតលើវិស្វកម្មសូហ្វវែរ ក្បួនដោះស្រាយ មូលដ្ឋានទិន្នន័យ និងបច្ចេកវិទ្យាវេបសាយ/ទូរស័ព្ទ។",
            "គម្រោងចប់ស្រេច: ប្រព័ន្ធគ្រប់គ្រងសាលារៀនស្វ័យប្រវត្តិ។",
          ],
        },
        {
          title: "សញ្ញាបត្រវិទ្យាល័យ – ផ្នែកវិទ្យាសាស្ត្រ",
          school: "សាលារៀនអន្តរជាតិ ប៊ែលធី",
          period: "២០១៩ – ២០២៣",
          details: [
            "បញ្ចប់ការសិក្សាដោយផ្តោតលើវិទ្យាសាស្ត្រ និងគណិតវិទ្យា ទទួលបានពិន្ទុខ្ពស់ក្នុងកុំព្យូទ័រ និងរូបវិទ្យា។",
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
    experienceTitle: "បទពិសោធន៍",
    educationTitle: "ការសិក្សា",
    skillsTitle: "ជំនាញ",
    technicalSkillsTitle: "បច្ចេកទេស",
    technicalSkillsHighlight: "ជំនាញ",
    technicalSkillsSubtitle: "ឧបករណ៍និងបច្ចេកវិទ្យាដែលខ្ញុំប្រើប្រចាំថ្ងៃ។",
    githubButton: "GitHub",
    demoButton: "សាកល្បង",
    blogButton: "អត្ថបទ",
    readArticle: "អានអត្ថបទ",
    blogTitle: "អត្ថបទរបស់ខ្ញុំ",
    blogSubtitle:
      "ការស្វែងយល់ស៊ីជម្រៅអំពីស្ថាបត្យកម្មកម្មវិធីទូរស័ព្ទ ការអនុវត្ត UI/UX និងការសរសេរកូដស្អាត។",
    codeDays: "ថ្ងៃដែលខ្ញុំសរសេរ",
    codeDaysHighlight: "កូដ",
    footerDesigned: "រចនានិងអភិវឌ្ឍដោយ ថុន ប៊ុនឡេង",
    footerCopyright: "រក្សាសិទ្ធ ©",
    footerBy: "ថុន ប៊ុនឡេង",
    typeOptions: {
      softwareDeveloper: "អ្នកអភិវឌ្ឍន៍កម្មវិធី",
      mobileAppDeveloper: "អ្នកអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ",
      webDeveloper: "អ្នកអភិវឌ្ឍន៍វេបសាយ",
      uxUiDesigner: "អ្នករចនា UX/UI",
      freelancer: "អ្នកធ្វើការឯករាជ្យ",
      mernStackDeveloper: "អ្នកអភិវឌ្ឍន៍ MERN Stack",
      openSourceContributor: "អ្នករួមចំណែក Open Source",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "km" : "en"));
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      }
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;

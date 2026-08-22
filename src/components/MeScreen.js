import React from "react";
import { useNavigate } from "react-router-dom";
import workingBg from "../Assets/Working.jpg";
import { AiFillGithub, AiOutlineTwitter, AiFillPhone } from "react-icons/ai";
import { SiGitlab, SiTiktok } from "react-icons/si";
import { FaLinkedin, FaTelegram, FaYoutube, FaArrowRight } from "react-icons/fa";

function MeScreen() {
  const navigate = useNavigate();

  const heroSocialLinks = [
    { id: "github", icon: <AiFillGithub />, href: "https://github.com/THONBUNLENG", label: "GitHub" },
    { id: "twitter", icon: <AiOutlineTwitter />, href: "https://twitter.com", label: "Twitter" },
    { id: "linkedin", icon: <FaLinkedin />, href: "https://kh.linkedin.com/in/thon-bunleng-dev", label: "LinkedIn" },
    { id: "telegram", icon: <FaTelegram />, href: "https://t.me/bunleng_dev", label: "Telegram" },
    { id: "gitlab", icon: <SiGitlab />, href: "https://gitlab.com/leng94570", label: "GitLab" },
    { id: "youtube", icon: <FaYoutube />, href: "https://www.youtube.com/", label: "YouTube" },
    { id: "tiktok", icon: <SiTiktok />, href: "https://www.tiktok.com/@wen_lin1314", label: "TikTok" },
    { id: "phone-metfone", icon: <AiFillPhone />, href: "tel:+855883205515", label: "Phone" },
  ];

  return (
    <div className="min-h-screen text-white font-sans flex flex-col justify-between relative overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
      
      {/* 1. BACKGROUND IMAGE - CRYSTAL CLEAR & SHARP */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={workingBg}
          alt="Workspace Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft vignette/shadow overlay purely to make text pop without dulling the image */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* 2. DYNAMIC CIRCUIT SVG LINES */}
      <div className="absolute top-0 left-0 w-full h-[450px] pointer-events-none z-[2] opacity-60 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>{`
              @keyframes dashMove {
                to { stroke-dashoffset: -40; }
              }
              @keyframes pulseGlow {
                0%, 100% { opacity: 0.4; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.3); }
              }
              .animated-dash {
                stroke-dasharray: 8 6;
                animation: dashMove 2s linear infinite;
              }
              .pulse-node {
                transform-origin: center;
                animation: pulseGlow 2.5s ease-in-out infinite;
              }
            `}</style>
          </defs>

          <path d="M 150 30 L 350 30 L 450 110 L 750 110 L 850 30 L 1200 30" stroke="#c29b53" strokeWidth="1.5" />
          <path d="M 10 100 L 220 100 L 300 50 L 550 50 L 630 140 L 900 140 L 980 60 L 1200 60" stroke="#c29b53" strokeWidth="1.5" className="animated-dash" />

          <g transform="translate(460, 93)" className="pulse-node">
            <rect x="0" y="0" width="48" height="34" rx="8" fill="#141824" stroke="#c29b53" strokeWidth="1.5" />
            <text x="12" y="22" fill="#c29b53" fontSize="13" fontWeight="bold">&lt;/&gt;</text>
          </g>

          <path d="M 80 200 L 290 200 L 380 280 L 720 280 L 810 170 L 1200 170" stroke="#e74c5e" strokeWidth="1.5" />
          <path d="M 0 310 L 200 310 L 290 220 L 600 220 L 680 330 L 1200 330" stroke="#e74c5e" strokeWidth="1" strokeOpacity="0.5" />

          <circle cx="300" cy="50" r="4.5" fill="#c29b53" className="pulse-node" />
          <circle cx="450" cy="110" r="4" fill="#c29b53" />
          <circle cx="630" cy="140" r="5" fill="#e74c5e" className="pulse-node" />
          <circle cx="380" cy="280" r="5" fill="#e74c5e" className="pulse-node" />
          <circle cx="810" cy="170" r="4.5" fill="#c29b53" />
          <circle cx="980" cy="60" r="4" fill="#c29b53" className="pulse-node" />
        </svg>
      </div>

      {/* 3. HEADER NAVIGATION */}
      <nav className="w-full relative z-20">
        <div className="container mx-auto px-6 sm:px-12 py-6 sm:py-8 flex justify-between items-center max-w-7xl">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            THON BUNLENG <span className="text-[#e74c5e]">.</span>
          </h2>

          <a
            href="mailto:leng94570@gmail.com"
            className="text-xs font-semibold uppercase tracking-wider text-slate-100 hover:text-[#c29b53] transition-colors duration-200 border-b border-transparent hover:border-[#c29b53] pb-0.5 drop-shadow"
          >
            Get in touch &mdash;
          </a>
        </div>
      </nav>

      {/* 4. MAIN HERO SECTION (CENTERED, CLEAN & CRISP) */}
      <main className="container mx-auto px-6 sm:px-12 max-w-4xl flex-1 flex flex-col justify-center items-center text-center relative z-10 py-12">
        <div className="space-y-6 flex flex-col items-center">
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/20 text-xs sm:text-sm font-bold tracking-widest text-[#e74c5e] uppercase shadow-lg">
            Welcome to my portfolio
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            SOFTWARE ENGINEER
          </h1>

          <p className="text-slate-100 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Full-Stack & Mobile Application Developer with 3+ years of experience crafting responsive web solutions, UI/UX designs, and cross-platform mobile apps for iOS and Android.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-white/20 text-xs sm:text-sm font-semibold text-slate-100 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#e74c5e]" />
              3+ Years Web Development
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 border border-white/20 text-xs sm:text-sm font-semibold text-slate-100 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-[#e74c5e]" />
              1+ Year Mobile App Development
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
            {heroSocialLinks.map(({ id, icon, href, label }) => (
              <a
                key={id}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                title={label}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-white/25 bg-black/50 text-slate-100 text-lg hover:bg-[#c29b53] hover:border-[#c29b53] hover:text-black transition-all duration-200 shadow-xl hover:scale-105 active:scale-95"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/home")}
              className="inline-flex items-center gap-2 bg-[#c29b53] hover:bg-[#b08a42] text-black px-8 py-3.5 rounded-xl text-sm font-bold shadow-2xl shadow-black/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Learn More
              <FaArrowRight className="text-xs" />
            </button>
            <button
              type="button"
              onClick={() => (window.location.href = "mailto:leng94570@gmail.com")}
              className="bg-black/50 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-xl text-sm font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-2xl shadow-black/60"
            >
              Hire Me
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default MeScreen;
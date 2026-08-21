import React from "react";
import { useNavigate } from "react-router-dom";
import myImg from "../Assets/me.png";
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
    <div className="min-h-screen bg-[#1a1e2e] text-white font-sans flex flex-col justify-between relative overflow-hidden selection:bg-[#d4af37] selection:text-black">
      
      {/* Dynamic Animated Circuit Background SVG */}
      <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none z-0 opacity-40 overflow-hidden">
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

          {/* Top Gold Solid Trace */}
          <path
            d="M 150 30 L 350 30 L 450 110 L 750 110 L 850 30 L 1200 30"
            stroke="#c29b53"
            strokeWidth="1.5"
          />

          {/* Top Dashed Moving Gold Line */}
          <path
            d="M 10 100 L 220 100 L 300 50 L 550 50 L 630 140 L 900 140 L 980 60 L 1200 60"
            stroke="#c29b53"
            strokeWidth="1.5"
            className="animated-dash"
          />

          {/* Code Icon Container Box with Glow Animation */}
          <g transform="translate(460, 93)" className="pulse-node">
            <rect x="0" y="0" width="48" height="34" rx="8" fill="#1a1e2e" stroke="#c29b53" strokeWidth="1.5" />
            <text x="12" y="22" fill="#c29b53" fontSize="13" fontWeight="bold">&lt;/&gt;</text>
          </g>

          {/* Middle Red Solid Trace */}
          <path
            d="M 80 200 L 290 200 L 380 280 L 720 280 L 810 170 L 1200 170"
            stroke="#e74c5e"
            strokeWidth="1.5"
          />

          {/* Bottom Thin Red Line */}
          <path
            d="M 0 310 L 200 310 L 290 220 L 600 220 L 680 330 L 1200 330"
            stroke="#e74c5e"
            strokeWidth="1"
            strokeOpacity="0.5"
          />

          {/* Circuit Nodes with Pulsing Glow */}
          <circle cx="300" cy="50" r="4.5" fill="#c29b53" className="pulse-node" />
          <circle cx="450" cy="110" r="4" fill="#c29b53" />
          <circle cx="630" cy="140" r="5" fill="#e74c5e" className="pulse-node" />
          <circle cx="380" cy="280" r="5" fill="#e74c5e" className="pulse-node" />
          <circle cx="810" cy="170" r="4.5" fill="#c29b53" />
          <circle cx="980" cy="60" r="4" fill="#c29b53" className="pulse-node" />
        </svg>
      </div>

      {/* Header Navigation */}
      <nav className="w-full relative z-20">
        <div className="container mx-auto px-6 sm:px-12 py-8 flex justify-between items-center max-w-7xl">
          <h2 className="text-2xl font-black tracking-tight text-white">

            THON BUNLENG <span className="text-[#e74c5e]">.</span>
          </h2>

          <a
            href="mailto:leng94570@gmail.com"
            className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-[#c29b53] transition-colors duration-200 border-b border-transparent hover:border-[#c29b53] pb-0.5"
          >
            Get in touch &mdash;
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 sm:px-12 max-w-7xl flex-1 flex items-end relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">

          {/* Left Column: Bio & Content */}
          <div className="lg:col-span-6 space-y-5 py-12">
            {/* Welcome Label */}
            <p className="text-[#e74c5e] text-sm font-bold tracking-wider uppercase">
              Welcome!
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              SOFTWARE ENGINEER
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base max-w-md leading-relaxed">
              Full-Stack & Mobile Application Developer with 3+ years of experience crafting responsive web solutions, UI/UX designs, and cross-platform mobile apps for iOS and Android.
            </p>

            {/* Experience Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-xs sm:text-sm font-semibold text-slate-200">
                <span className="w-2 h-2 rounded-full bg-[#e74c5e]" />
                3+ Years Web Development
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-xs sm:text-sm font-semibold text-slate-200">
                <span className="w-2 h-2 rounded-full bg-[#e74c5e]" />
                1+ Year Mobile App Development
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {heroSocialLinks.map(({ id, icon, href, label }) => (
                <a
                  key={id}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-600/80 bg-[#161a26] text-slate-300 text-base hover:bg-[#c29b53] hover:border-[#c29b53] hover:text-black transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate("/home")}
                className="inline-flex items-center gap-2 bg-[#c29b53] hover:bg-[#b08a42] text-black px-8 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-[#c29b53]/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Learn More
                <FaArrowRight className="text-xs" />
              </button>
              <button
                type="button"
                onClick={() =>
                  (window.location.href = "mailto:leng94570@gmail.com")
                }
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3.5 rounded-xl text-sm font-semibold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Hire Me
              </button>
            </div>
          </div>

          {/* Right Column: Hero Portrait */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-end relative h-full">
            <img
              src={myImg}
              alt="Portrait"
              className="w-auto h-[85vh] max-h-[720px] min-h-[400px] object-contain object-bottom drop-shadow-2xl block relative z-10"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MeScreen;
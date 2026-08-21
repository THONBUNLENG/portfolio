import React from "react";
import { useNavigate } from "react-router-dom";
import myImg from "../Assets/me3.png";

function MeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#eaedf2] text-[#1a2b49] font-sans flex flex-col justify-between relative overflow-hidden selection:bg-[#f0544f] selection:text-white">
      {/* Background Decorative Accents */}
      <div className="absolute top-12 left-10 md:left-24 w-8 h-8 rounded-full border-2 border-[#f0544f]/30 pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-[#f0544f]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 left-0 right-0 h-48 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-500 via-transparent to-transparent" />

      {/* Header Navigation */}
      <nav className="w-full relative z-20">
        <div className="container mx-auto px-6 sm:px-12 py-8 flex justify-between items-center max-w-7xl">
          <h2 className="text-2xl font-black tracking-tight text-[#1a2b49]">
            Portfolio<span className="text-[#f0544f]">.</span>
          </h2>

          {/* Quick Contact Link */}
          <a
            href="mailto:leng94570@gmail.com"
            className="text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-[#f0544f] transition-colors duration-200"
          >
            Get in touch &rarr;
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 sm:px-12 max-w-7xl flex-1 flex items-end relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
          
          {/* Left Column: Bio & Content */}
          <div className="lg:col-span-6 space-y-6 pb-12 lg:pb-24 pt-4">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0544f]/10 border border-[#f0544f]/20">
              <span className="w-2 h-2 rounded-full bg-[#f0544f] animate-ping" />
              <span className="text-xs font-bold text-[#f0544f] tracking-wider uppercase">
                Available for Projects
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a2b49] leading-tight tracking-tight">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-[#1a2b49] via-[#2c436b] to-[#f0544f] bg-clip-text text-transparent">
                  Thon Bunleng
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold text-slate-500 tracking-tight">
                Software Engineer
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg max-w-lg leading-relaxed font-normal">
              Specialized in <strong className="text-[#1a2b49] font-semibold">Flutter</strong>, cross-platform mobile architecture, dynamic UI layout designing, and localizing applications across <span className="text-[#1a2b49] font-medium">Khmer, English, and Chinese</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => navigate("/home")}
                className="bg-[#f0544f] hover:bg-[#d9443f] text-white px-8 py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-[#f0544f]/25 hover:shadow-[#f0544f]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Learn More
              </button>
              <button
                type="button"
                onClick={() => (window.location.href = "mailto:leng94570@gmail.com")}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-8 py-3.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Hire Me
              </button>
            </div>
          </div>

          {/* Right Column: Hero Portrait */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-end">
            <div className="relative w-full max-w-lg lg:max-w-xl flex justify-center items-end">
              {/* Backlight Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-300/60 via-slate-200/20 to-transparent rounded-full -z-10 blur-3xl scale-95" />
              
              {/* Portrait Image */}
              <img
                src={myImg}
                alt="Thon Bunleng"
                className="w-full h-auto max-h-[550px] sm:max-h-[640px] lg:max-h-[760px] object-contain object-bottom drop-shadow-2xl brightness-105 contrast-105 hover:scale-[1.01] transition-transform duration-300 block"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default MeScreen;
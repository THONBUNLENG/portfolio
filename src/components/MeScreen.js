import React from "react";
import { useNavigate } from "react-router-dom";
import myImg from "../Assets/me.png";

function MeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1e2436] text-white font-sans flex flex-col justify-between relative overflow-hidden selection:bg-[#e74c5e] selection:text-white">
      {/* Background circle accent behind portrait */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-[#2a3150] -z-10 hidden lg:block" />

      {/* Header Navigation */}
      <nav className="w-full relative z-20">
        <div className="container mx-auto px-6 sm:px-12 py-8 flex justify-between items-center max-w-7xl">
          <h2 className="text-2xl font-black tracking-tight text-white">
            Portfolio<span className="text-[#e74c5e]">.</span>
          </h2>

          <a
            href="mailto:leng94570@gmail.com"
            className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-[#e74c5e] transition-colors duration-200"
          >
            Get in touch &rarr;
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 sm:px-12 max-w-7xl flex-1 flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">

          {/* Left Column: Bio & Content */}
          <div className="lg:col-span-6 space-y-5 py-12">
            {/* Welcome Label */}
            <p className="text-[#e74c5e] text-sm font-bold tracking-wider uppercase">
              Welcome!
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              I Am Web Designer
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base max-w-md leading-relaxed">
              I'm a Web Developer with extensive experience for over 5 years.
              My expertise is to create and Websites design, graphic design
              and many more...
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: "facebook-f", label: "Facebook" },
                { icon: "twitter", label: "Twitter" },
                { icon: "linkedin-in", label: "LinkedIn" },
                { icon: "instagram", label: "Instagram" },
                { icon: "behance", label: "Behance" },
              ].map(({ icon, label }) => (
                <a
                  key={icon}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-[#e74c5e]/60 text-[#e74c5e] text-sm hover:bg-[#e74c5e] hover:text-white transition-colors duration-200"
                >
                  <i className={`fab fa-${icon}`} />
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate("/home")}
                className="bg-[#e74c5e] hover:bg-[#d43d4f] text-white px-8 py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-[#e74c5e]/25 hover:shadow-[#e74c5e]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Learn More
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
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-end relative">
            <img
              src={myImg}
              alt="Portrait"
              className="w-full h-auto max-h-[500px] sm:max-h-[600px] lg:max-h-[680px] object-contain object-bottom drop-shadow-2xl block relative z-10"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MeScreen;
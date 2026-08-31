import React, { useRef, useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import gsap from "gsap";
import { AiFillGithub, AiFillPhone } from "react-icons/ai";
import { SiGitlab, SiTiktok } from "react-icons/si";
import { FaLinkedin, FaTelegram, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import ukFlag from "../Assets/uk-flag.png";
import taiwanFlag from "../Assets/taiwan.png";
import customLogo from "../Assets/logo.png";

const PARTICLE_COUNT = 45000;

// 1. បង្កើត Shapes (Solar System -> Earth+Moon -> Earth)
function generateShapesAndColors(count) {
  const solarSystem = new Float32Array(count * 3);
  const earthMoon = new Float32Array(count * 3);
  const earthOnly = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const palette = [
    new THREE.Color("#facc15"), // ថ្ងៃ - លឿង
    new THREE.Color("#38bdf8"), // ផែនដី - ខៀវ
    new THREE.Color("#22c55e"), // ដី - បៃតង
    new THREE.Color("#f97316"), // ភពម៉ារស៍ - ទឹកក្រូច
    new THREE.Color("#ffffff"), // ព្រះច័ន្ទ / ផ្កាយ - ស
    new THREE.Color("#a1a1aa"), // ភពថ្ម - ប្រផេះ
  ];

  const planets = [
    { orbit: 0.9, size: 0.05 }, // Mercury
    { orbit: 1.25, size: 0.09 }, // Venus
    { orbit: 1.6, size: 0.10 }, // Earth
    { orbit: 1.95, size: 0.08 }, // Mars
    { orbit: 2.45, size: 0.22 }, // Jupiter
    { orbit: 2.95, size: 0.19 }, // Saturn
    { orbit: 3.3, size: 0.14 }, // Uranus
    { orbit: 3.6, size: 0.13 }, // Neptune
    { orbit: 3.85, size: 0.04 }, // Pluto
  ];
  const planetAngle = -0.35;

  const sunFraction = 0.14;
  const ringFraction = 0.38;
  const planetFraction = 1 - sunFraction - ringFraction;

  const earthRadius = 1.55;
  const moonOrbitRadius = 2.6;
  const moonSize = 0.32;
  const emEarthFraction = 0.58;
  const emRingFraction = 0.28;

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const progress = i / count;

    // ---------- Shape 1: Solar System ----------
    if (progress < sunFraction) {
      const rSun = Math.cbrt(Math.random()) * 0.45;
      solarSystem[i3] = rSun * Math.sin(phi) * Math.cos(theta);
      solarSystem[i3 + 1] = rSun * Math.sin(phi) * Math.sin(theta);
      solarSystem[i3 + 2] = rSun * Math.cos(phi);
    } else if (progress < sunFraction + ringFraction) {
      const orbit = planets[Math.floor(Math.random() * planets.length)].orbit;
      const ringAngle = Math.random() * Math.PI * 2;
      solarSystem[i3] = Math.cos(ringAngle) * orbit;
      solarSystem[i3 + 1] = (Math.random() - 0.5) * 0.05;
      solarSystem[i3 + 2] = Math.sin(ringAngle) * orbit;
    } else {
      const remaining = (progress - sunFraction - ringFraction) / planetFraction;
      const idx = Math.min(planets.length - 1, Math.floor(remaining * planets.length));
      const p = planets[idx];
      const rP = Math.cbrt(Math.random()) * p.size;
      const localX = rP * Math.sin(phi) * Math.cos(theta);
      const localY = rP * Math.sin(phi) * Math.sin(theta);
      const localZ = rP * Math.cos(phi);
      solarSystem[i3] = Math.cos(planetAngle) * p.orbit + localX;
      solarSystem[i3 + 1] = localY;
      solarSystem[i3 + 2] = Math.sin(planetAngle) * p.orbit + localZ;
    }

    // ---------- Shape 2: Earth + Moon Orbit ----------
    if (progress < emEarthFraction) {
      const rE = Math.cbrt(Math.random()) * earthRadius;
      earthMoon[i3] = rE * Math.sin(phi) * Math.cos(theta);
      earthMoon[i3 + 1] = rE * Math.sin(phi) * Math.sin(theta);
      earthMoon[i3 + 2] = rE * Math.cos(phi);
    } else if (progress < emEarthFraction + emRingFraction) {
      const ringAngle = Math.random() * Math.PI * 2;
      const dashOn = Math.floor(ringAngle / 0.35) % 2 === 0;
      earthMoon[i3] = Math.cos(ringAngle) * moonOrbitRadius;
      earthMoon[i3 + 1] = (Math.random() - 0.5) * 0.05;
      earthMoon[i3 + 2] = dashOn ? Math.sin(ringAngle) * moonOrbitRadius : 999;
    } else {
      const rM = Math.cbrt(Math.random()) * moonSize;
      earthMoon[i3] = moonOrbitRadius + rM * Math.sin(phi) * Math.cos(theta);
      earthMoon[i3 + 1] = rM * Math.sin(phi) * Math.sin(theta);
      earthMoon[i3 + 2] = rM * Math.cos(phi);
    }

    // ---------- Shape 3: Earth Only ----------
    const rGlobe = 2.25 + (Math.random() - 0.5) * 0.2;
    earthOnly[i3] = rGlobe * Math.sin(phi) * Math.cos(theta);
    earthOnly[i3 + 1] = rGlobe * Math.sin(phi) * Math.sin(theta);
    earthOnly[i3 + 2] = rGlobe * Math.cos(phi);

    const chosenColor = palette[Math.floor(Math.random() * palette.length)];
    colors[i3] = chosenColor.r;
    colors[i3 + 1] = chosenColor.g;
    colors[i3 + 2] = chosenColor.b;
  }

  return { solarSystem, earthMoon, earthOnly, colors };
}

// 2. 3D Particle Scene + Smooth Mouse Parallax + Scatter Transition
function ClickMorphParticleScene({ step }) {
  const pointsRef = useRef();
  const groupRef = useRef();
  const morphProgress = useRef({ val: 0 });
  const { solarSystem, earthMoon, earthOnly, colors } = useMemo(
    () => generateShapesAndColors(PARTICLE_COUNT),
    []
  );
  const currentPositions = useMemo(() => new Float32Array(solarSystem), [solarSystem]);

  const scatter = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const dist = 4 + Math.random() * 10;
      arr[i3] = dist * Math.sin(phi) * Math.cos(theta);
      arr[i3 + 1] = dist * Math.sin(phi) * Math.sin(theta);
      arr[i3 + 2] = dist * Math.cos(phi);
    }
    return arr;
  }, []);

  useEffect(() => {
    gsap.to(morphProgress.current, {
      val: step,
      duration: 1.6,
      ease: "power2.inOut",
    });
  }, [step]);

  useFrame((state, delta) => {
    const targetX = state.mouse.x * 0.5;
    const targetY = state.mouse.y * 0.5;
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
    }

    if (!pointsRef.current) return;
    const m = THREE.MathUtils.clamp(morphProgress.current.val, 0, 2);
    const posAttr = pointsRef.current.geometry.attributes.position;
    const array = posAttr.array;

    const segment = m <= 1 ? 0 : 1;
    const t = m <= 1 ? m : m - 1;
    const from = segment === 0 ? solarSystem : earthMoon;
    const to = segment === 0 ? earthMoon : earthOnly;

    const explodeFactor = Math.sin(Math.PI * t);
    const explode = Math.pow(explodeFactor, 0.6);

    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      const base = THREE.MathUtils.lerp(from[i], to[i], t);
      array[i] = base + scatter[i] * explode;
    }
    posAttr.needsUpdate = true;

    pointsRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={groupRef} position={[1.8, -0.1, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={currentPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={PARTICLE_COUNT}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.007}
          vertexColors
          transparent
          opacity={0.9}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

// 3. Floating Wireframe Objects with Parallax
function FloatingDecorations() {
  const groupRef = useRef();
  const t1 = useRef();
  const t2 = useRef();
  const t3 = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, state.mouse.x * 0.3, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, state.mouse.y * 0.3, 0.05);
    }

    if (t1.current) {
      t1.current.rotation.x = time * 0.2;
      t1.current.rotation.y = time * 0.3;
      t1.current.position.y = 1.6 + Math.sin(time * 0.8) * 0.1;
    }
    if (t2.current) {
      t2.current.rotation.z = time * 0.25;
      t2.current.rotation.x = -time * 0.2;
    }
    if (t3.current) {
      t3.current.rotation.y = -time * 0.35;
      t3.current.rotation.x = time * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={t1} position={[-2.4, 1.6, 0.2]}>
        <tetrahedronGeometry args={[0.65, 0]} />
        <meshBasicMaterial color="#10b981" wireframe />
      </mesh>

      <mesh ref={t2} position={[2.8, 2.0, -1]}>
        <octahedronGeometry args={[0.55, 0]} />
        <meshBasicMaterial color="#ec4899" wireframe />
      </mesh>

      <mesh ref={t3} position={[-0.8, -2.1, 0.5]}>
        <tetrahedronGeometry args={[0.5, 0]} />
        <meshBasicMaterial color="#facc15" wireframe />
      </mesh>
    </group>
  );
}

function MeScreen() {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);

  const heroSocialLinks = [
    { id: "github", icon: <AiFillGithub />, href: "https://github.com/THONBUNLENG", label: "GitHub" },
    { id: "linkedin", icon: <FaLinkedin />, href: "https://kh.linkedin.com/in/thon-bunleng-dev", label: "LinkedIn" },
    { id: "telegram", icon: <FaTelegram />, href: "https://t.me/bunleng_dev", label: "Telegram" },
    { id: "gitlab", icon: <SiGitlab />, href: "https://gitlab.com/leng94570", label: "GitLab" },
    { id: "tiktok", icon: <SiTiktok />, href: "https://www.tiktok.com/@wen_lin1314", label: "TikTok" },
    { id: "phone-metfone", icon: <AiFillPhone />, href: "tel:+855883205515", label: "Phone" },
  ];

  const handleLearnMore = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
    } else if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      navigate("/home");
    }
  };

  const handleCancel = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-screen h-screen bg-black text-white font-sans selection:bg-[#7c3aed] selection:text-white overflow-hidden">

      {/* 3D Canvas Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5.2], fov: 55 }}>
          <ambientLight intensity={0.5} />
          <ClickMorphParticleScene step={currentStep} />
          <FloatingDecorations />
          <EffectComposer>
            <Bloom luminanceThreshold={0.05} luminanceSmoothing={0.9} intensity={1.3} />
          </EffectComposer>
        </Canvas>
      </div>

      <div className="fixed top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 lg:px-20 py-7 backdrop-blur-md bg-black/10 border-b border-white/[0.04]">
        <div
          onClick={() => setCurrentStep(0)}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img
            src={customLogo}
            alt="Logo"
            className="img-fluid logo"
          />
          <span className="brand-name">{t("meBrandName")}</span>
        </div>

        <nav className="flex items-center gap-6 sm:gap-8 text-[11px] uppercase tracking-[0.2em] text-[#9ca3af] font-semibold">
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "nan" : "en")}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-white/20 text-slate-200 text-xs font-semibold hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all duration-200"
          >
            <img
              src={language === "en" ? ukFlag : taiwanFlag}
              alt={language === "en" ? "English" : "台語"}
              className="h-4 w-4 rounded-full object-cover"
            />
            <span className="uppercase">{language === "en" ? "EN" : "台"}</span>
          </button>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 w-full h-full flex flex-col justify-center px-8 lg:px-24 max-w-2xl">

        {/* STEP 0: HERO / SOLAR SYSTEM */}
        {currentStep === 0 && (
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-7xl lg:text-[5.2rem] font-bold tracking-[-0.03em] text-white leading-[1.02]">
              {t("homeHeroTitle")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                {t("homeHeroTitleHighlight")}
              </span>
            </h1>

            <div className="space-y-3">
              <span className="inline-block text-[11px] font-bold text-zinc-300 tracking-[0.18em] uppercase">
                {t("meWelcome")}
              </span>
              <p className="text-zinc-400 text-xs sm:text-sm tracking-wide leading-relaxed max-w-md">
                {t("meHeroDescription")}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => (window.location.href = "mailto:leng94570@gmail.com")}
                className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition shadow-[0_0_25px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95"
              >
                {t("meHireMe")}
              </button>
              <button
                type="button"
                onClick={handleLearnMore}
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition hover:scale-105 active:scale-95"
              >
                <span>{t("meLearnMore")}</span>
                <FaArrowRight className="text-[10px]" />
              </button>
            </div>

            <div className="flex gap-3 pt-4 text-zinc-400">
              {heroSocialLinks.map(({ id, icon, href, label }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] hover:border-[#7c3aed] hover:text-white transition duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* STEP 1: EARTH + MOON */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Make decisions <br />
              <span className="text-[#a78bfa]">with confidence.</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm tracking-wide leading-relaxed max-w-md">
              {t("meSpecialist")}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition hover:scale-105 active:scale-95"
              >
                <FaArrowLeft className="text-[10px]" />
                <span>{t("meCancel")}</span>
              </button>

              <button
                type="button"
                onClick={handleLearnMore}
                className="inline-flex items-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition shadow-[0_0_25px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95"
              >
                <span>{t("meLearnMore")}</span>
                <FaArrowRight className="text-[10px]" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: EARTH ONLY */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Build a better <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-pink-400">
                world of work.
              </span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm tracking-wide leading-relaxed max-w-md">
              {t("meAvailableForHire")}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition hover:scale-105 active:scale-95"
              >
                <FaArrowLeft className="text-[10px]" />
                <span>{t("meCancel")}</span>
              </button>

              <button
                type="button"
                onClick={handleLearnMore}
                className="inline-flex items-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition shadow-[0_0_25px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95"
              >
                <span>{t("meGoToPortfolio")}</span>
                <FaArrowRight className="text-[10px]" />
              </button>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}

export default MeScreen;
import React, { useRef, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { AiFillGithub, AiFillPhone } from "react-icons/ai";
import { SiGitlab, SiTiktok } from "react-icons/si";
import { FaLinkedin, FaTelegram, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import ukFlag from "../Assets/uk-flag.png";
import taiwanFlag from "../Assets/taiwan.png";
import customLogo from "../Assets/logo.png";

// -------------------------------------------------------------
// 1. Procedural Textures (Ultra High Definition 1024x512)
// -------------------------------------------------------------
function createPlanetTexture(type) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  if (type === "sun") {
    const grad = ctx.createRadialGradient(512, 256, 30, 512, 256, 512);
    grad.addColorStop(0, "#ffffff");
    grad.addColorStop(0.15, "#fff37a");
    grad.addColorStop(0.4, "#f59e0b");
    grad.addColorStop(0.75, "#ea580c");
    grad.addColorStop(1, "#7c2d12");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 512);
  } else if (type === "moon") {
    ctx.fillStyle = "#cbd5e1";
    ctx.fillRect(0, 0, 1024, 512);
    for (let i = 0; i < 300; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? "#94a3b8" : "#64748b";
      ctx.beginPath();
      ctx.arc(Math.random() * 1024, Math.random() * 512, Math.random() * 10, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (type === "earth") {
    ctx.fillStyle = "#034694";
    ctx.fillRect(0, 0, 1024, 512);

    ctx.fillStyle = "#0ea5e9";
    for (let i = 0; i < 26; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * 1024, Math.random() * 512, 50 + Math.random() * 50, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = "#16a34a";
    const continents = [
      { x: 280, y: 190, rx: 110, ry: 75 },
      { x: 360, y: 340, rx: 70, ry: 90 },
      { x: 620, y: 170, rx: 140, ry: 70 },
      { x: 600, y: 300, rx: 80, ry: 90 },
      { x: 820, y: 350, rx: 55, ry: 45 },
    ];
    continents.forEach(({ x, y, rx, ry }) => {
      ctx.beginPath();
      ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.fillStyle = "#d97706";
    ctx.beginPath();
    ctx.ellipse(590, 240, 55, 30, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 1024, 30);
    ctx.fillRect(0, 485, 1024, 27);

    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    for (let i = 0; i < 35; i++) {
      ctx.beginPath();
      ctx.ellipse(
        Math.random() * 1024,
        Math.random() * 512,
        40 + Math.random() * 60,
        12 + Math.random() * 16,
        0.25,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  } else if (type === "mercury") {
    ctx.fillStyle = "#a8a29e";
    ctx.fillRect(0, 0, 1024, 512);
  } else if (type === "venus") {
    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(0, 0, 1024, 512);
  } else if (type === "mars") {
    ctx.fillStyle = "#dc2626";
    ctx.fillRect(0, 0, 1024, 512);
  } else if (type === "jupiter") {
    for (let y = 0; y < 512; y += 8) {
      ctx.fillStyle = y % 24 === 0 ? "#78350f" : y % 16 === 0 ? "#b45309" : "#fef3c7";
      ctx.fillRect(0, y, 1024, 8);
    }
    ctx.fillStyle = "#b91c1c";
    ctx.beginPath();
    ctx.ellipse(680, 310, 45, 25, 0, 0, Math.PI * 2);
    ctx.fill();
  } else if (type === "saturn") {
    for (let y = 0; y < 512; y += 8) {
      ctx.fillStyle = y % 16 === 0 ? "#eab308" : "#fef08a";
      ctx.fillRect(0, y, 1024, 8);
    }
  } else if (type === "uranus") {
    ctx.fillStyle = "#38bdf8";
    ctx.fillRect(0, 0, 1024, 512);
  } else if (type === "neptune") {
    ctx.fillStyle = "#2563eb";
    ctx.fillRect(0, 0, 1024, 512);
  } else if (type === "pluto") {
    ctx.fillStyle = "#94a3b8";
    ctx.fillRect(0, 0, 1024, 512);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// -------------------------------------------------------------
// 2. High-End Visual Effects (Glow / Atmosphere / Orbits)
// -------------------------------------------------------------
function SunCoronaGlow({ size = 3.6 }) {
  const glowTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, "rgba(255, 255, 230, 1)");
    gradient.addColorStop(0.2, "rgba(255, 170, 40, 0.85)");
    gradient.addColorStop(0.5, "rgba(249, 115, 22, 0.4)");
    gradient.addColorStop(0.8, "rgba(185, 28, 28, 0.15)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <sprite scale={[size, size, 1]}>
      <spriteMaterial
        map={glowTexture}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </sprite>
  );
}

function EarthAtmosphere({ radius }) {
  return (
    <mesh>
      <sphereGeometry args={[radius * 1.07, 48, 48]} />
      <meshBasicMaterial
        color="#38bdf8"
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

function OrbitLine({ xRadius, zRadius, color = "#60a5fa", opacity = 0.4 }) {
  const lineGeometry = useMemo(() => {
    const points = [];
    const segments = 180;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(theta) * xRadius, 0, Math.sin(theta) * zRadius));
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [xRadius, zRadius]);

  return (
    <line geometry={lineGeometry}>
      <lineDashedMaterial
        color={color}
        opacity={opacity}
        transparent
        dashSize={0.22}
        gapSize={0.14}
      />
    </line>
  );
}

function MultiLayerStarfield() {
  const { starsBright, starsDim } = useMemo(() => {
    const bright = new Float32Array(1200 * 3);
    const dimArray = new Float32Array(2500 * 3);
    for (let i = 0; i < 1200 * 3; i += 3) {
      bright[i] = (Math.random() - 0.5) * 60;
      bright[i + 1] = (Math.random() - 0.5) * 60;
      bright[i + 2] = (Math.random() - 0.5) * 40 - 5;
    }
    for (let i = 0; i < 2500 * 3; i += 3) {
      dimArray[i] = (Math.random() - 0.5) * 70;
      dimArray[i + 1] = (Math.random() - 0.5) * 70;
      dimArray[i + 2] = (Math.random() - 0.5) * 45 - 10;
    }
    return { starsBright: bright, starsDim: dimArray };
  }, []);

  return (
    <group>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={1200} array={starsBright} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#ffffff" transparent opacity={0.9} />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={2500} array={starsDim} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#93c5fd" transparent opacity={0.5} />
      </points>
    </group>
  );
}

// -------------------------------------------------------------
// 3. SCENE 0: ប្រព័ន្ធព្រះអាទិត្យពេញ (Solar System)
// -------------------------------------------------------------
function SolarSystemScene() {
  const sceneRef = useRef();
  const sunMeshRef = useRef();
  const sunTexture = useMemo(() => createPlanetTexture("sun"), []);

  const planetsData = useMemo(
    () => [
      { name: "mercury", r: 0.11, dist: 1.7, speed: 0.45, angle: 0.2 },
      { name: "venus", r: 0.16, dist: 2.3, speed: 0.35, angle: 1.1 },
      { name: "earth", r: 0.2, dist: 3.0, speed: 0.28, angle: 2.3, isEarth: true },
      { name: "mars", r: 0.14, dist: 3.8, speed: 0.22, angle: 3.5 },
      { name: "jupiter", r: 0.42, dist: 4.8, speed: 0.16, angle: 4.2 },
      {
        name: "saturn",
        r: 0.33,
        dist: 5.9,
        speed: 0.12,
        angle: 5.1,
        hasRing: true,
        ring: { innerRadius: 0.39, outerRadius: 0.78, color: "#fef08a", opacity: 0.9, tilt: 0.3 },
      },
      {
        name: "uranus",
        r: 0.24,
        dist: 6.9,
        speed: 0.09,
        angle: 0.8,
        hasRing: true,
        ring: { innerRadius: 0.29, outerRadius: 0.48, color: "#67e8f9", opacity: 0.75, tilt: -0.6 },
      },
      { name: "neptune", r: 0.23, dist: 7.8, speed: 0.07, angle: 2.9 },
      { name: "pluto", r: 0.07, dist: 8.5, speed: 0.05, angle: 4.8 },
    ],
    []
  );

  useFrame((state, delta) => {
    if (sunMeshRef.current) sunMeshRef.current.rotation.y += delta * 0.12;
    if (sceneRef.current) {
      sceneRef.current.rotation.y = THREE.MathUtils.lerp(sceneRef.current.rotation.y, state.mouse.x * 0.1, 0.05);
      sceneRef.current.rotation.x = THREE.MathUtils.lerp(sceneRef.current.rotation.x, 0.55 - state.mouse.y * 0.08, 0.05);
    }
  });

  return (
    <group ref={sceneRef} position={[0, 0, 0]} rotation={[0.55, 0, 0]}>
      <MultiLayerStarfield />

      <mesh ref={sunMeshRef}>
        <sphereGeometry args={[1.05, 48, 48]} />
        <meshBasicMaterial map={sunTexture} />
      </mesh>
      <SunCoronaGlow size={3.8} />
      <pointLight intensity={6.0} distance={40} color="#ff9500" decay={1.7} />

      {planetsData.map((p) => (
        <React.Fragment key={p.name}>
          <OrbitLine xRadius={p.dist} zRadius={p.dist * 0.72} />
          <SimpleOrbitingPlanet {...p} />
        </React.Fragment>
      ))}
    </group>
  );
}

function SimpleOrbitingPlanet({ r, dist, speed, angle, name, hasRing, ring, isEarth }) {
  const groupRef = useRef();
  const curAngle = useRef(angle);
  const texture = useMemo(() => createPlanetTexture(name), [name]);

  useFrame((_, delta) => {
    curAngle.current += delta * speed;
    if (groupRef.current) {
      groupRef.current.position.x = Math.cos(curAngle.current) * dist;
      groupRef.current.position.z = Math.sin(curAngle.current) * (dist * 0.72);
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[r, 36, 36]} />
        <meshStandardMaterial
          map={texture}
          roughness={0.35}
          metalness={0.1}
          emissive={isEarth ? "#0ea5e9" : "#000000"}
          emissiveIntensity={isEarth ? 0.12 : 0}
        />
      </mesh>
      {isEarth && <EarthAtmosphere radius={r} />}
      {hasRing && (
        <mesh rotation={[Math.PI / 2 + ring.tilt, 0.2, 0]}>
          <ringGeometry args={[ring.innerRadius, ring.outerRadius, 64]} />
          <meshBasicMaterial color={ring.color} side={THREE.DoubleSide} transparent opacity={ring.opacity} />
        </mesh>
      )}
    </group>
  );
}

// -------------------------------------------------------------
// 4. SCENE 1: ចលនាភពផែនដី ព្រះច័ន្ទ និងព្រះអាទិត្យ
// -------------------------------------------------------------
function EarthMoonSunScene() {
  const sceneRef = useRef();
  const earthRef = useRef();
  const sunGroupRef = useRef();
  const moonGroupRef = useRef();

  const earthTexture = useMemo(() => createPlanetTexture("earth"), []);
  const sunTexture = useMemo(() => createPlanetTexture("sun"), []);
  const moonTexture = useMemo(() => createPlanetTexture("moon"), []);

  const sunAngle = useRef(2.4);
  const moonAngle = useRef(0);

  const sunOrbitX = 4.6;
  const sunOrbitZ = 2.6;
  const moonOrbitX = 2.2;
  const moonOrbitZ = 1.3;

  useFrame((state, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.4;

    sunAngle.current += delta * 0.35;
    if (sunGroupRef.current) {
      sunGroupRef.current.position.x = Math.cos(sunAngle.current) * sunOrbitX;
      sunGroupRef.current.position.z = Math.sin(sunAngle.current) * sunOrbitZ;
    }

    moonAngle.current += delta * 0.8;
    if (moonGroupRef.current) {
      moonGroupRef.current.position.x = Math.cos(moonAngle.current) * moonOrbitX;
      moonGroupRef.current.position.z = Math.sin(moonAngle.current) * moonOrbitZ;
      moonGroupRef.current.rotation.y += delta * 0.2;
    }

    if (sceneRef.current) {
      sceneRef.current.rotation.y = THREE.MathUtils.lerp(sceneRef.current.rotation.y, state.mouse.x * 0.12, 0.05);
      sceneRef.current.rotation.x = THREE.MathUtils.lerp(sceneRef.current.rotation.x, 0.5 - state.mouse.y * 0.1, 0.05);
    }
  });

  return (
    <group ref={sceneRef} position={[1.2, 0, 0]} rotation={[0.5, 0, 0]}>
      <MultiLayerStarfield />

      {/* ផែនដីនៅចំកណ្ដាល */}
      <group rotation={[0.41, 0, 0]}>
        <mesh ref={earthRef}>
          <sphereGeometry args={[1.4, 64, 64]} />
          <meshStandardMaterial
            map={earthTexture}
            roughness={0.35}
            metalness={0.1}
            emissive="#0284c7"
            emissiveIntensity={0.15}
          />
        </mesh>
        <EarthAtmosphere radius={1.4} />
      </group>

      {/* គន្លង និងគ្រាប់ព្រះច័ន្ទ */}
      <OrbitLine xRadius={moonOrbitX} zRadius={moonOrbitZ} color="#e2e8f0" opacity={0.35} />
      <group ref={moonGroupRef}>
        <mesh>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial map={moonTexture} roughness={0.7} />
        </mesh>
      </group>

      {/* គន្លង និងគ្រាប់ព្រះអាទិត្យ */}
      <OrbitLine xRadius={sunOrbitX} zRadius={sunOrbitZ} color="#f59e0b" opacity={0.45} />
      <group ref={sunGroupRef}>
        <mesh>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshBasicMaterial map={sunTexture} />
        </mesh>
        <SunCoronaGlow size={2.2} />
        <pointLight intensity={5.5} distance={30} color="#ff9500" />
      </group>
    </group>
  );
}

// -------------------------------------------------------------
// 5. SCENE 2: ភពផែនដីទោល (Earth Solo Realistic)
// -------------------------------------------------------------
function EarthSoloScene() {
  const sceneRef = useRef();
  const earthRef = useRef();
  const earthTexture = useMemo(() => createPlanetTexture("earth"), []);

  useFrame((state, delta) => {
    if (earthRef.current) earthRef.current.rotation.y += delta * 0.25;
    if (sceneRef.current) {
      sceneRef.current.rotation.y = THREE.MathUtils.lerp(sceneRef.current.rotation.y, state.mouse.x * 0.15, 0.05);
      sceneRef.current.rotation.x = THREE.MathUtils.lerp(sceneRef.current.rotation.x, -state.mouse.y * 0.15, 0.05);
    }
  });

  return (
    <group ref={sceneRef} position={[1.4, 0, 0]}>
      <MultiLayerStarfield />
      <group rotation={[0.41, 0, 0]}>
        <mesh ref={earthRef}>
          <sphereGeometry args={[2.2, 64, 64]} />
          <meshStandardMaterial
            map={earthTexture}
            roughness={0.3}
            metalness={0.15}
            emissive="#0284c7"
            emissiveIntensity={0.16}
          />
        </mesh>
        <EarthAtmosphere radius={2.2} />
      </group>
      <directionalLight position={[6, 4, 6]} intensity={2.5} color="#ffffff" />
      <pointLight position={[-6, -4, -4]} intensity={0.5} color="#0369a1" />
    </group>
  );
}

// -------------------------------------------------------------
// 6. Main MeScreen Component
// -------------------------------------------------------------
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
    if (currentStep < 2) {
      setCurrentStep((prev) => prev + 1);
    } else {
      navigate("/home");
    }
  };

  const handleCancel = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-screen h-screen bg-[#020617] text-white font-sans selection:bg-[#7c3aed] selection:text-white overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 5.5, 14.5], fov: 45 }}>
          <ambientLight intensity={0.55} />
          <directionalLight position={[12, 18, 10]} intensity={0.9} />

          {currentStep === 0 && <SolarSystemScene />}
          {currentStep === 1 && <EarthMoonSunScene />}
          {currentStep === 2 && <EarthSoloScene />}

          <EffectComposer>
            <Bloom
              luminanceThreshold={0.4}
              luminanceSmoothing={0.9}
              intensity={2.0}
              mipmapBlur
            />
          </EffectComposer>
        </Canvas>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 lg:px-20 py-7 backdrop-blur-md bg-black/20 border-b border-white/[0.05]">
        <div onClick={() => setCurrentStep(0)} className="flex items-center gap-3 cursor-pointer group">
          <img src={customLogo} alt="Logo" className="img-fluid logo w-8 h-8 object-contain" />
          <span className="brand-name font-bold tracking-wider">{t("meBrandName")}</span>
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
      <main className="relative z-10 w-full h-full flex flex-col justify-center px-8 lg:px-24 max-w-2xl pointer-events-none">
        {/* STEP 0 */}
        {currentStep === 0 && (
          <div className="space-y-6 pointer-events-auto">
            <h1 className="text-6xl sm:text-7xl lg:text-[5.2rem] font-bold tracking-[-0.03em] text-white leading-[1.02] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              {t("homeHeroTitle")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                {t("homeHeroTitleHighlight")}
              </span>
            </h1>

            <div className="space-y-3">
              <span className="inline-block text-[11px] font-bold text-zinc-300 tracking-[0.18em] uppercase">
                {t("meWelcome")}
              </span>
              <p className="text-zinc-400 text-xs sm:text-sm tracking-wide leading-relaxed max-w-md drop-shadow">
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
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border border-white/20 px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition hover:scale-105 active:scale-95"
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
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-sm hover:border-[#7c3aed] hover:text-white transition duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* STEP 1: Earth-Moon-Sun Motion */}
        {currentStep === 1 && (
          <div className="space-y-6 pointer-events-auto">
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Make decisions <br />
              <span className="text-[#a78bfa]">with confidence.</span>
            </h2>

            <div className="space-y-2.5 max-w-lg">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-md border border-purple-500/20">
                {t("meSpecialist") || "Full-Stack & Mobile App Specialist"}
              </span>
              <p className="text-zinc-300 text-xs sm:text-sm tracking-wide leading-relaxed drop-shadow-sm">
                Specializing in building robust cross-platform mobile apps with Flutter and modern full-stack web solutions. Combining clean scalable architecture, seamless responsive UI/UX designs, and reliable API integrations to turn ambitious ideas into impactful digital products.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border border-white/20 px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition hover:scale-105 active:scale-95"
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

        {/* STEP 2: Earth Solo with Comprehensive Details */}
        {currentStep === 2 && (
          <div className="space-y-6 pointer-events-auto">
            <h2 className="text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Build a better <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-pink-400">
                world of work.
              </span>
            </h2>

            <div className="space-y-3 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t("meAvailableForHire") || "Available for Hire / Freelance"}</span>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm tracking-wide leading-relaxed drop-shadow-sm">
                Passionate about crafting scalable, modern applications that solve real-world problems. Whether it is engineering responsive web platforms, architecting seamless cross-platform mobile experiences with Flutter, or building resilient backend APIs, I am ready to bring innovative ideas to life.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border border-white/20 px-7 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition hover:scale-105 active:scale-95"
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
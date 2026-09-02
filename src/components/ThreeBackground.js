import React, { useEffect, useRef } from "react";

// រូបរាងចំណុចផ្កាយនៃតារានិករទាំង ១២ (គ្មានខ្សែបន្ទាត់)
const CONSTELLATIONS = [
  // Aries
  { stars: [[0.1, 0.2], [0.35, 0.45], [0.75, 0.55], [0.95, 0.85]] },
  // Taurus
  { stars: [[0.1, 0.1], [0.3, 0.35], [0.55, 0.45], [0.9, 0.2], [0.5, 0.75], [0.25, 0.8]] },
  // Gemini
  { stars: [[0.2, 0.1], [0.8, 0.15], [0.25, 0.5], [0.75, 0.55], [0.3, 0.9], [0.7, 0.85]] },
  // Cancer
  { stars: [[0.5, 0.4], [0.15, 0.8], [0.85, 0.75], [0.55, 0.1]] },
  // Leo
  { stars: [[0.85, 0.2], [0.65, 0.05], [0.45, 0.15], [0.48, 0.45], [0.15, 0.65], [0.1, 0.9], [0.65, 0.8]] },
  // Virgo
  { stars: [[0.1, 0.15], [0.35, 0.3], [0.65, 0.4], [0.9, 0.25], [0.55, 0.7], [0.3, 0.9], [0.75, 0.95]] },
  // Libra
  { stars: [[0.5, 0.1], [0.15, 0.5], [0.85, 0.5], [0.3, 0.9], [0.7, 0.9]] },
  // Scorpio
  { stars: [[0.1, 0.1], [0.3, 0.25], [0.45, 0.45], [0.55, 0.65], [0.7, 0.9], [0.9, 0.85], [0.85, 0.65]] },
  // Sagittarius
  { stars: [[0.2, 0.5], [0.45, 0.6], [0.75, 0.45], [0.6, 0.2], [0.3, 0.25], [0.85, 0.1]] },
  // Capricorn
  { stars: [[0.15, 0.25], [0.5, 0.15], [0.85, 0.35], [0.65, 0.85], [0.35, 0.75]] },
  // Aquarius
  { stars: [[0.15, 0.2], [0.45, 0.15], [0.75, 0.3], [0.25, 0.6], [0.55, 0.55], [0.85, 0.7]] },
  // Pisces
  { stars: [[0.15, 0.15], [0.2, 0.5], [0.45, 0.8], [0.75, 0.85], [0.9, 0.5], [0.8, 0.2]] },
];

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // 1. គ្រាប់ផ្កាយតូចៗរាយប៉ាយនៅផ្ទៃខាងក្រោយ
    const STAR_COUNT = 320;
    const backgroundStars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 0.8 + 0.3,
      alpha: Math.random() * 0.6 + 0.15,
      speed: Math.random() * 0.008 + 0.003,
    }));

    // 2. រៀបចំទីតាំងក្រុមផ្កាយតារានិករ
    const placedConstellations = CONSTELLATIONS.map((c, i) => {
      const col = i % 4;
      const row = Math.floor(i / 4);

      const cellW = width / 4;
      const cellH = height / 3;

      const size = Math.min(cellW, cellH) * 0.55;
      const originX = col * cellW + Math.random() * (cellW - size);
      const originY = row * cellH + Math.random() * (cellH - size);

      return {
        screenStars: c.stars.map(([sx, sy]) => ({
          x: originX + sx * size,
          y: originY + sy * size,
          pulse: Math.random() * Math.PI * 2,
        })),
      };
    });

    let time = 0;

    // 3. Render Loop
    const render = () => {
      time += 0.02;

      // ផ្ទៃខាងក្រោយងងឹត (#020617)
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, width, height);

      // --- គូសផ្កាយតូចៗផ្ទៃខាងក្រោយ ---
      backgroundStars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 0.75 || star.alpha < 0.15) {
          star.speed = -star.speed;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha)})`;
        ctx.fill();
      });

      // --- គូសគ្រាប់ផ្កាយតារានិករ (ពន្លឺ Glow ខៀវខ្ចីតូចៗ ដោយគ្មានខ្សែបន្ទាត់) ---
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      placedConstellations.forEach((c) => {
        c.screenStars.forEach((p) => {
          const pulseFactor = 0.85 + Math.sin(time + p.pulse) * 0.15;
          const outerGlowRadius = 4.5 * pulseFactor;

          // ពន្លឺ Glow ជុំវិញ
          const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, outerGlowRadius);
          halo.addColorStop(0, "rgba(56, 189, 248, 0.75)");
          halo.addColorStop(0.4, "rgba(14, 165, 233, 0.25)");
          halo.addColorStop(1, "rgba(2, 132, 199, 0)");

          ctx.beginPath();
          ctx.arc(p.x, p.y, outerGlowRadius, 0, Math.PI * 2);
          ctx.fillStyle = halo;
          ctx.fill();

          // គ្រាប់ផ្កាយស្នូលចំកណ្ដាល
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.shadowColor = "#38bdf8";
          ctx.shadowBlur = 4;
          ctx.fill();
        });
      });

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}
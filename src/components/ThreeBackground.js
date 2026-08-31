import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const PARTICLE_COUNT = 3000;

function generateParticles(count) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const palette = [
    new THREE.Color("#7c3aed"),
    new THREE.Color("#a78bfa"),
    new THREE.Color("#f59e0b"),
    new THREE.Color("#ffffff"),
  ];

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const radius = 3 + Math.random() * 5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);

    const color = palette[Math.floor(Math.random() * palette.length)];
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  return { positions, colors };
}

function Particles() {
  const pointsRef = useRef();
  const { positions, colors } = useMemo(() => generateParticles(PARTICLE_COUNT), []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.0005;
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      state.mouse.y * 0.1,
      0.05
    );
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(
      pointsRef.current.rotation.y,
      state.mouse.x * 0.1,
      0.05
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
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
        size={0.015}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.001;
    meshRef.current.rotation.y += 0.002;
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      state.mouse.x * 0.5,
      0.05
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      state.mouse.y * 0.5,
      0.05
    );
  });

  return (
    <mesh ref={meshRef} position={[3, 2, -2]}>
      <octahedronGeometry args={[0.5, 0]} />
      <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={["#000000"]} />
        <Particles />
        <FloatingGeometry />
        <EffectComposer>
          <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={0.5} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

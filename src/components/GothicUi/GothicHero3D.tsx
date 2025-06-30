"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import type * as THREE from "three";

export default function GothicHero3D() {
  const groupRef = useRef<THREE.Group>(null);
  const cathedralRef = useRef<THREE.Group>(null);
  const orbsRef = useRef<THREE.Group>(null);

  const pillars = useMemo(() => {
    const positions: [x: number, y: number, z: number][] = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      positions.push([Math.cos(angle) * 6, 0, Math.sin(angle) * 6]);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
    if (cathedralRef.current) {
      cathedralRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
    if (orbsRef.current) {
      orbsRef.current.rotation.y = -state.clock.elapsedTime * 0.1;
      orbsRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.5;
      });
    }
  });

  return (
    <group ref={groupRef}>
      <group ref={cathedralRef}>
        {pillars.map((position, i) => (
          <group key={i} position={position}>
            <mesh position={[0, 2, 0]}>
              <cylinderGeometry args={[0.3, 0.4, 8, 8]} />
              <meshStandardMaterial
                color="#1a1a1a"
                metalness={0.8}
                roughness={0.3}
                emissive="#881144"
                emissiveIntensity={0.1}
              />
            </mesh>

            <mesh position={[0, 6.5, 0]} rotation={[0, 0, 0]}>
              <coneGeometry args={[0.6, 1.5, 6]} />
              <meshStandardMaterial
                color="#2a1a2a"
                metalness={0.9}
                roughness={0.2}
                emissive="#881144"
                emissiveIntensity={0.2}
              />
            </mesh>

            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
              <mesh position={[0, 8, 0]}>
                <icosahedronGeometry args={[0.2, 2]} />
                <meshStandardMaterial
                  color={
                    [
                      "#bb9955",
                      "#779977",
                      "#335566",
                      "#aa4477",
                      "#7799cc",
                      "#881144",
                      "#663388",
                      "#994466",
                    ][i]
                  }
                  metalness={1}
                  roughness={0}
                  emissive={
                    [
                      "#bb9955",
                      "#779977",
                      "#335566",
                      "#aa4477",
                      "#7799cc",
                      "#881144",
                      "#663388",
                      "#994466",
                    ][i]
                  }
                  emissiveIntensity={0.5}
                />
              </mesh>
            </Float>
          </group>
        ))}
      </group>

      <group position={[0, -1, 0]}>
        <mesh>
          <cylinderGeometry args={[2, 2.5, 0.5, 8]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>

        <Float speed={1} rotationIntensity={2} floatIntensity={1}>
          <mesh position={[0, 2, 0]}>
            <octahedronGeometry args={[1.2, 0]} />
            <meshStandardMaterial
              color="#881144"
              metalness={0.9}
              roughness={0.1}
              emissive="#881144"
              emissiveIntensity={0.8}
              transparent
              opacity={0.9}
            />
          </mesh>
        </Float>

        <group ref={orbsRef}>
          {[
            { color: "#bb9955", name: "Doloris" },
            { color: "#779977", name: "Mortis" },
            { color: "#335566", name: "Timoris" },
            { color: "#aa4477", name: "Amoris" },
            { color: "#7799cc", name: "Oblivionis" },
          ].map((member, i) => (
            <Float
              key={member.name}
              speed={1.5 + i * 0.2}
              rotationIntensity={1}
            >
              <mesh
                position={[
                  Math.cos((i * Math.PI * 2) / 5) * 3,
                  1.5,
                  Math.sin((i * Math.PI * 2) / 5) * 3,
                ]}
              >
                <dodecahedronGeometry args={[0.4]} />
                <meshStandardMaterial
                  color={member.color}
                  metalness={1}
                  roughness={0}
                  emissive={member.color}
                  emissiveIntensity={0.6}
                />
              </mesh>
            </Float>
          ))}
        </group>
      </group>

      <Sparkles
        count={100}
        scale={[20, 10, 20]}
        size={2}
        speed={0.3}
        color="#881144"
      />

      <ambientLight intensity={0.1} color="#330022" />
      <pointLight
        position={[0, 10, 0]}
        intensity={2}
        color="#881144"
        distance={20}
      />
      <spotLight
        position={[0, 15, 0]}
        angle={Math.PI / 3}
        penumbra={0.5}
        intensity={1}
        color="#881144"
        target-position={[0, 0, 0]}
      />

      {pillars.map((position, i) => (
        <pointLight
          key={i}
          position={[position[0], 8, position[2]]}
          intensity={0.5}
          color={
            [
              "#bb9955",
              "#779977",
              "#335566",
              "#aa4477",
              "#7799cc",
              "#881144",
              "#663388",
              "#994466",
            ][i]
          }
          distance={8}
        />
      ))}
    </group>
  );
}

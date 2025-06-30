"use client";

import type React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { cn } from "@/lib/utils";
import GothicHero3D from "@/components/GothicUi/GothicHero3D";
import LoadingGothic from "@/components/GothicUi/GothicLoading";
import LoadingThree from "@/components/ThreeLoading";

interface GothicHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
}

interface FloatingSymbol {
  left: string;
  top: string;
  fontSize: string;
  animationDelay: string;
  animationDuration: string;
  char: string;
}

export function GothicHero({
  title,
  subtitle,
  description,
  actions,
  className,
}: GothicHeroProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [symbols, setSymbols] = useState<FloatingSymbol[]>([]);

  useEffect(() => {
    const newSymbols = [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      fontSize: `${12 + Math.random() * 8}px`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${8 + Math.random() * 6}s`,
      char: ["⚜", "✠", "♦", "◆", "❖", "✧"][Math.floor(Math.random() * 6)],
    }));
    setSymbols(newSymbols);
  }, []);

  return (
    <section className={cn("relative h-screen overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
          <LoadingGothic />
        </div>
      )}

      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        className="absolute inset-0"
        gl={{ antialias: true, alpha: true }}
        onCreated={() => {
          setTimeout(() => setIsLoading(false), 10000);
        }}
      >
        <Suspense fallback={<LoadingThree />}>
          <fog attach="fog" args={["#000000", 5, 25]} />
          <Environment preset="night" />
          <GothicHero3D />
        </Suspense>
      </Canvas>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white relative max-w-4xl mx-auto px-4">
          <div className="absolute -inset-8 border-2 border-[#881144] opacity-30 gothic-frame animate-pulse-slow"></div>

          <h1 className="text-6xl md:text-9xl font-bold mb-6 tracking-widest gothic-text relative">
            <span className="text-shadow-gothic bg-gradient-to-b from-white via-purple-200 to-[#881144] bg-clip-text text-transparent">
              {title}
            </span>
            <div className="absolute -top-4 -right-4 text-[#881144] text-2xl animate-float">
              ⚜
            </div>
            <div className="absolute -bottom-4 -left-4 text-[#881144] text-2xl animate-float-reverse">
              ⚜
            </div>
          </h1>

          {subtitle && (
            <p className="text-xl text-purple-300 mb-2 tracking-wider font-light italic">
              "{subtitle}"
            </p>
          )}

          {description && (
            <div className="flex justify-center items-center gap-4 text-gray-400 mb-8 flex-wrap">
              <span className="gothic-separator">◆</span>
              <span>{description}</span>
              <span className="gothic-separator">◆</span>
            </div>
          )}

          {actions && (
            <div className="flex justify-center space-x-6 flex-wrap gap-4">
              {actions}
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {symbols.map((symbol, i) => (
          <div
            key={i}
            className="absolute text-[#881144] opacity-20 animate-gothic-float"
            style={{
              left: symbol.left,
              top: symbol.top,
              fontSize: symbol.fontSize,
              animationDelay: symbol.animationDelay,
              animationDuration: symbol.animationDuration,
            }}
          >
            {symbol.char}
          </div>
        ))}

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#881144]/10 to-transparent"></div>
      </div>
    </section>
  );
}

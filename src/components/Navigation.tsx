"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "The Abyss", href: "#home" },
    { name: "The Ensemble", href: "#members" },
    { name: "Dark Symphonies", href: "#music" },
    { name: "Rituals", href: "#performances" },
    { name: "Chronicles", href: "#news" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#881144]/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="text-[#881144] text-2xl">⚜</div>
            <span className="text-white font-bold text-xl tracking-wider gothic-text">
              AVE MUJICA
            </span>
            <div className="text-[#881144] text-2xl">⚜</div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-[#881144] transition-all duration-300 relative group gothic-nav-item"
              >
                {item.name}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#881144] transition-all duration-300 group-hover:w-full"></div>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#881144] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#881144]/30">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-[#881144] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

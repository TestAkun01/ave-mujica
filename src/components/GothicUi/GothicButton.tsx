"use client";

import type React from "react";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GothicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  withGlow?: boolean;
}

const GothicButton = forwardRef<HTMLButtonElement, GothicButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      withGlow = true,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          "relative font-semibold tracking-wider transition-all duration-500 overflow-hidden gothic-text",
          {
            "bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white border-2 border-purple-600":
              variant === "primary",
            "bg-transparent text-purple-300 border-2 border-purple-400":
              variant === "secondary",
            "bg-transparent text-gray-300 border-2 border-gray-600 hover:border-gray-400":
              variant === "ghost",
            "bg-gradient-to-r from-red-900 to-red-800 text-white border-2 border-red-600":
              variant === "destructive",

            "px-4 py-2 text-sm": size === "sm",
            "px-8 py-4 text-base": size === "md",
            "px-12 py-6 text-lg": size === "lg",

            "hover:scale-105 hover:shadow-2xl": withGlow,
          },
          className
        )}
        style={{
          boxShadow: withGlow ? "0 0 30px rgba(136, 17, 68, 0.6)" : undefined,
        }}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {withGlow && (
          <div className="gothic-button-glow absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity duration-500" />
        )}
      </button>
    );
  }
);
GothicButton.displayName = "GothicButton";

export { GothicButton };

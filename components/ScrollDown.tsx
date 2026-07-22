"use client";

import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollDownProps {
  targetId?: string;
  label?: string;
  className?: string;
}

export function ScrollDown({ targetId, label = "Saber más", className }: ScrollDownProps) {
  const handleClick = () => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "flex flex-col items-center justify-center cursor-pointer text-slate-600 hover:text-primary-600 transition-colors duration-200 animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md p-1",
        className
      )}
      aria-label={label}
    >
      <span className="text-sm font-medium transition-colors duration-200">{label}</span>
      <ArrowDown className="size-4 mt-1 transition-colors duration-200" />
    </button>
  );
}

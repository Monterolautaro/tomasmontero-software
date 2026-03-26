"use client";

import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface NotebookMockupProps {
  imageSrc: string;
  alt?: string;
}

export const NotebookMockup: React.FC<NotebookMockupProps> = ({ 
  imageSrc, 
  alt = "Project Preview" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 20
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || !e.touches[0]) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const touchX = e.touches[0].clientX - rect.left;
    const touchY = e.touches[0].clientY - rect.top;
    
    x.set((touchX / width) - 0.5);
    y.set((touchY / height) - 0.5);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleReset}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleReset}
      className="relative w-full max-w-[480px] aspect-[1.4] mx-auto perspective-[1200px] py-2 touch-none"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-full h-full"
      >
      
        <div className="absolute inset-0 bg-slate-800 rounded-xl overflow-hidden shadow-2xl border-[6px] border-slate-900 flex flex-col">
         
          <div className="h-4 bg-slate-900 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-slate-700"></div>
          </div>
          
          <div className="flex-1 relative bg-white overflow-hidden">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
          </div>
        </div>

        <div 
          className="absolute bottom-[-15px] left-[5%] right-[5%] h-4 bg-slate-700 rounded-b-xl shadow-lg transform rotateX(85deg) origin-top"
          style={{ transform: "rotateX(85deg) translateY(-5px)", transformOrigin: "top" }}
        />
        

        <div 
          className="absolute bottom-[-20px] left-[2%] right-[2%] h-4 bg-slate-800 rounded-b-2xl shadow-xl"
          style={{ transform: "translateZ(-10px)" }}
        />
      </motion.div>
    </div>
  );
};

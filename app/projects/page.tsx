"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

interface CardProps {
  front: string; // Changed to match projectList keys
  back: string; // Changed to match projectList keys
  title: string;
  desc: string; // Changed to match projectList keys
}

const ProjectCard = ({ front, back, title, desc }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="project-card group h-[450px] [perspective:1000px] cursor-pointer opacity-0"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl p-10 flex flex-col justify-end [backface-visibility:hidden]"
          style={{ backgroundColor: front }}
        >
          <h3 className="text-3xl font-bold text-black uppercase tracking-tighter">
            {title}
          </h3>
          <p className="text-sm text-black/50 font-bold uppercase tracking-widest mt-2">
            View Details +
          </p>
        </div>
        {/* BACK SIDE */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl p-10 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ backgroundColor: back }}
        >
          <p className="text-xl font-medium text-black leading-tight">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Initial State
    gsap.set(".project-card", { y: 600, opacity: 0 });

    // 2. Title Animation
    tl.fromTo(
      titleRef.current,
      { y: 400, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
    )
      // 3. Sequential Card Animation
      .to(
        ".project-card",
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.8",
      );
  }, []);

  const projectList = [
    {
      title: "FinTech App",
      desc: "A comprehensive dashboard for business analytics.",
      front: "#E2E8C0",
      back: "#D9D9D9",
    },
    {
      title: "Social Connect",
      desc: "Redesigning social interaction through intuitive UI.",
      front: "#CFF7E2",
      back: "#B8C6F1",
    },
    {
      title: "AI Researcher",
      desc: "Leveraging ML to predict market trends.",
      front: "#B8C6F1",
      back: "#F1B8D9",
    },
    {
      title: "E-Commerce",
      desc: "Headless commerce solution focused on speed.",
      front: "#F1B8D9",
      back: "#E2E8C0",
    },
    {
      title: "Data Viz",
      desc: "Transforming datasets into visual stories.",
      front: "#D9EAF1",
      back: "#CFF7E2",
    },
    {
      title: "Branding",
      desc: "Complete visual identity for a tech startup.",
      front: "#FFE4BC",
      back: "#D9D9D9",
    },
    {
      title: "Operations",
      desc: "Optimizing business workflows.",
      front: "#E2E8C0",
      back: "#B8C6F1",
    },
    {
      title: "Web3 Portal",
      desc: "Exploring DeFi and modern web apps.",
      front: "#CFF7E2",
      back: "#F1B8D9",
    },
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      <nav className="flex items-center justify-between px-24 pt-6 mb-20">
        <Link href="/" className="text-4xl font-bold tracking-tight text-black">
          Diya
        </Link>
        <div className="flex gap-8 text-sm font-medium text-black">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="underline">
            Projects
          </Link>
        </div>
      </nav>

      <header className="px-24 mb-16 overflow-hidden">
        <h1
          ref={titleRef}
          className="text-7xl font-bold uppercase tracking-tighter text-black leading-[0.9]"
        >
          Selected <br /> Work
        </h1>
      </header>

      <main className="px-24 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>

      <footer className="px-24 py-12 border-t border-gray-100 flex justify-between items-center">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
          © 2026 Diya
        </p>
        <Link href="/" className="text-sm font-bold uppercase hover:underline">
          Back Home
        </Link>
      </footer>
    </div>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";

export default function AboutPage() {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Initial State
    gsap.set(titleRef.current, { y: 200, opacity: 0 });
    gsap.set(bodyRef.current, { y: 400, opacity: 0 });

    // 2. Title floats in first
    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
    })
      // 3. Body floats in together after the title starts
      .to(
        bodyRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
        },
        "-=0.8",
      ); // Overlap slightly for a natural feel
  }, []);

  return (
    <div className="bg-white min-h-screen text-black selection:bg-gray-200 overflow-x-hidden">
      {/* NAV */}
      <nav className="flex items-center justify-between px-24 pt-6 mb-16">
        <Link href="/" className="text-4xl font-bold tracking-tight">
          Diya
        </Link>
        <div className="flex gap-8 text-sm font-medium">
          <Link href="/about" className="underline ">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
        </div>
      </nav>

      <main className="px-24 pb-24">
        {/* HEADER - Wrapped in overflow-hidden to contain the float */}
        <div className="border-b border-black pb-8 mb-12 overflow-hidden">
          <h1
            ref={titleRef}
            className="text-8xl font-bold uppercase tracking-tighter leading-none"
          >
            About
          </h1>
        </div>

        {/* EVERYTHING AFTER THE TITLE */}
        <div ref={bodyRef}>
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-3xl font-bold mb-8 leading-tight tracking-tight">
                A multidisciplinary approach to Computer Science and Business
                Analytics.
              </h2>
              <div className="columns-1 md:columns-2 gap-10 text-lg leading-snug font-medium text-justify">
                <p className="mb-6">
                  I'm a college senior in Computer Science and Business Analytics from New Jersey, passionate about building and designing solutions with humans in focus. My work blends technical development with strategic analysis, turning complex data into actionable insights that make a real difference.
                </p>
                <p className="mb-6">
                  Behind the screen, I sing, whether it's on stage, at events, or even in the shower, music keeps me inspired and creative.
                </p>
                <p>
                  I thrive on challenges, whether in tech, finance, or research, and I'm driven by the opportunity to create solutions that empower people.
                </p>
              </div>
            </div>

            <div className="hidden lg:block col-span-1 border-l border-black/10 h-full mx-auto" />

            <div className="col-span-12 lg:col-span-4 flex flex-col gap-10">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Focus Areas
                </h3>
                <ul className="space-y-2 text-xl font-bold tracking-tight uppercase">
                  <li>UI/UX Design</li>
                  <li>Finance</li>
                  <li>Tech Consulting</li>
                  <li>Business Ops</li>
                  
                </ul>
              </div>
              <div className="pt-8 border-t border-black">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Status
                </h3>
                <p className="text-lg font-medium italic">
                  Seeking experience for the 2026 cycle.
                </p>
              </div>
              <div className="bg-[#D9D9D9] aspect-square w-full rounded-2xl flex items-center justify-center italic">
                <div className="bg-[#D9D9D9] aspect-square w-full rounded-2xl overflow-hidden relative">
              <Image
                src="/linkedinpp.jpeg"   // path in your public folder
                alt="Diya Adhikari"
                fill                  // makes it cover the parent div
                style={{ objectFit: "cover" }}
                className="rounded-2xl"
              />
              </div>
              </div>
            </div>
          </div>

          {/* BOTTOM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-20 border-t border-black">
            <div className="py-8 pr-8 border-r border-black/10">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                Location
              </p>
              <p className="font-bold">New Jersey, USA</p>
            </div>
            <div className="py-8 px-8 border-r border-black/10">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                Education
              </p>
              <p className="font-bold">CS & Business Analytics</p>
            </div>
            <div className="py-8 pl-8">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                Social
              </p>
              <div className="flex gap-4 font-bold">
                <a href="https://www.linkedin.com/in/diyaadh/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50" >
                  LinkedIn
                </a>
                <a href="https://github.com/Diyaad" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">

                  GITHUB
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

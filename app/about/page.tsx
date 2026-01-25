"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

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
          <Link href="/about" className="underline underline-offset-4">
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
                  Currently a college senior based in New Jersey, my work lives
                  at the intersection of technical development and strategic
                  data analysis.
                </p>
                <p className="mb-6">
                  My experience extends beyond the screen. Volunteering at the
                  28th General Assembly of CoNGO for the United Nations allowed
                  me to represent BPW International.
                </p>
                <p>
                  Whether it is Tech Consulting or Finance, I am driven by the
                  challenge of transforming complex data into actionable
                  insights.
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
                  <li>Finance</li>
                  <li>Tech Consulting</li>
                  <li>Business Ops</li>
                  <li>UI/UX Design</li>
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
              <div className="bg-[#D9D9D9] aspect-square w-full rounded-2xl flex items-center justify-center opacity-40 italic">
                Profile Image
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
                <a href="#" className="hover:underline">
                  LINKEDIN
                </a>
                <a href="#" className="hover:underline">
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

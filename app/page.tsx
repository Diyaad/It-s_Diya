"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import blackCoat from "@/public/black-coat.jpeg";
import conference from "@/public/conference.jpeg";
import flags from "@/public/flags.jpeg";
import linkedinpp from "@/public/linkedinpp.jpeg";
import mealPlanner from "@/public/meal planner.jpeg";
import nycBpw from "@/public/nyc-bpw.jpeg";
import unNepal from "@/public/UN-NEPAL.jpeg";
import un from "@/public/UN.jpeg";
import unhq from "@/public/unhq.jpeg";

// 1. EXTEND WINDOW INTERFACE FOR TYPESCRIPT SAFETY
declare global {
  interface Window {
    hasSeenIntro?: boolean;
  }
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const nameRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    // Now type-safe: no more 'any'
    const hasSeenIntro = window.hasSeenIntro;

    const ctx = gsap.context(() => {
      if (hasSeenIntro) {
        setLoading(false);
        gsap.set(preloaderRef.current, { display: "none" });
        gsap.set(nameRef.current, {
          position: "absolute",
          top: "24px",
          left: "96px",
          scale: 0.35,
          xPercent: 0,
          yPercent: 0,
          transformOrigin: "left top",
        });
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          setLoading(false);
          window.hasSeenIntro = true;
          gsap.set(nameRef.current, {
            position: "absolute",
            top: "24px",
          });
        },
      });

      gsap.set(preloaderRef.current, { backgroundColor: "#ffffff" });

      tl.from(".char", {
        y: 150,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
      })
        .from(
          subRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.5",
        )
        .to(nameRef.current, {
          delay: 0.8,
          duration: 1.5,
          scale: 0.35,
          top: "24px",
          left: "96px",
          xPercent: 0,
          yPercent: 0,
          transformOrigin: "left top",
          ease: "expo.inOut",
        })
        .to(
          subRef.current,
          {
            opacity: 0,
            duration: 0.5,
          },
          "<",
        )
        .to(
          preloaderRef.current,
          {
            opacity: 0,
            duration: 0.8,
            pointerEvents: "none",
          },
          "-=0.3",
        );
    });

    return () => ctx.revert();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        ref={nameRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110] flex overflow-hidden text-9xl font-bold tracking-tighter text-black pointer-events-none"
      >
        {"Diya".split("").map((char, i) => (
          <span key={i} className="char inline-block">
            {char}
          </span>
        ))}
      </div>

      <div
        ref={preloaderRef}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      >
        <p
          ref={subRef}
          className="mt-40 text-sm uppercase tracking-[0.3em] font-medium text-gray-500"
        >
          Designer, Artist, Creator
        </p>
      </div>

      <div className="bg-white relative">
        <main className="min-h-screen px-24 pt-6">
          <nav className="flex items-center justify-between mb-14">
            <div className="w-32 h-10 invisible">Diya</div>
            <div className="flex gap-8 text-sm font-medium text-black">
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </div>
          </nav>

          <section className="grid grid-cols-12 gap-4">
            {/* Left Column (Text and Lavender Box) */}
            <div className="col-span-6 flex flex-col gap-4 h-[600px]">
              <div className="h-[25%] flex items-start">
                <p className="text-lg font-medium leading-snug text-black">
                  Multidisciplinary college senior majoring in Computer Science
                  and Business Analytics and Living in New Jersey. Seeking
                  experience in Finance, Technology Consulting & Business
                  Operations.
                </p>
              </div>
              <div className="flex-1 bg-[#B8C6F1] rounded-3xl relative overflow-hidden">
                <Image
                  src={conference}
                  alt="UN Nepal"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover scale-110 object-[center_70%]"
                />
              </div>
            </div>

            {/* Right Column (Green Box / Profile) */}
            <div className="col-span-6 h-[600px] overflow-hidden bg-[#E2E8C0] rounded-3xl relative">
              <Image
                src={unNepal}
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover scale-105 object-[center_90%]"
              />
            </div>

            {/* Bottom Row - Large Pink Box */}
            <div className="col-span-7 bg-[#F1B8D9] rounded-3xl h-80 relative overflow-hidden">
              <Image
                src={nycBpw}
                alt="Conference"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Bottom Row - Small Blue Box */}
            <div className="col-span-5 bg-[#89a3d7] rounded-3xl h-80 relative overflow-hidden">
              <Image
                src={mealPlanner}
                alt="NYC"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover scale-100 object-[center_center]"
              />
            </div>
          </section>
        </main>

        <section className="bg-[#1A1816] py-16 px-24 text-white overflow-hidden mt-20">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-4xl">
              <h2 className="text-6xl mb-4 font-bold uppercase tracking-tighter">
                Recent Research
              </h2>
              <p className="text-lg font-medium max-w-2xl text-gray-300 leading-snug">
                Was honored to volunteer at the 28th General Assembly of the
                Conference of NGOs... representing{" "}
                <a
                  href="https://www.bpw-international.org/"
                  target="_blank"
                  className="text-inherit underline underline-offset-4 hover:opacity-70"
                >
                  BPW International
                </a>
                .
              </p>
            </div>
            <div className="flex gap-4 mb-2">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
              >
                →
              </button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar pb-4  scroll-smooth items-start"
          >
            <div className="h-[450px] bg-[#B8C6F1] relative overflow-hidden rounded-3xl flex-shrink-0">
              <Image
                src={unhq}
                alt="Meal Planner Project"
                className="h-full w-[600px] scale-100 object-cover object-[center,90%]"
                /* When not using fill, Next.js static imports provide width/height automatically */
              />
            </div>
            <div className="h-[450px] bg-[#B8C6F1] relative overflow-hidden rounded-3xl flex-shrink-0">
              <Image
                src={blackCoat}
                alt="Meal Planner Project"
                className="h-full w-auto object-cover"
                /* When not using fill, Next.js static imports provide width/height automatically */
              />
            </div>
            <div className="h-[450px] bg-[#B8C6F1] relative overflow-hidden rounded-3xl flex-shrink-0">
              <Image
                src={conference}
                alt="Meal Planner Project"
                className="h-full w-[600px] scale-100 object-cover object-[center,90%]"
                /* When not using fill, Next.js static imports provide width/height automatically */
              />
            </div>
          </div>
        </section>

        <section className="bg-[#ffffff] py-16 px-24 text-black overflow-hidden ">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-4xl">
              <h2 className="text-6xl mb-4 font-bold uppercase tracking-tighter">
                Projects
              </h2>
              <p className="text-lg font-medium max-w-2xl text-gray-700 leading-snug">
                <Link
                  href="/projects"
                  className="flex items-center gap-1 group text-black no-underline"
                >
                  Research and Internship projects.{" "}
                  <span className="text-xl leading-none transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <CardGridSection />
        </section>

        <Footer />
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}

// ... Card, CardGridSection, and Footer components remain same as previous
function Card({
  frontColor,
  backColor,
  title,
  description,
  subTitle,
  tools,
  image,
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className="group h-[400px] [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl gap-2 flex flex-col [backface-visibility:hidden]"
          style={{ backgroundColor: frontColor }}
        >
          {/* Top Image Area */}
          <div className="flex-1 flex items-start relative justify-center overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="w-full h-full object-cover object-[center_80%] rounded-2xl"
            />
          </div>

          {/* Text Content with gap of 2 (0.5rem) from image */}
          <div className="p-6">
            <h1 className="text-xl font-bold text-black tracking-tight">
              {title}
            </h1>
            <p className="text-sm text-black/70">{subTitle}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl p-8 flex flex-col justify-center text-left [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ backgroundColor: backColor }}
        >
          <div className="space-y-4">
            <div className="pb-6">
              <p className="text-xl font-bold text-black/80 ">{subTitle}</p>
            </div>

            <div>
              <span className="text-md font-bold uppercase text-black block">
                Tools
              </span>
              <p className="text-sm font-medium text-black/80">{tools}</p>
            </div>

            <div>
              <span className="text-md font-bold uppercase text-black block">
                Focus
              </span>
              <p className="text-sm font-medium text-black/80 leading-snug">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardGridSection() {
  const cards = [
    {
      front: "#E2E8C0",
      back: "#E2E8C0",
      image: "/black-coat.jpeg",
      title: "Data Analytics & Financial Insights",
      subTitle: "Donor Contribution Prediction & Analysis",
      tools: "Power BI, Excel, Data Analysis",
      desc: "Analyzed university donor data to identify giving patterns and predict donor behavior, translating insights into actionable fundraising strategies.",
    },
    {
      front: "#CFF7E2",
      back: "#CFF7E2",
      image: "/meal planner.jpeg",
      title: "UX / Product Design",
      subTitle: "Meal Planner App – UX/UI Prototype",
      tools: "Figma",
      desc: "Designed a user-centered meal planner prototype, applying UX principles and usability considerations to improve planning efficiency and accessibility.",
    },
    {
      front: "#B8C6F1",
      back: "#B8C6F1",
      image: "/conference.jpeg",
      title: "Research & NSF Fellowship",
      subTitle: "NSF CICF Fellow – Computing Research",
      tools: "National Science Foundation (Spring 2026)",
      desc: "Selected as a fellow in a competitive NSF program supporting advanced computing research and leadership development.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          frontColor={card.front}
          backColor={card.back}
          image={card.image}
          title={card.title}
          subTitle={card.subTitle}
          tools={card.tools}
          description={card.desc}
        />
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="px-24 py-12 bg-white border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold tracking-tighter text-black">
            Diya
          </h2>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
        <div className="flex gap-8 text-sm font-semibold uppercase tracking-wider text-black">
          <a
            href="https://www.linkedin.com/in/diyaadh/"
            className="hover:opacity-50"
          >
            LinkedIn
          </a>
          <a href="https://github.com/Diyaad" className="hover:opacity-50">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

interface CardProps {
  frontColor: string;
  backColor: string;
  image: string;
  title: string;
  subTitle: string;
  tools: string;
  description: string;
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";

interface CardProps {
  frontColor: string;
  backColor: string;
  image: string;
  title: string;
  subTitle: string;
  tools: string;
  description: string;
}

const ProjectCard = ({
  frontColor,
  backColor,
  title,
  description,
  subTitle,
  tools,
  image,
}: CardProps) => {
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
            <div>
              <span className="text-md font-bold uppercase text-black block"></span>
              <p className="text-sm font-medium text-black/80">{subTitle}</p>
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
      frontColor: "#E2E8C0",
      backColor: "#E2E8C0",
      image: "/black-coat.jpeg",
      title: "Data Analytics & Financial Insights",
      subTitle: "Donor Contribution Prediction & Analysis",
      tools: "Power BI, Excel, Data Analysis",
      description:
        "Analyzed university donor data to identify giving patterns and predict donor behavior, translating insights into actionable fundraising strategies.",
    },
    {
      frontColor: "#CFF7E2",
      backColor: "#CFF7E2",
      image: "/meal planner.jpeg",
      title: "UX / Product Design",
      subTitle: "Meal Planner App – UX/UI Prototype",
      tools: "Figma",
      description:
        "Designed a user-centered meal planner prototype, applying UX principles and usability considerations to improve planning efficiency and accessibility.",
    },

    {
      frontColor: "#D9EAF1",
      backColor: "#D9EAF1",
      image: "/unhq.jpeg",
      title: "Research & NSF Fellowship",
      subTitle: "Conference Presentation – CCSC",
      tools: "Research Presenter",
      description:
        "Accepted to present findings on LMS usability and accessibility at the CCSC Conference, linking academic research with industry standards.",
    },
    {
      frontColor: "#FFE4BC",
      backColor: "#FFE4BC",
      image: "/linkedinpp.jpeg",
      title: "Mentorship & Applied Teaching",
      subTitle: "Data Analytics Mentor",
      tools: "Python, Power BI, Excel",
      description:
        "Mentored high school and community college students on data analysis projects, guiding them from data exploration to actionable insights.",
    },
    {
      frontColor: "#E2E8C0",
      backColor: "#E2E8C0",
      image: "/conference.jpeg",
      title: "Global Engagement & Service",
      subTitle: "Volunteer – 28th CoNGO General Assembly",
      tools: "United Nations / BPW International",
      description:
        "Assisted with event coordination and supported global NGO engagement during the 28th General Assembly of CoNGO at the United Nations.",
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

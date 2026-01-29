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
  link?: string;
}

const ProjectCard = ({
  frontColor,
  backColor,
  title,
  description,
  subTitle,
  tools,
  image,
  link,
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
          <div className="relative w-full" style={{ height: "40vh", overflow: "hidden", borderRadius: "0.75rem" }}>
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
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
                Findings
              </span>
              <p className="text-sm font-medium text-black/80 leading-snug">
                {description}
              </p>
              {/** Renderlink if available **/}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm mt-1 block"
                >
                  <br></br>View Project
                </a>
              )}
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
        image: "/donor.jpeg",
        title: "Data Analytics & Financial Insights",
        subTitle: "Evaluation of Alumni Donors",
        tools: "Power BI, Excel, Data Analysis",
        description:
          "Analyzed university donor data to identify giving patterns and predict donor behavior. Key findings included: 45% of alumni donated, 52% of contributions came from organizations totaling $34.5M, and the highest-donating state was New Jersey. Insights revealed more contributions from non-alumni than alumni, guiding strategic fundraising efforts.",
          link:"https://docs.google.com/presentation/d/1Ca4__uGOvJOnWx6yB_oh-cajBbk7UNHW/edit?usp=sharing&ouid=104806624081505129510&rtpof=true&sd=true",
      },
      {
        frontColor: "#CFF7E2",
        backColor: "#CFF7E2",
        image: "/meal planner.jpeg",
        title: "UX / Product Design",
        subTitle: "Meal Planner App - UX/UI Prototype",
        tools: "Figma",
        description:
          "Designed a meal planner app prototype with a focus on usability and accessibility, applying UX/UI principles to make everyday planning easier for users.",
          link:"https://www.figma.com/proto/eGTG38HbaNxUpDu7G5Ygro/8---left-no-crumbs?node-id=8-11&t=xhTZVlFEbPn7dA7n-1"
      },
      {
        frontColor: "#B8C6F1",
        backColor: "#B8C6F1",
        image: "/nyc-bpw.jpeg",
        title: "UX / Product Design",
        subTitle: "NFBPWC New York Landing Page Prototype",
        tools: "Figma, Accessibility Considerations",
        description:
          "Created a landing page prototype for NFBPWC New York’s website, focusing on clear structure, accessibility, and the needs of a diverse audience.",
          link:"https://www.figma.com/design/eGTG38HbaNxUpDu7G5Ygro/8---left-no-crumbs?node-id=2120-1668&t=xhTZVlFEbPn7dA7n-1",
      },
      {
        frontColor: "#D9EAF1",
        backColor: "#D9EAF1",
        image: "/black-coat.jpeg",
        title: "Fellowship",
        subTitle: "NSF CICF Fellow - Spring 2026",
        tools: "National Science Foundation",
        description:
          "Selected as a Spring 2026 NSF CICF Fellow, recognizing my involvement in computing-focused research and commitment to academic and technical growth.",
      },
      {
        frontColor: "#FFE4BC",
        backColor: "#FFE4BC",
        image: "/conference.jpeg",
        title: "Research",
        subTitle: "CCSC Conference Presentation",
        tools: "Survey, Heuristic Evaluation, UDL Priniciples, Accessibility Audit",
        description:
          "Presented research on the usability and accessibility of learning management systems, sharing insights that connect student and teacher experience with educational technology design.",
      },
      {
        frontColor: "#CFF7E2",
        backColor: "#CFF7E2",
        image: "/mentor.jpeg",
        title: "Mentorship",
        subTitle: "The DATAJAM",
        tools: "Excel, Python, PowerBI",
        description:
          "Mentored high school and community college students in data analysis, guiding them as they turned raw data into meaningful insights and presentations.",
      },
      {
        frontColor: "#E2E8C0",
        backColor: "#E2E8C0",
        image: "/volunteer.jpeg",
        title: "Global Engagement & Service",
        subTitle: "UN CoNGO General Assembly Volunteering",
        tools: "BPW International, United Nations",
        description:
          "Volunteered at the 28th General Assembly of CoNGO at the United Nations, assisting with event coordination and supporting collaboration among global NGOs.",
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

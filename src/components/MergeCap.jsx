import { useRef, useEffect } from "react";
import { gsap } from "gsap";
const mergeSection = [
  {
    title: "Deal Origination & Target Screening",
    description:
      "We help identify and evaluate acquisition opportunities aligned with your strategic vision.",
    points: [
      "Market mapping and long-list creation",
      "Strategic fit and competitive positioning analysis",
      "Target profiling and investment thesis support",
      "Shortlisting and prioritization frameworks",
    ],
  },
  {
    title: "Due Diligence Support",
    description:
      "AGIGrowthX enables faster, data-backed diligence processes that uncover risks and validate deal assumptions.",
    points: [
      "Commercial and operational due diligence",
      "Technology, digital, and cybersecurity reviews",
      "Financial modeling and valuation support",
      "Synergy and integration opportunity sizing",
    ],
  },
  {
    title: "Integration Planning & Execution",
    description:
      "We ensure post-merger success through structured integration strategies focused on people, processes, and performance.",
    points: [
      "Integration management office (IMO) setup",
      "Functional and cross-functional integration planning",
      "Change management and communication design",
      "Day 1 readiness and post-Day 1 execution",
    ],
  },
  {
    title: "Divestitures & Carve-Outs",
    description:
      "Our teams support clients in preparing for and executing complex divestitures while preserving business continuity.",
    points: [
      "Carve-out planning and separation modeling",
      "Transitional services agreement (TSA) management",
      "Clean team setup and data separation protocols",
      "Buyer support and asset packaging",
    ],
  },
  {
    title: "Value Creation & Performance Tracking",
    description:
      "We design and track value creation plans that align with deal logic and deliver measurable financial results.",
    points: [
      "100-day planning and execution",
      "EBITDA enhancement and cost synergy tracking",
      "KPI dashboards and performance management",
      "Governance and review cadence setup",
    ],
  },
];

export default function MergeCap() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      const bar = card.querySelector(".hover-bar");

      gsap.set(bar, { scaleX: 0, transformOrigin: "left" });

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(bar, { scaleX: 1, duration: 0.4, ease: "power2.out" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(bar, { scaleX: 0, duration: 0.4, ease: "power2.out" });
      });
    });
  }, []);

  return (
    <div className="px-6 md:px-20 py-16 bg-white flex flex-wrap justify-center gap-10">
      {mergeSection.map((section, idx) => (
        <div
          key={idx}
          ref={(el) => (cardRefs.current[idx] = el)}
          className="group  w-[400px] md:w-[360px] p-6 rounded-lg shadow-md relative overflow-hidden transition-transform duration-300 transform"
        >
          {/* Animated Top Bar */}
          <div className="hover-bar h-1 w-full bg-zinc-600 absolute top-0 left-0 scale-x-0" />

          {/* Title */}
          <h3 className="text-2xl md:text-2xl font-bold bower text-zinc-900 mb-4">
            {section.title}
          </h3>

          {/* Content shown always, just styled */}
          <p className="text-gray-700 brogman tracking-wider text-sm md:text-base mb-3">
            {section.description}
          </p>
          <ul className="list-disc ml-5 space-y-1 brogman tracking-wider text-gray-800 text-sm md:text-base">
            {section.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

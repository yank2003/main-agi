import { useRef, useEffect } from "react";
import { gsap } from "gsap";
const orgSection = [
  {
    title: "Organizational Design & Restructuring",
    description:
      "We support companies in designing operating models that improve accountability, efficiency, and speed.",
    points: [
      "Org structure analysis and redesign",
      "Role clarity and span-of-control diagnostics",
      "Center of Excellence (CoE) frameworks",
      "Agile and cross-functional team models",
    ],
  },
  {
    title: "Talent & Workforce Strategy",
    description:
      "We help build talent strategies that align with long-term goals while addressing short-term skill gaps.",
    points: [
      "Strategic workforce planning",
      "Talent segmentation and succession mapping",
      "Skill-gap analysis and reskilling programs",
      "Hiring, onboarding, and retention strategy",
    ],
  },
  {
    title: "Leadership Development & Capability Building",
    description:
      "We enable leaders at all levels with the tools, frameworks, and behaviors needed to lead transformation.",
    points: [
      "Leadership competency frameworks",
      "Executive coaching and development journeys",
      "Capability academies and digital learning design",
      "Team effectiveness and collaboration assessments",
    ],
  },
  {
    title: "Performance & Rewards Optimization",
    description:
      "AGIGrowthX designs performance systems that motivate excellence and enable accountability across the organization.",
    points: [
      "Performance management system design",
      "KPI alignment with strategy and roles",
      "Incentive structures and variable pay plans",
      "Feedback and appraisal process design",
    ],
  },
  {
    title: "Culture, Engagement & Change Readiness",
    description:
      "We help shape strong organizational cultures and build change-ready teams that can adapt and sustain progress.",
    points: [
      "Culture diagnostic and alignment workshops",
      "Employee experience (EX) program design",
      "Change communications and engagement plans",
      "Continuous listening and pulse surveys",
    ],
  },
];

export default function OrgCap() {
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
      {orgSection.map((section, idx) => (
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

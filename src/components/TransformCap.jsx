import { useRef, useEffect } from "react";
import { gsap } from "gsap";
const transformationSection = [
  {
    title: "Enterprise-Wide Transformation Management",
    description:
      "We support full-scale change programs with end-to-end oversight, ensuring alignment and execution at every level.",
    points: [
      "Transformation office setup",
      "Roadmap development and governance",
      "Initiative tracking and benefit realization",
      "Stakeholder coordination",
    ],
  },
  {
    title: "Functional and Digital Transformations",
    description:
      "We lead targeted transformations in key areas such as operations, customer experience, supply chain, and digital.",
    points: [
      "Function-specific transformation playbooks",
      "Digital operating model implementation",
      "Agile transformation support",
      "Technology modernization planning",
    ],
  },
  {
    title: "Turnaround & Performance Improvement",
    description:
      "We help businesses reset their cost base, improve margins, and stabilize operations.",
    points: [
      "Rapid diagnostic assessments",
      "Cost optimization and cash preservation",
      "Efficiency and productivity improvement",
      "Quick-win identification and rollout",
    ],
  },
  {
    title: "Change Management & Leadership Engagement",
    description:
      "We guide organizations through the human side of transformation — ensuring adoption, belief, and sustained momentum.",
    points: [
      "Change readiness assessments",
      "Executive alignment and leadership coaching",
      "Communication strategies and enablement",
      "Frontline adoption programs",
    ],
  },
];

export default function TransCap() {
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
      {transformationSection.map((section, idx) => (
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

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
const implementSections = [
  {
    title: "Program & Project Management Office (PMO) Support",
    description:
      "We establish and operate high-performing PMOs to orchestrate initiatives, align stakeholders, and ensure accountability across functions.",
    points: [
      "PMO setup and governance frameworks",
      "Workstream coordination and milestone tracking",
      "Resource planning and risk management",
      "KPI dashboards and reporting",
    ],
  },
  {
    title: "Transformation Office & Strategic Initiatives Execution",
    description:
      "We drive large-scale transformation programs through structured roadmaps and centralized execution oversight.",
    points: [
      "Transformation management office (TMO) operations",
      "Initiative scoping and prioritization",
      "Progress monitoring and corrective actions",
      "Strategic initiative integration",
    ],
  },
  {
    title: "Agile Delivery & Execution Models",
    description:
      "We help organizations shift from static planning to agile execution — enabling iterative delivery, real-time pivots, and faster time-to-impact.",
    points: [
      "Agile playbook development and coaching",
      "Scrum team setup and sprint planning",
      "Product backlog management",
      "Release and sprint retrospectives",
    ],
  },
  {
    title: "Change Enablement & Capability Support",
    description:
      "We embed change readiness, communication, and frontline alignment into every implementation effort to ensure adoption and results.",
    points: [
      "Change management frameworks and toolkits",
      "Communication plans and stakeholder engagement",
      "Training rollout and capability uplift",
      "Change leader development",
    ],
  },
  {
    title: "Performance Management & Continuous Improvement",
    description:
      "AGIGrowthX supports continuous performance tracking and adaptation to drive accountability and sustained outcomes.",
    points: [
      "Implementation KPIs and review cadences",
      "Health checks and project retrospectives",
      "Operational efficiency benchmarking",
      "Process reengineering support",
    ],
  },
];

export default function ImplementationCap() {
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
      {implementSections.map((section, idx) => (
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

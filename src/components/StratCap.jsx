import { useRef, useEffect } from "react";
import { gsap } from "gsap";
const strategicSection = [
  {
    title: "Corporate & Business Unit Strategy",
    description:
      "We guide clients in defining their competitive edge, focusing resources, and aligning growth objectives with real market opportunities.",
    points: [
      "Strategic planning and target setting",
      "Portfolio analysis and prioritization",
      "Market entry and expansion strategy",
      "Strategic review and annual refresh cycles",
    ],
  },
  {
    title: "Capital Allocation & Value Creation Planning",
    description:
      "We help clients maximize capital efficiency and ensure every investment aligns with enterprise priorities.",
    points: [
      "Investment evaluation frameworks",
      "Capital deployment and reallocation models",
      "ROIC and shareholder value diagnostics",
      "Scenario modeling and risk-adjusted planning",
    ],
  },
  {
    title: "Financial Modeling & Planning Support",
    description:
      "AGIGrowthX delivers robust, dynamic financial models that enable planning, valuation, and performance tracking.",
    points: [
      "Integrated financial model development",
      "Budgeting and forecasting tools",
      "Sensitivity and break-even analysis",
      "Excel and BI-based dashboards",
    ],
  },
  {
    title: "Performance Management & Strategic KPIs",
    description:
      "We design performance frameworks that help organizations stay focused, agile, and results-oriented.",
    points: [
      "KPI mapping and dashboarding",
      "Balanced scorecard development",
      "Target setting and variance analysis",
      "Governance rhythm and board reporting",
    ],
  },
  {
    title: "M&A Strategy & Transaction Readiness",
    description:
      "We support inorganic growth through deal strategy, valuation analysis, and integration planning.",
    points: [
      "Target screening and deal thesis design",
      "Valuation support and synergy modeling",
      "Pre-deal strategy alignment",
      "Strategic fit analysis and scenario testing",
    ],
  },
];

export default function StratCap() {
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
      {strategicSection.map((section, idx) => (
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

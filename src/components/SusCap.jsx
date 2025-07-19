import { useRef, useEffect } from "react";
import { gsap } from "gsap";
const susSection = [
  {
    title: "Sustainability Strategy & Governance",
    description:
      "We help organizations develop ESG roadmaps aligned with business goals, stakeholder expectations, and regulatory trends.",
    points: [
      "ESG materiality assessment",
      "Sustainability governance frameworks",
      "Strategy definition and target setting",
      "ESG reporting alignment (GRI, SASB, TCFD)",
    ],
  },
  {
    title: "Decarbonization & Climate Risk Management",
    description:
      "We support climate action plans focused on emissions reduction and long-term resilience.",
    points: [
      "Carbon footprint baseline and reduction pathways",
      "Scope 1, 2, and 3 emissions modeling",
      "Climate risk identification and scenario analysis",
      "Compliance with evolving global standards",
    ],
  },
  {
    title: "Sustainable Operations & Supply Chains",
    description:
      "We drive eco-efficiency and transparency across operations and supplier ecosystems.",
    points: [
      "Resource efficiency and waste reduction",
      "Sustainable procurement practices",
      "Supplier ESG assessments",
      "Circular economy modeling",
    ],
  },
  {
    title: "Sustainable Product & Innovation Strategy",
    description:
      "We guide clients in developing products and services that meet sustainability criteria and market expectations.",
    points: [
      "Eco-design and lifecycle analysis",
      "Sustainable packaging innovation",
      "Market analysis for green products",
      "Stakeholder engagement strategy",
    ],
  },
];

export default function SusCap() {
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
      {susSection.map((section, idx) => (
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

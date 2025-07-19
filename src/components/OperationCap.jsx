import { useRef, useEffect } from "react";
import { gsap } from "gsap";
const operationsSection = [
  {
    title: "Process Optimization & Lean Operations",
    description:
      "We streamline core business processes to improve speed, quality, and cost-effectiveness.",
    points: [
      "Value stream mapping and process diagnostics",
      "Lean Six Sigma deployment",
      "Waste elimination and throughput improvement",
      "Standard operating procedures (SOP) design",
    ],
  },
  {
    title: "Supply Chain Management",
    description:
      "AGIGrowthX designs resilient and responsive supply chains to help organizations manage uncertainty and deliver on time.",
    points: [
      "Demand planning and inventory optimization",
      "Logistics network design and routing",
      "Supplier collaboration and performance management",
      "Visibility dashboards and digital twin modeling",
    ],
  },
  {
    title: "Procurement & Cost Transformation",
    description:
      "We help clients unlock cost savings while strengthening supplier ecosystems and ensuring compliance.",
    points: [
      "Strategic sourcing and category management",
      "Total cost of ownership (TCO) analysis",
      "Contract negotiation and supplier evaluation",
      "Digital procurement tools implementation",
    ],
  },
  {
    title: "Manufacturing Excellence",
    description:
      "We support factory operations and production systems to increase uptime, output, and efficiency.",
    points: [
      "Overall equipment effectiveness (OEE) optimization",
      "Production scheduling and planning",
      "Maintenance strategy and downtime reduction",
      "Shop floor digitization and IoT integration",
    ],
  },
  {
    title: "Operational Performance Management",
    description:
      "We bring rigor to operational governance, helping teams drive continuous improvement and accountability.",
    points: [
      "KPI design and real-time performance tracking",
      "Daily management systems and control towers",
      "Escalation routines and decision frameworks",
      "Operating rhythm and business reviews",
    ],
  },
];

export default function OpCap() {
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
      {operationsSection.map((section, idx) => (
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

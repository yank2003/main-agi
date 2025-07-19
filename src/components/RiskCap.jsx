import { useRef, useEffect } from "react";
import { gsap } from "gsap";
const riskSection = [
  {
    title: "Enterprise Risk Management (ERM)",
    desc: "We help design and embed enterprise-wide risk governance frameworks aligned with your strategic objectives.",
    points: [
      "Risk identification and assessment",
      "Risk appetite and tolerance modeling",
      "Policy and control framework development",
      "Risk reporting and governance setup"
    ]
  },
  {
    title: "Cybersecurity & Information Risk",
    desc: "AGIGrowthX supports organizations in protecting digital assets, strengthening cybersecurity, and ensuring compliance with global standards.",
    points: [
      "Cyber risk assessments and threat modeling",
      "Security architecture review",
      "Data protection and regulatory compliance",
      "Incident response planning"
    ]
  },
  {
    title: "Operational & Strategic Risk Advisory",
    desc: "We assess and mitigate operational risks across functions, processes, and business models.",
    points: [
      "Supply chain and third-party risk management",
      "Process failure mode and impact analysis (FMEA)",
      "Scenario planning and risk simulation",
      "Controls testing and effectiveness reviews"
    ]
  },
  {
    title: "Business Continuity & Crisis Management",
    desc: "We help organizations prepare for disruption and recover faster through structured continuity planning.",
    points: [
      "Business impact analysis and continuity planning",
      "Crisis response frameworks and escalation protocols",
      "Emergency preparedness training",
      "Recovery time objectives (RTO) alignment"
    ]
  },
  {
    title: "Compliance & Regulatory Risk Management",
    desc: "Our teams support clients in building robust compliance structures aligned with evolving global standards.",
    points: [
      "Regulatory mapping and compliance audits",
      "Policy design and process controls",
      "Ethics and governance program support",
      "Reporting, disclosure, and stakeholder alignment"
    ]
  }
];


export default function RiskCap() {
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
      {riskSection.map((section, idx) => (
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
            {section.desc}
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

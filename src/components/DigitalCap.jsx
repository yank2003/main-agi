import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const digitalSections = [
  {
    title: "Digital Strategy & Roadmap Development",
    description:
      "We help clients design technology strategies that align with business objectives and drive long-term value.",
    points: [
      "Digital maturity assessments",
      "Tech-enabled growth planning",
      "Platform architecture strategy",
      "Innovation pipeline design",
    ],
  },
  {
    title: "Product Design & Agile Development",
    description:
      "Our teams build user-centric digital products that deliver seamless experiences and scalable functionality.",
    points: [
      "UX/UI design and user research",
      "Agile product development",
      "Front-end and back-end engineering",
      "API-first architecture and integrations",
    ],
  },
  {
    title: "Cloud & Infrastructure Modernization",
    description:
      "We support cloud adoption and infrastructure transformation for greater agility, scalability, and cost efficiency.",
    points: [
      "Cloud readiness assessment",
      "Multi-cloud and hybrid cloud strategies",
      "DevOps and automation pipelines",
      "Infrastructure-as-code (IaC) implementation",
    ],
  },
  {
    title: "Data Engineering & Intelligence",
    description:
      "We help clients turn raw data into actionable insights with high-quality, governed, and secure data architectures.",
    points: [
      "Data lake and data warehouse design",
      "ETL/ELT pipelines and data modeling",
      "Business intelligence dashboards",
      "AI/ML model integration and deployment",
    ],
  },
  {
    title: "Enterprise Platforms & Technology Enablement",
    description:
      "AGIGrowthX delivers full-service support for ERP, CRM, and business platform modernization.",
    points: [
      "System design and deployment (SAP, Salesforce, etc.)",
      "Legacy modernization and system integration",
      "Digital workplace solutions",
      "Low-code/no-code platform support",
    ],
  },
];

const DigitalCapabilitiesCards = () => {
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
      {digitalSections.map((section, idx) => (
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
};

export default DigitalCapabilitiesCards;

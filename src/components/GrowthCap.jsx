import { useRef, useEffect} from "react";
import { gsap } from "gsap";
const growthSections = [
  {
    title: "Go-to-Market & Commercial Strategy",
    description:
      "We support businesses in identifying high-potential segments, defining value propositions, and structuring commercial models for long-term impact.",
    points: [
      "Market segmentation and opportunity sizing",
      "Channel and distribution strategy",
      "Value proposition design",
      "GTM playbook development",
    ],
  },
  {
    title: "Sales Acceleration & Enablement",
    description:
      "We help sales organizations drive productivity, improve pipeline performance, and close more deals with better tools and targeting.",
    points: [
      "Salesforce design and coverage models",
      "CRM deployment and usage optimization",
      "Sales enablement content and platforms",
      "Performance metrics and incentive strategy",
    ],
  },
  {
    title: "Digital Marketing & Customer Acquisition",
    description:
      "We build digital marketing engines designed to attract, convert, and retain customers across multiple channels.",
    points: [
      "Search, social, and performance marketing",
      "Customer journey mapping and personalization",
      "Funnel optimization and conversion strategy",
      "Campaign execution and ROI analysis",
    ],
  },
  {
    title: "Brand Strategy & Content Development",
    description:
      "We support clients in building distinctive brands and executing content strategies that drive engagement and trust.",
    points: [
      "Brand positioning and narrative development",
      "Visual identity and messaging frameworks",
      "Content calendars and execution workflows",
      "Cross-channel communications alignment",
    ],
  },
  {
    title: "Customer Experience & Retention Strategy",
    description:
      "We design programs that increase loyalty, reduce churn, and elevate the overall customer experience.",
    points: [
      "CX audits and customer feedback programs",
      "Loyalty strategy and retention campaigns",
      "NPS tracking and improvement planning",
      "Lifecycle communication and service design",
    ],
  },
];

export default function GrowthCap() {

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
      {growthSections.map((section, idx) => (
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

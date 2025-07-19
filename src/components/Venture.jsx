import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: "Venture Ideation & Validation",
    description:
      "We help clients define the right problem to solve, validate product-market fit, and align opportunity with business ambition.",
    points: [
      "Market research and white space identification",
      "Problem definition and hypothesis design",
      "Rapid prototyping and MVP development",
      "Go/no-go decision frameworks",
    ],
  },
  {
    title: "Incubation & Go-to-Market Strategy",
    description:
      "AGIGrowthX guides new ventures through structured incubation, operational planning, and strategic go-to-market design.",
    points: [
      "Venture incubation playbooks",
      "Brand and channel strategy",
      "Pricing, positioning, and commercial model alignment",
      "Launch roadmap development",
    ],
  },
  {
    title: "Digital Product Design & Build",
    description:
      "We provide dedicated product teams to accelerate development across digital platforms, tools, and customer experiences.",
    points: [
      "Product architecture and UX/UI design",
      "Agile development and sprints",
      "Technology stack selection and integration",
      "Customer onboarding journeys",
    ],
  },
  {
    title: "Growth Enablement & Scaling Support",
    description:
      "We support business builders in establishing scalable operations, acquiring customers, and building high-performance teams.",
    points: [
      "Growth marketing and acquisition modeling",
      "Talent strategy and hiring support",
      "Operating model and performance KPIs",
      "Business governance and investor reporting",
    ],
  },
];

const VentureSections = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate section titles
      gsap.from(".section-title", {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          onEnter(self) {
            self.disable();
          },
        },
      });

      // Animate descriptions with a small delay after titles
      gsap.from(".section-description", {
        opacity: 0,
        y: -10,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.3,
        delay: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          onEnter(self) {
            self.disable();
          },
        },
      });

      // Animate list items with delay after descriptions
      gsap.from(".point-item", {
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          onEnter(self) {
            self.disable();
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="space-y-12 brogman tracking-wider w-[550px]"
    >
      {sections.map(({ title, description }, idx) => (
        <div key={idx} className="border-b border-gray-300 pb-2">
          <h2 className="section-title relative text-xl font-bold mb-3 pl-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-gray-900 before:rounded-full">
            {title}
          </h2>
          <p className="section-description text-gray-700 mb-4 pl-1 max-w-prose">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VentureSections;

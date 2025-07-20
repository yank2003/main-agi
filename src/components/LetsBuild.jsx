import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import letbuild from "../assets/letbuild.webp"; // Adjust path if needed

gsap.registerPlugin(ScrollTrigger);

const items = [
  "Deep experience across venture creation, startup incubation, and corporate innovation",
  "Dedicated GCC teams covering strategy, product, design, growth, and operations",
  "Agile execution models tailored to startup speed and corporate rigor",
  "Structured frameworks for testing, validating, and scaling new businesses",
];

const WhyAGIGrowthX = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const listRefs = useRef([]);

  listRefs.current = [];

  const addToRefs = (el) => {
    if (el && !listRefs.current.includes(el)) {
      listRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      listRefs.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row items-center bg-white py-16 px-6"
    >
      {/* Left Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={letbuild}
          alt="Let's Build"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 p-8">
        <h2 ref={headingRef} className="text-5xl bower font-bold text-gray-900 mb-10">
          Why AGIGrowthX for Business Building
        </h2>
        <div>
          <ul className="list-disc brogman tracking-wider list-inside text-gray-800 text-xl font-medium space-y-3">
            {items.map((item, i) => (
              <li key={i} ref={addToRefs}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyAGIGrowthX;

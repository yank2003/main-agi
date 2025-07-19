import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
// For scroll trigger

const ImpactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the element comes into view
    threshold: 0.6, // Start the animation when the element is 80% in view
  });

  return (
    <div className="mt-10">
      <h1 className="text-center font-extrabold text-lg">OUR IMPACT</h1>
      <div className="flex justify-center items-center gap-10 mt-15 px-10">
        {/* Stat Block 1 */}
        <div className="text-center tracking-wider space-y-0.5 px-8">
          <h1 className="text-9xl bower text-[#323238]" ref={ref}>
            {inView && (
              <CountUp
                start={0}
                end={6}
                duration={6}
                separator=","
                suffix="+"
              />
            )}
          </h1>
          <h1 className="text-2xl brogman">Years Shaping high-growth</h1>
          <p className="text-sm text-gray-600">
            ecosystems across Asia, Africa & the Middle East
          </p>
        </div>

        {/* Divider */}
        <div className="w-[2px] h-[300px] bg-gray-400"></div>

        {/* Stat Block 2 */}
        <div className="text-center tracking-wider space-y-0.5 px-8">
          <h1 className="text-9xl bower text-[#323238]" ref={ref}>
            {inView && (
              <CountUp
                start={0}
                end={1000}
                duration={2}
                separator=","
                suffix="+"
              />
            )}
          </h1>
          <h1 className="text-2xl brogman">Strategic Engagements</h1>
          <p className="text-sm text-gray-600">
            Delivered in incubation, investment, and business transformation
          </p>
        </div>

        {/* Divider */}
        <div className="w-[2px] h-[300px] bg-gray-400"></div>

        {/* Stat Block 3 */}
        <div className="text-center tracking-wider space-y-0.5 px-10">
          <h1 className="text-9xl bower text-[#323238]" ref={ref}>
            {inView && (
              <CountUp
                start={0}
                end={65}
                duration={3.2}
                separator=","
                suffix="+"
              />
            )}
          </h1>
          <h1 className="text-2xl brogman">Healthcare Facilities</h1>
          <p className="text-sm text-gray-600">
            Including hospitals and clinics serving 15M+ patients
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;

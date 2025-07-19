import Navbar from "../components/Navbar";
import risk from "../assets/risk.jpg";
import risk1 from "../assets/risk1.jpg";
import RiskCap from "../components/RiskCap";
import Footer from "../components/Footer";
const RiskRes = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 relative h-[701px] overflow-hidden">
        {/* Background Image */}
        <img
          src={risk}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute top-20 brogman tracking-wider w-full h-full text-white flex flex-col justify-center items-start px-20 space-y-6 z-10">
          <h1 className="text-7xl md:text-8xl text-left font-bold tracking-wide w-full bower">
            Risk &amp; Resilience
          </h1>
          <p className="text-xl md:text-xl text-left max-w-[700px]">
            Anticipate Uncertainty. Build Stability. Respond with Confidence.
          </p>
        </div>
      </div>
      <div className="flex brogman tracking-wider mt-10 px-20 py-10 gap-10">
        <div className="w-1/2 space-y-6">
          <h1 className="text-lg text-gray-800">
            At AGIGrowthX, we help organizations anticipate disruptions,
            strengthen risk posture, and build resilient systems capable of
            withstanding change. From enterprise risk management to
            cybersecurity and operational continuity, our capabilities are
            designed to enable proactive governance and sustainable performance.
          </h1>
          <h1 className="text-lg text-gray-800">
            As a modern Global Capability Center (GCC), we deliver integrated
            risk frameworks and executional support to help leaders navigate
            volatility — without compromising growth.
          </h1>
        </div>
        <div className="w-px bg-zinc-700"></div>
        <div className="w-1/2  p-6 font-sans">
          <h1 className="text-4xl bower font-bold text-gray-800 mb-4">
            Why AGIGrowthX for Risk &amp; Resilience
          </h1>
          <ul className="list-disc list-inside whitespace-nowrap text-gray-700 space-y-2">
            <li>
              Integrated teams covering strategy, cyber, compliance, and
              operations
            </li>
            <li>
              GCC-scale delivery for rapid assessments and round-the-clock
              monitoring
            </li>
            <li>
              Alignment of risk frameworks with business goals and digital
              transformation
            </li>
            <li>
              Structured tools, playbooks, and monitoring solutions for
              long-term resilience
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="relative  h-[300px] px-10 rounded-lg overflow-hidden group w-[80vw] ">
          <img
            src={risk1}
            className="absolute top-0  left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt="global"
          />
          <div className="relative  mt-5 text-white z-10 flex flex-col justify-center h-full px-6 ">
            <h1 className="text-5xl bower font-bold text-left">
              Secure the Present. Strengthen the Future. Stay Prepared.
            </h1>
            <p className="text-xl brogman tracking-wider text-left mt-2 ">
              Partner with AGIGrowthX to build resilient systems that safeguard
              growth and withstand disruption.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-30">
        <h1 className="uppercase text-lg font-bold text-center">
          Our Risk &amp; Resilience Capabilities
        </h1>
        <RiskCap />
      </div>
      <div className="px-12 border-t-2 mt-15">
        <Footer />
      </div>
    </div>
  );
};

export default RiskRes;

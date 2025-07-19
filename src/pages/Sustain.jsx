import Navbar from "../components/Navbar";
import sus from "../assets/sus.jpg";
import sus1 from "../assets/sus1.jpg";
import Footer from "../components/Footer";
import SusCap from "../components/SusCap";
const Sustain = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 relative h-[701px] overflow-hidden">
        {/* Background Image */}
        <img
          src={sus}
          alt=""
          className="absolute mt-20 top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute top-20 brogman tracking-wider text-right w-full h-full text-black flex flex-col justify-center items-end px-20 space-y-6 z-10">
          <h1 className="text-7xl md:text-8xl  font-bold tracking-wide w-[800px] bower">
            Sustainability
          </h1>
          <p className="text-xl md:text-xl text-white  max-w-[700px]">
            Building Responsible, Future-Ready Businesses
          </p>
        </div>
      </div>
      <div className="bg-white py-16 h-full px-30 space-y-10 mt-10">
        {/* Top Section: Text Left + Paragraph Right */}
        <div className="flex justify-between items-start gap-10">
          {/* LEFT: Bullet Points */}
          <div className="w-1/2">
            <h2 className="text-4xl font-bold mb-6 bower">
              Why AGIGrowthX for Sustainability
            </h2>
            <ul className="list-disc list-inside text-lg space-y-3 brogman tracking-wide">
              <li>
                Integrated ESG expertise across strategy, compliance, and
                operations
              </li>
              <li>
                GCC-scale support for data tracking, analytics, and reporting
              </li>
              <li>
                Deep alignment with evolving global sustainability frameworks
              </li>
              <li>
                Tools and frameworks to embed ESG into day-to-day business
              </li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-[240px]  bg-zinc-800 "></div>

          {/* RIGHT: M&A Description Paragraph */}
          <div className="w-1/2 text-lg brogman tracking-wide">
            <p className="mb-4">
              At AGIGrowthX, we help clients embed sustainability into core
              strategy, operations, and culture — enabling growth that’s both
              responsible and resilient. From decarbonization to ESG compliance
              and sustainable innovation, we support businesses in navigating
              the complexities of a low-carbon, stakeholder-driven economy.
            </p>
            <p>
              As a forward-looking GCC, we deliver scalable sustainability
              services that combine environmental goals with commercial
              outcomes.
            </p>
          </div>
        </div>

        {/* Bottom Section: Image with Overlay Text */}
        <div className="relative h-[300px] px-10 rounded-lg overflow-hidden group">
          <img
            src={sus1}
            className="absolute  top-0  left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt="global"
          />
          <div className="relative z-10 text-white flex flex-col justify-center h-full px-6">
            <h1 className="text-5xl bower font-bold text-left">
              Lead Responsibly. Grow Sustainably. Deliver with Purpose.
            </h1>
            <p className="text-xl brogman tracking-wider text-left mt-2">
              AGIGrowthX helps future-proof your organization by embedding
              sustainability into every layer of performance.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="font-bold text-lg text-center uppercase">
          Our Sustainability Capabilities
        </h1>
        <SusCap />
      </div>
      <div className="px-20 border-t-2 mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Sustain;

import Navbar from "../components/Navbar";
import operate from "../assets/operate.jpg";
import operate1 from "../assets/operate1.jpg";
import OpCap from "../components/OperationCap";
import Footer from "../components/Footer";

const Operation = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 relative h-[701px] overflow-hidden">
        {/* Background Image */}
        <img
          src={operate}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute top-20 brogman tracking-wider w-full h-full text-white flex flex-col justify-center items-start px-20 space-y-6 z-10">
          <h1 className="text-7xl md:text-8xl text-left font-bold tracking-wide w-full bower">
            Operations
          </h1>
          <p className="text-xl md:text-xl text-left max-w-[700px]">
            Building Resilient, Scalable, and Cost-Efficient Operational Models
          </p>
        </div>
      </div>
      <div>
        <h1 className="px-20 brogman tracking-wider text-xl text-center py-20">
          At AGIGrowthX, we empower businesses to achieve operational excellence
          by reimagining core processes, increasing efficiency, and enhancing
          agility. Whether addressing supply chain disruptions, improving cost
          structures, or digitizing processes, our operations practice helps
          clients run better — at scale and speed. As a Global Capability Center
          (GCC), we integrate deep functional expertise, digital enablers, and
          cross-industry benchmarks to deliver practical, data-backed solutions
          across complex operating models.
        </h1>
      </div>
      <div>
        <h1 className="text-lg font-bold text-center uppercase mt-15">
          Our Operations Capabilities
        </h1>
        <OpCap />
      </div>
      <div className="bg-white py-16 h-full px-30 space-y-10 ">
        {/* Bottom Section: Image with Overlay Text */}
        <div className="relative h-[300px] px-10 rounded-lg overflow-hidden group">
          <img
            src={operate1}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt="global"
          />
          <div className="relative z-10 text-white flex flex-col justify-center h-full px-6">
            <h1 className="text-5xl bower font-bold text-left">
              Operate Smarter. Scale Faster. Perform Better.
            </h1>
            <p className="text-xl brogman tracking-wider text-left mt-2">
              From factory floor to boardroom, AGIGrowthX transforms operations
              for long-term advantage.
            </p>
          </div>
        </div>

        {/* Top Section: Text Left + Paragraph Right */}
        <div className="flex justify-between h-full items-start gap-10 translate-y-10">
          {/* LEFT: Bullet Points */}
          <div className="w-1/2">
            <h2 className="text-4xl font-bold mb-6 bower">
              Why AGIGrowthX for Operations
            </h2>
            <ul className="list-disc list-inside text-lg space-y-3 brogman tracking-wide">
              <li>
                Cross-functional teams with deep process, supply chain, and
                manufacturing expertise
              </li>
              <li>
                Proven frameworks for cost transformation, productivity, and
                resilience
              </li>
              <li>
                GCC-powered scalability with round-the-clock execution support
              </li>
              <li>
                Integration of digital tools and analytics for measurable
                results
              </li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-[240px]  bg-zinc-800 "></div>

          {/* RIGHT: M&A Description Paragraph */}
          <div className="w-1/2 text-lg brogman tracking-wide">
            <p className="mb-4">
              At AGIGrowthX, we empower businesses to achieve operational
              excellence by reimagining core processes, increasing efficiency,
              and enhancing agility. Whether addressing supply chain
              disruptions, improving cost structures, or digitizing processes,
              our operations practice helps clients run better — at scale and
              speed.
            </p>
            <p>
              As a Global Capability Center (GCC), we integrate deep functional
              expertise, digital enablers, and cross-industry benchmarks to
              deliver practical, data-backed solutions across complex operating
              models.
            </p>
          </div>
        </div>
      </div>
      <div className="px-20 border-t-2 mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Operation;

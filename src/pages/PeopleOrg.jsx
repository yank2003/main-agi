import Navbar from "../components/Navbar";
import org from "../assets/org.webp";
import org1 from "../assets/org1.jpg";
import OrgCap from "../components/OrgCap";
import Footer from "../components/Footer";
const PeopleOrg = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 text-white relative h-[701px] overflow-hidden">
        {/* Background Image */}
        <img
          src={org}
          alt=""
          className="absolute mt-20 grayscale-100 top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute text-center brogman  text-black tracking-wider w-full h-full  flex flex-col  px-20 space-y-6 z-10">
          <h1 className="text-7xl md:text-8xl  font-bold tracking-wide w-full bower">
            People &amp;<span className="text-white"> Organizational </span>{" "}
            Performance
          </h1>
          <p className="text-xl md:text-xl text-center text-white">
            Powering Business Growth Through Strategic Clarity and Financial
            Precision
          </p>
        </div>
      </div>
      <div>
        <h1 className="px-20 brogman tracking-wider text-xl text-center py-20">
          At AGIGrowthX, we help organizations unlock the full potential of
          their people by designing agile structures, optimizing talent
          strategies, and embedding performance systems that drive results. We
          work with leadership teams to align workforce priorities with business
          objectives — creating organizations that are more resilient,
          innovative, and execution-ready. practical, data-backed solutions
          across complex operating models.
        </h1>
      </div>
      <div>
        <h1 className="text-lg font-bold text-center uppercase mt-15">
          Our People &amp; Organization Capabilities
        </h1>
        <OrgCap />
      </div>
      <div className="bg-white py-16 h-full px-30 space-y-10 ">
        {/* Bottom Section: Image with Overlay Text */}
        <div className="relative h-[300px] px-10 rounded-lg overflow-hidden group">
          <img
            src={org1}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt="global"
          />
          <div className="relative z-10 text-white flex flex-col justify-center h-full px-6">
            <h1 className="text-5xl bower font-bold text-left">
              Empower Your People. Transform Your Culture. Elevate Performance.
            </h1>
            <p className="text-xl brogman tracking-wider text-left mt-2">
              Partner with AGIGrowthX to build agile, future-ready organizations
              that perform and scale.
            </p>
          </div>
        </div>

        {/* Top Section: Text Left + Paragraph Right */}
        <div className="flex justify-between h-full items-start gap-10 translate-y-10">
          {/* LEFT: Bullet Points */}
          <div className="w-1/2">
            <h2 className="text-4xl font-bold mb-6 bower">
              Why AGIGrowthX for People &amp; Organization Performance
            </h2>
            <ul className="list-disc list-inside text-lg space-y-3 brogman tracking-wide">
              <li>
                Cross-disciplinary teams across HR, strategy, and operations
              </li>
              <li>
                Proven frameworks for org design, workforce planning, and
                culture shaping
              </li>
              <li>
                Focus on aligning people systems directly with business outcomes
              </li>
              <li>
                Scalable GCC delivery model for analytics, development, and HR
                operations
              </li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-[240px]  bg-zinc-800 "></div>

          {/* RIGHT: M&A Description Paragraph */}
          <div className="w-1/2 text-lg brogman tracking-wide">
            <p className="mb-4">
              At AGIGrowthX, we help organizations unlock the full potential of
              their people by designing agile structures, optimizing talent
              strategies, and embedding performance systems that drive results.
              We work with leadership teams to align workforce priorities with
              business objectives — creating organizations that are more
              resilient, innovative, and execution-ready.
            </p>
            <p>
              As a strategic GCC partner, we bring together deep functional
              expertise in organizational design, HR analytics, leadership
              development, and change enablement to help businesses thrive in
              fast-evolving environments.
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

export default PeopleOrg;

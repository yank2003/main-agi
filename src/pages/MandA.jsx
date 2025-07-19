import Navbar from "../components/Navbar";
import merg from "../assets/merg.jpg";
import merg1 from "../assets/merg1.jpg";
import MergeCap from "../components/MergeCap";
import Footer from "../components/Footer";
const MandA = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 relative h-[701px] overflow-hidden">
        {/* Background Image */}
        <img
          src={merg}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute top-20 brogman tracking-wider w-full h-full text-white flex flex-col justify-center items-start px-20 space-y-6 z-10">
          <h1 className="text-7xl md:text-8xl text-left font- tracking-wide w-full bower">
            Mergers &amp; Acquisitions (M&amp;A)
          </h1>
          <p className="text-xl md:text-xl text-left max-w-[700px]">
            Enabling Smart, Fast, and Integrated Deal Execution
          </p>
        </div>
      </div>
      <div className="bg-white py-16 h-full px-30 space-y-10 mt-10">
        {/* Top Section: Text Left + Paragraph Right */}
        <div className="flex justify-between items-start gap-10">
          {/* LEFT: Bullet Points */}
          <div className="w-1/2">
            <h2 className="text-4xl font-bold mb-6 bower">
              Why AGIGrowthX for M&A
            </h2>
            <ul className="list-disc list-inside text-lg space-y-3 brogman tracking-wide">
              <li>
                Deep functional capabilities across strategy, finance, ops, and
                digital
              </li>
              <li>
                GCC delivery model for scalable, real-time support throughout
                the M&A cycle
              </li>
              <li>
                Proven playbooks for both buy-side and sell-side engagements
              </li>
              <li>
                Integrated teams that ensure alignment between strategy and
                execution
              </li>
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-[240px]  bg-zinc-800 "></div>

          {/* RIGHT: M&A Description Paragraph */}
          <div className="w-1/2 text-lg brogman tracking-wide">
            <p className="mb-4">
              M&A activity is a powerful lever for growth — but realizing value
              requires more than just closing the deal. At AGIGrowthX, we
              support clients across the full M&A lifecycle with strategic,
              operational, and digital capabilities that enable successful
              transactions and smooth integrations.
            </p>
            <p>
              As a Global Capability Center (GCC), we act as an extension of
              your internal team — providing the insight, structure, and
              executional rigor needed to accelerate diligence, mitigate risks,
              and unlock post-deal synergies.
            </p>
          </div>
        </div>

        {/* Bottom Section: Image with Overlay Text */}
        <div className="relative h-[300px] px-10 rounded-lg overflow-hidden group">
          <img
            src={merg1}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt="global"
          />
          <div className="relative z-10 text-white flex flex-col justify-center h-full px-6">
            <h1 className="text-5xl bower font-bold text-left">
              Navigate Complexity. Unlock Synergy. Deliver Value.
            </h1>
            <p className="text-xl brogman tracking-wider text-left mt-2">
              From diligence to integration, AGIGrowthX is your M&amp;A
              execution partner — built for scale, speed, and certainty.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="font-bold text-lg text-center uppercase">
          Our End-to-End M&amp;A Services
        </h1>
        <MergeCap />
      </div>
      <div className="px-20 border-t-2 mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default MandA;

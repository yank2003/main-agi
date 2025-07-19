import Navbar from "../components/Navbar";
import strat from "../assets/strat.jpg";
import strat1 from "../assets/strat1.jpg";
import StratCap from "../components/StratCap";
import Footer from "../components/Footer";

const Strategy = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 relative h-[701px] overflow-hidden">
        {/* Background Image */}
        <img
          src={strat}
          alt=""
          className="absolute mt-20 top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute top-20 brogman tracking-wider w-full h-full text-black flex flex-col justify-center items-start px-20 space-y-6 z-10">
          <h1 className="text-7xl md:text-8xl text-left font-bold tracking-wide w-[800px] bower">
            <span className="text-white">Strategy &amp; Corporate </span>{" "}
            Finance
          </h1>
          <p className="text-xl md:text-xl text-left max-w-[700px]">
            Powering Business Growth Through Strategic Clarity and Financial
            Precision
          </p>
        </div>
      </div>
      <div className="bg-zinc-200 py-20 px-20 ">
        <div className="flex justify-between items-stretch space-x-10">
          {/* LEFT SIDE: Text only */}
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-left font-semibold text-2xl bower mb-6">
              At AGIGrowthX, we help organizations shape bold strategies,
              optimize capital allocation, and unlock enterprise value. From
              long-term visioning to near-term financial planning, we provide
              the structured thinking and data-driven insight needed to support
              confident decision-making in fast-changing markets.
            </h1>
            <p className="text-left brogman tracking-wider text-xl">
              As a Global Capability Center (GCC), we bring together strategy
              consultants, corporate finance analysts, and digital modelers —
              enabling high-speed, high-quality support for leadership teams
              across industries.
            </p>
          </div>

          {/* RIGHT SIDE: Image block */}
          <div className="w-1/2 flex flex-col justify-center">
            <div className="relative h-[300px] px-10 rounded-lg overflow-hidden group">
              <img
                src={strat1}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt="global"
              />
              <div className="relative z-10 text-white flex flex-col justify-center h-full px-6">
                <h1 className="text-5xl bower font-bold text-left">
                  Think Forward. Plan Smart. Invest with Confidence.
                </h1>
                <p className="text-xl brogman tracking-wider text-left mt-2">
                  AGIGrowthX enables business leaders to shape resilient
                  strategies and deploy capital with clarity and control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-lg text-center font-bold uppercase">
          Our Strategy &amp; Corporate Finance Capabilities
        </h1>
        <StratCap />
      </div>
      <div className="bg-zinc-200 mt-10 py-15 px-40 text-center">
        <h1 className="bower text-2xl font-bold">
          Why AGIGrowthX for Strategy &amp; Corporate Finance
        </h1>
        <p className="mt-2 brogman  tracking-wider text-xl">
          ● Deep expertise across strategy, finance, and execution disciplines ●
          GCC-led support model for real-time analysis and decision enablement ●
          Robust modeling standards and valuation frameworks ● Strategic
          alignment with transformation, growth, and M&amp;A priorities
        </p>
      </div>
      <div className="px-20 border-t-2 ">
        <Footer />
      </div>
    </div>
  );
};

export default Strategy;

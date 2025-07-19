import build from "../assets/build.mp4";
import vent from "../assets/vent.jpg";
import Navbar from "../components/Navbar";
import ReactPlayer from "react-player";
import { ArrowDownToDot } from "lucide-react";
import WhyAGIGrowthX from "../components/LetsBuild";
import VentureSections from "../components/Venture";
import Footer from "../components/Footer";

const BuildingBussiness = () => {
  return (
    <div>
      <Navbar />
      <div className=" pt-35 relative w-[99vw] h-screen overflow-hidden">
        {/* Background Video */}
        <ReactPlayer
          url={build}
          playing
          loop
          muted
          width="100%"
          height="100%"
          className=" react-player-bg video absolute top-0 left-0 object-cover z-0"
        />

        {/* Overlay text */}
        <div className="absolute mt-40 pl-20 pr-120 w-full h-full text-white z-10">
          <h1 className="text-5xl bower">
            From Concept to Scale — Creating High-Growth Ventures with Speed and
            Precision
          </h1>
          <h1 className="text-lg brogman tracking-wider mt-4">
            As a Global Capability Center (GCC), we integrate strategic insight,
            operational support, and digital execution to help new businesses
            gain market traction and sustainable momentum — whether launching
            from the ground up or spinning out from an existing enterprise.
          </h1>
          {/* Arrow Section */}
          <div
            className="mt-20 cursor-pointer"
            onClick={() => {
              window.scrollBy({ top: 600, left: 0, behavior: "smooth" });
            }}
          >
            <ArrowDownToDot size={60} className="animate-bounce" />
          </div>
        </div>
      </div>
      <div className="bg-zinc-200 py-10">
        <h1 className="brogman text-center tracking-wider text-xl px-40 py-6">
          At AGIGrowthX, business building is not just about launching new ideas
          — it’s about architecting scalable, resilient ventures that are built
          to lead. We collaborate with startups, corporates, and investors to
          transform concepts into commercial realities through structured
          incubation, rapid market testing, and end-to-end execution.
        </h1>
        <div className="flex justify-center ">
          <button className="border-2 px-4 py-1 hover:bg-[#051C2C] hover:text-white cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
      <div className="border-b-2 py-10">
        <WhyAGIGrowthX />
      </div>
      <div className="flex flex-col lg:flex-row max-w-8xl mx-auto px-22 py-12 gap- mt-20 border-b-2">
        {/* Right side VentureSections */}
        <div className="lg:w-1/2">
          <VentureSections />
          {/* <div className="mt-20 w-[500px]">
            <h1 className="bower text-2xl font-bold">
              Let's Build Something
            </h1>
            <form className="flex flex-col gap-4 mt-5">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded w-full"
              />
              <button
                type="submit"
                className="mt-2 bg-[#6e7174] text-white px-6 py-2 rounded hover:bg-[#1e1f1f] transition w-fit"
              >
                Reach Us
              </button>
            </form>
          </div> */}
          <div className="mt-20 bower text-xl px-5 -translate-x-5 italic">
            <h1>
              "Whether launching a new venture or spinning off innovation from
              within, AGIGrowthX partners with you to build businesses that
              outperform."
            </h1>
          </div>
        </div>
        {/* Left side text */}
        <div className="lg:w-1/2">
          <h1 className="text-6xl bower font-bold mb-6">
            Our Business Building Expertise
          </h1>
          <p className="text-gray-700 brogman tracking-wider text-xl leading-relaxed">
            At AGIGrowthX, we help organizations unlock digital value by
            embedding technology, automation, and data into the core of their
            operations. From platform engineering to product design and cloud
            infrastructure, our digital capabilities are built to scale, adapt,
            and deliver measurable results.
          </p>
          <p className="text-gray-700 brogman tracking-wider text-xl leading-relaxed">
            As a full-spectrum Global Capability Center (GCC), we act as an
            extension of your internal teams — delivering digital roadmaps,
            product builds, and enterprise-wide tech transformations with speed,
            security, and strategic alignment.
          </p>
          <div className="relative  h-[300px] px-10 rounded-lg overflow-hidden group mt-20 ">
            <img
              src={vent}
              className="absolute top-0  left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              alt="global"
            />
            <div className="relative  mt-5 text-white z-10 flex flex-col justify-center h-full px-6 ">
              <h1 className="text-5xl bower font-bold text-left">
                Build Bold. Scale Fast. Lead Smart.
              </h1>
              <p className="text-xl brogman tracking-wider text-left mt-2 ">
                Whether launching a new venture or spinning off innovation from
                within, AGIGrowthX partners with you to build businesses that
                outperform.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 ">
        <Footer />
      </div>
    </div>
  );
};

export default BuildingBussiness;

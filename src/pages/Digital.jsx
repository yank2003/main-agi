import Navbar from "../components/Navbar";
import digital1 from "../assets/digital1.mp4";
import digital2 from "../assets/digital2.webp";
import digital3 from "../assets/digital3.jpg";
import ReactPlayer from "react-player";
import { ArrowDownToDot } from "lucide-react";
import DigitalCap from "../components/DigitalCap";
import Footer from "../components/Footer";

const Digital = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 relative h-[702px] overflow-hidden">
        {/* Background Video */}
        <ReactPlayer
          url={digital1}
          playing
          loop
          muted
          width="100%"
          height="100%"
          className="react-player-bg video absolute top-0 object-cover z-0"
        />

        {/* Overlay Text + Arrow */}
        <div className="absolute  w-full h-full flex flex-col justify-center items-center text-white z-10 ">
          <h1 className="text-7xl  bower text-center  leading-tight">
            Accelerating Digital Transformation with Scalable, Future-Ready
            Solutions
          </h1>

          {/* Arrow Below Text */}
          <div
            className="mt-10 cursor-pointer"
            onClick={() => {
              window.scrollBy({ top: 600, left: 0, behavior: "smooth" });
            }}
          >
            <ArrowDownToDot size={60} className="animate-bounce" />
          </div>
        </div>
      </div>
      <div className="py-25  bg-zinc-200 px-10 lg:px-40 ">
        <div className="flex  lg:flex-row items-center gap-20">
          {/* Text Left */}
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl tracking-wider brogman">
              At AGIGrowthX, we help organizations unlock digital value by
              embedding technology, automation, and data into the core of their
              operations. From platform engineering to product design and cloud
              infrastructure, our digital capabilities are built to scale,
              adapt, and deliver measurable results.
            </h1>
            <div className="h-[0.5px] w-full bg-zinc-400 -translate-x-3"></div>
            <h1 className="text-2xl tracking-wider brogman">
              As a full-spectrum Global Capability Center (GCC), we act as an
              extension of your internal teams — delivering digital roadmaps,
              product builds, and enterprise-wide tech transformations with
              speed, security, and strategic alignment.
            </h1>
          </div>

          {/* Image Right */}
          <div className="flex-1">
            <img
              src={digital2} // replace with actual image path
              alt="AGIGrowthX Digital"
              className="w-full h-full object-contain rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <div className="relative  h-[300px] px-10 rounded-lg overflow-hidden group w-[80vw] ">
          <img
            src={digital3}
            className="absolute top-0  left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt="global"
          />
          <div className="relative  mt-5 text-white z-10 flex flex-col justify-center h-full px-6 ">
            <h1 className="text-5xl bower font-bold text-left">
              Modern Tech. Real Results. Built for Scale.
            </h1>
            <p className="text-xl brogman tracking-wider text-left mt-2 ">
              AGIGrowthX helps you lead digital transformation — from roadmap to
              roll-out, and beyond.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-lg font-bold text-center">
          OUR DIGITAL CAPABILITIES
        </h1>
        <DigitalCap />
      </div>
      <div className="bg-zinc-200 mt-10 py-15 px-40 text-center">
        <h1 className="bower text-2xl font-bold">Why AGIGrowthX for Digital</h1>
        <p className="mt-2 brogman  tracking-wider text-xl">
          ● Cross-functional delivery teams across product, cloud, data, and
          design  ● Flexible GCC model supporting 24/7 development and support
          cycles  ● Proven frameworks for fast, secure, and scalable technology
          delivery   ● Deep alignment with strategic business goals, not just
          technical execution
        </p>
      </div>
       <div className="px-20 border-t-2 ">
        <Footer />
      </div>
    </div>
  );
};

export default Digital;

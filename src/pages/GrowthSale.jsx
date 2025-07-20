import Navbar from "../components/Navbar";
import growth from "../assets/growth.jpg";
import market from "../assets/market1.webp";

import GrowthCap from "../components/GrowthCap";
import Footer from "../components/Footer";
const GrowthSale = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 relative h-[700px] overflow-hidden">
        {/* Background Video */}
        <img src={growth} alt="" className=" absolute top-0 object-cover z-0" />

        {/* Overlay Text + Arrow */}
        <div className="absolute top-20 brogman tracking-wider w-full h-full text-black flex flex-col justify-center items-start px-20 space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight w-full max-w-[800px] bower">
            Growth, Marketing & Sales
          </h1>
          <p className="text-base md:text-lg  max-w-[700px]">
            At AGIGrowthX, we partner with organizations to build growth engines
            that are insight-led, digitally enabled, and operationally
            disciplined. Whether refining go-to-market strategies, transforming
            customer experiences, or optimizing sales performance, our focus is
            clear: deliver sustainable, measurable growth.
          </p>
        </div>
      </div>
      <div className="py-10 mt-15 px-20 brogman text-4xl text-center">
        <h1>
          As a Global Capability Center (GCC), we unify marketing, sales,
          analytics, and digital delivery for faster execution and stronger
          results.
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between gap-20 p-6 max-w-[84rem] mt-25 ">
        <div className="flex-1 min-w-0">
          <h2 className="text-6xl bower  font-bold mb-4">
            Why AGIGrowthX for Growth, Marketing &amp; Sales
          </h2>
          <ul className="list-disc brogman tracking-wider text-2xl list-inside text-gray-700 space-y-2">
            <li>
              End-to-end commercial support from strategy through execution
            </li>
            <li>
              Data-driven decision-making embedded into every stage of the
              funnel
            </li>
            <li>
              Integrated teams across brand, digital, sales, and analytics
            </li>
            <li>
              Scalable GCC operations to accelerate campaign delivery and reduce
              cost-to-serve
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-0">
          <img
            src={market}
            alt="Illustration or relevant visual"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>
      </div>
      <div className="mt-30">
        <h1 className="uppercase text-lg font-bold text-center ">Our Capabilities in Growth, Marketing &amp; Sales </h1>
        <GrowthCap />
      </div>
       <div className="px-20 border-t-2 mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default GrowthSale;

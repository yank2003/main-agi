import logis1 from "../assets/logis1.jpg";
import logis2 from "../assets/logis2.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Logistics = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 relative h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={logis1}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute top-40 brogman tracking-wider w-full h-full text-white flex flex-col justify-center items-end px-20 space-y-6 z-10 text-right">
          <h1 className="text-7xl md:text-9xl font-bold tracking-wide w-full bower">
            Logistics
          </h1>
          <p className="text-xl md:text-xl max-w-[700px]">
            Helping Logistics-Driven Businesses Build Smarter, Scale Better, and
            Stay Focused
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center mt-20  gap-10 px-10">
          {/* Text on the left */}
          <div className="w-1/2 flex flex-col gap-8">
            <p className="text-left text-2xl brogman tracking-wider ">
              In today’s complex and fast-moving supply environment, logistics
              companies are under pressure to improve speed, reliability, and
              cost-efficiency—while also navigating labor challenges, shifting
              demand, and increasing digital expectations.
            </p>
            <p className=" text-gray-700 brogman tracking-wider text-2xl">
              We work with logistics providers, last-mile operators, and supply
              chain enablers to improve core operations, build organizational
              agility, and better serve clients in a dynamic market.
            </p>
          </div>
          <div className="w-1/2 relative">
            <img
              src={logis2}
              alt="Healthcare"
              className=" w-full h-[55vh] object-cover"
            />
          </div>
        </div>
        <h1 className="text-center text-3xl brogman tracking-wider mt-20 italic">
          "Optimizing Movement, Delivering Efficiency"
        </h1>
      </div>
      <div className="px-20 border-t-2 mt-15 ">
        <Footer />
      </div>
    </div>
  );
};

export default Logistics;

import retail from "../assets/retail.jpg";
import retail1 from "../assets/retail1.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Retail = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 relative h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={retail}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute top-40 brogman tracking-wider w-full h-full text-white flex flex-col justify-center items-start px-20 space-y-6 z-10">
          <h1 className="text-7xl md:text-9xl text-left font-bold tracking-wide w-full bower">
            Retail
          </h1>
          <p className="text-xl md:text-xl text-left max-w-[700px]">
            Helping Retailers Adapt, Compete, and Grow in a Changing Landscape
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center mt-25  gap-10 px-10">
          {/* Image on the left */}
          <div className="w-1/2 relative">
            <img
              src={retail1}
              alt="Retail"
              className=" w-full h-[55vh] object-cover"
            />
          </div>

          {/* Text on the right */}
          <div className="w-1/2 flex flex-col gap-8">
            <h1 className="text-left text-2xl brogman tracking-wider ">
              The retail world is evolving fast, from shifting consumer
              behaviors to rising cost pressures and increasing digital
              expectations. We work with retailers across categories to help
              them adapt their strategies, improve execution, and build
              meaningful connections with customers
            </h1>
            <p className=" text-gray-700 brogman tracking-wider text-2xl">
              We bring practical solutions to help retail businesses strengthen
              operations, refine their customer experience, and pursue smart
              growth opportunities that reflect both today’s realities and
              tomorrow’s demands.
            </p>
          </div>
        </div>
        <h1 className="text-center text-3xl brogman tracking-wider mt-25 italic">
          "Enhancing Experience, Elevating Retail"
        </h1>
      </div>
      <div className="px-20 border-t-2 mt-10 ">
        <Footer />
      </div>
    </div>
  );
};

export default Retail;

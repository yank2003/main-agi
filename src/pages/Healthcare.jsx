import health1 from "../assets/health1.jpg";
import health2 from "../assets/health2.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Healthcare = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 relative h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={health1}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute top-30 brogman tracking-wider w-full h-full text-white flex flex-col justify-center items-end text-right px-20 space-y-6 z-10">
          <h1 className="text-7xl md:text-9xl font-bold tracking-wide w-full bower">
            Healthcare
          </h1>
          <p className="text-xl md:text-xl max-w-[700px]">
            Partnering with Healthcare Providers, Payers, and Public Systems to
            Strengthen Delivery and Impact
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center mt-25  gap-10 px-10">
          {/* Image on the left */}
          <div className="w-1/2 relative">
            <img
              src={health2}
              alt="Healthcare"
              className=" w-full h-full object-cover"
            />
          </div>

          {/* Text on the right */}
          <div className="w-1/2 flex flex-col gap-8">
            <h1 className="text-left text-2xl brogman tracking-wider ">
              Healthcare systems today face a powerful mix of opportunity and
              strain. While medical innovation and public health investments
              continue to improve outcomes, rising costs, uneven access, and
              operational inefficiencies remain widespread challenges
            </h1>
            <p className=" text-gray-700 brogman tracking-wider text-2xl">
              We support healthcare organizations, public and private alike, by
              helping them improve care delivery, enhance patient and staff
              experience, and operate more efficiently in an increasingly
              resource-constrained environment.
            </p>
            <p className=" text-gray-700 brogman tracking-wider text-2xl">
              Whether working with hospitals, clinics, health insurers, or
              donor-funded programs, we bring practical, context-aware support
              that blends insight, collaboration, and execution.
            </p>
          </div>
        </div>
        <h1 className="text-center text-3xl brogman tracking-wider mt-25 italic">
          "Connecting Care, Driving Outcomes"
        </h1>
      </div>
      <div className="px-20 border-t-2 mt-15 ">
        <Footer />
      </div>
    </div>
  );
};

export default Healthcare;

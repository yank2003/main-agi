import techno1 from "../assets/techno.jpg";
import techno2 from "../assets/techno2.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Technology = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 relative h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={techno1}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute top-10 brogman tracking-wider w-full h-full text-black flex flex-col justify-center items-start px-20 space-y-6 z-10">
          <h1 className="text-7xl md:text-9xl text-left font-bold tracking-wide w-full bower">
            Technology
          </h1>
          <p className="text-xl md:text-xl text-left max-w-[700px]">
            Helping Technology-Driven Businesses Build Smarter, Scale Better,
            and Stay Focused
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex items-center mt-20  gap-10 px-10">
          {/* Text on the left */}
          <div className="w-1/2 flex flex-col gap-8">
            <p className="text-left text-2xl brogman tracking-wider ">
              The technology sector is constantly evolving, reshaping how people
              live, work, and connect. As digital-first models expand and
              customer expectations rise, technology firms are under pressure to
              deliver more, faster, and with greater clarity.
            </p>
            <p className=" text-gray-700 brogman tracking-wider text-2xl">
              We support ambitious technology teams in building stronger
              operations, clearer strategies, and practical structures for
              growth. Our strength lies in working closely with clients to
              identify what matters most, prioritize action, and move with focus
              and agility.
            </p>
          </div>
          <div className="w-1/2 relative">
            <img
              src={techno2}
              alt="Healthcare"
              className=" w-full h-[55vh] object-cover"
            />
          </div>
        </div>
        <h1 className="text-center text-3xl brogman tracking-wider mt-20 italic">
          "Empowering Innovation, Accelerating Impact"
        </h1>
      </div>
      <div className="px-20 border-t-2 mt-15 ">
        <Footer />
      </div>
    </div>
  );
};

export default Technology;

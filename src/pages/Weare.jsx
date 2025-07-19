import CardSwiperTailwind from "../components/Leadership";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import passion from "../assets/passion.jpg";
import mission from "../assets/mission.jpg";
import { MoveRight } from "lucide-react";

const Weare = () => {
  return (
    <div className="">
      <Navbar />
      <div className="pt-35 border-b  pl-20 h-screen flex items-center overflow-hidden ">
        <div className="">
          <h1 className="text-7xl font-bold bower">OUR LEADERSHIP </h1>
          <h1 className="text-2xl mt-2 tracking-wider brogman">
            "Guiding vision. Inspiring excellence."
          </h1>
        </div>
        <CardSwiperTailwind />
      </div>
      <div className="mt-20">
        <h1 className=" font-bold text-7xl  bower text-center">OUR VALUES</h1>
        <div className="mt-8 flex justify-center">
          <div
            className="flex  items-center w-6xl justify-between bg-white rounded-lg 
                          shadow-md px-10 py-2
                          hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            {/* Left: Text */}
            <div className="w-1/2 pr-6">
              <h1 className="text-7xl font-bold bower mb-6">
                Purpose-Led Action
              </h1>
              <h2 className="text-gray-600 tracking-wider brogman text-2xl">
                We pursue meaningful work that generates real-world impact —
                from job creation to system transformation.
              </h2>
            </div>

            {/* Right: Image */}
            <div className="w-1/2 py-10">
              <img
                src={passion}
                alt="Work"
                className="w-full h-100 object-cover rounded"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between gap-8 mt-25 pr-25 pl-42">
            {[
              {
                title: "Innovation as a Discipline",
                description:
                  "We champion continuous innovation — not as a trend, but as a core business principle embedded in all we do.",
              },
              {
                title: "Inclusive Collaboration",
                description:
                  "We foster a meritocratic, non-hierarchical culture where every voice is heard, and every idea is welcome.",
              },
              {
                title: "Client-Centric Impact",
                description:
                  "We bring the full strength of our global network, knowledge, and experience to every engagement — with a sharp focus on results that matter.",
              },
              {
                title: "Stewardship & Growth",
                description:
                  "We build organizations and leaders for the long term — developing capabilities, building trust, and leaving a legacy of progress.",
              },
            ].map((section, index) => (
              <div key={index} className="flex-1 max-w-sm">
                <div className="pr-6">
                  <h1 className="text-4xl font-bold bower mb-2">
                    {section.title}
                  </h1>
                  <h2 className="text-gray-600 brogman tracking-wider text-xl">
                    {section.description}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-40 bg-[#46494b] text-white text-center py-10 space-y-5">
        <h1 className="bower text-3xl">Our Purpose</h1>
        <h1 className="brogman tracking-wider text-xl">
          To empower high-impact ventures and institutions with the
          capabilities, capital, and clarity needed to solve the worlds most
          pressing challenges.
        </h1>
        <h1 className="flex justify-center items-center gap-2">
          Work with us
          <MoveRight className="size-[16px] translate-y-0.25" />
        </h1>
      </div>
      <div className="bg-white mt-25 pb-10 text-black  px-6 py-10 md:px-12 lg:px-20 ">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={mission}
              alt="Mission Visual"
              className="w-full h-100 rounded-md shadow-sm object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-6xl font-bold mb-6 bower pb-4">Our Mission</h2>
            <p className="text-lg brogman tracking-wider text-gray-700 leading-relaxed">
              To co-create sustainable value by investing in scalable solutions
              that uplift lives and markets, incubating bold ideas that redefine
              industries, building trusted partnerships rooted in empathy and
              excellence, and creating a global ecosystem where talent thrives,
              innovation leads, and outcomes truly matter.
            </p>
          </div>
        </div>
      </div>
      <div className="px-12 border-t-2 mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Weare;

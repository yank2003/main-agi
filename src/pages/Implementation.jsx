import Navbar from "../components/Navbar";
import implement from "../assets/implement.jpg";
import implement1 from "../assets/implement1.jpg";
import ImplementationCap from "../components/ImplementGrowth";
import Footer from "../components/Footer";
const Implementation = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 relative h-[700px] overflow-hidden">
        {/* Background Video */}
        <img
          src={implement}
          alt=""
          className=" absolute top-0 object-cover z-0"
        />

        {/* Overlay Text + Arrow */}
        <div className="absolute top-20 brogman tracking-wider w-full h-full text-white flex flex-col justify-center items-end px-20 space-y-6">
          <h1 className="text-7xl text-right md:text-8xl font-bold tracking-wide w-full bower">
            Implementation
          </h1>
          <p className="text-xl text-right md:text-xl  max-w-[700px]">
            Driving Execution with Precision, Agility, and Measurable Outcomes
          </p>
        </div>
      </div>
      <div className="bg-zinc-200 py-20 px-20 ">
        <div className="flex justify-between items-stretch space-x-10">
          {/* LEFT SIDE: Text only */}
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-left font-semibold text-2xl bower mb-6">
              At AGIGrowthX, implementation isn’t an afterthought — it’s where
              strategy meets execution. We partner with clients to translate
              vision into action through disciplined project delivery, rigorous
              performance tracking, and change enablement at scale.
            </h1>
            <p className="text-left brogman tracking-wider text-xl">
              As a Global Capability Center (GCC), we provide full-spectrum
              execution support — from transformation governance to ground-level
              program management — ensuring that strategic plans are delivered
              on time, within budget, and with sustained impact.
            </p>
          </div>

          {/* RIGHT SIDE: Image block */}
          <div className="w-1/2 flex flex-col justify-center">
            <div className="relative h-[300px] px-10 rounded-lg overflow-hidden group">
              <img
                src={implement1}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                alt="global"
              />
              <div className="relative z-10 text-white flex flex-col justify-center h-full px-6">
                <h1 className="text-5xl bower font-bold text-left">
                  Execute with Confidence. Deliver with Impact. Sustain with
                  Structure.
                </h1>
                <p className="text-xl brogman tracking-wider text-left mt-2">
                  Partner with AGIGrowthX to turn complex initiatives into
                  tangible outcomes — efficiently and at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="font-bold text-lg text-center uppercase ">
          Our Implementation Services
        </h1>
        <ImplementationCap />
      </div>
      <div className="bg-zinc-200 mt-10 py-15 px-40 text-center">
        <h1 className="bower text-2xl font-bold">
          Why AGIGrowthX for Implementation
        </h1>
        <p className="mt-2 brogman  tracking-wider text-xl">
          ● Proven frameworks that bring clarity, control, and confidence to
          execution ● Multidisciplinary teams with expertise in PMO, agile,
          change, and operations ● GCC delivery model for scalable,
          round-the-clock program support ● Alignment with strategic priorities,
          governance models, and cultural context
        </p>
      </div>
      <div className="px-20 border-t-2 ">
        <Footer />
      </div>
    </div>
  );
};

export default Implementation;

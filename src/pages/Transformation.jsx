import transform from "../assets/transform.jpg";
import transform1 from "../assets/transform1.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TransCap from "../components/TransformCap";

const Transformation = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 text-white relative h-[701px] overflow-hidden">
        {/* Background Image */}
        <img
          src={transform}
          alt=""
          className="absolute mt-20  top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Text */}
        <div className="absolute top-20 brogman tracking-wider w-full h-full  flex flex-col text-left    justify-center items-start px-20 space-y-6 z-10">
          <h1 className="text-7xl md:text-8xl  font-bold tracking-wide w-[800px] bower">
            Transformation
          </h1>
          <p className="text-xl md:text-xl  max-w-[700px]">
            End-to-End Change That Delivers Results — Not Just Plans
          </p>
        </div>
      </div>
      <div className="py-10 mt-15 px-20 brogman text-4xl text-center">
        <h1>
          As a Global Capability Center (GCC), we bring together program
          governance, change enablement, data-driven insights, and delivery
          excellence — ensuring that transformation is both bold and
          sustainable.
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between gap-20 p-6 max-w-[84rem] mt-25 ">
          <div className="flex-1 min-w-0">
            <h2 className="text-6xl bower  font-bold mb-4">
              Why AGIGrowthX for Transformation
            </h2>
            <ul className="list-disc brogman tracking-wider text-2xl list-inside text-gray-700 space-y-2">
              <li>
                Multidisciplinary transformation teams with program, ops, and
                change expertise
              </li>
              <li>Structured methodologies and transformation playbooks</li>
              <li>GCC-based execution support for speed and scale</li>
              <li>Embedded governance models for accountability and impact</li>
            </ul>
          </div>
          <div className="flex-1 min-w-0">
            <img
              src={transform1}
              alt="Illustration or relevant visual"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="mt-30">
          <h1 className="uppercase text-lg font-bold text-center ">
            Our Transformation Capabilities
          </h1>
          <TransCap />
        </div>
      </div>
      <div className="px-20 border-t-2 mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Transformation;

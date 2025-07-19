import { MoveRight } from "lucide-react";
import talk from "../assets/talk.jpg";
import group from "../assets/group.jpg";
import TileCarousel from "./Tiles.jsx";
import Boxes from "./Boxes.jsx";
import career from "../assets/career.jpg";
import work from "../assets/work.jpg";
import ImpactSection from "./Impact.jsx";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="">
      <div className="py-20 px-60 brogman text-[20px] text-justify tracking-wider bg-zinc-200">
        From scaling high-impact healthcare systems in Africa to enabling
        innovation-led manufacturing in Southeast Asia, we collaborate with bold
        leaders to solve complex challenges, build institutional strength, and
        deliver measurable, inclusive growth. Our approach is powered by deep
        domain expertise, cutting-edge data intelligence, and a commitment to
        purposeful transformation. Every engagement we undertake is anchored in
        sustainable value creation — for businesses, for people, and for the
        world.
      </div>
      <ImpactSection />
      <div className="mt-40 bg-[#46494b] text-white text-center py-20 space-y-5">
        <h1 className="bower text-3xl">
          Building Scalable Businesses. Driving Transformational Growth.
        </h1>
        <h1 className="brogman tracking-wider whitespace-pre-line  text-xl">
          Guiding organizations through large-scale change — from digital
          transformation to operating model redesign — with structured roadmaps
          and measurable outcomes.
        </h1>
        <h1 className="flex justify-center items-center gap-2">
          Learn More
          <MoveRight className="size-[16px] translate-y-0.25" />
        </h1>
      </div>
      <div className="mt-30 w-full flex flex-col items-center">
        {/* Section Title */}
        <h1 className="text-center text-lg font-extrabold  mb-10">
          OUR MODEL OF ENGAGEMENT
        </h1>

        {/* Just the zoom wrapper */}
        <div className="transition-transform duration-300 ease-in-out ">
          {/* Your original content untouched */}
          <div
            className="w-7xl  overflow-hidden flex justify-between items-center
                 bg-white py-6 px-15 rounded-lg
                 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] "
          >
            {/* Left: Image */}
            <img
              src={talk}
              alt="Engagement Model"
              className="w-[500px] h-[300px] object-cover rounded-md"
            />

            {/* Right: Text */}
            <div className="w-1/2 text-justify">
              <h1 className="text-4xl font-bold mb-4">
                Enabling Execution, Capability, and Strategic Growth at Scale
              </h1>
              <p className="leading-relaxed brogman tracking-wide text-lg">
                At AGIGrowthX, our model of engagement is grounded in our role
                as a high-performance Global Capability Center (GCC). We do not
                fund or incubate businesses — instead, we act as a strategic
                execution partner, delivering operational excellence, digital
                capability, and transformation support tailored to complex
                business environments.
              </p>

              <h1 className="flex text-[15px] mt-5 hover:underline items-center gap-2 cursor-pointer">
                Learn More
                <MoveRight className="size-[15px] text-blue-700 translate-y-0.25" />
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-start mt-20 px-30  ">
        {/* Box 1 */}
        <div className="bg-white text-j tracking-wider px-2 py-8 w-[320px] h-[420px] ">
          <h1 className="text-2xl font-bold mb-3 text-gray-800">
            Capability Development & Workforce
          </h1>
          <p className="text-gray-700 mb-3 text-lg">
            We deploy multidisciplinary talent and technology expertise across
            business functions to strengthen operations, systems, and
            decision-making frameworks.
          </p>
        </div>

        <div className="w-[2px] h-[320px] bg-gray-400"></div>

        {/* Box 2 */}
        <div className="bg-white text-start tracking-wider px-2 py-8 w-[320px] h-[420px] ">
          <h1 className="text-2xl font-bold mb-3 text-gray-800">
            Strategic Transformation Support
          </h1>
          <p className="text-gray-700 mb-3 text-lg">
            We guide organizations through critical transitions — such as market
            expansion, digital acceleration, or structural reorganization —
            using structured methodologies and execution frameworks.
          </p>
        </div>

        <div className="w-[2px] h-[320px] bg-gray-400"></div>

        {/* Box 3 */}
        <div className="bg-white  tracking-wider px-2 py-8 w-[320px] h-[420px] ">
          <h1 className="text-2xl font-bold mb-3 text-gray-800">
            Operational Partnership &amp; Execution
          </h1>
          <p className="text-gray-700 mb-3 text-lg">
            We serve as an extended execution arm for our clients, providing
            continuous support for high-impact initiatives that require scale,
            agility, and cross-functional integration.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center font-extrabold text-lg mt-5">
          OUR FOCUS AREAS
        </h1>

        {/* Remove or reduce the extra margin-top */}
        <div className="mt-6">
          <TileCarousel />
        </div>
      </div>

      <div className="mt-20 bg-[#46494b] text-white text-center py-10 space-y-5">
        <h1 className="bower text-3xl">Your Strategic Execution Partner.</h1>
        <h1 className="brogman  text-xl">
          AGIGrowthX is your transformation ally, helping you scale and adapt
          faster through our GCC-led delivery model.
        </h1>
        <h1 className="flex justify-center items-center gap-2">
          Get Started
          <MoveRight className="size-[16px] translate-y-0.25" />
        </h1>
      </div>
      <div className="bg-zinc-100 mt-20 py-10 ">
        <h1 className="font-extrabold text-center text-2xl pt-10">
          OUR PEOPLE
        </h1>

        <img src={group} alt="people" className="px-20 mt-10  " />

        <Boxes />

        <div className="flex justify-center mt-6">
          <Link
            to={"/who-we-are"}
            className="border-2 px-4 py-1 hover:bg-[#051C2C] hover:text-white cursor-pointer"
          >
            Who we are
          </Link>
        </div>
      </div>
      <div className="relative mt-25">
        <h1 className="text-center text-lg font-extrabold mb-6">
          CAREERS AT AGIGrowthX
        </h1>

        {/* Image with left shift */}
        <img
          src={career}
          className="w-full object-cover pr-32 pl-10  mt-15 pb-10 "
        />

        {/* White box over image */}
        <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-white px-10 py-12 rounded-lg shadow-lg w-[800px] h-[500px] z-10">
          <h2 className="text-5xl font-bold bower mb-2">
            Where Purpose Meets Performance
          </h2>
          <p className="text-xl brogman text-gray-600 mt-10">
            At AGIGrowthX, we don’t just offer jobs — we build careers with
            impact. As a new-age Global Capability Center (GCC) driving
            innovation, investment, and incubation across Asia, Africa, and the
            Middle East, we bring together talent, technology, and
            transformation to solve meaningful problems at scale.
          </p>
          <p className="text-xl brogman text-gray-600 mt-10">
            Whether you’re a strategist, operator, analyst, or builder — if you
            seek purpose, growth, and global exposure, you’ll thrive here.
          </p>
          <a
            href="https://africarehrms.darwinbox.in/ms/candidate/a6430fa525ca72/careers"
            target="_blank"
            className="flex items-center gap-2 mt-10 group"
            rel="noopener noreferrer"
          >
            <span className="hover:border-b-2 border-black">Get Started</span>
            <MoveRight className="size-[16px] text-[#051C2C] transition-transform duration-200 group-hover:-rotate-35" />
          </a>
        </div>
      </div>
      <div className="mt-25 ">
        <h1 className="text-2xl text-center font-extrabold">
          WHY <span className="text-zinc-700">AGIGrowthX</span>
        </h1>
        <div className="mt-20 flex justify-center">
          <div
            className="flex  items-center w-6xl justify-between bg-white rounded-lg 
                  shadow-md px-10 py-2
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            {/* Left: Text */}
            <div className="w-1/2 pr-6">
              <h1 className="text-6xl font-bold bower mb-2">
                Work That Matters
              </h1>
              <h2 className="text-gray-600 brogman text-xl">
                Shape industries, transform communities, and create sustainable
                growth stories across continents.
              </h2>
            </div>

            {/* Right: Image */}
            <div className="w-1/2 py-10">
              <img
                src={work}
                alt="Work"
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-25 pr-25 pl-42">
          {[
            {
              title: "Global Exposure",
              description:
                "Collaborate with teams across Kenya, India, UAE, and Southeast Asia. Solve cross-border challenges and unlock new markets.",
            },
            {
              title: "Accelerated Learning",
              description:
                "Access deep domain expertise, structured mentorship, and ongoing leadership development programs.",
            },
            {
              title: "Impact at Scale",
              description:
                "Be part of a team that’s already served 15M+ patients, empowered 4,000+ employees, and transformed entire sectors through strategic investments.",
            },
          ].map((section, index) => (
            <div key={index} className="flex-1 max-w-sm">
              <div className="pr-6">
                <h1 className="text-4xl font-bold bower mb-2">
                  {section.title}
                </h1>
                <h2 className="text-gray-600 brogman text-xl">
                  {section.description}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-40 border-b-3 border-black bg-[#46494b] text-white text-center py-10 space-y-5">
        <h1 className="bower text-3xl">A Platform for Global Collaboration</h1>
        <h1 className="brogman  text-xl">
          Our work is a reflection of our core values: Transformation,
          Innovation, and Care.
        </h1>
      </div>
    </div>
  );
};

export default Hero;

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import commit from "../assets/commit.jpg";
import client from "../assets/client.webp";
import integ from "../assets/integ.webp";
import prog from "../assets/prog.jpg";

const OurCommit = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-35 px-10 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl bower font-bold text-zinc-800">
              OUR COMMITMENTS
            </h1>
            <h2 className="brogman tracking-wider text-xl text-zinc-600 leading-relaxed">
              Our future is built on continuous innovation, but our day-to-day
              operations wouldn’t be possible without our team members’
              commitment to conducting business with uncompromising integrity
              and professionalism.
            </h2>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={commit}
              alt="commitment"
              className="w-full h-auto max-w-xl mx-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10 px-6 bg-zinc-300 mt-20 lg:px-30 py-16">
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={client}
            alt="client"
            className="w-full h-auto max-w-xl mx-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-zinc-800 bower">
            Client-First Mindset
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed brogman tracking-wider">
            We are relentlessly committed to delivering measurable impact and
            tailored solutions that align with our clients’ goals. Our success
            is defined by the success and satisfaction of those we serve.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10  px-6 lg:px-30 py-16">
        {/* Text */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-zinc-800 bower">
            Uncompromising Integrity
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed brogman tracking-wider">
            We uphold the highest ethical standards in every engagement,
            ensuring trust, transparency, and accountability. Integrity guides
            not only what we do — but how we think, lead, and collaborate.
          </p>
        </div>
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={integ}
            alt="integ"
            className="w-full h-auto max-w-xl mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10 px-6 bg-zinc-300 mt-20 lg:px-30 py-16">
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src={prog}
            alt="prog"
            className="w-full h-auto max-w-xl mx-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-zinc-800 bower">
            People & Progress
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed brogman tracking-wider">
            We invest in diverse talent and continuous learning to drive
            innovation, growth, and long-term value for our clients and
            communities. Empowering people is at the heart of building a better,
            smarter future.
          </p>
        </div>
      </div>

      <div className="px-10 border-t-2 ">
        <Footer />
      </div>
    </div>
  );
};

export default OurCommit;

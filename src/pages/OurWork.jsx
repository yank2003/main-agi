import ReactPlayer from "react-player";
import Navbar from "../components/Navbar";
// import abs from "../assets/abs.mp4";
import ServiceGrid from "../components/Capabilities";
import scale from "../assets/scale.jpg";
import Footer from "../components/Footer";
import groupbg from "../assets/groupbg.jpg"; // adjust path as needed

const OurWork = () => {
  return (
    <div>
      <Navbar />
      <div className="flex border-b-2   h-screen overflow-hidden">
        {/* Left: Video */}
        <div className=" overflow-hidden relative">
          {/* Background Video with ReactPlayer */}
          {/* <ReactPlayer
            url={abs}
            playing
            loop
            muted
            width="50vw"
            height="80vh"
            className="react-player-bg grayscale-100 "
          /> */}
          <img
            src={groupbg}
            alt="Work Background"
            className="w-[50vw] h-[100vh] object-cover "
          />
        </div>

        {/* Right: Text */}
        <div className="w-1/2 h-full px-10  pt-30 flex flex-col justify-center bg-white">
          <h1 className="text-6xl bower font-bold mb-6 leading-tight">
            Enabling Global Transformation Through Scalable, Integrated
            Expertise
          </h1>
          <p className="text-xl brogman tracking-wider text-gray-700 max-w-xl">
            At AGIGrowthX, we serve as a strategic extension of our clients &
            teams — helping them navigate change, unlock growth, and sustain
            long-term value. As a next-generation Global Capability Center
            (GCC), we offer specialized, end-to-end capabilities that accelerate
            execution across industries, markets, and business models.
          </p>
        </div>
      </div>
      <div className="overflow-hidden mt-10">
        <h1 className="text-lg font-bold text-center mt-15">
          OUR CAPABILITIES
        </h1>
        <ServiceGrid />
      </div>
      <div className="relative translate-x-26 h-[300px] px-10 rounded-lg overflow-hidden group mt-20 w-[85vw]">
        <img
          src={scale}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          alt="global"
        />
        <div className="relative mt-8 text-white z-10 flex flex-col justify-center h-full px-6 ">
          <h1 className="text-5xl bower font-bold text-left">
            Built for Impact. Designed for Scale. Powered by People.
          </h1>
          <p className="text-2xl brogman tracking-wider text-left mt-10">
            AGIGrowthX is your global partner for high-impact execution, digital
            enablement, and transformation excellence.
          </p>
        </div>
      </div>
      <div className="overflow-hidden mt-22 ">
        <h1 className="text-lg font-bold text-center ">INDUSTRIES</h1>
        <div className="translate-x-10">
          <ServiceGrid />
        </div>
      </div>
      <div className="border-t-2 mt-10 px-12">
        <Footer />
      </div>
    </div>
  );
};

export default OurWork;

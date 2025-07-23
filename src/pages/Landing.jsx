import { useRef } from "react";
import Navbar from "../components/Navbar";
import ReactPlayer from "react-player";
import FadeContent from "../animations/FadeContent.jsx";
import vid from "../assets/vid.webm";
import bgImage from "../assets/bg.webp";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";

const Landing = () => {
  const imageRef = useRef(null); // ref for background image

  return (
    <div>
      <div className="w-full relative h-screen overflow-hidden">
        <Navbar />

        {/* Video Background */}
        <div className="h-screen overflow-hidden relative">
          <ReactPlayer
            url={vid}
            playing
            loop
            muted
            width="100%"
            height="100%"
            className="!absolute top-0 left-0 w-full h-full z-0 object-cover"
          />
        </div>

        {/* Content Fade In - Now Visible on Top of Video */}
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="absolute -top-55 tracking-wider left-0 w-full h-full z-20 flex items-center px-20">
            <div className="space-y-8 text-white">
              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={0}
              >
                <h1 className="brogman text-2xl tracking-wider font-bold">
                  Welcome to
                </h1>
              </FadeContent>

              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={300}
              >
                <h1 className="text-8xl font-semibold bower drop-shadow-md">
                  AGIGrowth <span className="">X</span>
                </h1>
              </FadeContent>

              <FadeContent
                blur={true}
                duration={1000}
                easing="ease-out"
                initialOpacity={0}
                delay={500}
              >
                <h1 className="text-2xl text-justify font-bold brogman mt-4 max-w-xl tracking-wide">
                  For over a decade, we have been the trusted partner to
                  visionary entrepreneurs, growth-stage companies, and
                  forward-thinking governments across Asia, Africa, and the
                  Middle East.
                </h1>
              </FadeContent>
            </div>
          </div>
        </FadeContent>
      </div>

      <Hero />
      <div className="px-20">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;

import { useRef } from "react";
import Navbar from "../components/Navbar";
import ReactPlayer from "react-player";
import FadeContent from "../animations/FadeContent.jsx";
import bgImage from "../assets/bg.webp";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";

const Landing = () => {
  const imageRef = useRef(null); // ref for background image

  // useEffect(() => {
  //   // GSAP zoom in and out loop
  //   gsap.to(imageRef.current, {
  //     scale: 2,
  //     duration: 12,
  //     ease: "sine.inOut",
  //     repeat: -1,
  //     yoyo: true,
  //   });
  // }, []);

  return (
    <div>
      <div className="w-full relative h-screen overflow-hidden">
        <Navbar />

        {/* Background Image with GSAP Zoom Effect */}

        <img
          ref={imageRef}
          src={bgImage}
          className="image-bg absolute top-0 left-0 w-full h-screen object-cover z-0 "
          alt="Background"
        />
        {/* <div className="h-screen overflow-hidden relative">
          Background Video with ReactPlayer
          <ReactPlayer
            url={vid}
            playing
            loop
            muted
            width="100vw"
            height="100vh"
            className="react-player-bg "
          />
        </div> */}

        {/* Content Fade In */}
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div className="absolute  mt-[18rem] space-y-8 text-white z-10 px-20">
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
              <h1 className="text-8xl font-semibold bower drop-shadow-md ">
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
                For over a decade, we have been the trusted partner to visionary
                entrepreneurs, growth-stage companies, and forward-thinking
                governments across Asia, Africa, and the Middle East.
              </h1>
            </FadeContent>
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

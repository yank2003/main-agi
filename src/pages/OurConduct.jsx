import Navbar from "../components/Navbar.jsx";
import guide from "../assets/guide.jpg";
import code from "../assets/code.webp";
import Footer from "../components/Footer";

const OurConduct = () => {
  const principles = [
    {
      title: "Integrity in All Interactions",
      text: "We uphold honesty, fairness, and transparency in every relationship — internal and external. There is no room for shortcuts.",
    },
    {
      title: "Client-First Responsibility",
      text: "We act in the best interest of our clients, providing unbiased advice, safeguarding confidentiality, and delivering solutions that create lasting impact.",
    },
    {
      title: "Respect for People and Cultures",
      text: "We value diversity and treat everyone with dignity — embracing differences and promoting equity in our workplace and engagements.",
    },
    {
      title: "Compliance with Laws and Regulations",
      text: "We strictly adhere to all applicable local, regional, and international laws in every market where we operate.",
    },
    {
      title: "Zero Tolerance for Misconduct",
      text: "Discrimination, harassment, corruption, or unethical behavior of any kind has no place at AGIGrowthX. We maintain clear reporting structures and disciplinary processes.",
    },
    {
      title: "Responsible Use of Data and Resources",
      text: "We protect intellectual property, maintain data privacy, and use resources responsibly — prioritizing sustainability and digital trust.",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="pt-35  px-30 space-y-16">
        {/* Right Content Block - Now Comes First & Spans Full Width */}
        <div className="w-full tracking-wider flex flex-col justify-center">
          <h1 className="bower text-center text-6xl">
            Six Core Principles of Our Code
          </h1>

          <ol className="grid brogman tracking-wider grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {principles.map((item, index) => (
              <li
                key={index}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full"
              >
                <div className="text-center">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Left Content Block - Now Comes Below */}
        <div className="relative translate-x-20 h-[300px] px-10 rounded-lg overflow-hidden group w-[75vw]">
          <img
            src={guide}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt="global"
          />
          <div className="relative text-white z-10 flex flex-col justify-center h-full px-6 ">
            <h1 className="text-5xl bower font-bold text-left">
              Guiding Every Decision. Upholding Every Value.
            </h1>
            <p className="text-2xl brogman tracking-wider text-left mt-4">
              At AGIGrowthX, integrity is not a policy — it’s our foundation.
              Our Code of Conduct reflects the principles that guide how we
              work, how we lead, and how we create value for our clients,
              partners, and communities.
            </p>
            
          </div>
        </div>
      </div>
      <div className="mt-40 px-15 bg-[#46494b] text-white text-center py-10 space-y-5">
        <h1 className="bower text-3xl">Our Reflection Culture</h1>
        <h1 className="brogman tracking-wider text-xl">
          Each year, the AGIGrowthX team across continents pauses to reflect on
          our values, our purpose, and the people we serve — not as a ritual,
          but as a recommitment to doing business with conscience, vision, and
          shared success.
        </h1>
      </div>
      <div className="mt-30 px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-xl  p-8 ">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col justify-center">
            <h1 className="text-6xl font-bold bower">Living the Code</h1>
            <ul className="list-disc brogman  tracking-wider list-inside text-2xl text-gray-700 space-y-2">
              <li>Onboarding and training programs</li>
              <li>Partnership agreements and venture protocols</li>
              <li>Annual ethics and values reflections</li>
              <li>Leadership evaluations and team feedback loops</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex items-center justify-center">
            <img
              src={code} // Replace 'yourImage' with your image import or URL
              alt="Ethical Culture"
              className="rounded-lg object-cover w-full h-full max-h-[350px]"
            />
          </div>
        </div>

        {/* Centered Quote */}
        <div className="mt-10 text-center px-4">
          <p className="italic text-xl text-gray-800">
            We believe that ethical excellence is not just about avoiding wrong
            — it’s about always striving to do what’s right.
          </p>
        </div>
      </div>
      <div className="px-12 border-t-2 mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default OurConduct;

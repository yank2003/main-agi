import Navbar from "../components/Navbar.jsx";
import govern from "../assets/governance.jpg";
import advisor1 from "../assets/advisor1.jpg";
import Footer from "../components/Footer";

const OurGovernance = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-10 h-screen items-center pt-25 bg-zinc-300 ">
        <img src={govern} alt="governance" className=" h-full w-[52vw]" />
        <div className="px-15">
          <h1 className="bower text-7xl">Our Governance</h1>
          {/* <h2 className="brogman mt-2 text-4xl">
            Built on Accountability. Sustained by Integrity. Driven by Purpose.
          </h2> */}
          <h3 className="mt-4 brogman tracking-wider  text-2xl">
            We operate under a strong framework that drives responsible
            decisions, protects stakeholders, and builds trust throughout the
            organization.
          </h3>
        </div>
      </div>
      <div className="mt-15 px-30">
        <h1 className="brogman tracking-wider text-2xl text-center">
          At AGIGrowthX, strong governance is the cornerstone of our long-term
          impact. As a purpose- led Global Capability Center (GCC) operating
          across emerging and high-growth markets, we are committed to
          maintaining the highest standards of transparency, risk management,
          and ethical leadership in everything we do.
        </h1>
      </div>
      <div className="mt-30">
        <h1 className="uppercase text-center text-lg font-bold">
          Governance Structure
        </h1>
        <div className="mt-20 flex justify-center">
          <div
            className="flex  items-center w-7xl justify-between bg-white rounded-lg 
                                  shadow-md px-10 py-2
                                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            {/* Left: Text */}
            <div className="w-1/2 pr-6">
              <h1 className="text-7xl white font-bold bower mb-2">
                Board of Advisors
              </h1>
              <h2 className="text-gray-600  brogman tracking-wider text-2xl">
                Our diverse and experienced board brings together global leaders
                across business, finance, healthcare, and public policy. They
                provide independent oversight, strategic guidance, and long-
                term vision alignment for all our portfolio operations.
              </h2>
            </div>

            {/* Right: Image */}
            <div className="w-1/2 py-10">
              <img
                src={advisor1}
                alt="Work"
                className="w-full h-100 object-cover rounded"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-35 pr-25 pl-42">
          {[
            {
              title: "Venture Review Panel",
              description:
                "Every incubation or investment initiative is subject to multi-stage diligence by this cross- functional panel. It reviews economic viability, ESG impact, and stakeholder alignment before approval..",
            },
            {
              title: "Compliance & Ethics Council",
              description:
                "This body ensures adherence to legal and regulatory frameworks across jurisdictions. It leads our risk governance, anti-corruption efforts, and ethical standards — fostering a culture of accountability.",
            },
            {
              title: "Executive Leadership Committee",
              description:
                "Led by our Group CEO and business heads, the committee is responsible for operational excellence, investment decisions, talent strategy, and execution of our mission across verticals and geographies.",
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
        <div className="mt-40 bg-[#46494b] text-white text-center py-10 space-y-5">
          <h1 className="bower text-3xl">Governance That Builds Trust</h1>
          <h1 className="brogman tracking-wider px-20  text-xl">
            Our governance model is not just a framework — it’s a daily
            practice. It guides how we allocate capital, how we treat people,
            how we scale innovation, and how we leave a legacy of responsible
            growth.
          </h1>
        </div>
        <div className="bg-white rounded-2xl mt-30 space-y-12 border-zinc-200 max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold bower text-zinc-800 text-center">
            Principles & Practices
          </h2>

          {/* Content Grid with Separator */}
          <div className="grid md:grid-cols-2 gap-12 relative ">
            {/* Vertical Separator */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[4px] rounded bg-zinc-300 transform -translate-x-1/2"></div>

            {/* Governance Principles */}
            <div className="pr-6 mt-10">
              <h3 className="text-2xl font-semibold text-zinc-700 mb-4 underline underline-offset-4">
                Governance Principles
              </h3>
              <ul className="list-disc brogman tracking-wider list-inside space-y-3 text-xl text-zinc-600">
                <li>Transparency in communication and reporting</li>
                <li>Accountability at every leadership level</li>
                <li>Equity in opportunity and decision-making</li>
                <li>Sustainability as a non-negotiable in all engagements</li>
                <li>Risk awareness integrated into strategy and execution</li>
                <li>Stakeholder engagement with clarity and responsiveness</li>
              </ul>
            </div>

            {/* Policies and Practices */}
            <div className="pl-6 translate-x-20 mt-10">
              <h3 className="text-2xl font-semibold text-zinc-700 mb-4 underline underline-offset-4">
                Policies & Practices
              </h3>
              <ul className="list-disc brogman tracking-wider list-inside space-y-3 text-xl text-zinc-600">
                <li>Regular financial audits and internal reviews</li>
                <li>
                  Zero-tolerance policy on corruption and conflicts of interest
                </li>
                <li>Clear escalation and whistleblower mechanisms</li>
                <li>ESG guidelines embedded in every business unit</li>
                <li>Annual governance performance assessments</li>
              </ul>
            </div>
          </div>
        </div>
        <h1 className="text-center italic brogman tracking-wider mt-25 text-xl ">
          'At AGIGrowthX, governance isn’t compliance — it’s commitment. To our
          mission. To our people. To the future.''
        </h1>
        <div className="px-12 border-t-2 mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OurGovernance;

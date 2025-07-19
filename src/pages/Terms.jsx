import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-40 px-30">
        <h1 className="bower font-bold text-6xl">Terms Of Use</h1>
        <div className="mt-10 brogman tracking-wider text-2xl">
          <p>
            By accessing or using this website ("Site"), you agree to the
            following terms and conditions. This Site is provided by AGI Growth
            X for general informational purposes only. It is designed to give
            users an overview of our capabilities, industries served, and areas
            of engagement. The content does not constitute legal, tax,
            accounting, consulting, or other professional advice or services.
          </p>
          <p className="mt-8">
            While AGI Growth X strives to keep the information accurate and up
            to date, we make no representations or warranties of any kind,
            express or implied, about the completeness, accuracy, reliability,
            or suitability of the Site or the information, products, services,
            or related graphics contained on the Site for any purpose.
          </p>
        </div>
      </div>
      <div className="px-20 border-t-2 mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Terms;

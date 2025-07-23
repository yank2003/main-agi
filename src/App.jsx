import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all pages
const Landing = lazy(() => import("./pages/Landing"));
const Contact = lazy(() => import("./pages/Contact"));
const Weare = lazy(() => import("./pages/Weare"));
const OurConduct = lazy(() => import("./pages/OurConduct"));
const OurGovernance = lazy(() => import("./pages/OurGovernance"));
const OurCommit = lazy(() => import("./pages/OurCommit"));
const OurWork = lazy(() => import("./pages/OurWork"));
const BuildingBusiness = lazy(() => import("./pages/BuildingBussiness"));
const Digital = lazy(() => import("./pages/Digital"));
const GrowthSale = lazy(() => import("./pages/GrowthSale"));
const Implementation = lazy(() => import("./pages/Implementation"));
const MandA = lazy(() => import("./pages/MandA"));
const Operation = lazy(() => import("./pages/Operation"));
const RiskRes = lazy(() => import("./pages/RiskRes"));
const Strategy = lazy(() => import("./pages/Strategy"));
const PeopleOrg = lazy(() => import("./pages/PeopleOrg"));
const Transformation = lazy(() => import("./pages/Transformation"));
const Sustain = lazy(() => import("./pages/Sustain"));
const Retail = lazy(() => import("./pages/Retail"));
const Technology = lazy(() => import("./pages/Technology"));
const Healthcare = lazy(() => import("./pages/Healthcare"));
const Logistics = lazy(() => import("./pages/Logistics"));
const Scam = lazy(() => import("./pages/Scam-Warning"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Legal = lazy(() => import("./pages/LegalStatement")); // changed from named import

const App = () => {
  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/who-we-are" element={<Weare />} />
        <Route path="/about-us/our-conduct" element={<OurConduct />} />
        <Route path="/about-us/our-governance" element={<OurGovernance />} />
        <Route path="/about-us/our-commit" element={<OurCommit />} />

        <Route path="/our-work" element={<OurWork />} />
        <Route
          path="/our-work/business-building"
          element={<BuildingBusiness />}
        />
        <Route path="/our-work/digital" element={<Digital />} />
        <Route
          path="/our-work/growth-marketing-sales"
          element={<GrowthSale />}
        />
        <Route path="/our-work/implementation" element={<Implementation />} />
        <Route path="/our-work/mergers-and-acquisitions" element={<MandA />} />
        <Route path="/our-work/risk-and-resilience" element={<RiskRes />} />
        <Route path="/our-work/operations" element={<Operation />} />
        <Route
          path="/our-work/strategy-corporate-finance"
          element={<Strategy />}
        />
        <Route
          path="/our-work/people-organizational-performance"
          element={<PeopleOrg />}
        />
        <Route path="/our-work/transformation" element={<Transformation />} />
        <Route path="/our-work/sustainability" element={<Sustain />} />

        <Route path="/our-industries/retail" element={<Retail />} />
        <Route path="/our-industries/technology" element={<Technology />} />
        <Route path="/our-industries/healthcare" element={<Healthcare />} />
        <Route path="/our-industries/logistics" element={<Logistics />} />

        <Route path="/scam-warning" element={<Scam />} />
        <Route path="/terms-of-use" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/legal-statement" element={<Legal />} />

        {/* Optional 404 route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
};

export default App;

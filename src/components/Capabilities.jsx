import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const services = [
  {
    title: "Business Building",
    link: "/our-work/business-building",
    points: [
      "Venture incubation and market-entry strategy",
      "New business model design and commercialization",
      "Innovation-as-a-service and go-to-market playbooks",
    ],
  },
  {
    title: "Digital",
    link: "/our-work/digital",
    points: [
      "Digital platform development and integration",
      "Cloud strategy, DevOps, and tech modernization",
      "Data engineering, AI/ML, and product digitization",
    ],
  },
  {
    title: "Growth, Marketing & Sales",
    link: "/our-work/growth-marketing-sales",
    points: [
      "Brand and product marketing strategy",
      "Digital sales enablement and customer journey mapping",
      "Pricing, channel, and go-to-market execution",
    ],
  },
  {
    title: "Implementation",
    link: "/our-work/implementation",
    points: [
      "Execution planning and program management",
      "KPI tracking and performance governance",
      "Agile transformation and delivery assurance",
    ],
  },
  {
    title: "Mergers & Acquisitions (M&A)",
    link: "/our-work/mergers-and-acquisitions",
    points: [
      "Commercial and operational due diligence",
      "Post-merger integration planning and delivery",
      "Value creation and exit readiness",
    ],
  },
  {
    title: "Operations",
    link: "/our-work/operations",
    points: [
      "Lean operations and process optimization",
      "Procurement and cost transformation",
      "Manufacturing and supply chain excellence",
    ],
  },
  {
    title: "Risk & Resilience",
    link: "/our-work/risk-and-resilience",
    points: [
      "Enterprise risk management and compliance frameworks",
      "Cybersecurity, operational risk, and controls",
      "Business continuity and crisis response",
    ],
  },
  {
    title: "Strategy & Corporate Finance",
    link: "/our-work/strategy-corporate-finance",
    points: [
      "Corporate and growth strategy development",
      "Capital structure optimization and investment planning",
      "Financial modeling and scenario-based planning",
    ],
  },
  {
    title: "People & Organizational Performance",
    link: "/our-work/people-organizational-performance",
    points: [
      "Organizational design and workforce planning",
      "Leadership development and capability building",
      "Culture and change management",
    ],
  },
];

const ServiceGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-30 translate-x-3 ">
      {services.map((service, index) => (
        <div key={index} className="group transition-colors duration-300">
          <Link
            to={service.link}
            className="text-xl font-semibold flex items-center group-hover:underline gap-2 text-zinc-600 group-hover:text-zinc-800"
          >
            {service.title}
            <MoveRight className="w-4 h-4 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
          </Link>
          <ul className="mt-3 space-y-1">
            {service.points.map((point, i) => (
              <li
                key={i}
                className="text-gray-500 group-hover:text-black transition-colors duration-300 text-sm"
              >
                • {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;

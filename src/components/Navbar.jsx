import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import logo from "../assets/logo.png";
import blackLogo from "../assets/blacklogo.png";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  const nav = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showCapabilities, setShowCapabilities] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const underlineRefs = useRef([]);

  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    "Overview",
    "Our Work",
    "Careers",
    "Who we are",
    "Contact Us",
    "About Us",
  ];

  const isWhiteNavRoute =
    currentPath === "/contact-us" ||
    currentPath.startsWith("/about-us") ||
    currentPath.startsWith("/our-work") ||
    currentPath.startsWith("/our-industries") ||
    currentPath === "/who-we-are" ||
    currentPath === "/scam-warning" ||
    currentPath === "/terms-of-use" ||
    currentPath === "/privacy-policy" ||
    currentPath === "/legal-statement";

  // Calculate activeIndex based on currentPath
  const activeIndex = navItems.findIndex((text) => {
    const route =
      text === "Overview" ? "/" : "/" + text.toLowerCase().replace(/\s+/g, "-");

    const isAboutUs = text === "About Us";

    if (isAboutUs) {
      return (
        currentPath.startsWith("/about-us") ||
        currentPath === "/team" ||
        currentPath === "/careers"
      );
    }

    return currentPath === route;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!nav.current) return;

    const ctx = gsap.context(() => {
      gsap.from(nav.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, nav);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    underlineRefs.current.forEach((el, index) => {
      if (!el) return;

      if (hoveredIndex === index) {
        gsap.to(el, {
          scaleX: 1,
          duration: 0.3,
          transformOrigin: "left center",
          ease: "power1.out",
        });
      } else {
        if (hoveredIndex === null && index === activeIndex) {
          gsap.to(el, {
            scaleX: 1,
            duration: 0.3,
            transformOrigin: "left center",
            ease: "power1.out",
          });
        } else {
          gsap.to(el, {
            scaleX: 0,
            duration: 0.3,
            transformOrigin: "left center",
            ease: "power1.out",
          });
        }
      }
    });
  }, [hoveredIndex, activeIndex]);

  const logoToDisplay =
    isWhiteNavRoute || scrolled || hovered ? blackLogo : logo;
  const navBackground = isWhiteNavRoute
    ? "white"
    : scrolled || hovered
    ? "#fff"
    : "transparent";
  const textColor = isWhiteNavRoute
    ? "#4b2e0f"
    : scrolled || hovered
    ? "#000"
    : "#fff";

  return (
    <div
      ref={nav}
      className={`w-full fixed z-50 navbar flex justify-between items-center py-3 px-30 rounded-b-3xl transition-all duration-300 ${
        scrolled ? "border-b-2 border-zinc-800" : ""
      }`}
      style={{
        backgroundColor: navBackground,
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setHoveredIndex(null);
        setShowCapabilities(false);
        setShowIndustries(false);
      }}
    >
      <div className="w-30 h-20">
        <img src={logoToDisplay} alt="Logo" />
      </div>

      <div className="flex items-center gap-10 tracking-wider brogman text-[17px]">
        {navItems.map((text, index) => {
          const route =
            text === "Overview"
              ? "/"
              : "/" + text.toLowerCase().replace(/\s+/g, "-");

          const isAboutUs = text === "About Us";
          const isOurWork = text === "Our Work";

          const isActive = index === activeIndex;

          return (
            <div
              key={text}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {isOurWork ? (
                <h1
                  className={`transition-colors duration-200 ${
                    hovered || isWhiteNavRoute || scrolled
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  {text}
                  <span className="text-[10px]">▼</span>
                </h1>
              ) : text === "Careers" ? (
                <a
                  href="https://africarehrms.darwinbox.in/ms/candidate/a6430fa525ca72/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 cursor-pointer flex items-center gap-1"
                  style={{ color: textColor }}
                >
                  {text}
                </a>
              ) : (
                <Link
                  to={route}
                  className="py-2 cursor-pointer flex items-center gap-1"
                  style={{ color: textColor }}
                >
                  {text}
                  {isAboutUs && (
                    <span className="text-[10px] text-black">▼</span>
                  )}
                </Link>
              )}

              <div
                ref={(el) => (underlineRefs.current[index] = el)}
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-black z-10 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              ></div>

              {isAboutUs && (
                <div className="absolute top-full left-0 brogman group-hover:flex hidden flex-col bg-white shadow-lg z-20 min-w-[180px] py-2 rounded-md pointer-events-auto">
                  <Link
                    to="/about-us/our-conduct"
                    className="px-4 py-2 brogman hover:bg-gray-100 text-sm text-black whitespace-nowrap"
                  >
                    OUR CODE
                  </Link>
                  <Link
                    to="/about-us/our-governance"
                    className="px-4 py-2 hover:bg-gray-100 text-sm text-black whitespace-nowrap"
                  >
                    OUR GOVERNANCE
                  </Link>
                  <Link
                    to="/about-us/our-commit"
                    className="px-4 py-2 hover:bg-gray-100 text-sm text-black whitespace-nowrap"
                  >
                    OUR COMMITMENTS
                  </Link>
                </div>
              )}
              {isOurWork && (
                <div className="absolute top-full left-0 brogman group-hover:flex hidden flex-col bg-white shadow-lg z-20 min-w-[220px] py-2 rounded-md pointer-events-auto">
                  <Link
                    to="/our-work"
                    className="px-4 py-2 hover:bg-gray-100 text-sm text-black whitespace-nowrap"
                  >
                    WHAT WE DO
                  </Link>
                  <div
                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onMouseEnter={() => {
                      setShowCapabilities(true);
                      setShowIndustries(false);
                    }}
                  >
                    <span className=" py-2 hover:bg-gray-100 text-sm text-black whitespace-nowrap">
                      CAPABILITIES
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </div>
                  <div
                    className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onMouseEnter={() => {
                      setShowIndustries(true);
                      setShowCapabilities(false);
                    }}
                  >
                    <span className=" py-1 hover:bg-gray-100 text-sm text-black whitespace-nowrap">
                      INDUSTRIES
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </div>

                  {showCapabilities && (
                    <div className="absolute top-[2.5rem] left-full bg-white shadow-lg min-w-[260px] py-4 rounded-md z-30 flex flex-col space-y-2">
                      {[
                        {
                          name: "BUSINESS BUILDING",
                          path: "business-building",
                        },
                        { name: "DIGITAL", path: "digital" },
                        {
                          name: "GROWTH, MARKETING & SALES",
                          path: "growth-marketing-sales",
                        },
                        { name: "IMPLEMENTATION", path: "implementation" },
                        {
                          name: "MERGERS & ACQUISITIONS (M&A)",
                          path: "mergers-and-acquisitions",
                        },
                        { name: "OPERATIONS", path: "operations" },
                        {
                          name: "RISK & RESILIENCE",
                          path: "risk-and-resilience",
                        },
                        {
                          name: "STRATEGY & CORPORATE FINANCE",
                          path: "strategy-corporate-finance",
                        },
                        {
                          name: "PEOPLE & ORGANIZATIONAL PERFORMANCE",
                          path: "people-organizational-performance",
                        },
                        { name: "TRANSFORMATION", path: "transformation" },
                        { name: "SUSTAINABILITY", path: "sustainability" },
                      ].map((item) => (
                        <Link
                          key={item.path}
                          to={`/our-work/${item.path}`}
                          className="block text-sm text-black hover:bg-gray-100 px-4 py-1"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}

                  {showIndustries && (
                    <div className="absolute top-[5.5rem] left-full bg-white shadow-lg min-w-[220px] py-4 rounded-md z-30 flex flex-col space-y-2">
                      <Link
                        to="/our-industries/healthcare"
                        className="block text-sm text-black hover:bg-gray-100 px-4 py-1"
                      >
                        HEALTHCARE
                      </Link>
                      <Link
                        to="/our-industries/technology"
                        className="block text-sm text-black hover:bg-gray-100 px-4 py-1"
                      >
                        TECHNOLOGY
                      </Link>
                      <Link
                        to="/our-industries/logistics"
                        className="block text-sm text-black hover:bg-gray-100 px-4 py-1"
                      >
                        LOGISTICS
                      </Link>
                      <Link
                        to="/our-industries/retail"
                        className="block text-sm text-black hover:bg-gray-100 px-4 py-1"
                      >
                        RETAIL
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;

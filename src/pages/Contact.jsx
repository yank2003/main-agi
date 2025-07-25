import {
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MoveRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import MapComponent from "../components/Map";
import { MoveDown } from "lucide-react";
import global from "../assets/global.jpg";
import Footer from "../components/Footer.jsx";
import SubscribeForm from "../components/SubscribeForm.jsx";

const Contact = () => {
  return (
    <div className="w-full h-screen relative">
      <Navbar />

      {/* Contact Header Section */}
      <div className="px-30 py-40 translate-y-10 flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-1">
          <h1 className="text-7xl font-bold bower">Contact Us</h1>
          <h2 className="mt-4 text-2xl brogman">
            Thanks for showing your interest. How can we help?
          </h2>
        </div>

        <div className="flex-1 max-w-xl w-full">
          <p className="text-sm italic mb-4 text-gray-700">
            “At AGIGrowthX, I’m not just growing a career — I’m part of building
            the future of healthcare and innovation across Africa.”
            <br />
            <span className="font-semibold not-italic">
              — Employee Testimonial, Strategy &amp; Operations
            </span>
          </p>

          <SubscribeForm />
        </div>
      </div>

      {/* General Inquiries */}
      <div className="px-34 mt-2">
        <h1 className="brogman font-bold text-5xl">General inquiries</h1>
        <div className="mt-5 border-b-2 flex justify-between pb-10">
          <div>
            <h1 className="text-3xl font-extrabold">+91-9978648751</h1>
            <h1 className="brogman translate-x-6">Toll free from all over India</h1>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">+91-9289051007</h1>
            <h1 className="brogman translate-x-6">Toll free from all over India</h1>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold flex items-center gap-1">
              GUJARAT <MapPin size={34} className="font-extrabold " />
            </h1>
            <h1 className="brogman flex items-center">
              View our office <MoveDown className="size-4" />
            </h1>
          </div>
        </div>
        <div className="mt-5">
          <MapComponent
            coords={{ lat: 23.029095, lng: 72.491997 }}
            label={
              "19th Floor, 1903, Tower B, Navratana Corporate Park, Iskon Ambli Road, Ambli, Daskroi, Ahmedabad - 380058, Gujarat"
            }
          />
        </div>
      </div>

      {/* Global Reach + Contact Info Card */}
      <div className="mt-15 h-[300px] flex text-white overflow-hidden px-30 gap-6">
        <div className="relative flex-[3.5] rounded-lg overflow-hidden group">
          <div className="relative z-2 flex flex-col justify-center h-full px-4 mt-7">
            <h1 className="text-5xl font-bold text-left">
              Global Reach, Local Impact
            </h1>
            <p className="text-2xl text-left flex items-center gap-2">
              With operations anchored in Kenya, India, UAE & Southeast Asia
              <MoveRight />
            </p>
          </div>
          <img
            src={global}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt="global"
          />
        </div>

        <div className="flex-1 bg-white text-black px-6 py-3 rounded-lg shadow-lg flex flex-col justify-between border border-black">
          <div className="space-y-4">
            <div>
              <h2 className="font-bold text-lg uppercase bower">Address</h2>
              <p className="mt-  tracking-wider">
                19th Floor, 1903, Tower B, Navratana Corporate Park, Iskon Ambli
                Road, Ambli, Daskroi, Ahmedabad - 380058, Gujarat
              </p>
            </div>
            <div>
              <h2 className="font-bold text-lg uppercase bower">Email</h2>
              <p className="mt-1 ">info@agigrowthx.com</p>
            </div>
            <div>
              <h2 className="font-bold text-lg uppercase bower">Phone</h2>
              <p className="mt-1 ">+91 9978648751</p>
            </div>
          </div>

          <div className="flex gap-5 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#1877F2]"
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#1DA1F2]"
            >
              <Twitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#0A66C2]"
            >
              <Linkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#E1306C]"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-[2px] bg-zinc-500 mt-10"></div>
      <div className="px-20 -translate-y-10">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

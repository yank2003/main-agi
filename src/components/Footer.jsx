import logo from "../assets/blacklogo.png";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <div className="w-full h-full flex items-center justify-between px-10 py-10">
      <div>
        <img src={logo} className="w-50 h-30" />
        <div className="mt-10 max-w-[600px]">
          <h1 className="font-bold bower text-2xl mb-3">WHO WE HIRE</h1>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 list-disc list-inside text-gray-800 brogman tracking-wider text-[15px] leading-relaxed">
            <li>Investment &amp; Private Equity</li>
            <li>Strategy &amp; Business Consulting</li>
            <li>Digital Transformation &amp; Data Science</li>
            <li>Healthcare Management &amp; Operations</li>
            <li>Public Policy &amp; Impact Strategy</li>
            <li>Engineering, Tech, and Innovation</li>
            <li>Human Capital & Development</li>
          </ul>
        </div>
      </div>

      <div>
        {/* Subscribe Section */}
        <div className="max-w-4xl mx-auto text-right py-12 ">
          <h2 className="text-2xl font-bold mb-2">Subscribe to Our Blog</h2>
          <p className="text-gray-600 mb-5">
            Get the latest insights, stories, and updates straight to your
            inbox.
          </p>

          <SubscribeForm isFooter={true} />
        </div>

        {/* Footer Links */}
        <div className="max-w-6xl   flex gap-10 items-center  text-sm  sm:text-left pb-10 ">
          <a href="/contact-us" className="text-gray-600 hover:underline">
            Contact Us
          </a>
          <a href="/scam-warning" className="text-gray-600 hover:underline">
            Scam Warning
          </a>

          <a href="/privacy-policy" className="text-gray-600 hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-use" className="text-gray-600 hover:underline">
            Terms of Use
          </a>
          <a href="/legal-statment" className="text-gray-600 hover:underline">
            Legal Statement
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-end space-x-6 pb-10">
          <a href="#" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 text-[#1a1a1a] hover:text-[#0077b5]" />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter className="w-5 h-5 text-[#1a1a1a] hover:text-[#1DA1F2]" />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook className="w-5 h-5 text-[#1a1a1a] hover:text-[#1877F2]" />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram className="w-5 h-5 text-[#1a1a1a] hover:text-[#E1306C]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

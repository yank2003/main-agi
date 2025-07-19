import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-40 px-30">
        <h1 className="bower font-bold text-6xl">Privacy Policy</h1>
        <div className="mt-10   tracking-wider space-y-6">
          <p className="bower font-bold text-2xl">Effective Date: July 15, 2025</p>
          <p className="brogman">
            AGI Growth X ("we", "our", or "us") respects your privacy and is
            committed to protecting the personal information you may share with
            us through this website ("Site"). This Privacy Statement outlines
            how we collect, use, disclose, and safeguard your data when you
            interact with our Site or engage with us digitally.
          </p>

          <p className="bower font-bold text-2xl">1. Scope of this Statement</p>
          <p className="brogman">
            This Privacy Statement applies to all visitors of the AGI Growth X
            website. It explains how we handle your personal information and
            applies regardless of your location. By using this Site, you consent
            to the practices described below.
          </p>

          <p className="bower font-bold text-2xl">2. Information We Collect</p>
          <p className="brogman font-semibold">
            a. Personal Information You Provide
          </p>
          <ul className="brogman list-disc pl-6 space-y-1">
            <li>Name, email address, phone number</li>
            <li>Organization or company details</li>
            <li>Job title or role</li>
            <li>Content of inquiries, feedback, or job applications</li>
          </ul>

          <p className="brogman font-semibold mt-4">
            b. Information Automatically Collected
          </p>
          <ul className="brogman list-disc pl-6 space-y-1">
            <li>IP address, browser type, device details</li>
            <li>
              Site usage statistics through cookies or similar technologies
            </li>
            <li>Referring URLs and navigation paths</li>
          </ul>

          <p className="brogman font-semibold mt-4">
            c. Employment-Related Information
          </p>
          <p className="brogman">
            When you apply for a role via our Site or linked platforms (e.g.,
            Darwinbox), we may collect your:
          </p>
          <ul className="brogman list-disc pl-6 space-y-1">
            <li>Resume or CV</li>
            <li>Educational and employment history</li>
            <li>References and professional credentials</li>
          </ul>

          <p className="bower font-bold text-2xl">3. How We Use Your Information</p>
          <ul className="brogman list-disc pl-6 space-y-1">
            <li>
              To respond to your inquiries and provide information about our
              services
            </li>
            <li>To process job applications and manage recruitment</li>
            <li>To improve our Site’s performance and user experience</li>
            <li>
              To send updates, newsletters, or other communications (where
              consented)
            </li>
            <li>
              To ensure compliance with applicable laws and internal governance
            </li>
          </ul>

          <p className="bower font-bold text-2xl">4. Legal Basis for Processing</p>
          <ul className="brogman list-disc pl-6 space-y-1">
            <li>Your explicit consent</li>
            <li>
              Fulfillment of a legitimate interest (e.g., responding to
              inquiries, hiring)
            </li>
            <li>Compliance with legal or regulatory obligations</li>
          </ul>

          <p className="bower font-bold text-2xl">
            5. Cookies and Tracking Technologies
          </p>
          <p className="brogman">
            We may use cookies or similar technologies to enhance your
            experience and collect analytics about Site usage. You may configure
            your browser to refuse cookies; however, some features of the Site
            may not function properly.
          </p>

          <p className="bower font-bold text-2xl">6. Data Sharing and Disclosure</p>
          <p className="brogman">
            We do not sell or rent your personal data. However, we may share it
            with:
          </p>
          <ul className="brogman list-disc pl-6 space-y-1">
            <li>
              Internal teams across our offices in India, Kenya, UAE, and
              Southeast Asia
            </li>
            <li>
              Trusted service providers who assist us in operating our Site
              (e.g., analytics tools)
            </li>
            <li>Platforms such as Darwinbox for job application processing</li>
            <li>Regulatory or legal authorities, where required by law</li>
          </ul>

          <p className="bower font-bold text-2xl">7. Cross-Border Data Transfers</p>
          <p className="brogman">
            As a global organization, your personal data may be transferred to
            and processed in countries outside your jurisdiction. We ensure that
            such transfers comply with applicable data protection laws and are
            subject to appropriate safeguards.
          </p>

          <p className="bower font-bold text-2xl">8. Data Security</p>
          <p className="brogman">
            We employ technical and organizational measures to protect your
            personal information from unauthorized access, alteration,
            disclosure, or destruction. However, no method of transmission over
            the internet is completely secure.
          </p>

          <p className="bower font-bold text-2xl">9. Data Retention</p>
          <p className="brogman">
            We retain personal information only for as long as necessary to
            fulfill the purposes outlined above, unless a longer retention
            period is required or permitted by law.
          </p>

          <p className="bower font-bold text-2xl">10. Your Rights</p>
          <ul className="brogman list-disc pl-6 space-y-1">
            <li>Request access to your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent for processing</li>
            <li>Object to or restrict data processing</li>
          </ul>

          <p className="bower font-bold text-2xl">11. Third-Party Links</p>
          <p className="brogman">
            This Site may contain links to third-party platforms, including our
            employee system on Darwinbox. We are not responsible for the privacy
            practices or content of such external sites.
          </p>

          <p className="bower font-bold text-2xl">12. Contact Us</p>
          <p className="brogman">
            If you have any questions, concerns, or requests regarding this
            Privacy Statement or your data, please contact us at:
          </p>
          <p className="brogman font-bold ">
            Postal Address: 19th Floor, Navratna Corporate Park Tower-B, Near
            Ambli Road, Ashok Vatika, Ahmedabad, Gujarat
          </p>

          <p className="bower font-bold text-2xl">13. Changes to this Statement</p>
          <p className="brogman">
            We may update this Privacy Statement periodically. Any changes will
            be posted on this page with a revised effective date. We encourage
            you to review this page from time to time.
          </p>
        </div>
      </div>
      <div className="px-20 border-t-2 mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;

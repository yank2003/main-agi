import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Scam() {
  return (
    <div>
      <Navbar />
      <div className="pt-40 px-30">
        <h1 className="bower font-bold text-6xl">Scam Warning</h1>
        <div className="mt-10 brogman tracking-wider text-2xl">
          <p>
            Like many major companies, AGI-Growth-X's name, logo, and the
            identities of its people may from time to time be used as part of
            scams or fraudulent schemes. These instances are rare but deeply
            concerning.
          </p>
          <p className="mt-8">
            Please be cautious when communicating with anyone claiming to
            represent AGI-Growth-X who is soliciting money or offering
            investment opportunities. AGI-Growth-X is not an investment company.
            Any such communications are fraudulent and should be disregarded.
          </p>
          <p className="mt-8">
            We are also aware of scams involving false employment offers that
            use fake websites, messages, and other deceptive means. These are
            not legitimate offers. AGI-Growth-X does not conduct interviews
            through instant messaging platforms and never asks candidates to
            purchase products, process payments, or share financial information.
          </p>
          <p className="mt-8">
            If you are unsure about a communication you’ve received, we strongly
            recommend not engaging with it and reporting any suspicious activity
            to your local authorities.
          </p>
        </div>
      </div>
      <div className="px-20 border-t-2 mt-20">
        <Footer />
      </div>
    </div>
  );
}

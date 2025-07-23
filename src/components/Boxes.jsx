import React from "react";

// Importing images
import Vikram from "../assets/Vikram.jpg";
import Sandeep from "../assets/Sandeep.webp";
import Ranjeet from "../assets/Ranjeet.webp";
import Vivek from "../assets/Vivek.webp";
import Kirti from "../assets/Kirti.webp";
import Bhuvan from "../assets/Bhuvan.jpg";
import Pradeep from "../assets/Pradeep.jpg";

// Updated data with images
const cardsData = [
  {
    photo: Vikram,
    name: "Mr Vikram Singh Arora",
    designation: "Founder",
  },
  {
    photo: Bhuvan,
    name: "Mr Bhuvan Jha",
    designation: "Deputy CEO",
  },
  {
    photo: Kirti,
    name: "Mr Kirtikumar Lakhani",
    designation: "Vice President - Finance",
  },
  {
    photo: Pradeep,
    name: "Mr Pradeep Meharishi",
    designation: "Vice President - SCM & Projects",
  },
  {
    photo: Vivek,
    name: "Mr Vivek Modi",
    designation: "Vice President - Finance & Accounts",
  },
  {
    photo: Ranjeet,
    name: "Mr Ranjeet Rathore",
    designation: "General Manager - Legal",
  },
  {
    photo: Sandeep,
    name: "Mr Sandeep Pandita",
    designation: "Assistant Vice President - Information Technology",
  },
];

export default function SevenBoxesBottom() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Top row: 3 boxes */}
      <div className="grid grid-cols-3 gap-2 mb-2">
        {cardsData.slice(0, 3).map((card, i) => (
          <SimpleBox key={i} {...card} />
        ))}
      </div>

      {/* Middle row: 3 boxes */}
      <div className="grid grid-cols-3 gap-2 mb-2">
        {cardsData.slice(3, 6).map((card, i) => (
          <SimpleBox key={i} {...card} />
        ))}
      </div>

      {/* Bottom row: 1 centered box */}
      <div className="flex justify-center">
        <div className="w-1/3">
          <SimpleBox {...cardsData[6]} />
        </div>
      </div>
    </div>
  );
}

function SimpleBox({ name, designation, photo }) {
  return (
    <div
      className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center
                 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] h-[400px]"
    >
      <img
        src={photo}
        alt={name}
        className="rounded-full w-50 h-50 object-cover mb-4 object-[center_20%] "
      />
      <div className="text-center  tracking-wider">
        <h2 className="font-semibold bower text-lg">{name}</h2>
        <p className="text-gray-600 brogman text-center text-sm">{designation}</p>
      </div>
    </div>
  );
}

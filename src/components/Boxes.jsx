import React from "react";

const cards = [
  {
    name: "Alice Johnson",
    designation: "Senior Developer",
    info: "Expert in React and Node.js",
  },
  {
    name: "Bob Smith",
    designation: "Project Manager",
    info: "Skilled in Agile methodologies",
  },
  {
    name: "Carol Lee",
    designation: "UX Designer",
    info: "Passionate about user-centric design",
  },
  {
    name: "David Kim",
    designation: "QA Engineer",
    info: "Loves breaking things to make them better",
  },
  {
    name: "Eva Martinez",
    designation: "Data Scientist",
    info: "Turns data into insights",
  },
  {
    name: "Frank Liu",
    designation: "DevOps Engineer",
    info: "Automates everything",
  },
  {
    name: "Grace Park",
    designation: "Marketing Lead",
    info: "Drives growth with creative campaigns",
  },
];

export default function SevenBoxesBottom() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Top row: 3 boxes */}
      <div className="grid grid-cols-3 gap-2 mb-2">
        {cards.slice(0, 3).map((card, i) => (
          <SimpleBox key={i} {...card} />
        ))}
      </div>

      {/* Middle row: 3 boxes */}
      <div className="grid grid-cols-3 gap-2 mb-2">
        {cards.slice(3, 6).map((card, i) => (
          <SimpleBox key={i} {...card} />
        ))}
      </div>

      {/* Bottom row: 1 centered box */}
      <div className="flex justify-center">
        <div className="w-1/3">
          <SimpleBox {...cards[6]} />
        </div>
      </div>
    </div>
  );
}

function SimpleBox({ name, designation, info }) {
  return (
    <div
      className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center
                 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] h-[400px]"
    >
      <img
        src={`https://i.pravatar.cc/80?u=${name}`}
        alt={name}
        className="rounded-full w-20 h-20 object-cover mb-4"
      />
      <div className="text-center">
        <h2 className="font-semibold text-lg">{name}</h2>
        <p className="text-gray-600">{designation}</p>
        <p className="text-gray-400 text-sm mt-1">{info}</p>
      </div>
    </div>
  );
}

import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaBolt, FaServer, FaDatabase, FaLock } from "react-icons/fa";

const highlightData = [
  {
    text: "Developed core modules of a Complaint Management System",
    icon: <FaBolt />,
  },
  {
    text: "Built REST APIs using Node.js & Express",
    icon: <FaServer />,
  },
  {
    text: "Designed MongoDB schema for scalable data handling",
    icon: <FaDatabase />,
  },
  {
    text: "Implemented authentication & role-based access",
    icon: <FaLock />,
  },
];

function InternshipCard() {
  const skills = [
    { name: "Backend APIs", level: 82 },
    { name: "React / Frontend", level: 85 },
    { name: "Database Design", level: 75 },
  ];

  const highlights = [
    "Developed core modules of a Complaint Management System",
    "Built REST APIs using Node.js & Express",
    "Designed MongoDB schema for scalable data handling",
    "Implemented authentication & role-based access",
  ];

  const technologies = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express", icon: <SiExpress /> },
  ];

  return (
    <div className="relative max-w-5xl mx-auto p-8 rounded-2xl 
    bg-white/5 backdrop-blur-xl border border-white/10 
    shadow-[0_0_40px_rgba(0,0,0,0.6)] 
    hover:scale-[1.02] transition-all duration-500 text-gray-200">

      {/* 🌟 HEADER */}
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">
          Software Engineer Intern
        </h2>
        <div className="text-gray-400 mt-2 md:mt-0">
          <p>March 2026 – Ongoing</p>
          <p>Udupi, India</p>
        </div>
      </div>

      {/* 🌟 SPLIT LAYOUT */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>
          <p className="text-gray-400 leading-relaxed">
            Working on a Complaint Management System at MPI using MERN stack.
            Building scalable APIs, managing MongoDB database design, and ensuring
            smooth frontend-backend communication.
          </p>

          {/* 🔥 HIGHLIGHTS */}
          <div className="mt-8">
  <h3 className="text-blue-400 font-semibold mb-6">
    Key Highlights
  </h3>

  <div className="grid md:grid-cols-2 gap-4">
    {highlightData.map((item, idx) => (
      <div
        key={idx}
        className="group relative p-4 rounded-xl 
        bg-white/5 backdrop-blur-lg border border-white/10 
        hover:border-green-400 hover:scale-[1.03]
        transition-all duration-300 cursor-pointer
        shadow-[0_0_20px_rgba(0,0,0,0.4)]"
      >

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl 
        bg-linear-to-r from-green-400/10 to-blue-500/10 
        opacity-0 group-hover:opacity-100 blur-xl transition"></div>

        <div className="relative flex items-start gap-3">
          <div className="text-green-400 text-xl mt-1 
          group-hover:scale-125 transition">
            {item.icon}
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            {item.text}
          </p>
        </div>

      </div>
    ))}
  </div>
</div>
        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* 💡 SKILL CIRCLES */}
         {/* 💡 SKILL CIRCLES (Simplified) */}
<div className="grid grid-cols-3 gap-6">
  {skills.map((skill, index) => (
    <div key={index} className="flex flex-col items-center">
      <div className="relative w-20 h-20 flex items-center justify-center 
        rounded-full border-4 border-blue-400 bg-gray-800">
        <span className="text-white font-bold">{skill.level}%</span>
      </div>
      <p className="mt-2 text-gray-300 text-sm text-center">
        {skill.name}
      </p>
    </div>
  ))}
</div>


          {/* 🌈 FLOATING TECH BADGES */}
          <div className="mt-8">
            <h3 className="text-blue-400 font-semibold mb-4">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-2 px-4 py-2 
                  bg-linear-to-r from-gray-800 to-gray-700 
                  border border-gray-600 rounded-full 
                  text-sm text-gray-200
                  animate-[float_3s_ease-in-out_infinite]
                  transition-all duration-300
                  hover:scale-110 hover:border-blue-400 
                  hover:shadow-[0_0_15px_#3b82f6]"
                >
                  <span className="text-lg group-hover:rotate-12 transition">
                    {tech.icon}
                  </span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default InternshipCard;
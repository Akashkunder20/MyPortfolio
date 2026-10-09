import React from "react";
import { FaReact, FaNodeJs, FaBolt, FaServer, FaDatabase, FaLock } from "react-icons/fa";
import { FaClipboardCheck, FaSitemap, FaChartLine, FaBug } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

// ✏️ EDIT THE ITEMS MARKED "TODO" BEFORE PUSHING
const experiences = [
  {
    // ───────── CURRENT ROLE ─────────
    title: "Trainee – Quality & Process",
    company: "MPI Manipal",
    period: "October 2026 – Present", // TODO: your joining month, e.g. "October 2026 – Present"
    location: "Manipal, India",
    badge: "Current · 1-Year Term",
    badgeClass: "text-green-400 border-green-400/40 bg-green-400/10",
    description:
      "Working in the Quality and Process department at MPI Manipal, supporting process improvement, quality checks and documentation across teams.", // TODO: adjust to your real duties
    highlights: [
      { text: "Supporting quality assurance and process compliance activities", icon: <FaClipboardCheck /> }, // TODO
      { text: "Documenting and improving internal workflows", icon: <FaSitemap /> }, // TODO
      { text: "Tracking quality metrics and reporting issues", icon: <FaChartLine /> }, // TODO
      { text: "Identifying defects and coordinating fixes with teams", icon: <FaBug /> }, // TODO
    ],
    skills: [
      { name: "Process Mgmt", level: 70 },
      { name: "Quality Checks", level: 70 },
      { name: "Documentation", level: 80 },
    ], // TODO: adjust or delete the % circles if you prefer
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    // ───────── COMPLETED INTERNSHIP ─────────
    title: "Software Engineer Intern",
    company: "MPI Manipal",
    period: "March 2026 – September 2026", // TODO: internship end month
    location: "Udupi, India",
    badge: "Completed",
    badgeClass: "text-blue-400 border-blue-400/40 bg-blue-400/10",
    description:
      "Worked on a Complaint Management System at MPI Manipal using the MERN stack — building scalable APIs, designing the MongoDB database and ensuring smooth frontend-backend communication.",
    highlights: [
      { text: "Developed core modules of a Complaint Management System", icon: <FaBolt /> },
      { text: "Built REST APIs using Node.js & Express", icon: <FaServer /> },
      { text: "Designed MongoDB schema for scalable data handling", icon: <FaDatabase /> },
      { text: "Implemented authentication & role-based access", icon: <FaLock /> },
    ],
    skills: [
      { name: "Backend APIs", level: 82 },
      { name: "React / Frontend", level: 85 },
      { name: "Database Design", level: 75 },
    ],
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express", icon: <SiExpress /> },
    ],
  },
];

function ExperienceCard({ exp }) {
  return (
    <div
      className="relative max-w-5xl mx-auto p-8 rounded-2xl
      bg-white/5 backdrop-blur-xl border border-white/10
      shadow-[0_0_40px_rgba(0,0,0,0.6)]
      hover:scale-102 transition-all duration-500 text-gray-200"
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-2">
        <div>
          <span
            className={`inline-block mb-2 px-3 py-1 text-xs rounded-full border ${exp.badgeClass}`}
          >
            {exp.badge}
          </span>
          <h2 className="text-3xl font-bold text-white">{exp.title}</h2>
          <p className="text-blue-400 font-medium">{exp.company}</p>
        </div>
        <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
          <p>{exp.period}</p>
          <p>{exp.location}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT */}
        <div>
          <p className="text-gray-400 leading-relaxed">{exp.description}</p>

          <div className="mt-8">
            <h3 className="text-blue-400 font-semibold mb-6">Key Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {exp.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-4 rounded-xl
                  bg-white/5 backdrop-blur-lg border border-white/10
                  hover:border-green-400 hover:scale-103
                  transition-all duration-300 cursor-pointer
                  shadow-[0_0_20px_rgba(0,0,0,0.4)]"
                >
                  <div
                    className="absolute inset-0 rounded-xl
                    bg-linear-to-r from-green-400/10 to-blue-500/10
                    opacity-0 group-hover:opacity-100 blur-xl transition"
                  ></div>
                  <div className="relative flex items-start gap-3">
                    <div className="text-green-400 text-xl mt-1 group-hover:scale-125 transition">
                      {item.icon}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="grid grid-cols-3 gap-6">
            {exp.skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="relative w-20 h-20 flex items-center justify-center
                  rounded-full border-4 border-blue-400 bg-gray-800"
                >
                  <span className="text-white font-bold">{skill.level}%</span>
                </div>
                <p className="mt-2 text-gray-300 text-sm text-center">{skill.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-blue-400 font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-4">
              {exp.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-2 px-4 py-2
                  bg-linear-to-r from-gray-800 to-gray-700
                  border border-gray-600 rounded-full
                  text-sm text-gray-200
                  transition-all duration-300
                  hover:scale-110 hover:border-blue-400
                  hover:shadow-[0_0_15px_#3b82f6]"
                >
                  <span className="text-lg group-hover:rotate-12 transition">{tech.icon}</span>
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

// Keeps the same default export name, so EducationSection needs no import change.
function InternshipCard() {
  return (
    <div className="space-y-10">
      {experiences.map((exp, i) => (
        <ExperienceCard key={i} exp={exp} />
      ))}
    </div>
  );
}

export default InternshipCard;
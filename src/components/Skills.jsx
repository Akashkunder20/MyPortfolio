import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFlutter,
  SiFlask,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "Node.js", icon: <FaNode />, color: "text-green-500" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    { name: "Flutter", icon: <SiFlutter />, color: "text-blue-400" },
    { name: "Python", icon: <FaPython />, color: "text-yellow-300" },
    { name: "Flask", icon: <SiFlask />, color: "text-gray-200" },
  ];

 const [activeIndex, setActiveIndex] = useState(null);

  const skillCards = [
    {
      title: "Frontend Development",
      level: "Advanced",
      tech: ["React", "Tailwind", "JavaScript", "Responsive UI"],
      details: "Building responsive, animated and modern UI with great UX.",
    },
    {
      title: "Backend Development",
      level: "Advanced",
      tech: ["Node.js", "Express", "REST APIs", "Auth"],
      details: "Creating scalable APIs and handling server-side logic.",
    },
    {
      title: "Python / Flask",
      level: "Intermediate",
      tech: ["Flask", "API Dev", "Backend Logic"],
      details: "Developing lightweight backend systems and APIs.",
    },
    {
      title: "Database (MongoDB)",
      level: "Advanced",
      tech: ["MongoDB", "Mongoose", "Schema Design"],
      details: "Designing schemas and optimizing database performance.",
    },
    {
      title: "Flutter",
      level: "Beginner",
      tech: ["UI Basics", "Widgets"],
      details: "Building simple mobile apps and learning cross-platform dev.",
    },
  ];

  const getLevelStyle = (level) => {
    switch (level) {
      case "Beginner":
        return "bg-red-500/20 text-red-400";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400";
      case "Advanced":
        return "bg-blue-500/20 text-blue-400";
      case "Expert":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  return (
    <section
      id="skills"
      className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]"></div>

      {/* 🔥 Title */}
      <h2 className="text-5xl font-extrabold text-center mb-20 
                     bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                     text-transparent bg-clip-text tracking-wider">
        My Skills
      </h2>

      {/* 💠 Skill Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto mb-24">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-xl 
                       border border-white/10 rounded-2xl p-6 
                       flex flex-col items-center gap-4 
                       hover:-translate-y-3 hover:scale-105 
                       transition duration-300 shadow-lg"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                            from-blue-500/10 to-purple-500/10 opacity-0 
                            group-hover:opacity-100 transition"></div>

            <div className={`text-5xl ${skill.color} z-10`}>
              {skill.icon}
            </div>
            <p className="text-sm tracking-wider z-10 text-gray-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      <section className="relative py-24 px-6 md:px-20 bg-black text-white overflow-hidden">

      {/* 🌌 Neon Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_60%)]"></div>

      {/* 🔥 Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 
                     bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
                     text-transparent bg-clip-text tracking-wider">
        Skill Analysis
      </h2>

      {/* 💠 Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skillCards.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              transitionSpeed={2000}
              className="rounded-2xl"
            >
              <div
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="relative cursor-pointer bg-white/5 backdrop-blur-xl 
                           border border-white/10 rounded-2xl p-6 
                           shadow-xl transition duration-300 
                           hover:border-cyan-400/40 group"
              >
                {/* Neon Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                                from-cyan-500/10 to-purple-500/10 opacity-0 
                                group-hover:opacity-100 transition"></div>

                {/* Title */}
                <h4 className="text-lg font-semibold mb-2 relative z-10">
                  {skill.title}
                </h4>

                {/* Level */}
                <span
                  className={`text-xs px-3 py-1 rounded-full ${getLevelStyle(
                    skill.level
                  )} relative z-10`}
                >
                  {skill.level}
                </span>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                  {skill.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-white/10 rounded-md text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* 🎯 Expand Section */}
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 text-sm text-gray-400 border-t border-white/10 pt-4"
                  >
                    {skill.details}
                  </motion.div>
                )}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
    </section>
  );
}

export default Skills;
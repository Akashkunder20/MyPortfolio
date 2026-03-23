import React, { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";

function EducationSection() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section
      id="education"
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 px-6 md:px-20 scroll-mt-20"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-blue-400">My Journey</span>
      </h2>

      {/* 🔥 Toggle Bar */}
      <div className="flex justify-center mb-16">
        <div className="flex bg-white/5 border border-white/10 rounded-full p-2 backdrop-blur-lg shadow-lg">

          {/* EDUCATION */}
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 rounded-full text-sm transition-all duration-300
              ${
                activeTab === "education"
                  ? "bg-white/10 text-white shadow-inner"
                  : "text-gray-400 hover:text-white"
              }`}
          >
            📘 EDUCATION
          </button>

          {/* EXPERIENCE */}
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-2 rounded-full text-sm transition-all duration-300
              ${
                activeTab === "experience"
                  ? "bg-white/10 text-white shadow-inner"
                  : "text-gray-400 hover:text-white"
              }`}
          >
            💼 EXPERIENCE
          </button>

        </div>
      </div>

      {/* Content */}
      {activeTab === "education" ? <Education /> : <Experience />}
    </section>
  );
}

export default EducationSection;
import React from "react";
import { FaFilePdf, FaCheckCircle } from "react-icons/fa";

import dataMiningImg from "../assets/data_mining.png";
import webTechImg from "../assets/web_tech.png";

function Certifications() {
  const certifications = [
    {
      title: "Data Mining",
      desc: "SWAYAM / NPTEL certification course completion.",
      img: dataMiningImg,
      pdf: "/Data_Mining.pdf",
      duration: "8 Week Course",
    },
    {
      title: "Web Technology",
      desc: "SWAYAM / NPTEL certification course completion.",
      img: webTechImg,
      pdf: "/Web_Technology.pdf",
      duration: "4 Week Course",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="group relative rounded-2xl p-[1.5px] bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-transparent hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-500"
        >
          <div className="relative bg-[#0d1424] backdrop-blur-lg rounded-2xl shadow-lg group-hover:scale-[1.03] transition-transform duration-300 p-6 flex flex-col h-full overflow-hidden">
            {/* Verified badge */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-black/50 backdrop-blur-md border border-emerald-400/30 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full">
              <FaCheckCircle className="text-[10px]" />
              Verified
            </div>

            {/* Image with score badge overlay */}
            <div className="relative mb-4">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              {/* Score badge */}
             
            </div>

            {/* Issuer pill */}
            <span className="inline-block w-fit text-[11px] tracking-wide uppercase text-purple-300 bg-purple-500/10 border border-purple-400/20 px-3 py-1 rounded-full mb-3 mt-2">
              SWAYAM • NPTEL
            </span>

            {/* Title */}
            <h3 className="text-xl font-bold mb-1 text-white">
              {cert.title}
            </h3>

            {/* Duration */}
            <p className="text-xs text-gray-500 mb-3">{cert.duration}</p>

            {/* Description */}
            <p className="text-gray-400 mb-5 grow text-sm">{cert.desc}</p>

            {/* Button */}
            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 mt-auto bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500 hover:to-purple-500 border border-blue-400/30 hover:border-transparent text-blue-300 hover:text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-300"
            >
              <FaFilePdf /> View Certificate
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Certifications;
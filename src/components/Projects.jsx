import React from "react";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";

import weatherImg from "../assets/weather.jpg";
import complaintImg from "../assets/complaint.jpg";
import stockImg from "../assets/stock.jpg";
import stockImg2 from "../assets/stock2.png";


function Projects() {
  const projects = [
    {
      title: "Complaint Management System",
      desc: "A MERN stack system with dashboard, analytics, and complaint tracking.",
      img: complaintImg,
      github: "https://github.com/your-repo/complaint",
      //live: "https://your-live-link.com/complaint",
    },
    {
      title: "Weather Forecasting System",
      desc: "Forecasting weather using openweathermap API key.",
      img: weatherImg,
      github: "https://github.com/Akashkunder20/weather-app1",
      //live: "https://your-live-link.com/weather",
    },
    {
      title: "Research Paper",
      desc: "Stock Close Price Prediction.",
      img: stockImg2,
      github: "https://github.com/Akashkunder20/Research-Paper-Msc",
      //live: "https://your-live-link.com/stock",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white py-16 px-6 md:px-20 scroll-mt-20"
    >
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text 
                     bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 
                     mb-12 text-center tracking-wide">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg 
                       hover:scale-105 transition-transform duration-300 p-6 flex flex-col"
          >
            {/* Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-500 hover:scale-105"
            />

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-blue-300">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-4 grow">{project.desc}</p>

            {/* Links */}
            <div className="flex gap-6 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-200 transition"
              >
                <SiGithub /> GitHub
              </a>
              {/* <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-pink-400 hover:text-pink-200 transition"
              >
                <BiLinkExternal /> Live
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

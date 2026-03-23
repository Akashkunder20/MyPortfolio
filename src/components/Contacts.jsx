import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black text-white py-20 px-6 md:px-20 scroll-mt-20 overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 blur-2xl"></div>

      <h2 className="text-4xl font-bold text-center mb-12 text-purple-300 relative">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 relative">

        {/* 🔥 LEFT SIDE */}
        <div className="space-y-6">

          <p className="text-gray-300 text-lg">
            Open to internships, freelance, and exciting tech collaborations 🚀
          </p>

          {/* 📍 Location */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-lg">
            <FaMapMarkerAlt className="text-red-400 text-xl" />
            <p className="text-gray-300">Udupi, Karnataka, India</p>
          </div>

          {/* 💼 Availability */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-lg">
            <FaBriefcase className="text-green-400 text-xl" />
            <p className="text-gray-300">Available for Internship / Full-time</p>
          </div>

          {/* ✉️ Email */}
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-lg hover:scale-105 transition">
            <FaEnvelope className="text-purple-400 text-xl" />
            <a
              href="mailto:akashkunder1020@gmail.com"
              className="text-purple-300 hover:underline"
            >
              akashkunder1020@gmail.com
            </a>
          </div>

          {/* 💬 WhatsApp Quick Chat */}
          <a
            href="https://wa.me/918197662038"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-green-500 hover:bg-green-600 
            text-white font-semibold py-3 rounded-xl transition shadow-lg"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* 🔥 RIGHT SIDE */}
        <div className="flex flex-col justify-center items-center space-y-6">

          {/* 🌐 Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://github.com/Akashkunder20"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 
              hover:scale-110 hover:shadow-[0_0_15px_#9333ea] transition"
            >
              <FaGithub className="text-2xl" />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white/5 border border-white/10 
              hover:scale-110 hover:shadow-[0_0_15px_#3b82f6] transition"
            >
              <FaLinkedin className="text-2xl text-blue-400" />
            </a>

            <a
              href="mailto:akashkunder1020@gmail.com"
              className="p-4 rounded-full bg-white/5 border border-white/10 
              hover:scale-110 hover:shadow-[0_0_15px_#a855f7] transition"
            >
              <FaEnvelope className="text-2xl text-purple-400" />
            </a>
          </div>

          {/* 🚀 CTA CARD */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 
          p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">
              Let’s Build Something Amazing
            </h3>
            <p className="text-sm text-gray-200 mb-4">
              I’m always excited to work on real-world impactful projects.
            </p>

            <a
              href="mailto:akashkunder1020@gmail.com"
              className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Hire Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
import React from "react";
import profileImg from "../assets/Akash.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen bg-linear-to-br from-gray-900 via-black to-gray-800 text-white flex items-center px-4 overflow-hidden"
    >
      
      {/* Shooting Stars */}
      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-shooting"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></span>
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>

      {/* MAIN CONTENT (LEFT + RIGHT) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-text-shimmer">
            Hi, I'm Akash
          </h1>

          <p className="text-lg mb-8 text-gray-300">
            <span className="text-blue-400 font-semibold">
              A Full Stack Developer
            </span>
          </p>

          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="#projects"
              className="border border-blue-400 px-6 py-2 rounded-lg hover:bg-blue-400 hover:text-black transition transform hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-purple-400 px-6 py-2 rounded-lg hover:bg-purple-400 hover:text-black transition transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (PROFILE CARD) */}
       {/* RIGHT SIDE (ADVANCED PROFILE CARD) */}
<div className="flex justify-center">
  <div
  className="relative w-[280px] h-[360px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-lg transition-transform duration-200 ease-out will-change-transform"
  onMouseMove={(e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 10; // left-right
    const rotateX = ((midY - y) / midY) * 10; // up-down

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  }}
  onMouseLeave={(e) => {
    const card = e.currentTarget;
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  }}
>

    {/* 🔥 Animated Gradient Border */}
    <div className="absolute inset-0 rounded-3xl p-[2px] bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 animate-border">
      <div className="w-full h-full rounded-3xl bg-black/80 backdrop-blur-lg"></div>
    </div>

    {/* Glow */}
    <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-60"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
      <img
        src={profileImg}
        alt="Akash"
        className="w-32 h-32 object-cover rounded-full border-4 border-white/30 shadow-lg mb-4 transition duration-300 hover:scale-110"
      />

      <h2 className="text-2xl font-bold text-white">
        Akash Kunder
      </h2>

     <p className="text-sm text-blue-400 font-medium">
  Full Stack Intern | MSc Student
</p>
    </div>

    {/* ✨ Floating particles */}
    <div className="absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute w-[2px] h-[2px] bg-blue-400 rounded-full animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>

  </div>
</div>

      </div>

      {/* Animations */}
      <style>
        {`
          .animate-shooting {
            animation: shooting 3s linear infinite;
          }
          @keyframes shooting {
            0% { transform: translate(0,0) scale(1); opacity: 1; }
            100% { transform: translate(100px, -200px) scale(0.5); opacity: 0; }
          }

          .animate-float {
            animation: float linear infinite;
          }
          @keyframes float {
            0% { transform: translateY(0); opacity: 0.8; }
            50% { transform: translateY(-20px); opacity: 1; }
            100% { transform: translateY(0); opacity: 0.8; }
          }

          .animate-text-shimmer {
            background-size: 200% auto;
            animation: shimmer 3s linear infinite;
          }
          @keyframes shimmer {
            to { background-position: 200% center; }
          }

          .animate-particle {
            animation: particle linear infinite;
          }
          @keyframes particle {
            0% { transform: translateY(0); opacity: 0.5; }
            50% { transform: translateY(-20px); opacity: 1; }
            100% { transform: translateY(0); opacity: 0.5; }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
//import akashImg from "../assets/Akash.jpg";
import cricketImg from "../assets/cricket.png";
import techImg from "../assets/techimg.png";
//import stockImg from "../assets/stock.jpg";
import akImg from "../assets/AKASH1.jpg"
import { HiArrowRight } from "react-icons/hi";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";



const heroCards = [
  { id: 1, img: akImg, tag: "I CODE", role: "ENGINEER" },
  { id: 2, img: cricketImg, tag: "I TRAVEL", role: "TRAVELER" },
  { id: 3, img: cricketImg, tag: "I PLAY", role: "ATHLETE" },
  { id: 4, img: techImg, tag: "I EXPLORE", role: "EXPLORER" },
];


export default function Hero() {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(null);
  const cardRef = useRef(null);

  // Tilt effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `
  perspective(1000px)
  rotateX(${rotateX}deg)
  rotateY(${rotateY}deg)
  scale(1.05)
`;
card.style.transition = "transform 0.2s ease"; // smooth tilt
  }

  const resetTilt = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  // Update clock
  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Cycle hero cards
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen text-white relative overflow-hidden px-6 from-gray-900 via-black to-gray-800"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center min-h-screen">
        {/* LEFT: Info */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-4 mb-4">
            {["FULL STACK", "MSC - 2026", "OPEN TO WORK"].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-xs border border-cyan-400/30 rounded-full bg-cyan-400/5 text-cyan-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="space-y-6 mt-6 max-w-2xl">
  {[
    "I'm a full-stack developer with a deep love for building things that feel alive — interfaces that breathe, APIs that sing, and systems that scale.",
    "Currently pursuing MSc Computer Science at Mahatma Gandhi Memorial College Udupi. I work with React, Postman API, MongoDB, and dive into AI pipelines whenever I get the chance.",
    "I enjoy turning complex problems into simple, intuitive solutions, focusing on performance, scalability, and seamless user experience.",
    "Beyond coding, I constantly explore new technologies, experiment with creative ideas, and push myself to build products that are both meaningful and impactful.",
    "I believe in learning by building — every project I create is a step toward mastering my craft and delivering real-world value."
  ].map((text, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.3 }}
      className="p-4 rounded-xl bg-white/5 border border-cyan-400/30 shadow-md"
    >
      <p className="text-cyan-200 leading-relaxed italic">{text}</p>
    </motion.div>
  ))}
</div>
        </motion.div>

        {/* RIGHT: Rotating Card */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-end"
        >
          <div className="relative mt-28">
            <AnimatePresence mode="wait">
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetTilt}
                key={heroCards[index].img}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative bg-white/10 backdrop-blur-2xl border border-green-300/30  hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] rounded-3xl p-3 shadow-2xl transition-all duration-300"
              >
                <img
                  src={heroCards[index].img}
                  alt={heroCards[index].tag}
                  className="w-56 h-64 object-cover rounded-2xl"
                  style={{ transform: "translateZ(40px)" }}
                />
                <div className="mt-3 flex justify-between items-center">
                  <motion.p
                    key={heroCards[index].role}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-cyan-300 text-xs tracking-wider"
                  >
                    {heroCards[index].role}
                  </motion.p>
                  <motion.span
                    key={heroCards[index].tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-white font-semibold text-sm"
                  >
                    {heroCards[index].tag}
                  </motion.span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          

          {/* STATUS BOX */}
          <div className="mt-12 max-w-lg mx-auto grid grid-cols-2 gap-4">
  {[
    { label: "STATUS", value: "ONLINE", color: "text-green-400" },
    { label: "TIME", value: time, color: "text-cyan-300" },
    { label: "LOCATION", value: "Udupi, IN – KA", color: "text-purple-300" },
    { label: "AVAILABILITY", value: "OPEN TO WORK", color: "text-yellow-400" },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-black/40 border-2 border-white/20 rounded-xl p-4 shadow-md hover:scale-105 transition"
    >
      <p className="text-xs text-gray-400">{item.label}</p>
      <p className={`font-bold ${item.color}`}>{item.value}</p>
    </div>
  ))}
</div>

        </motion.div>
        
      </div>
      <div className="flex flex-wrap justify-center gap-6 mb-16" >
          {[
            { label: "GITHUB", icon: <FaGithub />, url: "https://github.com/Akashkunder20", border: "border-gray-500/30" },
            { label: "LINKEDIN", icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", border: "border-blue-500/30" },
            { label: "INSTAGRAM", icon: <FaInstagram />, url: "https://www.instagram.com/_.aksh_kunder._?igsh=MXN2ZjlweWtiOXEzcw==", border: "border-pink-500/30" },
           { label: "RESUME", icon: <HiArrowRight />, url: "/Akash_Resume.pdf", border: "border-purple-500/30" }

          ].map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md ${item.border} border hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition duration-500 animate-float`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-semibold">{item.label}</span>
            </a>
          ))}
        </div>

    </section>
  );
}
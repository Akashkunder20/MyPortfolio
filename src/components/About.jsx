import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cricketImg from "../assets/cricket.png";
import techImg from "../assets/techimg.png";
import akImg from "../assets/AKASH1.JPG";
import travelImg from "../assets/Travel.jpeg";
import { HiArrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram ,FaFilePdf  } from "react-icons/fa";

const heroCards = [
  { id: 1, img: akImg, tag: "I CODE", role: "ENGINEER" },
  { id: 2, img: travelImg, tag: "I TRAVEL", role: "TRAVELER" },
  { id: 3, img: cricketImg, tag: "I PLAY", role: "ATHLETE" },
  { id: 4, img: techImg, tag: "I EXPLORE", role: "EXPLORER" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(null);
  const cardRef = useRef(null);

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
    card.style.transition = "transform 0.2s ease";
  };

  const resetTilt = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

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
              "I believe in learning by building — every project I create is a step toward mastering my craft and delivering real-world value.",
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

      {/* SOCIAL LINKS */}
      <div className="sl-wrapper flex flex-wrap justify-center gap-5 mb-16">
        <style>{`
          .sl-wrapper .sl-social {
            width: 52px;
            height: 52px;
            background-color: rgb(44, 44, 44);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border-radius: 10px;
            transition: background-color 0.3s;
          }
          .sl-wrapper .sl-social:active {
            transform: scale(0.9);
            transition: transform 0.3s;
          }
          .sl-wrapper .sl-icon {
            font-size: 20px;
            color: #fff;
          }
          .sl-wrapper .sl-social:hover .sl-icon {
            animation: sl-slide-in-top 0.3s both;
          }
            .sl-wrapper .sl-label {
  font-size: 12px;
  color: #d1d5db;
  transition: color 0.3s;
}
.sl-wrapper .sl-item:hover .sl-label {
  color: #ffffff;
}
          @keyframes sl-slide-in-top {
            0% { transform: translateY(-50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .sl-github:hover { background-color: #333333; }
          .sl-linkedin:hover { background-color: #0072b1; }
          .sl-instagram:hover { background-color: #d62976; }
          .sl-resume:hover { background-color: #7c3aed; }
        `}</style>

        {[
  { label: "GitHub", icon: <FaGithub />, url: "https://github.com/Akashkunder20", cls: "sl-github" },
  { label: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/akash-kunder-b99289311/", cls: "sl-linkedin" },
  { label: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/_.aksh_kunder._?igsh=MXN2ZjlweWtiOXEzcw==", cls: "sl-instagram" },
  { label: "Resume", icon: <FaFilePdf />, url: "/Akash08_Resume_2026.pdf", cls: "sl-resume" },
].map((item, i) => (
  <a
    key={i}
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    title={item.label}
    className="sl-item flex flex-col items-center gap-2"
  >
    <span className={`sl-social ${item.cls}`}>
      <span className="sl-icon">{item.icon}</span>
    </span>
    <span className="sl-label">{item.label}</span>
  </a>
))}
      </div>
    </section>
  );
}
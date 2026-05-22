"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Reveal from "./reveal";

export default function Hero({
  lang,
}: {
  lang: string;
}) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28"
    >
      <Reveal>
        <div className="container-custom w-full">
          <div className="max-w-5xl">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-5 py-2 rounded-full mb-8 backdrop-blur-xl">
                <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />

                <span className="text-sm text-zinc-300 font-medium">
                  IT Enthusiast
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                {lang === "id"
                  ? "Membangun"
                  : "Building"}

                <br />

                <span className="text-[#00ff88]">
                  <TypeAnimation
                    sequence={
                      lang === "id"
                        ? [
                            "Frontend Modern",
                            2000,
                            "UI/UX Interaktif",
                            2000,
                            "Website Elegan",
                            2000,
                          ]
                        : [
                            "Modern Frontend",
                            2000,
                            "Interactive UI/UX",
                            2000,
                            "Elegant Websites",
                            2000,
                          ]
                    }
                    wrapper="span"
                    speed={40}
                    repeat={Infinity}
                  />
                </span>
              </h1>

              {/* Description */}
              <p className="text-zinc-400 text-lg mt-8 max-w-2xl leading-8">
                {lang === "id"
                  ? "Fresh graduate D3 Teknik Informatika Politeknik Negeri Bandung yang fokus pada frontend development, UI/UX, dan pengembangan web modern dengan pengalaman membangun tampilan yang interaktif dan responsif."
                  : "Fresh graduate in Informatics Engineering from Bandung State Polytechnic focused on frontend development, UI/UX, and modern web development with experience building interactive and responsive interfaces."}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mt-10">
                {/* Contact */}
                <a
                  href="#social"
                  className="
                    bg-[#00ff88]
                    text-black
                    font-bold
                    px-10
                    py-5
                    rounded-2xl
                    hover:scale-105
                    hover:shadow-[0_0_40px_rgba(0,255,136,0.35)]
                    active:scale-95
                    transition-all
                    duration-300
                    text-center
                  "
                >
                  {lang === "id"
                    ? "Hubungi Saya"
                    : "Contact Me"}
                </a>

                {/* Download CV */}
                <a
                  href="/cv-ats.pdf"
                  download
                  className="
                    border
                    border-white/10
                    bg-white/[0.02]
                    backdrop-blur-xl
                    px-10
                    py-5
                    rounded-2xl
                    font-semibold
                    hover:border-[#00ff88]/40
                    hover:text-[#00ff88]
                    hover:bg-[#00ff88]/5
                    transition-all
                    duration-300
                    text-center
                  "
                >
                  {lang === "id"
                    ? "Download CV"
                    : "Download Resume"}
                </a>
              </div>

              {/* Bottom Info */}
              <div className="flex flex-wrap items-center gap-6 mt-14 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
                  ReactJS
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
                  Next.js
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00ff88]" />
                  UI/UX Design
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
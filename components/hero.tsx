"use client";

import { motion } from "framer-motion";

import Reveal from "./reveal";

export default function Hero({ lang }: { lang: string }) {
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
              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full mb-8">
                <div className="w-2 h-2 bg-[#00ff88] rounded-full" />

                <span className="text-sm text-zinc-300">IT Enthusiast</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {lang === "id" ? "Membangun" : "Building"}

                <br />

                <span className="text-[#00ff88]">
                  {lang === "id" ? "Frontend Modern" : "Modern Frontend"}
                </span>

                <br />

                <span className="text-[#00ff88]">
                  {lang === "id" ? "Berpengalaman" : "Experiences"}
                </span>
              </h1>

              {/* Description */}
              <p className="text-zinc-400 text-lg mt-8 max-w-2xl leading-8">
                {lang === "id"
                  ? "Fresh graduate D3 Teknik Informatika Politeknik Negeri Bandung yang fokus pada frontend development, UI/UX, dan web modern experiences."
                  : "Fresh graduate in Informatics Engineering from Bandung State Polytechnic focused on frontend development, UI/UX, and modern web experiences."}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mt-10">
                {/* Contact */}
                <a
                  href="#social"
                  className="bg-[#00ff88] text-black font-bold px-10 py-5 rounded-2xl hover:scale-105 active:scale-95 transition duration-300 text-center"
                >
                  {lang === "id" ? "Hubungi Saya" : "Contact Me"}
                </a>

                {/* CV */}
                <a
                  href="/cv-ats.pdf"
                  download
                  className="border border-white/10 px-10 py-5 rounded-2xl font-semibold hover:border-[#00ff88]/40 hover:text-[#00ff88] transition duration-300 text-center"
                >
                  {lang === "id" ? "Download CV" : "Download Resume"}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

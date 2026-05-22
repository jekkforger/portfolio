"use client";

import { useState } from "react";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Social from "@/components/social";
import Footer from "@/components/footer";
import SmoothScroll from "@/components/smooth-scroll";
import AnimatedCursor from "react-animated-cursor";
import CustomCursor from "@/components/custom-cursor";

export default function Home() {
  const [lang, setLang] = useState("id");

  return (
    <main>
      <CustomCursor />
      <SmoothScroll />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="0,255,136"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
      />

      <Navbar lang={lang} setLang={setLang} />

      <Hero lang={lang} />

      <About lang={lang} />

      <Skills lang={lang} />

      <Experience lang={lang} />

      <Social lang={lang} />

      <Footer />
    </main>
  );
}

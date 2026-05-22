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
import CustomCursor from "@/components/custom-cursor";

export default function Home() {
  const [lang, setLang] = useState("id");

  return (
    <main>
      <CustomCursor />
      <SmoothScroll />
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

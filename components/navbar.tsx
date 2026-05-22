"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./language-toggle";

export default function Navbar({
  lang,
  setLang,
}: {
  lang: string;
  setLang: (lang: string) => void;
}) {

  const menus =
    lang === "id"
      ? [
          {
            name: "Beranda",
            link: "#home",
          },
          {
            name: "Tentang Saya",
            link: "#about",
          },
          {
            name: "Skill",
            link: "#skills",
          },
          {
            name: "Pengalaman",
            link: "#experience",
          },
          {
            name: "Sosial Media",
            link: "#social",
          },
        ]
      : [
          {
            name: "Home",
            link: "#home",
          },
          {
            name: "About",
            link: "#about",
          },
          {
            name: "Skills",
            link: "#skills",
          },
          {
            name: "Experience",
            link: "#experience",
          },
          {
            name: "Social",
            link: "#social",
          },
        ];

  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

      menus.forEach((menu) => {

        const section =
          document.querySelector(
            menu.link
          ) as HTMLElement | null;

        if (!section) return;

        const sectionTop =
          section.offsetTop - 140;

        const sectionHeight =
          section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY <
            sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }

      });

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, [menus]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >

      <div className="container-custom h-20 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold"
        >
          Fahrizal
          <span className="text-[#00ff88]">
            .
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-sm">

          {menus.map((menu) => {

            const isActive =
              activeSection ===
              menu.link.replace("#", "");

            return (
              <a
                key={menu.name}
                href={menu.link}
                className={`transition-all duration-300 hover:text-[#00ff88] ${
                  isActive
                    ? "text-[#00ff88] font-bold"
                    : "text-zinc-400"
                }`}
              >
                {menu.name}
              </a>
            );
          })}

        </nav>

        {/* Desktop Language */}
        <div className="hidden md:block">

          <LanguageToggle
            lang={lang}
            setLang={setLang}
          />

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open
            ? <X size={28} />
            : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/5">

          <div className="flex flex-col gap-6 p-6">

            {menus.map((menu) => {

              const isActive =
                activeSection ===
                menu.link.replace("#", "");

              return (
                <a
                  key={menu.name}
                  href={menu.link}
                  onClick={() => setOpen(false)}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-[#00ff88] font-bold"
                      : "text-zinc-300"
                  }`}
                >
                  {menu.name}
                </a>
              );
            })}

            <LanguageToggle
              lang={lang}
              setLang={setLang}
            />

          </div>

        </div>
      )}

    </header>
  );
}
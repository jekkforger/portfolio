"use client";

export default function LanguageToggle({
  lang,
  setLang,
}: {
  lang: string;
  setLang: (lang: string) => void;
}) {
  return (
    <button
      onClick={() =>
        setLang(lang === "id" ? "en" : "id")
      }
      className="text-sm font-bold text-zinc-400 hover:text-[#00ff88] transition duration-300"
    >
      {lang === "id" ? "EN" : "ID"}
    </button>
  );
}
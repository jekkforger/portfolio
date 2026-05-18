import Reveal from "./reveal";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-5">

        <h3 className="text-xl font-bold">
          Fahrizal<span className="text-[#00ff88]">.</span>
        </h3>

        <p className="text-zinc-500 text-sm">
          © 2026 Frontend Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
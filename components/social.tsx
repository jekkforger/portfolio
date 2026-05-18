import Reveal from "./reveal";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Social({
  lang,
}: {
  lang: string;
}) {

  return (
    <section
      id="social"
      className="section-padding"
    >
      <Reveal>

        <div className="container-custom">

          <h2 className="text-4xl font-bold mb-14">

            {lang === "id"
              ? "Sosial"
              : "Social"}{" "}

            <span className="text-[#00ff88]">
              Media
            </span>

          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Github */}
            <a
              href="https://github.com/jekkforger"
              target="_blank"
              className="card p-8 hover:border-[#00ff88]/30 transition"
            >

              <FaGithub size={40} />

              <h3 className="text-2xl font-bold mt-6">
                Github
              </h3>

              <p className="text-zinc-400 mt-4">

                {lang === "id"
                  ? "Eksplor project frontend dan perjalanan development saya."
                  : "Explore my frontend projects and development journey."}

              </p>

            </a>

            {/* LinkedIn */}
            <a
              href="https://id.linkedin.com/in/fahrizal-mudzaqi-maulana-162549379"
              target="_blank"
              className="card p-8 hover:border-[#00ff88]/30 transition"
            >

              <FaLinkedin size={40} />

              <h3 className="text-2xl font-bold mt-6">
                LinkedIn
              </h3>

              <p className="text-zinc-400 mt-4">

                {lang === "id"
                  ? "Profil profesional dan pengalaman kerja saya."
                  : "Professional profile and work experiences."}

              </p>

            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/jekkforger"
              target="_blank"
              className="card p-8 hover:border-[#00ff88]/30 transition"
            >

              <FaInstagram size={40} />

              <h3 className="text-2xl font-bold mt-6">
                Instagram
              </h3>

              <p className="text-zinc-400 mt-4">

                {lang === "id"
                  ? "Konten kreatif dan aktivitas sosial saya."
                  : "Creative content and social activities."}

              </p>

            </a>

          </div>

        </div>

      </Reveal>
    </section>
  );
}
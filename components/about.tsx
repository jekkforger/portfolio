import Reveal from "./reveal";

export default function About({
  lang,
}: {
  lang: string;
}) {

  return (
    <section
      id="about"
      className="section-padding"
    >
      <Reveal>

        <div className="container-custom">

          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT */}
            <div>

              <h2 className="text-4xl font-bold">
                {lang === "id" ? "Tentang" : "About"}{" "}

                <span className="text-[#00ff88]">
                  {lang === "id" ? "Saya" : "Me"}
                </span>
              </h2>

              <p className="text-zinc-400 mt-8 leading-8">
                {lang === "id"
                  ? "Saya adalah fresh graduate D3 Teknik Informatika Politeknik Negeri Bandung yang memiliki fokus pada frontend development, UI/UX, dan pengembangan aplikasi web modern."
                  : "I am a fresh graduate in Informatics Engineering from Bandung State Polytechnic with a strong focus on frontend development, UI/UX, and modern web applications."}
              </p>

              <p className="text-zinc-400 mt-5 leading-8">
                {lang === "id"
                  ? "Berpengalaman menggunakan ReactJS, JavaScript, TailwindCSS, serta memiliki pemahaman dalam quality assurance dan dokumentasi teknis."
                  : "Experienced in ReactJS, JavaScript, TailwindCSS, with understanding in quality assurance and technical documentation."}
              </p>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-5">

              <div className="card p-8 glow">
                <h3 className="text-5xl font-bold text-[#00ff88]">
                  React
                </h3>

                <p className="text-zinc-400 mt-4">
                  Frontend Development
                </p>
              </div>

              <div className="card p-8 glow">
                <h3 className="text-5xl font-bold text-[#00ff88]">
                  UI/UX
                </h3>

                <p className="text-zinc-400 mt-4">
                  Modern Interface
                </p>
              </div>

              <div className="card p-8 glow">
                <h3 className="text-5xl font-bold text-[#00ff88]">
                  QA
                </h3>

                <p className="text-zinc-400 mt-4">
                  Quality Assurance
                </p>
              </div>

              <div className="card p-8 glow">
                <h3 className="text-5xl font-bold text-[#00ff88]">
                  Team
                </h3>

                <p className="text-zinc-400 mt-4">
                  Collaboration
                </p>
              </div>

            </div>

          </div>

        </div>

      </Reveal>
    </section>
  );
}
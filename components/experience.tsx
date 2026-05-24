import Reveal from "./reveal";

export default function Experience({
  lang,
}: {
  lang: string;
}) {

  const experiences =
    lang === "id"
      ? [
          {
            title: "Technical Writer & Frontend Developer",
            company: "PT Padepokan Tujuh Sembilan",
            year: "2024",
            desc: "Mendokumentasikan kode, membuat UI/UX aplikasi presensi, dan mengembangkan frontend menggunakan ReactJS.",
          },
          {
            title: "Software Developer",
            company: "X Green Digital Solution",
            year: "2025",
            desc: "Mengembangkan aplikasi sesuai dengan kebutuhan klien.",
          },
          {
            title: "Data Annotator",
            company: "Kupu ID",
            year: "Sekarang",
            desc: "Melabeli objek sesuai dengan guide line yang sudah dibuat.",
          },
        ]
      : [
          {
            title: "Technical Writer & Frontend Developer",
            company: "PT Padepokan Tujuh Sembilan",
            year: "2024",
            desc: "Documented code, designed UI/UX for attendance applications, and developed frontend using ReactJS.",
          },
          {
            title: "Software Developer",
            company: "X Green Digital Solution",
            year: "2025",
            desc: "Developed applications based on client requirements.",
          },
          {
            title: "Data Annotator",
            company: "Kupu ID",
            year: "Present",
            desc: "Annotated objects based on predefined guidelines.",
          },
        ];

  return (
    <section
      id="experience"
      className="section-padding"
    >
      <Reveal>

        <div className="container-custom">

          <h2 className="text-4xl font-bold mb-14">

            {lang === "id"
              ? "Pengalaman"
              : "Work"}{" "}

            <span className="text-[#00ff88]">

              {lang === "id"
                ? "Kerja"
                : "Experience"}

            </span>

          </h2>

          <div className="space-y-8">

            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="card p-8"
              >

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {exp.title}
                    </h3>

                    <p className="text-[#00ff88] mt-2">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-zinc-500">
                    {exp.year}
                  </span>

                </div>

                <p className="text-zinc-400 mt-6 leading-8">
                  {exp.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </Reveal>
    </section>
  );
}
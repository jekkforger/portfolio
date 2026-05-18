"use client";

import Reveal from "./reveal";

import * as motion from "framer-motion/client";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Next.js",
  "TailwindCSS",
  "TypeScript",
  "PHP",
  "Laravel",
  "MySQL",
  "UI/UX",
  "Quality Assurance",
  "Data Annotator",
];

export default function Skills({
  lang,
}: {
  lang: string;
}) {

  return (
    <section
      id="skills"
      className="section-padding"
    >
      <Reveal>

        <div className="container-custom">

          <h2 className="text-4xl font-bold mb-14">

            {lang === "id"
              ? "Skill"
              : "My"}{" "}

            <span className="text-[#00ff88]">

              {lang === "id"
                ? "Saya"
                : "Skills"}

            </span>

          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="card p-8 hover:border-[#00ff88]/30 transition hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold">
                  {skill}
                </h3>
              </motion.div>
            ))}

          </div>

        </div>

      </Reveal>
    </section>
  );
}
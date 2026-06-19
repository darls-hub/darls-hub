import { Profilepng } from "@/assets";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";


export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="pt-40 pb-20">

        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            About Me
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mt-16">

            <img
              src={Profilepng.src}
              alt="Darlington"
              className="rounded-3xl"
            />

            <div>

              <h2 className="text-3xl font-semibold">
                Darlington Awagu
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                I'm a graphic designer specializing in healthcare,
                wellness, mental health and lifestyle brands.
                My work focuses on creating visuals that drive
                engagement, increase trust and strengthen brand identity.
              </p>

              <div className="mt-10">

                <h3 className="font-bold text-2xl mb-4">
                  Skills
                </h3>

                <div className="flex flex-wrap gap-3">

                  {[
                    "Social Media Design",
                    "Brand Identity",
                    "Print Design",
                    "Banner Design",
                    "Marketing Design",
                    "Adobe Photoshop",
                    "Adobe Illustrator",
                    "Canva"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 px-4 py-2 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
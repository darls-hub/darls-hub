import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <section className="pt-40 pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Portfolio
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {projects.map((project) => (
              <Link
                href={`/portfolio/${project.slug}`}
                key={project.slug}
              >
                <div className="rounded-3xl overflow-hidden shadow-lg">

                  <img
                    src={typeof project.image === "string" ? project.image : project.image.src}
                    alt={project.title}
                    className="w-full h-[350px] object-cover"
                  />

                  <div className="p-6">

                    <h2 className="font-bold text-xl">
                      {project.title}
                    </h2>

                    <p className="text-gray-500">
                      {project.category}
                    </p>

                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
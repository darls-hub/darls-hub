import { projects } from "@/data/projects";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <>
      <Navbar />

      <section className="pt-40 pb-20">

        <div className="max-w-5xl mx-auto px-6">

          <img
            src={typeof project.image === "string" ? project.image : project.image.src}
            alt={project.title}
            className="rounded-3xl w-full"
          />

          <h1 className="text-5xl font-bold mt-10">
            {project.title}
          </h1>

          <p className="mt-6 text-gray-600">
            This project showcases branding,
            campaign design, typography,
            color systems and strategic marketing visuals.
          </p>

        </div>

      </section>

      <Footer />
    </>
  );
}
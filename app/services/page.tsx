import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Social Media Design",
      description:
        "Professional graphics optimized for engagement and conversions."
    },
    {
      title: "Healthcare Marketing",
      description:
        "Campaign graphics for healthcare and wellness organizations."
    },
    {
      title: "Brand Identity",
      description:
        "Logos, visual systems and brand assets."
    },
    {
      title: "Print Design",
      description:
        "Flyers, brochures, banners and event materials."
    }
  ];

  return (
    <>
      <Navbar />

      <section className="pt-40 pb-20">

        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Services
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            {services.map((service) => (
              <div
                key={service.title}
                className="border rounded-3xl p-8"
              >
                <h2 className="text-2xl font-bold">
                  {service.title}
                </h2>

                <p className="mt-4 text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";


export default function AboutPage() {
  return (
    <>
      <Navbar />

      <section className="container-custom py-20">

        <h1 className="text-5xl font-bold">
          About Me
        </h1>

        <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-4xl">
          Hi, I'm Darlington Awagu, founder of Darls Hub.

          I'm a Graphic Designer passionate about helping businesses
          communicate their message through compelling visual design.

          My work combines creativity, branding, and marketing strategy
          to create visuals that not only look great but also support
          business growth and audience engagement.
        </p>

      </section>

      <section className="container-custom py-12">

        <h2 className="text-4xl font-bold">
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="border rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Social Media Design
            </h3>

            <ul className="mt-4 space-y-2">
              <li>Instagram Posts</li>
              <li>Facebook Graphics</li>
              <li>Story Designs</li>
              <li>Carousel Designs</li>
            </ul>
          </div>

          <div className="border rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Marketing & Promotional Design
            </h3>

            <ul className="mt-4 space-y-2">
              <li>Promotional Campaigns</li>
              <li>Advertisement Graphics</li>
              <li>Event Marketing Materials</li>
              <li>Awareness Campaigns</li>
            </ul>
          </div>

          <div className="border rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Print Design
            </h3>

            <ul className="mt-4 space-y-2">
              <li>Flyers</li>
              <li>Posters</li>
              <li>Roll-Up Banners</li>
              <li>Brochures</li>
            </ul>
          </div>

          <div className="border rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Branding & Visual Identity
            </h3>

            <ul className="mt-4 space-y-2">
              <li>Brand Assets</li>
              <li>Marketing Collateral</li>
              <li>Promotional Materials</li>
              <li>Visual Content Creation</li>
            </ul>
          </div>

        </div>

      </section>

      <section className="container-custom py-12">

        <h2 className="text-4xl font-bold">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4 mt-8">

          {[
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Canva",
            "Marketing Design",
            "Print Design",
            "Brand Identity",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 px-5 py-3 rounded-full"
            >
              {skill}
            </span>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}
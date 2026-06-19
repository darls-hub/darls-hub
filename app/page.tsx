import { Profilepng } from "@/assets";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">

          <div>

            <h1 className="text-6xl font-bold leading-tight">

              Strategic Design
              <br />
              For Healthcare &
              <br />
              Wellness Brands

            </h1>

            <p className="mt-6 text-lg text-gray-600">

              I create high-converting social media campaigns,
              healthcare marketing materials, event promotions,
              print assets and brand visuals that help businesses grow.

            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="/portfolio"
                className="bg-[#001F54] text-white px-8 py-4 rounded-full"
              >
                View Work
              </a>

              <a
                href="/contact"
                className="border px-8 py-4 rounded-full"
              >
                Contact Me
              </a>

            </div>

          </div>

          <div className="flex justify-center">

            <img
              src={Profilepng.src}
              alt="Darlington"
              className="rounded-3xl shadow-xl max-h-[500px]"
            />

          </div>

        </div>

      </section>
    </>
  );
}
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";


export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="pt-40 pb-20">

        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Let's Work Together
          </h1>

          <div className="mt-10 space-y-6 text-lg">

            <p>
              Email:
              <br />
              darlingtonawagu@gmail.com
            </p>

            <p>
              Phone:
              <br />
              +2348062549081
            </p>

            <p>
              Instagram:
              <br />
              @darls_official
            </p>

            <p>
              LinkedIn:
              <br />
              https://www.linkedin.com/in/darlington-awagu-25219797
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
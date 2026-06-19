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
              <a href="mailto:darlingtonawagu@gmail.com">darlingtonawagu@gmail.com</a>
            </p>

            <p>
              Phone:
              <br />
              +2348062549081
            </p>

            <p>
              Instagram:
              <br />
              <a href="https://instagram.com/darls_official">@darls_official</a>
            </p>

            <p>
              LinkedIn:
              <br />
              <a href="https://www.linkedin.com/in/darlington-awagu-25219797">darlington-awagu</a>
            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
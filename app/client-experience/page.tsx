import Footer from "../component/Footer";
import Navbar from "../component/Navbar";


export default function ClientExperiencePage() {
  return (
    <>
      <Navbar />

      <section className="container-custom py-20">

        <h1 className="text-5xl font-bold">
          Client Experience
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl">
          A selection of organizations and businesses I've partnered with
          to create impactful marketing and visual communication materials.
        </p>

        <div className="overflow-x-auto mt-12">

          <table className="w-full border border-gray-200">

            <thead className="bg-gray-100">

              <tr>

                <th className="text-left p-4">
                  Client
                </th>

                <th className="text-left p-4">
                  Instagram Handle
                </th>

                <th className="text-left p-4">
                  Industry
                </th>

                <th className="text-left p-4">
                  Period
                </th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-t">
                <td className="p-4">Radiance MedSpa & Wellness SA</td>
                <td className="p-4">@radiancemedspasa</td>
                <td className="p-4">Medical Spa & Wellness</td>
                <td className="p-4">2025 – Present</td>
              </tr>

              <tr className="border-t">
                <td className="p-4">HerSpace Mental Wellness</td>
                <td className="p-4">@herspace.satx</td>
                <td className="p-4">Mental Health Services</td>
                <td className="p-4">2025 – Present</td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Twinkle Healthcare</td>
                <td className="p-4">@twinklehealthcare</td>
                <td className="p-4">Healthcare Services</td>
                <td className="p-4">2025 – Present</td>
              </tr>

              <tr className="border-t">
                <td className="p-4">JC Thistle</td>
                <td className="p-4">@jcthistle</td>
                <td className="p-4">Beverage & Alcohol Services</td>
                <td className="p-4">2022 – Present</td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Iperstock Investment Management</td>
                <td className="p-4">@iperstockinvestmentmanagement</td>
                <td className="p-4">Finance Services</td>
                <td className="p-4">2022 – Present</td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Dakodi Vogue</td>
                <td className="p-4">@dakodivogue_woman</td>
                <td className="p-4">Fashion Services</td>
                <td className="p-4">2024 – Present</td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Stay Offtrack</td>
                <td className="p-4">@stayofftrackhq</td>
                <td className="p-4">Cloth Branding Services</td>
                <td className="p-4">2025 – Present</td>
              </tr>

              <tr className="border-t">
                <td className="p-4">Gidanka</td>
                <td className="p-4">@gidan_ka</td>
                <td className="p-4">Real Estate Services</td>
                <td className="p-4">2021 – 2023</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

      <Footer />
    </>
  );
}
export default function Footer() {
  return (
    <footer className="bg-[#001F54] text-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        <h3 className="text-2xl font-bold">
          Darls Hub
        </h3>

        <p className="mt-4 text-gray-300 max-w-lg">
          Healthcare Marketing Designer helping brands create
          memorable campaigns, social media graphics, print materials,
          and brand experiences.
        </p>

        <div className="mt-8 border-t border-white/20 pt-6">
          © {new Date().getFullYear()} Darls Hub. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}
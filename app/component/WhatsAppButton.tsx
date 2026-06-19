import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/2348062549081"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-5 py-4 rounded-full shadow-lg"
    >
      WhatsApp
    </Link>
  );
}
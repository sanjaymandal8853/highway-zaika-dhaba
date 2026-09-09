
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

function Hero() {
  const whatsappNumber = "919999999999";

  const openWhatsApp = () => {
    const message =
      "Hello Highway Zaika Dhaba! I would like to know about your menu.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* Dhaba Cover Image */}
      <img
        src="/images/dhaba-cover.png"
        alt="Highway Zaika Dhaba authentic Indian food"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 text-white">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-300">
            Authentic Indian Dhaba
          </p>

          <h1 className="text-5xl font-black leading-tight sm:text-6xl md:text-7xl">
            Real Desi Taste,
            <span className="block text-orange-400">
              Straight From Our Tandoor
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Enjoy delicious Punjabi food, smoky tandoori dishes, hot parathas
            and refreshing lassi at Highway Zaika Dhaba.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-bold transition hover:bg-orange-600"
            >
              View Our Menu
              <ArrowRight size={18} />
            </Link>

            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 rounded-full border border-white px-6 py-3 font-bold transition hover:bg-white hover:text-[#2b1608]"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


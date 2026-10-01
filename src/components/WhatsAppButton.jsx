import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  const whatsappNumber = "918303348607";

  const handleClick = () => {
    const message =
      "Hello Highway Zaika Dhaba! I need help with the menu and orders.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-4 font-bold text-white shadow-2xl transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">WhatsApp</span>
    </button>
  );
}

export default WhatsAppButton;
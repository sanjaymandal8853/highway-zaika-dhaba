import { MessageCircle } from "lucide-react";

function MenuCard({ item }) {
  const whatsappNumber = "919999999999";

  const orderItem = () => {
    const message = `Hello! I want to order: ${item.name} - ₹${item.price}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <img
        src={`${item.image}?auto=format&fit=crop&w=800&q=80`}
        alt={item.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-700">
            {item.category}
          </span>

          <span className="font-black text-orange-600">₹{item.price}</span>
        </div>

        <h3 className="text-xl font-black">{item.name}</h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {item.description}
        </p>

        <button
          onClick={orderItem}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2b1608] py-3 font-bold text-white transition hover:bg-orange-600"
        >
          <MessageCircle size={18} />
          Order on WhatsApp
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
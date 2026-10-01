import { useState } from "react";
import { Send } from "lucide-react";

function WhatsAppForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const whatsappNumber = "919999999999";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappMessage = `
Hello Highway Zaika Dhaba!

Name: ${formData.name}
Phone: ${formData.phone}
Message: ${formData.message}
    `;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-lg sm:p-8"
    >
      <h2 className="text-3xl font-black">Send Us a Message</h2>

      <p className="mt-2 text-gray-600">
        Your message will open directly in WhatsApp.
      </p>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="What would you like to ask or order?"
          rows="5"
          required
          className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
        />

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-4 font-bold text-white transition hover:bg-green-600"
        >
          <Send size={18} />
          Send to WhatsApp
        </button>
      </div>
    </form>
  );
}

export default WhatsAppForm;
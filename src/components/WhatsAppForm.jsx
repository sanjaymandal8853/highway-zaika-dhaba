
import { useState } from "react";
import { Send } from "lucide-react";

function WhatsAppForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // WhatsApp number:
  // India country code = 91
  // Do NOT use +, spaces, or hyphens.
  const whatsappNumber = "918303348607";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create WhatsApp message
    const whatsappMessage = `Hello Highway Zaika Dhaba!

Name: ${formData.name}
Phone: ${formData.phone}

Message:
${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    console.log("WhatsApp URL:", whatsappURL);

    // Redirect to WhatsApp
    window.location.href = whatsappURL;

    // Clear form
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
      <h2 className="text-3xl font-black text-gray-900">
        Send Us a Message
      </h2>

      <p className="mt-2 text-gray-600">
        Have a question or want to order food?
        Send us a message directly on WhatsApp.
      </p>

      <div className="mt-6 space-y-4">
        {/* Customer Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          autoComplete="name"
          maxLength={100}
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />

        {/* Customer Phone */}
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          autoComplete="tel"
          maxLength={20}
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />

        {/* Customer Message */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="What would you like to ask or order?"
          rows={5}
          maxLength={2000}
          required
          className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />

        {/* WhatsApp Button */}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-4 font-bold text-white transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        >
          <Send size={18} />
          Send to WhatsApp
        </button>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500">
        You will be redirected to WhatsApp with your message.
      </p>
    </form>
  );
}

export default WhatsAppForm;


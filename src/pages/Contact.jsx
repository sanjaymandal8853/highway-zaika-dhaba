import { Clock, MapPin, Phone } from "lucide-react";
import WhatsAppForm from "../components/WhatsAppForm";

function Contact() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
        <div>
          <p className="font-bold uppercase tracking-[0.2em] text-orange-600">
            Contact Us
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Visit Our Dhaba Today
          </h1>

          <p className="mt-5 max-w-xl leading-8 text-gray-600">
            Visit us with family and friends, or send us a WhatsApp message for
            menu information and food orders.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex gap-4">
              <MapPin className="text-orange-500" />
              <div>
                <h3 className="font-black">Location</h3>
                <p className="text-gray-600">
                  Highway Road, Your City, India
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="text-orange-500" />
              <div>
                <h3 className="font-black">Phone</h3>
                <p className="text-gray-600">+91 99999 99999</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="text-orange-500" />
              <div>
                <h3 className="font-black">Opening Hours</h3>
                <p className="text-gray-600">
                  Monday - Sunday: 8:00 AM - 11:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <WhatsAppForm />
      </div>
    </section>
  );
}

export default Contact;
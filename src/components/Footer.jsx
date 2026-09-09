import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#2b1608] py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-black">🪔 Highway Zaika</h2>
          <p className="mt-4 leading-7 text-gray-300">
            Authentic desi flavors, traditional recipes and warm Dhaba
            hospitality.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-2 text-gray-300">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">Opening Hours</h3>
          <p className="mt-4 text-gray-300">Every Day</p>
          <p className="mt-1 text-orange-300">8:00 AM - 11:30 PM</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Highway Zaika Dhaba. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
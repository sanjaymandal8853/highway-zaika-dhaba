import { Link } from "react-router-dom";
import { Flame, ChefHat, Heart, Utensils } from "lucide-react";
import Hero from "../components/Hero";
import MenuCard from "../components/MenuCard";
import SectionTitle from "../components/SectionTitle";
import menuData from "../data/menuData";

function Home() {
  const features = [
    {
      icon: Flame,
      title: "Authentic Taste",
      text: "Traditional recipes with rich desi spices.",
    },
    {
      icon: ChefHat,
      title: "Fresh Food",
      text: "Every dish is prepared fresh for our guests.",
    },
    {
      icon: Utensils,
      title: "Tandoor Special",
      text: "Hot naan, kebabs and smoky tandoori dishes.",
    },
    {
      icon: Heart,
      title: "Made With Love",
      text: "Warm hospitality and delicious food for everyone.",
    },
  ];

  return (
    <>
      <Hero />

      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Why Choose Us"
            title="A True Dhaba Experience"
            description="Fresh food, traditional recipes and warm desi hospitality."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-sm">
                <Icon className="text-orange-500" size={35} />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-6 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Popular Food"
            title="Our Customer Favorites"
            description="Discover some of the most loved dishes from our Dhaba."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {menuData.slice(0, 4).map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/menu"
              className="inline-block rounded-full bg-orange-500 px-7 py-3 font-bold text-white hover:bg-orange-600"
            >
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
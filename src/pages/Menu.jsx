import MenuCard from "../components/MenuCard";
import SectionTitle from "../components/SectionTitle";
import menuData from "../data/menuData";

function Menu() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Food Menu"
          title="Taste Our Delicious Dishes"
          description="Choose your favorite dish and order directly through WhatsApp."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {menuData.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
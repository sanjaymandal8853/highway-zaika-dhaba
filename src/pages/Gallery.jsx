import SectionTitle from "../components/SectionTitle";
import galleryData from "../data/galleryData";

function Gallery() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle
          eyebrow="Food Gallery"
          title="A Feast For Your Eyes"
          description="A glimpse of the delicious flavors and atmosphere at Highway Zaika Dhaba."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="group relative h-72 overflow-hidden rounded-2xl"
            >
              <img
                src={`${item.image}?auto=format&fit=crop&w=900&q=80`}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-xl font-black text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
function About() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80"
          alt="Indian food"
          className="h-[500px] w-full rounded-3xl object-cover"
        />

        <div>
          <p className="font-bold uppercase tracking-[0.2em] text-orange-600">
            Our Story
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Serving Desi Flavors With Heart
          </h1>

          <p className="mt-6 leading-8 text-gray-600">
            Highway Zaika Dhaba brings the warmth and flavors of traditional
            Indian roadside dining to every guest.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            From buttery curries and hot tandoori breads to refreshing lassi,
            our kitchen celebrates authentic Punjabi and North Indian food.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">
            <div className="rounded-2xl bg-orange-50 p-5">
              <h3 className="text-3xl font-black text-orange-600">50+</h3>
              <p className="mt-1 text-gray-600">Menu Items</p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5">
              <h3 className="text-3xl font-black text-orange-600">10+</h3>
              <p className="mt-1 text-gray-600">Years of Taste</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
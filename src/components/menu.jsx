
import { useEffect, useState } from "react";
import { getMenu } from "../services/api";

export default function Menu() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getMenu()
      .then((data) => setItems(data.items))
      .catch(() => setError("Unable to load menu. Please try again."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article
          key={item._id}
          className="rounded-xl border p-4 shadow-sm"
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full rounded-lg object-cover"
            />
          )}
          <h3 className="mt-3 text-xl font-bold">{item.name}</h3>
          <p className="text-gray-600">{item.description}</p>
          <p className="mt-2 font-semibold">₹{item.price}</p>
        </article>
      ))}
    </section>
  );
}
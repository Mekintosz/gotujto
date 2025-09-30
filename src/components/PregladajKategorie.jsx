import { Link } from "react-router-dom";

const categories = [
  {
    label: "Śniadania",
    icon: "brunch_dining",
    slug: "śniadanie",
  },
  {
    label: "Obiady",
    icon: "dinner_dining",
    slug: "obiad",
  },
  {
    label: "Desery",
    icon: "cake",
    slug: "deser",
  },
  {
    label: "Lunch",
    icon: "lunch_dining",
    slug: "lunch",
  },
];

export default function PregladajKategorie() {
  return (
    <section className="p-4 md:p-6 lg:p-8">
      <h2 className="text-[#1b140d] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-5">
        Przeglądaj Kategorie
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 text-xl md:text-2xl lg:text-3xl">
        {categories.map((category) => (
          <Link
            key={category.slug}
            className="flex flex-col items-center justify-center gap-2 rounded-xl bg-[#f3ede7] p-4 aspect-square text-center text-[#1b140d] hover:bg-[#eaddd0] transition-colors"
            to={`/category/${category.slug}`}
          >
            <span className="material-symbols-outlined large text-[#9a704c]">
              {category.icon}
            </span>
            <p className="font-bold">{category.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

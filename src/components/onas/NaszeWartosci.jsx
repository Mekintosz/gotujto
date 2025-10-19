const values = [
  {
    icon: "favorite",
    title: "Pasja",
    description:
      "Nasza miłość do jedzenia i dzielenia się nim jest sercem wszystkiego, co robimy.",
  },
  {
    icon: "groups",
    title: "Społeczność",
    description:
      "Budowanie przyjaznej i wspierającej przestrzeni dla innych miłośników gotowania.",
  },
  {
    icon: "verified",
    title: "Jakość",
    description:
      "Zobowiązanie do dostarczania sprawdzonych przepisów, którym możesz zaufać.",
  },
  {
    icon: "local_florist",
    title: "Inspiracja",
    description:
      "Zachęcanie do kulinarnej kreatywności i eksploracji w kuchni.",
  },
];

export default function NaszeWartosci() {
  return (
    <section className="px-4 pb-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <h2 className="mb-8 text-center font-headings text-4xl text-[var(--color-text-primary,#383838)] md:text-5xl">
          Nasze wartości
        </h2>
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center rounded-2xl border border-gray-200 bg-[var(--color-background,#FFFDF7)] p-6 text-center shadow-md"
            >
              <span className="material-symbols-outlined text-[var(--color-primary,#E8833A)] !text-5xl">
                {value.icon}
              </span>
              <h4 className="mt-4 font-headings text-xl text-[var(--color-text-primary,#383838)]">
                {value.title}
              </h4>
              <p className="mt-2 text-sm text-[var(--color-text-secondary,#6b5c4b)]">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



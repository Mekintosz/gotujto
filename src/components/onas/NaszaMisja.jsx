export default function NaszaMisja() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <div className="mb-12 w-full rounded-2xl bg-[var(--color-secondary,#F3EAD9)] p-8 text-center md:p-12">
          <span className="material-symbols-outlined text-[var(--color-primary,#E8833A)] !text-6xl">
            lightbulb
          </span>
          <h2 className="mt-4 mb-4 font-headings text-4xl text-[var(--color-text-primary,#383838)] md:text-5xl">
            Nasza misja
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary,#6b5c4b)]">
            Naszą misją jest uczynienie gotowania dostępnym i radosnym dla
            wszystkich, inspirowanie kulinarnej kreatywności i budowanie pełnej
            pasji społeczności wokół miłości do jedzenia. Wierzymy, że dobry
            posiłek może zbliżać ludzi i tworzyć trwałe wspomnienia.
          </p>
        </div>
      </div>
    </section>
  );
}



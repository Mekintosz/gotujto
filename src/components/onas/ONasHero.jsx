export default function ONasHero() {
  return (
    <section className="mt-8 w-full">
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-6 rounded-2xl bg-[var(--color-secondary,#F3EAD9)] p-4 text-center">
        <div className="flex flex-col gap-2 text-[var(--color-text-primary,#383838)]">
          <h1 className="font-headings text-5xl text-[var(--color-primary,#E8833A)] sm:text-6xl">
            O nas
          </h1>
          <p className="mx-auto max-w-md text-lg font-light">
            Odkryj historię, misję i wartości, które tworzą Gotujto.
          </p>
        </div>
      </div>
    </section>
  );
}



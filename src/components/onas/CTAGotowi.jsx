export default function CTAGotowi() {
  return (
    <section className="mt-16 px-4">
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-[var(--color-primary,#E8833A)] p-12 text-center text-white">
        <h2 className="font-headings text-4xl sm:text-5xl">
          Gotowi do gotowania?
        </h2>
        <p className="max-w-xl text-lg">
          Odkryj setki przepisów lub dołącz do naszej tętniącej życiem
          społeczności miłośników jedzenia.
        </p>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <a
            href="/przepisy"
            className="flex h-12 min-w-[160px] items-center justify-center rounded-full bg-[var(--color-background,#FFFDF7)] px-6 text-base font-bold text-[var(--color-text-primary,#383838)] transition-transform duration-200 hover:scale-105"
          >
            Odkryj przepisy
          </a>
          <a
            href="#"
            className="flex h-12 min-w-[160px] items-center justify-center rounded-full border-2 border-white px-6 text-base font-bold transition-transform duration-200 hover:scale-105"
          >
            Dołącz do nas
          </a>
        </div>
      </div>
    </section>
  );
}



export default function NaszaHistoria() {
  return (
    <section className="px-4 py-16">
      <h2 className="mb-6 text-center font-headings text-4xl text-[var(--color-text-primary,#383838)] md:text-5xl">
        Historia
      </h2>
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-12 rounded-2xl md:flex-row">
        <div className="w-full flex-shrink-0 md:w-1/2">
          <div
            className="aspect-square rounded-2xl bg-cover bg-center bg-no-repeat shadow-lg"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBgME4_zOFSP878aEIstuV2CpQLchyfUEkV2ULEnvY7iYWqUdLpUop73yfC9nGk5gmaZx59NiiG-VQkfz80Pk7AryUGW98A1JJ0eL96enUVbKdpEh6SrqJ3X4DfTqlBLwx0mPlp6NyRs1yKTYe6xX2S9L6WIonfKTbV7ylwCSpmYUNHyLt-nvJUmapTvoXSN8sEEQY5_pWRN5HLYQC9zlU0iSGf5sfRzbACobpwxFRC1bV2W8PziHtziKN6ghJY7uE0k8O3ppbWw')",
            }}
          />
        </div>
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <h3 className="text-2xl font-bold text-[var(--color-text-primary,#383838)]">
            Początek pysznej podróży
          </h3>
          <p className="text-base leading-relaxed text-[var(--color-text-secondary,#6b5c4b)]">
            Gotujto narodziło się w małej kuchni z wielkim marzeniem: aby
            gotowanie stało się radosnym i dostępnym doświadczeniem dla każdego.
            To, co zaczęło się jako osobisty blog, rozkwitło w tętniącą życiem
            społeczność miłośników jedzenia, zjednoczonych wspólną pasją do
            tworzenia i dzielenia się pysznymi posiłkami. Od naszego pierwszego
            udostępnionego przepisu do tysięcznego, naszą podróż napędzały
            budowane przez nas więzi i radość, którą widzimy na twarzach tych,
            którzy z nami gotują.
          </p>
        </div>
      </div>
    </section>
  );
}

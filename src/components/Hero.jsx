import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero relative h-[600px] w-full">
      <img
        className="h-full w-full object-cover"
        src="images/annie-spratt-R3LcfTvcGWY-unsplash.jpg"
        alt="A vibrant salad in a white bowl with fresh ingredients"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 text-center">
        <h1 className="mb-4 font-headings text-5xl text-white sm:text-6xl md:text-7xl">
          Posmakuj świata, przepis po przepisie.
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white sm:text-xl">
          Odkryj tysiące przepisów z całego świata. Czy jesteś początkującym,
          czy doświadczonym kucharzem, rozpocznij swoją następną kulinarną
          przygodę z nami.
        </p>
        <Link
          to="/przepisy"
          className="flex h-12 min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-xl bg-[#ec7813] px-6 text-base font-bold leading-normal tracking-[0.015em] text-[#fcfaf8] transition-colors hover:bg-orange-600"
        >
          <span className="truncate">Odkrywaj przepisy</span>
        </Link>
      </div>
    </section>
  );
}

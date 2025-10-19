import ONasHero from "../components/onas/ONasHero.jsx";
import NaszaHistoria from "../components/onas/NaszaHistoria.jsx";
import NaszaMisja from "../components/onas/NaszaMisja.jsx";
import NaszeWartosci from "../components/onas/NaszeWartosci.jsx";
import NaszZespol from "../components/onas/NaszZespol.jsx";
import CTAGotowi from "../components/onas/CTAGotowi.jsx";

export default function ONas() {
  return (
    <main className="flex flex-col mx-auto w-full">
      <div className="mx-auto flex w-full max-w-9xl flex-1 flex-col px-4 pb-16 pt-6 md:px-10 lg:px-20">
        <ONasHero />
        <NaszaHistoria />
        <NaszaMisja />
        <NaszeWartosci />
        <NaszZespol />
        <CTAGotowi />
      </div>
    </main>
  );
}

import Hero from "../components/Hero.jsx";
import PopularnePrzepisy from "../components/PopularnePrzepisy.jsx";
import NowoDodane from "../components/NowoDodane.jsx";

export default function StronGlowna() {
  return (
    <main className="flex-1">
      <Hero />
      <PopularnePrzepisy />
      <NowoDodane />
    </main>
  );
}

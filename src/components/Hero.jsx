import React from "react";

function Hero() {
  return (
    <div className="p-6 flex-col h-62 bg-radial from-amber-200">
      <h1 className="p-6 text-4xl">Witaj na stronie Gotujto</h1>
      <h2 className="p-6 text-xl">
        Tu znajdziesz dobre przepisy dla każdego niezależnie od okazji i pory
        dnia
      </h2>
      {/* <img
        className="max-h-77 mask-radial-from-65% mask-radial-to-94%"
        src="/images/hero.png"
        alt="ingridients on cookingboard"
      /> */}
    </div>
  );
}

export default Hero;

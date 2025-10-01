import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero relative h-[600px] w-full">
      <img
        className="h-full w-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-Mc0bW9QNIq8K6omkjwa8GLAKOvgpsw2_exFXBfyp45Xy_USoBljQha1NtnY07-hXW-nJ_Vvidr3zIn0bLwOZdxxaUxgyilCZ49P5MHJTq1hdQBCjbZxuBsoamAJknYLNZDpNG1aNcaMDr9n7z8JCMnFfFPghc9FmbeOaSkHuUW5eFwusWE0ekGWmduVNTZbKJFpNWjzVl49rtvol_G-km08A2m85AskcZ2P4Pc3gBX_2je3yrxSqs0gVH4zXGKGfzcQu2jvPyw"
        alt="A vibrant salad in a white bowl with fresh ingredients"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 text-center">
        <h1 className="mb-4 font-headings text-5xl text-white sm:text-6xl md:text-7xl">
          Taste the World, One Recipe at a Time.
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white sm:text-xl">
          Discover thousands of recipes from around the globe. Whether you're a
          beginner or a seasoned chef, find your next culinary adventure with
          us.
        </p>
        <Link
          to="/przepisy"
          className="flex h-12 min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-xl bg-[#ec7813] px-6 text-base font-bold leading-normal tracking-[0.015em] text-[#fcfaf8] transition-colors hover:bg-orange-600"
        >
          <span className="truncate">Explore Recipes</span>
        </Link>
      </div>
    </section>
  );
}

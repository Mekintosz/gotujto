import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-secondary bg-background/80 px-6 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-6">
        <a
          className="text-2xl lg:text-3xl flex items-center-safe gap-1 font-logo text-text-logo"
          href="#"
        >
          <img
            className="h-10 lg:h-14"
            src="/images/bakery_dining.svg"
            alt="Crosaint icon"
          />
          Gotujto
        </a>
      </div>
      <nav className="hidden md:flex gap-6 font-primary font-medium">
        <Link
          to={"/"}
          className="text-me text-text-primary hover:text-text-logo"
        >
          Główna
        </Link>
        <Link
          to={"/przepisy"}
          className="text-me text-text-primary hover:text-text-logo"
        >
          Przepisy
        </Link>
        <Link
          to={"/favourites"}
          className="text-me  text-text-primary hover:text-text-logo transition-colors"
        >
          Ulubione przepisy
        </Link>
        <a
          className="text-me  text-text-primary hover:text-text-logo transition-colors"
          href="#"
        >
          O nas
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <button className=" hover:text-primary transition-colors md:hidden">
          <span className="material-symbols-outlined"> menu </span>
        </button>
        <button className="flex hover:text-primary transition-colors">
          <span className="material-symbols-outlined items-center">
            {" "}
            notifications{" "}
          </span>
        </button>
        <img className="h-8 " src="/images/user-circle.svg" alt="avatar" />
      </div>
    </header>
  );
}

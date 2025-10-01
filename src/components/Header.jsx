import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Główna", to: "/" },
  { label: "Przepisy", to: "/przepisy" },
  { label: "Ulubione przepisy", to: "/favourites" },
  { label: "O nas", to: "#" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  const resolveLinkClass = (to) => {
    const baseClass = "text-me transition-colors";
    const activeClass = "text-text-logo";
    const inactiveClass = "text-text-primary hover:text-text-logo";

    if (!to || to.startsWith("#")) {
      return `${baseClass} ${inactiveClass}`;
    }

    const isActive =
      to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

    return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
  };

  return (
    <header className="sticky top-0 z-10 border-b border-secondary bg-background/80 backdrop-blur-sm">
      <div className="flex h-12 items-center justify-between px-6">
        <div className="flex items-center justify-between gap-6">
          <a
            className="flex items-center-safe gap-1 font-logo text-xl text-text-logo lg:text-2xl"
            href="#"
          >
            <img
              className="h-8 lg:h-10"
              src="/images/bakery_dining.svg"
              alt="Crosaint icon"
            />
            Gotujto
          </a>
        </div>
        <nav className="hidden gap-6 font-primary font-medium md:flex">
          {NAV_LINKS.map((item) =>
            item.to.startsWith("#") ? (
              <a
                key={item.label}
                href={item.to}
                className={resolveLinkClass(item.to)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={resolveLinkClass(item.to)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex items-center justify-center rounded-full p-1 text-text-primary transition-colors hover:text-primary md:hidden"
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
          >
            <span className="material-symbols-outlined text-3xl transition-transform duration-200">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
          <button className="flex items-center justify-center text-text-primary transition-colors hover:text-primary">
            <span className="material-symbols-outlined items-center">
              notifications
            </span>
          </button>
          <img className="h-8" src="/images/user-circle.svg" alt="avatar" />
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className={`md:hidden overflow-hidden bg-background/95 px-6 transition-[max-height] duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 py-4 font-primary font-medium">
          {NAV_LINKS.map((item) =>
            item.to.startsWith("#") ? (
              <a
                key={item.label}
                href={item.to}
                onClick={closeMenu}
                className={resolveLinkClass(item.to)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                onClick={closeMenu}
                className={resolveLinkClass(item.to)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </header>
  );
}

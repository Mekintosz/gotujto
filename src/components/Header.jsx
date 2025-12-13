import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Główna", to: "/" },
  { label: "Przepisy", to: "/przepisy" },
  { label: "Ulubione", to: "/favourites" },
  { label: "O nas", to: "/o-nas" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  const resolveLinkClass = (to) => {
    const baseClass = "text-md font-semibold transition-colors";
    const activeClass = "text-primary";
    const inactiveClass = "text-text-primary hover:text-primary";

    if (!to || to.startsWith("#")) {
      return `${baseClass} ${inactiveClass}`;
    }

    const isActive =
      to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

    return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
  };

  return (
    <header className="sticky top-0 z-10 border-b border-b-logo bg-bg-secondary/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        <div>
          <a
            className="flex items-center gap-1 font-logo text-[30px] text-logo lg:text-[34px]"
            href=""
          >
            <span className="material-symbols-outlined items-center logo">
              skillet
            </span>
            <span>Gotujto</span>
          </a>
        </div>
        <nav className="hidden gap-10 font-primary font-medium text-lg md:flex">
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

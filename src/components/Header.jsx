export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-secondary bg-background/80 px-6 py-4 backdrop-blur-sm">
      <div class="flex items-center gap-6">
        <a
          className="flex items-center gap-3 text-3xl font-logo text-text-logo"
          href="#"
        >
          <span className="material-symbols-outlined text-2xl">
            bakery_dining
          </span>
          Gotujto
        </a>
        <nav className="hidden md:flex gap-6 font-primary font-medium">
          <a
            className="text-sm font-medium text-text-primary hover:text-text-logo transition-colors"
            href="#"
          >
            Home
          </a>
          <a
            className="text-sm font-medium text-text-primary hover:text-text-logo transition-colors"
            href="#"
          >
            Recipes
          </a>
          <a
            className="text-sm font-medium text-text-primary hover:text-text-logo transition-colors"
            href="#"
          >
            Community
          </a>
          <a
            className="text-sm font-medium text-text-primary hover:text-text-logo transition-colors"
            href="#"
          >
            About
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-text-secondary hover:text-primary transition-colors md:hidden">
          <span className="material-symbols-outlined"> menu </span>
        </button>
        <button className="text-text-secondary hover:text-primary transition-colors">
          <span className="material-symbols-outlined"> notifications </span>
        </button>
        <div className="size-10 rounded-full bg-cover bg-center bg-blue-700"></div>
      </div>
    </header>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-secondary bg-background px-4 py-8 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="hidden lg:flex flex-col gap-4  text-text-primary">
          <h3 className="text-xl font-bold">
            Zapisz się do naszego newslettera
          </h3>
          <p className="text-text-secondary">
            Otrzymuj najnowsze przepisy i porady kulinarne na swoją skrzynkę.
          </p>
          <form
            className="mt-2 flex w-full max-w-md flex-col gap-2 sm:flex-row"
            action="#"
          >
            <input
              className="form-input w-full flex-grow rounded-xl border border-secondary bg-white px-4 py-2 text-text-primary placeholder:text-text-secondary focus:border-primary focus:ring-primary"
              type="email"
              name="newsletter-email"
              placeholder="Twój adres email"
            />
            <button
              className="h-11 flex-shrink-0 cursor-pointer items-center justify-center rounded-xl bg-primary px-6 font-bold leading-normal tracking-[0.015em] text-background transition-colors hover:bg-orange-400"
              type="submit"
            >
              Zapisz się
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center gap-6 lg:gap-8 md:gap-18 text-center text-text-secondary sm:flex-row sm:justify-center lg:justify-end">
          <div className="flex flex-col gap-2">
            <p className="text-sm">
              &copy; 2025 Gotujto. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex justify-center gap-4 md:justify-start">
              <a
                className="text-sm transition-colors hover:text-text-primary"
                href="#"
              >
                Polityka prywatności
              </a>
              <a
                className="text-sm transition-colors hover:text-text-primary"
                href="#"
              >
                Regulamin
              </a>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" aria-label="Instagram">
              <img
                className="h-8 w-8"
                src="images/Instagram_Glyph_Gradient-64w.png"
                srcSet="images/Instagram_Glyph_Gradient-64w.png 1x, images/Instagram_Glyph_Gradient-128w.png 2x"
                alt="Instagram icon"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <img
                className="h-8 w-8"
                src="images/Facebook_Logo_Primary-64w.png"
                srcSet="images/Facebook_Logo_Primary-64w.png 1x, images/Facebook_Logo_Primary-128w.png 2x"
                alt="Facebook icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

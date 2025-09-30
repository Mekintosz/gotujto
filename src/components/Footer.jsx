export default function Footer() {
  return (
    <footer className="border-t border-secondary bg-background px-4 py-8 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4 text-center text-text-primary md:text-left">
          <h3 className="text-xl font-bold">Sign up for our newsletter</h3>
          <p className="text-text-secondary">
            Get the latest recipes and cooking tips delivered to your inbox.
          </p>
          <form
            className="mt-2 flex w-full max-w-md flex-col gap-2 sm:flex-row"
            action="#"
          >
            <input
              className="form-input w-full flex-grow rounded-xl border border-secondary bg-white px-4 py-2 text-text-primary placeholder:text-text-secondary focus:border-primary focus:ring-primary"
              type="email"
              name="newsletter-email"
              placeholder="Your email address"
            />
            <button
              className="h-11 flex-shrink-0 cursor-pointer items-center justify-center rounded-xl bg-primary px-6 font-bold leading-normal tracking-[0.015em] text-background transition-colors hover:bg-orange-600"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center gap-6 text-center text-text-secondary sm:flex-row sm:justify-center md:justify-end">
          <div className="flex flex-col gap-2">
            <p className="text-sm">&copy; 2024 Gotujto. All rights reserved.</p>
            <div className="flex justify-center gap-4 md:justify-start">
              <a
                className="text-sm transition-colors hover:text-text-primary"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-sm transition-colors hover:text-text-primary"
                href="#"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <img
                className="h-6 w-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD12lrExz3aLsQoBab4Av39bHWwvPJCwIrtZpH_aNcGH1otlKQfkAXMP5RU6GiZSEbasnzMHzQryeUbsGOOPobPZYNvZwM_FZCYkVENi2WLJACnDpFKF-3wi3ZeaPY4i-Vk4sVviMiOH5qZaFqFk3VH7p1VfhFy9WU06QsPHsKoN8t6sMypMdM87IiT2fYN2CTtEF3PEp9H79B2YNNVHTB7R9cyLJE68NYOnFuBe8WQ1_qtgs15ARpOebPDCwWZaxxbRxMgaHvOWg"
                alt="Facebook icon"
              />
            </a>
            <a href="#" aria-label="Instagram">
              <img
                className="h-6 w-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDquaFlb6eC9PhdJedN2QqaZF8TlGDnG5WCGE66GtuASdhu9fbtibs2wYExxWzfWQJ7WCrm5RKtkFMtrgqx-9Rh3_8nLkG_7cLh9qLfMrpGVEOtU8td2Tm-KkliV4oP873k__kfwZTAA4ffuCZduqZsiKDALR41ebXx7Pry5d6DX3RZfo76Z9PiWkkbrdOFo3sYn_9E34prUXtCJoJAjmIoNY9AB0CpaqywR_d5IghPsF6te618t1R7whFy0WwAGj8jLcLSrEpf0g"
                alt="Instagram icon"
              />
            </a>
            <a href="#" aria-label="Pinterest">
              <img
                className="h-6 w-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCHzsEE2bCbjDBs3c095_7EB4pzGrK7q_griUtrpYBH9e-umWi_mlIDXj974lACpnFKHcVnqaz9e9wqJFtSt5-SivWebRX66U-kTtt-bMY0MXXSIojw-ukSLSCwaCQ8xF8l7TTogP366cQxtU8eTgU7gV4EQyDzA99Qfrf4GpJBeWySExw1V8C43XTtokLHCGtBU0f2TJBQ7GQGqFQHxRSK3EMDbHulKg9MWQUBnFEYEF52bJXZzAAnJFYzWT6iA7MaO5LYfOJCg"
                alt="Pinterest icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

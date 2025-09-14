import React from "react";

function Sidebar() {
  return (
    <div>
      <aside className="hidden w-64 shrink-0 border-r border-[var(--secondary-color)] p-6 md:block">
        <h3 className="text-base font-bold uppercase tracking-wider text-[var(--text-secondary)]">
          Categories
        </h3>
        <nav className="mt-6 flex flex-col gap-1">
          <a
            className="flex items-center justify-between rounded-lg bg-[var(--primary-color)]/10 px-4 py-2 text-sm font-semibold text-[var(--primary-color)]"
            href="#"
          >
            <span>All Recipes</span>
            <span className="material-symbols-outlined text-xl">
              chevron_right
            </span>
          </a>
          <a
            className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--secondary-color)] transition-colors"
            href="#"
          >
            <span>Breakfast</span>
            <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
              chevron_right
            </span>
          </a>
          <a
            className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--secondary-color)] transition-colors"
            href="#"
          >
            <span>Lunch</span>
            <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
              chevron_right
            </span>
          </a>
          <a
            className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--secondary-color)] transition-colors"
            href="#"
          >
            <span>Dinner</span>
            <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
              chevron_right
            </span>
          </a>
          <a
            className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--secondary-color)] transition-colors"
            href="#"
          >
            <span>Desserts</span>
            <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
              chevron_right
            </span>
          </a>
          <a
            className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--secondary-color)] transition-colors"
            href="#"
          >
            <span>Snacks</span>
            <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
              chevron_right
            </span>
          </a>
          <a
            className="flex items-center justify-between rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--secondary-color)] transition-colors"
            href="#"
          >
            <span>Drinks</span>
            <span className="material-symbols-outlined text-xl text-[var(--text-secondary)]">
              chevron_right
            </span>
          </a>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;

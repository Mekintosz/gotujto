# Gotujto – Modern Recipe Library

## Short Description

Gotujto is a modern, minimalist recipe library built with React, Vite, and TailwindCSS. It allows users to browse, search, filter, and save recipes in a responsive, Polish-language interface backed by a static JSON data source.

## Features

- Browse a grid of curated recipes with images, titles, and descriptions.
- Search recipes by title within the `/przepisy` view.
- Filter recipes by category (Śniadanie, Lunch, Obiad, Deser) via category tiles and `/kategoria/:category` routes.
- View detailed recipe pages with hero image, description, ingredients list, and step-by-step instructions.
- See dynamically computed "Popularne przepisy" (most viewed) and "Najnowsze przepisy" (latest by `publishedAt`).
- Save and manage favourites stored in `localStorage`, displayed on the `/favourites` page.
- Responsive, TailwindCSS-based UI optimized for modern browsers.

## Tech Stack

- **Frontend**
  - React 19 (`react`, `react-dom`)
  - React Router DOM 7 (`react-router-dom`)
  - Vite 7 (bundler/dev server)
  - TailwindCSS 4 (`tailwindcss`, `@tailwindcss/vite`)
- **Data**
  - Static JSON data in `public/recipes.json` served as `/recipes.json`
- **Tooling**
  - ESLint 9 with React Hooks and React Refresh configs
  - Node.js + npm (scripts and dependency management)

## Project Architecture / Key Concepts

- **SPA with Client-Side Routing**

  - `src/main.jsx` bootstraps the React app and wraps it in `RecipesProvider`.
  - `src/App.jsx` configures routes using `react-router-dom`:
    - `/` – home page (`StronGlowna`)
    - `/przepisy` – all recipes with search and sidebar
    - `/przepisy/:id` – recipe detail page (`RecipePageWrapper` → `RecipePage`)
    - `/kategoria/:category` – category-filtered listing
    - `/favourites` – favourites listing
    - `/o-nas` – about page

- **State Management & Data Flow**

  - `src/hooks/useRecipes.js`:
    - Fetches recipes from `/recipes.json` with `fetch` and `AbortController`.
    - Manages `recipes`, `loading`, and `error` state.
  - `src/contexts/RecipesContext.jsx`:
    - Creates a `RecipesContext` providing `{ recipes, loading, error, favorites, toggleFavourites }`.
    - Initializes `favorites` from `localStorage` key `"favourites"` and persists changes.
  - `src/contexts/useRecipesContext.js`:
    - Convenience hook to access the context across components and pages.

- **UI Composition**

  - **Pages** (`src/pages/`):
    - `StronGlowna.jsx` – home layout combining hero, popular, latest, and category sections.
    - `Przepisy.jsx` – list with search and filtered recipes.
    - `CategoryPage.jsx` – category-based filtering.
    - `RecipePageWrapper.jsx` / `RecipePage.jsx` – detail view with back navigation and favourite toggle.
    - `FavoritesPage.jsx` – favourites listing based on IDs in context.
  - **Components** (`src/components/`):
    - Layout: `Header.jsx`, `Sidebar.jsx`, `Footer.jsx`.
    - Cards & sections: `RecipeCard.jsx`, `Hero.jsx`, `PopularnePrzepisy.jsx`, `NowoDodane.jsx`, `PregladajKategorie.jsx`, plus `onas/*` for the about page.
    - `SearchBox.jsx` – controlled search input with keyboard and button submission.
  - **Utilities** (`src/utils/imageHelpers.js`):
    - Provides `getResponsiveImage` used by `RecipeCard` and `RecipePage` to generate responsive image props.

- **Data Model**
  - `public/recipes.json` defines an array of recipe objects with keys such as:
    - `id`, `title`, `description`, `image`, `category`
    - `prepTime`, `cookTime`
    - `ingredients` (string array)
    - `instructions` (string array)
    - `publishedAt`, `rating`, `views`
  - `PopularnePrzepisy` sorts by `views`; `NowoDodane` sorts by `publishedAt`.

## Configuration

- **Build & Dev Configuration**

  - `vite.config.js`:
    - Uses `@vitejs/plugin-react` and `@tailwindcss/vite`.
    - Contains a simple dev `server.proxy` entry (currently pointing to `src/data/recipes`).
  - `eslint.config.js`:
    - ESLint flat config targeting `**/*.{js,jsx}`.
    - Extends recommended JS, React Hooks, and React Refresh configs.
    - Custom rule: `'no-unused-vars'` ignores variables matching `^[A-Z_]`.

- **Styling & Theme**

  - `src/index.css`:
    - Imports TailwindCSS and Google Fonts.
    - Declares `@theme` CSS variables for fonts and colors (e.g. `--color-primary: #ec7813`).
    - Defines font faces and utility classes for Material Symbols icons.

- **Data**
  - All recipe content is loaded from `public/recipes.json`. Updating this file updates the library without backend changes.
  - Images are served from `public/images/` and referenced by path in the JSON and components (e.g. hero background).

## Folder Structure

```text
.
├── public/
│   ├── recipes.json        # Static recipe data
│   └── images/             # Recipe and UI images
├── src/
│   ├── App.jsx             # Router + main layout
│   ├── main.jsx            # React entry point
│   ├── index.css           # Tailwind + theme configuration
│   ├── assets/             # Additional static assets
│   ├── components/         # Reusable UI components
│   ├── pages/              # Route-level views
│   ├── contexts/           # React context for recipes + favourites
│   ├── hooks/              # Data fetching (useRecipes)
│   └── utils/              # Helpers (e.g., imageHelpers)
├── eslint.config.js        # ESLint flat config
├── vite.config.js          # Vite + Tailwind configuration
└── package.json            # Dependencies and npm scripts
```

## Roadmap / Future Improvements

Based on the existing documentation in this repo, planned or considered enhancements include:

- **UI & UX**

  - Dark mode support.
  - Further optimization of layouts, fonts, and footer for mobile and tablets.

- **Features**

  - Community features such as sharing, comments, ratings, and user-submitted recipes.
  - Meal planner and shopping list generation.
  - User profiles with custom recipe uploads.
  - Ratings, reviews, and social sharing.
  - Multilingual support (e.g. Polish and English).
  - PWA (offline access) capabilities.

- **Backend & Infrastructure**

  - Migrating from static JSON to a backend API (Node/Express with MongoDB or PostgreSQL).
  - Authentication and authorization (e.g. Auth0, Firebase, or custom JWT).
  - Cloud deployment for frontend and backend.

- **Technology Evolution**
  - Migration to TypeScript for stronger typing and maintainability.
  - Possible migration to Next.js for SSR, SEO, and built-in API routes.

## License

This project is licensed under the **MIT License** as indicated in the repository documentation.

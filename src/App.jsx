import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainContent from "./pages/MainContent";
import RecipePageWrapper from "./pages/RecipePageWrapper";
import CategoryPage from "./pages/CategoryPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-1 items-start">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex-1">
                <Hero />
                <MainContent />
              </div>
            }
          />
          <Route
            path="/recipes/:id"
            element={
              <div className="flex-1">
                <RecipePageWrapper />
              </div>
            }
          />
          <Route
            path="/category/:category"
            element={
              <div className="flex-1">
                <CategoryPage />
              </div>
            }
          />
          <Route
            path="/favourites"
            element={
              <div className="flex-1">
                <FavoritesPage />
              </div>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

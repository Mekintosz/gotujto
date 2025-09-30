import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
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
          <Route path="/" element={<MainContent />} />
          <Route path="/recipes/:id" element={<RecipePageWrapper />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/favourites" element={<FavoritesPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import StronGlowna from "./pages/StronGlowna";
import Przepisy from "./pages/Przepisy";
import RecipePageWrapper from "./pages/RecipePageWrapper";
import CategoryPage from "./pages/CategoryPage";
import FavoritesPage from "./pages/FavoritesPage";
import ONas from "./pages/ONas";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="flex flex-1 items-start">
        <Routes>
          <Route path="/" element={<StronGlowna />} />
          <Route
            path="/przepisy"
            element={
              <>
                <Sidebar />
                <Przepisy />
              </>
            }
          />
          <Route
            path="/przepisy/:id"
            element={
              <div className="flex-1">
                <RecipePageWrapper />
              </div>
            }
          />
          <Route
            path="/kategoria/:category"
            element={
              <>
                <Sidebar />
                <CategoryPage />
              </>
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
          <Route path="/o-nas" element={<ONas />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

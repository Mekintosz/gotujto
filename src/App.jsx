import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RecipePageWrapper from "./components/RecipePageWrapper";
import CategoryPage from "./components/CategoryPage";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RecipePageWrapper from "./components/RecipePageWrapper";

function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/recipes/:id" element={<RecipePageWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

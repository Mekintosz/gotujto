import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <Header />
      <div class="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;

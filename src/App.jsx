import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div class="flex flex-1">
        <Sidebar />
      </div>
    </>
  );
}

export default App;

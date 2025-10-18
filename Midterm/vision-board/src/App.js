import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="flex flex-col border mx-4">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<SearchPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

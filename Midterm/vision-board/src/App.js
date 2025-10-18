import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Navbar />
      <div className="col-span-5">
        <Routes>
          <Route path="/" element={<SearchPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

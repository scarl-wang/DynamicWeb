import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/NavBar";
import { VisionBoardProvider } from "./VisionBoardContext";

function App() {
  return (
    <VisionBoardProvider>
      <div className="flex flex-col mx-4">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<SearchPage />}></Route>
            <Route path="/favorites" element={<FavoritesPage />}></Route>
          </Routes>
        </div>
      </div>
    </VisionBoardProvider>
  );
}

export default App;

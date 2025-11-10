import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";

import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Navbar />
      <div className="col-span-5">
        <Routes>
          <Route path="/" element={<ButtonPage />}></Route>
          <Route path="/accordion" element={<AccordionPage />}></Route>
          <Route path="/dropdown" element={<DropdownPage />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;

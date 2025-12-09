import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import useProjectContext from "./hooks/use-project-context";

import NavBar from "./components/ui/NavBar";
import TimerPage from "./components/pages/TimerPage";
import DashboardPage from "./components/pages/DashboardPage";

function App() {
  const { fetchProjects } = useProjectContext();

  useEffect(() => {
    fetchProjects();
  }, []); // needs an empty dependency because we don't want it to constantly rerender

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<TimerPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;

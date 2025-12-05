import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import useProjectContext from "./hooks/use-project-context";

import Navigation from "./components/ui/NavBar";
import TimerPage from "./components/pages/TimerPage";
import DashboardPage from "./components/pages/DashboardPage";
import LogSessionDialog from "./components/pages/LogSessionDialog";

function App() {
  const { fetchProjects } = useProjectContext();

  useEffect(() => {
    fetchProjects();
  }, []); // needs an empty dependency because we don't want it to constantly rerender

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="" element={<TimerPage />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;

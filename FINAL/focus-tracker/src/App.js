import axios from "axios";
import Timer from "./components/pages/Timer";
import Dashboard from "./components/pages/Dashboard";

import Button from "./components/ui/Button";
import { useEffect } from "react";

import useProjectContext from "./hooks/use-project-context";

function App() {
  const { fetchProjects } = useProjectContext();

  useEffect(() => {
    fetchProjects();
  }, []); // needs an empty dependency because we don't want it to constantly rerender

  return (
    <div>
      <Timer />
      <Dashboard />
    </div>
  );
}

export default App;

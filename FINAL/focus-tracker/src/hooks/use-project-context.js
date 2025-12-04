import { useContext } from "react";
import ProjectsContext from "../context/projects";

const useProjectContext = () => {
  return useContext(ProjectsContext);
};

export default useProjectContext;

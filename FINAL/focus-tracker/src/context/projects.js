import { createContext, useState, useCallback } from "react";
import axios from "axios";

const ProjectsContext = createContext();

const Provider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/projects");
    setProjects(response.data);
  }, []);
  // telling react that fetchProjects is frozen in time and will always stay in the same slot of memory
  // const stableFetchTodos = useCallback(fetchTodos, []);

  const createProject = async (title) => {
    const response = await axios.post("http://localhost:3001/projects", {
      title,
    });

    const updatedProjects = [response.data, ...projects];
    setProjects(updatedProjects);
  };

  const deleteProjectById = async (id) => {
    // delete from DB
    await axios.delete(`http://localhost:3001/projects/${id}`);
    // update our local state the same way we did
    const updatedProjects = projects.filter((project) => {
      return project.id !== id;
    });
    setProjects(updatedProjects);
  };

  const editProjectById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/projects/${id}`, {
      title: newTitle,
    });
    const updatedProjects = projects.map((project) => {
      if (project.id === id) {
        return {
          ...project,
          ...response.data,
        };
      }
      return project;
    });

    setProjects(updatedProjects);
  };

  const valuesToShare = {
    projects,
    fetchProjects,
    createProject,
    deleteProjectById,
    editProjectById,
  };
  return (
    <ProjectsContext.Provider value={valuesToShare}>
      {children}
    </ProjectsContext.Provider>
  );
};

export { Provider };
export default ProjectsContext;

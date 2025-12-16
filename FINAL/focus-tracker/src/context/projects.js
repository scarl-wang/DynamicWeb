import { createContext, useState, useCallback } from "react";
import axios from "axios";

const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/projects");
    setProjects(response.data);
  }, []);
  // telling react that fetchProjects is frozen in time and will always stay in the same slot of memory
  // const stableFetchTodos = useCallback(fetchTodos, []);

  const createProject = async (title) => {
    // include an empty sessions array since sessions live inside projects now
    const response = await axios.post("http://localhost:3001/projects", {
      title,
      sessions: [],
    });

    // add new project to the front of the list
    const updatedProjects = [response.data, ...projects];
    setProjects(updatedProjects);

    return response.data;
  };

  const deleteProjectById = async (id) => {
    // delete from DB
    await axios.delete(`http://localhost:3001/projects/${id}`);

    // remove from local state
    const updatedProjects = projects.filter((project) => {
      return project.id !== id;
    });
    setProjects(updatedProjects);
  };

  const editProjectById = async (id, newTitle) => {
    // find the project to prevent losing the sessions
    const currentProject = projects.find(
      (project) => String(project.id) === String(id)
    );

    const response = await axios.put(`http://localhost:3001/projects/${id}`, {
      title: newTitle,
      sessions: currentProject?.sessions || [], // keep existing sessions
    });

    // update local state with edited project
    const updatedProjects = projects.map((project) => {
      if (String(project.id) === String(id)) {
        return response.data;
      }
      return project; // keep others unchanged
    });

    setProjects(updatedProjects);
  };

  const valuesToShare = {
    projects,
    setProjects,
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

export { ProjectsProvider };
export default ProjectsContext;

import { createContext, useCallback } from "react";
import axios from "axios";
import useProjectContext from "../hooks/use-project-context";

const SessionsContext = createContext();

const SessionsProvider = ({ children }) => {
  // get projects and update function from projects context
  const { projects, setProjects } = useProjectContext();

  // create a new session for a project
  const createSession = useCallback(
    async (projectId, duration, notes) => {
      // find the project by id
      const project = projects.find((p) => String(p.id) === String(projectId));

      if (!project) {
        return; // stop if project doesn't exist
      }

      // create the new session object
      const newSession = {
        id: Date.now().toString(), // generate session id separately with timestamp
        duration,
        notes: notes || "",
        timestamp: new Date().toISOString(),
      };

      // add session to project's sessions array
      const updatedSessions = [newSession, ...(project.sessions || [])];

      // update the project in the database
      const response = await axios.put(
        `http://localhost:3001/projects/${projectId}`,
        {
          ...project,
          sessions: updatedSessions, // replace sessions with updated array
        }
      );

      // update local state so the UI refreshes
      const updatedProjects = projects.map((project) => {
        if (String(project.id) === String(projectId)) {
          return response.data; // use the updated project from the server
        }
        return project; // keep other projects unchanged
      });

      setProjects(updatedProjects);
      return newSession;
    },
    [projects, setProjects]
  );

  // get all sessions for a specific project
  const fetchProjectSessions = useCallback(
    (projectId) => {
      const project = projects.find((p) => String(p.id) === String(projectId));
      return project?.sessions || []; // return empty array if project doesn't exist or session is undefined
    },
    [projects, setProjects]
  );

  // calculate total time for a project
  const getTotalProjectTime = useCallback(
    (projectId) => {
      const projectSessions = fetchProjectSessions(projectId);
      // add up all the durations using reduce()
      const total = projectSessions.reduce((sum, session) => {
        return sum + (Number(session.duration) || 0); // use 0 to handle undefined
      }, 0); // 0 is the starting value for sum

      return total;
    },
    [fetchProjectSessions]
  );

  // delete all sessions for a project
  const deleteSessionsByProjectId = useCallback(
    async (projectId) => {
      // find the project
      const project = projects.find((p) => String(p.id) === String(projectId));

      if (!project) return;

      // update the project with an empty sessions array
      const response = await axios.put(
        `http://localhost:3001/projects/${projectId}`,
        {
          ...project,
          sessions: [], // clear all sessions
        }
      );

      // update local state
      const updatedProjects = projects.map((project) => {
        if (String(project.id) === String(projectId)) {
          return response.data;
        }
        return project;
      });

      setProjects(updatedProjects);
    },
    [projects, setProjects]
  );

  const valuesToShare = {
    createSession,
    fetchProjectSessions,
    getTotalProjectTime,
    deleteSessionsByProjectId,
  };

  return (
    <SessionsContext.Provider value={valuesToShare}>
      {children}
    </SessionsContext.Provider>
  );
};

export { SessionsProvider };
export default SessionsContext;

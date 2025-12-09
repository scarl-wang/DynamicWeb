import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const SessionsContext = createContext();

const SessionsProvider = ({ children }) => {
  const [sessions, setSessions] = useState([]);

  // fetch all data from backend when component mounts
  useEffect(() => {
    fetchSessions();
  }, []); // empty array: run once on mount

  // get all sessions from the backend
  const fetchSessions = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/sessions");
    setSessions(response.data);
  }, []);

  const createSession = useCallback(async (projectId, duration, notes) => {
    const response = await axios.post("http://localhost:3001/sessions", {
      projectId,
      duration, // seconds
      notes: notes || "", // optional note
      timestamp: new Date().toISOString(),
    });

    // use function update to avoid stale closure
    setSessions((prevSessions) => [response.data, ...prevSessions]);
  }, []);

  // getting all sessions for one specific project
  const fetchProjectSessions = useCallback(
    (projectId) => {
      return sessions.filter(
        // prevent type mismatch
        (session) => String(session.projectId) === String(projectId)
      );
    },
    [sessions]
  );

  // calculating total time for a project
  const getTotalProjectTime = useCallback(
    (projectId) => {
      // calling fetchProjectSession to get all filtered sessions
      const projectSessions = fetchProjectSessions(projectId);

      // using the reduce() method to sum up all duration
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
      const total = projectSessions.reduce((total, session) => {
        return total + (Number(session.duration) || 0); // Convert to number and default to 0
      }, 0);

      return total;
    },
    [fetchProjectSessions]
  );

  // deleting all the sessions under a project
  const deleteSessionsByProjectId = async (projectId) => {
    // get all sessions for this project (convert both to strings for comparison)
    const sessionsToDelete = sessions.filter(
      (session) => String(session.projectId) === String(projectId)
    );

    // delete each session from the database
    await Promise.all(
      sessionsToDelete.map((session) => {
        return axios.delete(`http://localhost:3001/sessions/${session.id}`);
      })
    );

    // update local state to remove these sessions
    const updatedSessions = sessions.filter(
      (session) => String(session.projectId) !== String(projectId)
    );
    setSessions(updatedSessions);
  };

  const valuesToShare = {
    sessions,
    fetchSessions,
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

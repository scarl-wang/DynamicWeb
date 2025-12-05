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
      projectId: Number(projectId),
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
        (session) => Number(session.projectId) === Number(projectId)
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
      return projectSessions.reduce(
        (total, session) => total + session.duration,
        0
      );
    },
    [fetchProjectSessions]
  );

  const valuesToShare = {
    sessions,
    fetchSessions,
    createSession,
    fetchProjectSessions,
    getTotalProjectTime,
  };
  return (
    <SessionsContext.Provider value={valuesToShare}>
      {children}
    </SessionsContext.Provider>
  );
};

export { SessionsProvider };
export default SessionsContext;

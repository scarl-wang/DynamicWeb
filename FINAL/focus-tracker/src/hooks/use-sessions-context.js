import { useContext } from "react";
import SessionsContext from "../context/sessions";

const useSessionContext = () => {
  return useContext(SessionsContext);
};

export default useSessionContext;

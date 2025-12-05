import { useContext } from "react";
import TimerContext from "../context/timer";

const useTimerContext = () => {
  return useContext(TimerContext);
};

export default useTimerContext;

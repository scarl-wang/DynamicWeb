import { createContext, useState, useEffect, useRef } from "react";
// creating a context for this so the timer persists across tab switch

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  // track seconds elapsed and whether the time is running
  const [elapsedTime, setElapsedTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [sessionDuration, setSessionDuration] = useState(0);

  // useRef persists across re-renders without causing re-renders
  // storing interval ID to clear it later
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      // increment elapsedTime every 1000 ms
      intervalRef.current = window.setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        // stop interval: clear if it exists
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]); // only rerun if isRunning changes

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    console.log("stopTimer called - elapsedTime:", elapsedTime);

    setIsRunning(false);
    // save the duration before resetting
    setSessionDuration(elapsedTime);
    // show dialog
    setShowDialog(true);

    console.log("After setting sessionDuration to:", elapsedTime);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const handleDialogComplete = () => {
    // reset everything after session is logged
    setShowDialog(false);
    setElapsedTime(0);
    setSessionDuration(0);
  };

  const handleDialogCancel = () => {
    // close dialog without logging
    setShowDialog(false);
    setElapsedTime(0);
    setSessionDuration(0);
  };

  // format time to display
  const formatTime = (seconds) => {
    // convert seconds to hh:mm:ss
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    // only dispay hour/min if they are >0
    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    }
    return `${secs}s`;
  };

  const valuesToShare = {
    elapsedTime,
    isRunning,
    showDialog,
    sessionDuration,
    startTimer,
    stopTimer,
    pauseTimer,
    formatTime,
    handleDialogCancel,
    handleDialogComplete,
  };

  return (
    <TimerContext.Provider value={valuesToShare}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerProvider };
export default TimerContext;

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
    setIsRunning(false);
    // save the duration before resetting
    setSessionDuration(elapsedTime);
    // show dialog
    setShowDialog(true);
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

  // format time to display 00:00 or 00:00:00
  const formatTime = (seconds) => {
    // convert seconds to hh:mm:ss
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    // pad numbers to always be 2 digits
    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSecs = secs.toString().padStart(2, "0");
    const paddedHours = hours.toString().padStart(2, "0");

    // only display hours if > 0
    if (hours > 0) {
      return `${paddedHours}:${paddedMinutes}:${paddedSecs}`;
    }

    return `${paddedMinutes}:${paddedSecs}`;
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

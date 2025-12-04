import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Play, Pause, Square } from "lucide-react";
import Button from "../ui/Button";
//import { LogSessionDialog } from "./LogSessionDialog";
//import { formatDuration } from "../utils/storage";

const Timer = () => {
  // track seconds elapsed and whether the time is running
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

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

  // handlers to toggle the timer on and off
  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setElapsedTime(0); // reset to 0 when stopped
  };

  // format time to display
  const formatTime = (seconds) => {
    // convert seconds to hh:mm:ss
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    }
    return `${secs}s`;
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-12">
        <h1 className="text-[120px] tabular-nums">{formatTime(elapsedTime)}</h1>

        <div className="flex gap-6 justify-center">
          {!isRunning ? (
            <Button onClick={handleStart} size="lg" className="gap-2">
              <Play className="size-4" />
              Start
            </Button>
          ) : (
            <Button
              onClick={handleStop}
              size="lg"
              variant="outline"
              className="gap-2"
            >
              <Square className="size-4" />
              Stop
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;

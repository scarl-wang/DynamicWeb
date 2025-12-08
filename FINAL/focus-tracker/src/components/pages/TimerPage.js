import { Play, Pause, Square } from "lucide-react";
import LogSessionDialog from "./LogSessionDialog";
import Button from "../ui/Button";
import useTimerContext from "../../hooks/use-timer-context";

const Timer = () => {
  const {
    elapsedTime,
    isRunning,
    showDialog,
    sessionDuration,
    startTimer,
    pauseTimer,
    stopTimer,
    formatTime,
    handleDialogCancel,
    handleDialogComplete,
  } = useTimerContext();

  return (
    <div className="bg-stone-100 fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center space-y-12">
        <h1 className="text-[120px] tabular-nums">{formatTime(elapsedTime)}</h1>

        <div className="flex justify-center gap-4">
          {!isRunning ? (
            <Button primary onClick={startTimer} className="gap-2">
              <Play className="size-4" />
              Start
            </Button>
          ) : (
            <>
              <Button secondary onClick={pauseTimer} className="gap-2">
                <Pause className="size-4" />
                Pause
              </Button>
              <Button warning onClick={stopTimer} className="gap-2">
                <Square className="size-4" />
                Stop
              </Button>
            </>
          )}
        </div>
      </div>

      <LogSessionDialog
        open={showDialog}
        duration={sessionDuration}
        onComplete={handleDialogComplete}
        onCancel={handleDialogCancel}
      />
    </div>
  );
};

export default Timer;

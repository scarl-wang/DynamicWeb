// takes seconds and displays them as "00h 00m 00s"
// used on Dashboard & Project Details

const DurationDisplay = ({ seconds }) => {
  // if seconds is not a valid number, default to 0
  // this prevents undefined values and errors

  const safeSeconds = Number(seconds) || 0;

  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const secs = safeSeconds % 60;

  // create an array of durations to display
  // only show hour if it exists
  const duration = [];
  if (hours > 0) {
    duration.push({ value: hours, unit: "h" });
  }
  // show minutes if hours exist OR if minutes > 0
  if (minutes > 0 || hours > 0) {
    duration.push({ value: minutes, unit: "m" });
  }
  // always show seconds
  duration.push({ value: secs, unit: "s" });

  return (
    <div className="flex items-baseline gap-1">
      {duration.map((comp, idx) => (
        <div key={idx} className="flex items-end">
          <h1 className="text-[80px] text-stone-900 leading-none tracking-tight">
            {comp.value.toString().padStart(2, "0")}
          </h1>
          <h1 className="text-[24px] text-stone-900 font-bold">{comp.unit}</h1>
        </div>
      ))}
    </div>
  );
};

export default DurationDisplay;

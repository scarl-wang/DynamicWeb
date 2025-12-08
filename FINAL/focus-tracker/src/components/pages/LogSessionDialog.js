import { useState } from "react";
import { X } from "lucide-react";
import Button from "../ui/Button";
import ProjectSelect from "../ProjectSelect";
import useSessionContext from "../../hooks/use-sessions-context";
import useTimerContext from "../../hooks/use-timer-context";

function LogSessionDialog({ open, onComplete, duration, onCancel }) {
  console.log("LogSessionDialog render - open:", open, "duration:", duration);
  const { createSession } = useSessionContext();
  const [selectedProject, setSelectedProject] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    console.log("=== SAVE CLICKED ===");
    console.log("selectedProject:", selectedProject);
    console.log("duration:", duration);
    console.log("notes:", notes);
    if (selectedProject) {
      // save the session to context
      createSession(selectedProject, duration, notes);

      // reset project and notes
      setSelectedProject("");
      setNotes("");

      // close the dialog
      onComplete();
    }
  };

  const handleCancel = () => {
    // reset forms
    setSelectedProject("");
    setNotes("");

    // close dialog without saving
    onCancel();
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      {/* overlay */}
      <div className="fixed inset-0 bg-black/50" onClick={handleCancel} />

      {/* dialog content */}
      <div className="relative bg-stone-100 shadow-lg max-w-[1026px] w-full mx-4 p-[57px] z-50">
        <button
          onClick={handleCancel}
          className="absolute top-4 right-4 hover:opacity-70 transition-opacity"
        >
          <X className="size-6" />
        </button>

        {/* content */}
        <div>
          <h1 className="text-[80px] mb-8">What did you work on?</h1>

          <div>
            <ProjectSelect
              value={selectedProject}
              onChange={setSelectedProject}
            />
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Describe what you worked on..."
              className="w-full min-h-[120px] bg-stone-100 mt-4 border-2 border-stone-900 p-2 resize-none"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button primary onClick={handleSave} disabled={!selectedProject}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogSessionDialog;

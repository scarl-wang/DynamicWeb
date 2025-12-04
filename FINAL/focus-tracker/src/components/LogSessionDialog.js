import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import Button from "./ui/Button";
import { Textarea } from "./ui/textarea";
import { ProjectSelect } from "./ProjectSelect";
import { addSession } from "../utils/storage";

function LogSessionDialog({ open, duration, onComplete, onCancel }) {
  const [selectedProject, setSelectedProject] = useState < string > "";
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    if (selectedProject) {
      addSession({
        projectId: selectedProject,
        duration,
        notes,
      });
      setSelectedProject("");
      setNotes("");
      onComplete();
    }
  };

  const handleCancel = () => {
    setSelectedProject("");
    setNotes("");
    onCancel();
  };

  return (
    <Dialog open={open} onOpenChange={(open) => !open && handleCancel()}>
      <DialogContent className="max-w-[1026px] p-[57px]">
        <DialogTitle className="sr-only">Log Focus Session</DialogTitle>
        <DialogDescription className="sr-only">
          Record what you worked on and select a project for this focus session
        </DialogDescription>

        <div className="space-y-8">
          <p>What did you work on?</p>

          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Describe what you worked on..."
            className="min-h-[120px] border-black resize-none"
          />

          <ProjectSelect
            value={selectedProject}
            onChange={setSelectedProject}
          />

          <div className="flex justify-end pt-4">
            <Button
              onClick={handleSave}
              disabled={!selectedProject}
              className="bg-black text-white hover:bg-black/90 px-[20px] py-[8px]"
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default LogSessionDialog;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { X, Plus } from "lucide-react";
import Button from "../ui/Button";
import ProjectSelect from "../ProjectSelect";
import useSessionContext from "../../hooks/use-sessions-context";
import useProjectContext from "../../hooks/use-project-context";

function LogSessionDialog({ open, onComplete, duration, onCancel }) {
  const { createSession } = useSessionContext();
  const { projects } = useProjectContext();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState("");
  const [notes, setNotes] = useState("");
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleProjectCreated = (newProjectTitle) => {
    // find the newly created project by title and select it
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const newProject = projects.find(
      (project) => project.title === newProjectTitle
    ); // returns the first element that satisfies the provided testing function

    if (newProject) {
      setSelectedProject(newProject.id);
    }

    setIsAddingNew(false); // hide the form
  };

  const handleSave = () => {
    if (selectedProject) {
      // save the session to context
      createSession(selectedProject, duration, notes);

      // reset project and notes
      setSelectedProject("");
      setNotes("");

      // close the dialog
      onComplete();

      // navigate to dashboard
      navigate("/dashboard");
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

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center">
        {/* overlay */}
        <div className="fixed inset-0 bg-black/50" />

        {/* dialog content */}
        <div className="relative bg-stone-100 shadow-lg max-w-[800px] w-full mx-4 p-[57px] z-50">
          <button
            onClick={handleCancel}
            className="absolute top-4 right-4 hover:opacity-70 transition-opacity"
          >
            <X className="size-6" />
          </button>

          {/* content */}
          <div>
            <h1 className="text-[40px] sm:text-[60px] lg:text-[80px] mb-4">
              What did you work on?
            </h1>

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
    </>,
    document.getElementById("portal")
  );
}

export default LogSessionDialog;

import useProjectContext from "../hooks/use-project-context";
import ProjectCreate from "./ProjectCreate";
import Button from "./ui/Button";
import { useState } from "react";
import { Plus } from "lucide-react";

const ProjectSelect = ({ value, onChange }) => {
  const { projects } = useProjectContext();
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleProjectCreated = (newProject) => {
    // receive the project object
    if (newProject && newProject.id) {
      onChange(newProject.id); // use the project id
    }
    setIsAddingNew(false);
  };

  const handleSelectChange = (event) => {
    // check if user clicked "Add New Project" option
    if (event.target.value === "add_new") {
      // show the form but don't change the value
      setIsAddingNew(true);
    } else {
      // normal project selection
      onChange(event.target.value);
    }
  };

  return (
    <div>
      {/* only show dropdown when NOT adding new */}
      {!isAddingNew && (
        <select
          value={value}
          onChange={handleSelectChange}
          className="w-full border-2 border-stone-900 bg-stone-100 px-2 py-2"
        >
          <option value="">Select a project...</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.title}
            </option>
          ))}
          <option value="add_new" className="font-bold">
            + Add New Project
          </option>
        </select>
      )}

      {/* add project form (show when isAddingNew is true */}
      {isAddingNew && (
        <div className="flex gap-2 mt-4">
          <ProjectCreate onProjectCreated={handleProjectCreated} />
          <button
            onClick={() => setIsAddingNew(false)}
            className="px-4 py-2 text-stone-600 hover:text-stone-900"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectSelect;

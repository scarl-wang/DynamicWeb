import { useState } from "react";
import useProjectContext from "../hooks/use-project-context";
import useTimerContext from "../hooks/use-timer-context";
import useSessionContext from "../hooks/use-sessions-context";

import ProjectEdit from "./ProjectEdit";
import { Pencil } from "lucide-react";

const ProjectItem = ({ project }) => {
  const { deleteProjectById, editProjectById } = useProjectContext();
  const { formatTime } = useTimerContext();
  const { getTotalProjectTime } = useSessionContext();
  const [showEdit, setShowEdit] = useState(false);

  const totalTime = formatTime(getTotalProjectTime(project.id));

  // not used yet
  const handleDelete = () => {
    deleteProjectById(project.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    editProjectById(project.id, newTitle);
    setShowEdit(!showEdit);
  };

  return (
    <div className="border-2 border-slate-800 p-4 h-40 hover:shadow-lg transition-shadow">
      {showEdit ? (
        <ProjectEdit
          className="col-1"
          project={project}
          onSubmit={handleSubmit}
        />
      ) : (
        <div className="h-full flex flex-col justify-between">
          <div className="w-full flex items-start">
            <h3 className="text-xl font-semibold flex-1 mr-2">
              {project.title}
            </h3>
            <button className="p-2" onClick={handleEdit}>
              <Pencil className="size-3" />
            </button>
          </div>

          <h3 className="text-xl font-semibold">{totalTime}</h3>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;

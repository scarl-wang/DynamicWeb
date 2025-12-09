import { useState } from "react";
import useProjectContext from "../hooks/use-project-context";
import useTimerContext from "../hooks/use-timer-context";
import useSessionContext from "../hooks/use-sessions-context";

import ProjectEdit from "./ProjectEdit";
import { Pencil } from "lucide-react";

const SessionItem = ({ project }) => {
  const { formatTime } = useTimerContext();
  const { getTotalProjectTime } = useSessionContext();
  const [showEdit, setShowEdit] = useState(false);

  const totalTime = formatTime(getTotalProjectTime(project.id));

  const handleSubmit = (id, newTitle) => {
    editProjectById(project.id, newTitle);
    setShowEdit(!showEdit);
  };

  return (
    <div className="border border-stone-500 p-2 h-[300px] hover:shadow-lg transition-shadow">
      {showEdit ? (
        <ProjectEdit
          className="col-1 h-full flex flex-col"
          project={project}
          onSubmit={handleSubmit}
        />
      ) : (
        <div className="h-full flex flex-col justify-between">
          <div className="w-full flex item-start">
            <h3 className="flex-1 text-[40px] text-stone-900 mr-2">
              {project.title}
            </h3>
            <button className="p-2" onClick={handleEdit}>
              <Pencil className="size-4" />
            </button>
          </div>

          <h1 className="text-[60px] text-stone-900">{totalTime}</h1>
        </div>
      )}
    </div>
  );
};

export default SessionItem;

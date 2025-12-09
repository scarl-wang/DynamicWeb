import { useState } from "react";
import useProjectContext from "../hooks/use-project-context";
import useSessionContext from "../hooks/use-sessions-context";

import ProjectEdit from "./ProjectEdit";
import { Pencil } from "lucide-react";

import DurationDisplay from "./DurationDisplay";

const ProjectItem = ({ project, colorClass }) => {
  const { deleteProjectById, editProjectById } = useProjectContext();
  const { getTotalProjectTime } = useSessionContext();
  const [showEdit, setShowEdit] = useState(false);

  // get total time in seconds for this project
  const totalTimeInSeconds = getTotalProjectTime(project.id);

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
    <div className="relative border-2 border-stone-900 p-2 h-[360px] hover:opacity-90 hover:shadow-lg transition-all">
      {/* colored circle background */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[310px] aspect-square rounded-full ${colorClass} opacity-80 -z-0`}
      />

      {/* content container*/}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* conditional (edit or display) */}
        <div>
          {showEdit ? (
            // edit mode: show edit form
            <ProjectEdit project={project} onSubmit={handleSubmit} />
          ) : (
            // display mode: show project title + edit button
            <div className="w-full flex items-start">
              <h3 className="flex-1 text-stone-900 font-bold leading-tight break-words mr-2">
                {project.title}
              </h3>
              <button
                className="p-2 hover:bg-stone-200 rounded transition-colors"
                onClick={handleEdit}
              >
                <Pencil className="size-4" />
              </button>
            </div>
          )}
        </div>

        {/* total project time display */}
        <div className="w-full">
          <DurationDisplay seconds={totalTimeInSeconds} />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

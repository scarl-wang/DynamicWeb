import { useState } from "react";
import useProjectContext from "../hooks/use-project-context";
import ProjectEdit from "./ProjectEdit";

const ProjectItem = ({ project }) => {
  const { deleteProjectById, editProjectById } = useProjectContext();
  const [showEdit, setShowEdit] = useState(false);

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
    <div className="border-2 border-slate-800 p-6 hover:shadow-lg transition-shadow">
      {showEdit ? (
        <ProjectEdit project={project} onSubmit={handleSubmit} />
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>{" "}
          <button onClick={handleDelete}>delete</button>
          <button onClick={handleEdit}>edit</button>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;

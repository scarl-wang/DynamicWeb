import { useState } from "react";
import useProjectContext from "../hooks/use-project-context";
import useSessionContext from "../hooks/use-sessions-context";
import Button from "./ui/Button";

const ProjectEdit = ({ project, onSubmit }) => {
  const [title, setTitle] = useState(project.title);
  const { deleteProjectById } = useProjectContext();
  const { deleteSessionsByProjectId } = useSessionContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(project.id, title);
  };

  const handleDelete = async () => {
    // delete all the sessions as well as the project
    await deleteSessionsByProjectId(project.id);
    await deleteProjectById(project.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full border-2 border-stone-200 bg-stone-100 text-stone-900 px-4 py-2"
        type="text"
        onChange={handleChange}
        value={title}
      />
      <div className="flex justify-end pt-4 gap-2">
        <Button warning type="button" onClick={handleDelete}>
          Delete Project
        </Button>
        <Button primary type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default ProjectEdit;

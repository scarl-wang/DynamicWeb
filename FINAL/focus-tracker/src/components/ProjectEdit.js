import { useState } from "react";
import Button from "./ui/Button";

const ProjectEdit = ({ project, onSubmit }) => {
  const [title, setTitle] = useState(project.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(project.id, title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-full border-2 border-slate-200 rounded-md px-4 py-2"
        type="text"
        onChange={handleChange}
        value={title}
      />
      <div className="flex justify-end pt-4">
        <Button primary type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default ProjectEdit;

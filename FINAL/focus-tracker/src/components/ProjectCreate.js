import { useState } from "react";
import useProjectContext from "../hooks/use-project-context";
import Button from "./ui/Button";

const ProjectCreate = ({ onProjectCreated }) => {
  const { createProject } = useProjectContext();

  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createProject(title);
    setTitle("");

    onProjectCreated(); // hide the form once it's entered
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="border-2 border-slate-200 rounded-md px-4 py-2"
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="New project name..."
      />
      <Button primary>Add</Button>
    </form>
  );
};

export default ProjectCreate;

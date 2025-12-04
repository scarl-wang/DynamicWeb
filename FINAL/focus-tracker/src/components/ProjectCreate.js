import { useState } from "react";
import useProjectContext from "../hooks/use-project-context";

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
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} />
      <button>New Project</button>
    </form>
  );
};

export default ProjectCreate;

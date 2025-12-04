import { useState } from "react";

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
      <label>Edit project name:</label>
      <input type="text" onChange={handleChange} value={title} />
    </form>
  );
};

export default ProjectEdit;

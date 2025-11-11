import { useState } from "react";

const TodoCreate = (props) => {
  const { onCreate } = props;
  // need local component state whenever form is used
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={title} />
      <button>Add</button>
    </form>
  );
};

export default TodoCreate;

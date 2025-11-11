import { useState, useContext } from "react";
import TodosContext from "../context/todos";

const TodoCreate = () => {
  const { createTodo } = useContext(TodosContext);
  // need local component state whenever form is used
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo(title);
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

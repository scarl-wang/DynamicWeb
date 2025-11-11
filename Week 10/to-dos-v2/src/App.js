import { useState, useEffect } from "react";
import axios from "axios";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    // get the existing records from the database
    const response = await axios.get("http://localhost:3001/todos");

    // set them in local state
    setTodos(response.data);
  };

  // useEffect() controlls when a function is called
  // calling useEffect() with an empty dependency array will only fire the function within
  // ONCE when component mounts (perfect for API effects)
  useEffect(() => {
    fetchTodos();
  }, []);

  const createTodo = async (title) => {
    const response = await axios.post("http://localhost:3001/todos", { title });

    const updatedTodos = [...todos, response.data];
    // always use response.data when available to update state

    setTodos(updatedTodos);
  };

  const deleteTodoById = async (id) => {
    // no need to store response since there's no helpful data in it
    await axios.delete(`http://localhost:3001/todos/${id}`);

    // still have to delete from state in the app the same way, no response.data help
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    // call our setter to update state with new array
    setTodos(updatedTodos);
  };

  const editTodoById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/todos/${id}`, {
      title: newTitle,
    });

    // make a copy of our existing todo array and update the one value by id
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // unpacking here (compared to create, where we add entire objects)
        // because we are already inside the object
        return { ...todo, ...response.data };
      }
      return todo; // this is returned in the mapping function not the app
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoCreate onCreate={createTodo} />
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} />
    </div>
  );
}

export default App;

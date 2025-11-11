import { createContext } from "react";
import { useState } from "react";

const TodosContext = createContext();

function Provider({ children }) {
  const [todos, setTodos] = useState([]);

  const createTodo = (title) => {
    // make a new copy of existing todos and add a new one to the end
    const updatedTodos = [
      ...todos, // spreading (copy paste everything in the array)
      { title, id: Math.round(Math.random() * 9999) }, // get a random whole number with 4 slots
      // "title" is shorthand for "title: title"
    ];

    setTodos(updatedTodos);
  };

  const deleteTodoById = (id) => {
    // filter will return each todo where the statement within the function is true
    // filter does not mutate the original todos, it returns a copy
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id; // only return the ones whoes id doesn't match
    });
    // call our setter to update state with new array
    setTodos(updatedTodos);
  };

  const editTodoById = (id, newTitle) => {
    // make a copy of our existing todo array and update the one value by id
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // if the id matches, this is the one we want to update
        return { ...todo, title: newTitle };
      }
      return todo; // this is returned in the mapping function not the app
    });

    setTodos(updatedTodos);
  };

  const valuesToShare = {
    todos,
    createTodo,
    editTodoById,
    deleteTodoById,
  };

  return (
    <TodosContext.Provider value={valuesToShare}>
      {children}
    </TodosContext.Provider>
  );
}

export { Provider };
export default TodosContext;

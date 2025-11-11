import { useEffect } from "react";
import useTodoContext from "./hooks/use-todo-context";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const { fetchTodos } = useTodoContext();

  useEffect(() => {
    fetchTodos();
  }, []); // needs an empty dependency because we don't want it to constantly rerender

  return (
    <div>
      <TodoCreate />
      <TodoList />
    </div>
  );
}

export default App;

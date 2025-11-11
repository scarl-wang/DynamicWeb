// only responsible for rendering out all todo items

import TodosContext from "../context/todos";
import TodoItem from "./TodoItem";
import { useContext } from "react";

const TodoList = (props) => {
  const { todos, deleteTodoById, editTodoById } = useContext(TodosContext);

  const renderedTodos = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      onDelete={deleteTodoById}
      onEdit={editTodoById}
    />
  )); // key helps REACT tell which item you are clicking on

  return <div>{renderedTodos}</div>;
};

export default TodoList;

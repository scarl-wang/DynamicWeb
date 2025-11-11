// only responsible for rendering out all todo items
// AND passing props down to todoItem and todoEdit

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todos, onDelete, onEdit } = props;

  const renderedTodos = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
  )); // key helps REACT tell which item you are clicking on

  return <div>{renderedTodos}</div>;
};

export default TodoList;

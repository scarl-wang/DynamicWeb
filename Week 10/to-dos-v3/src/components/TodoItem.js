import { useState } from "react";
import useTodoContext from "../hooks/use-todo-context";
import TodoEdit from "./TodoEdit";

const TodoItem = ({ todo }) => {
  const { deleteTodobyId, editTodoById } = useTodoContext();
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    deleteTodobyId(todo.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    editTodoById(todo.id, newTitle);
    setShowEdit(!showEdit);
  };

  const content = showEdit ? (
    <TodoEdit todo={todo} onSubmit={handleSubmit} />
  ) : (
    <div>
      {todo.title}
      <button onClick={handleDelete}>delete</button>
      <button onClick={handleEdit}>edit</button>
    </div>
  );
  return <div>{content}</div>;
};

export default TodoItem;

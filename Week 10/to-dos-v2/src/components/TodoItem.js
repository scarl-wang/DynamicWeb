import { useState } from "react";
import TodoEdit from "./TodoEdit";

const TodoItem = (props) => {
  const { todo, onDelete, onEdit } = props;

  // conditionally render editing state, this can live locally bc App doesn't need this logic
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(todo.id);
  };

  // this is only responsible for showing the EditTodo component (conditional)
  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  // tricky part here is onEdit is called onSubmit because TodoEdit is a form
  // to avoid confusion in our EditTodo, we will call the prop onSubmit
  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  };

  // using let because content will change over time
  let content = (
    <div>
      {todo.title}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleShowEdit}>Edit</button>
    </div>
  );

  if (showEdit) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />;
  }
  return <div>{content}</div>;
};

export default TodoItem;

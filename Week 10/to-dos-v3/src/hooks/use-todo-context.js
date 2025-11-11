import { useContext } from "react";
import TodosContext from "../context/todos";

const useTodoContext = () => {
  return useContext(TodosContext);
};

export default useTodoContext;

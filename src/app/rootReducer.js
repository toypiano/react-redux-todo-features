import { combineReducers } from "redux";
import todosReducer from "../features/addTodo/todosReducer";
import filterReducer from "../features/filterTodos/filterReducer";

export default combineReducers({
  todos: todosReducer,
  filter: filterReducer
});

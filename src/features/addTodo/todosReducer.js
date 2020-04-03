import { ADD_TODO } from "./todosActions";
import { TOGGLE_TODO } from "../showTodos/todoActions";

const addTodo = (state, { payload }) => [
  ...state,
  { id: payload.id, text: payload.text, completed: payload.completed }
];

const toggleTodo = (state, action) =>
  state.map(todo =>
    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
  );

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action);
    case TOGGLE_TODO:
      return toggleTodo(state, action);
    default:
      return state;
  }
};

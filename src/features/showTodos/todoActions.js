export const TOGGLE_TODO = "showTodos/todoToggled";

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id
});

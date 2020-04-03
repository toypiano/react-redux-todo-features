export const ADD_TODO = "addTodo/todoAdded";

let nextTodoId = 0;
export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    text: text,
    id: nextTodoId++,
    completed: false
  }
});

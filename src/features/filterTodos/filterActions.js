export const SET_FILTER = "filterTodos/filterSet";

export const filterTypes = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
});

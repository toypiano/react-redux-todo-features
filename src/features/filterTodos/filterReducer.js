import { SET_FILTER, filterTypes } from "./filterActions";

const setFilter = (state, action) => action.payload;

export default (state = filterTypes.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER:
      return setFilter(state, action);
    default:
      return state;
  }
};

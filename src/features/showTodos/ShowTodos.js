import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import { filterTypes } from "../filterTodos/filterActions";
import { toggleTodo } from "./todoActions";

const completedMixin = css`
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.2);
`;
const StyledTodo = styled.li`
  font-size: 1.4rem;
  list-style-type: none;
  display: block;
  text-align: center;
  width: 100%;

  margin: 0 auto;
  padding: 1em 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  ${props => (props.completed ? completedMixin : null)};
`;

function Todo({ children, clicked, completed }) {
  return (
    <StyledTodo onClick={clicked} completed={completed}>
      {children}
    </StyledTodo>
  );
}

const StyledTodos = styled.ul`
  width: 50vw;
  max-width: 700px;
  margin: 3em auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;
export const Todos = ({ filteredTodos, toggleTodo }) => {
  const todos = filteredTodos.map(todo => (
    <Todo
      key={todo.id}
      completed={todo.completed}
      clicked={() => toggleTodo(todo.id)}
    >
      {todo.text}
    </Todo>
  ));
  return <StyledTodos>{todos}</StyledTodos>;
};

function filterTodo(todos, filter) {
  const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = filterTypes;
  switch (filter) {
    case SHOW_ALL:
      return [...todos];
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      return new Error("Unknown filter type: ", filter);
  }
}

const mapStateToProps = ({ todos, filter }) => ({
  filteredTodos: filterTodo(todos, filter)
});

const actionCreators = { toggleTodo };

export default connect(mapStateToProps, actionCreators)(Todos);

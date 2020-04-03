import React, { useRef } from "react";
import styled from "styled-components";
import { color } from "../../common/vars.js";

import { connect } from "react-redux";
import { addTodo } from "./todosActions";

const StyledForm = styled.form`
  label {
    display: none;
  }
  input,
  button {
    font-size: 1.2rem;
    padding: 0.5em 1em;
    margin: 1em 0;
  }
  input {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-right: none;
    outline: none;
  }

  button {
    border: none;
    background: ${color.primary};
    border: 1px solid ${color.primary};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    font-weight: bold;
    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
    &:active {
      opacity: 1;
    }
  }
`;

export function AddTodo({ addTodo }) {
  const ref = useRef();

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!ref.current.value.trim()) return;
    addTodo(ref.current.value);
    ref.current.value = "";
  }

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <label htmlFor="todo">Add Todos</label>
      <input type="text" id="todo" ref={ref} />
      <button type="submit">Add</button>
    </StyledForm>
  );
}

const actionCreators = {
  addTodo
};

export default connect(null, actionCreators)(AddTodo);

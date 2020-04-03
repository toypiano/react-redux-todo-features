import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setFilter, filterTypes } from "./filterActions";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 1em auto;
  li {
    list-style-type: none;
    &.active button {
      font-weight: bold;
      color: black;
    }
    button {
      color: rgba(0, 0, 0, 0.4);
      margin: 0.2em;
      font-size: 1.2rem;
      &:hover {
        cursor: pointer;
      }
    }
  }

  button {
    background: transparent;
    padding: 0.5em 1em;
    border: none;
  }
`;

export const FilterTodos = ({ filter, setFilter }) => {
  const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = filterTypes;
  return (
    <Nav filter={filter}>
      <li className={filter === SHOW_ALL ? "active" : null}>
        <button onClick={() => setFilter(SHOW_ALL)}>All</button>
      </li>
      <li className={filter === SHOW_COMPLETED ? "active" : null}>
        <button onClick={() => setFilter(SHOW_COMPLETED)}>Completed</button>
      </li>
      <li className={filter === SHOW_ACTIVE ? "active" : null}>
        <button onClick={() => setFilter(SHOW_ACTIVE)}>Active</button>
      </li>
    </Nav>
  );
};

const mapStateToProps = ({ filter }) => ({ filter });

const actionCreators = { setFilter };

export default connect(mapStateToProps, actionCreators)(FilterTodos);

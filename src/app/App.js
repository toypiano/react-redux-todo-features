import React from "react";
import { connect } from "react-redux";

import Header from "../features/header/Header";
import AddTodo from "../features/addTodo/AddTodo.js";
import FilterTodos from "../features/filterTodos/FilterTodos";
import ShowTodos from "../features/showTodos/ShowTodos";

export function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <AddTodo />
        <FilterTodos />
        <ShowTodos />
      </div>
    </div>
  );
}

export default connect()(App);

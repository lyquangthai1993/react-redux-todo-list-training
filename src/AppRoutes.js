import React from "react";
import { Route } from "react-router";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export const routeLinks = {
  todoList: {
    path: "/todo-list",
    name: "Todo list",
    component: TodoList,
  },
  addTodo: {
    path: "/add-todo",
    name: "Add todo",
    component: AddTodo,
  },
  // filterTodo: {
  //   path: "/filter-todo",
  //   name: "Filter todo",
  //   component: VisibilityFilters,
  // },
};
export default () => {
  return (
    <div className={"routes-wrapper"}>
      {Object.keys(routeLinks).map((key) => {
        const {path, component, exact} = routeLinks[key];
        return <Route key={key} exact={exact} path={path} component={component} />;
      })}
    </div>
  );
};

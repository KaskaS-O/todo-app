import React, { Component } from "react";
import CreateTaskPanel from "./CreateTaskPanel";
import TaskList from "./TaskList";
import FilterPanel from "./FilterPanel";
import { ReactComponent as Sun } from "../images/icon-sun.svg";
import { ReactComponent as Moon } from "../images/icon-moon.svg";

class App extends Component {
  state = {
    tasks: [
      { title: "Jog around the park", active: false },
      { title: "10 minutes meditation", active: true },
      { title: "Read for 1 hour", active: true },
      { title: "Pick up groceries", active: true },
      { title: "Complete Todo App on Frontend Mentor", active: true },
      { title: "Cook something delicious", active: false },
      { title: "Do something creative", active: false },
      { title: "Rest", active: true },
    ],
  };
  render() {
    return (
      <>
        <h1 className="title">TODO</h1>
        <div className="theme-toggle">
          <Sun />
          <Moon />
        </div>
        <CreateTaskPanel />
        <TaskList tasks={this.state.tasks} />
        <FilterPanel />
        <p className="txt txt--gray">Drag and drop to reorder list</p>
        <footer className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="#">CodingDuck</a>.
        </footer>
      </>
    );
  }
}

export default App;

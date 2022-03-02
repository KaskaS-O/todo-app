import React, { Component } from "react";
import CreateTaskPanel from "./CreateTaskPanel";
import TaskList from "./TaskList";
import FilterPanel from "./FilterPanel";

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
        <h1>TODO</h1>
        <CreateTaskPanel />
        <TaskList />
        <FilterPanel />
      </>
    );
  }
}

export default App;

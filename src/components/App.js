import React, { Component } from "react";
import TaskList from "./TaskList";
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
    newTask: "",
    filteredTasks: "",
    isThemeDark: true,
  };

  changeTheme() {
    this.setState({
      isThemeDark: !this.state.isThemeDark,
    });
  }

  handleInputChange(e) {
    const txt = e.target.value;
    this.setState({
      newTask: txt,
    });
  }

  addTask(e) {
    e.preventDefault();

    if (this.state.newTask.length < 3) {
      alert("New task must have at least 3 letters");
    } else {
      const newTasks = this.state.tasks.push({
        title: this.state.newTask,
        active: true,
      });
      this.setState({
        task: newTasks,
        newTask: "",
      });
    }
  }

  deleteTask(title) {
    let tasks = this.state.tasks;
    const toDelete = tasks.findIndex((task) => task.title === title);

    tasks.splice(toDelete, 1);
    this.setState({
      tasks,
    });
  }

  handleCheckbox(title) {
    const tasks = this.state.tasks;
    const index = tasks.findIndex((task) => task.title === title);
    tasks[index].active = !tasks[index].active;
    this.setState({
      tasks,
    });
  }

  filterTaskList(e) {
    const selectedFilter = e.target;
    let filteredTasks = this.state.tasks;

    if (selectedFilter.id === "allTasks") {
      filteredTasks = this.state.tasks;
    } else if (selectedFilter.id === "activeTasks") {
      filteredTasks = filteredTasks.filter((task) => task.active);
    } else if (selectedFilter.id === "completedTasks") {
      filteredTasks = filteredTasks.filter((task) => !task.active);
    }
    this.setState({
      filteredTasks,
    });
  }

  clearCompleted() {
    const tasks = this.state.tasks.filter((task) => task.active);
    this.setState({
      tasks,
    });
  }

  render() {
    return (
      <div className={`page ${this.state.isThemeDark ? "dark" : "light"}`}>
        <header
          className={`header ${this.state.isThemeDark ? "dark" : "light"}`}
        >
          <h1 className="header__title">TODO</h1>
          <div
            className="header__theme-toggle"
            onClick={() => this.changeTheme()}
          >
            {this.state.isThemeDark ? (
              <Sun className="header__icon" id="sun" />
            ) : (
              <Moon className="header__icon" id="moon" />
            )}
          </div>
        </header>
        <form
          className={`create-todo ${this.state.isThemeDark ? "dark" : "light"}`}
          onSubmit={this.addTask.bind(this)}
        >
          <button className="create-todo__btn">
            <div className="create-todo__icon"></div>
          </button>
          <input
            className="create-todo__input"
            type="text"
            placeholder="Create a new todo..."
            value={this.state.newTask}
            onChange={this.handleInputChange.bind(this)}
          />
        </form>
        <TaskList
          tasks={this.state.tasks}
          filteredTasks={this.state.filteredTasks}
          theme={this.state.isThemeDark}
          delete={this.deleteTask.bind(this)}
          checkbox={this.handleCheckbox.bind(this)}
          filter={this.filterTaskList.bind(this)}
          clearCompleted={this.clearCompleted.bind(this)}
        />
        <p className="txt">Drag and drop to reorder list</p>
        <footer className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="#">CodingDuck</a>.
        </footer>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import TaskList from "./TaskList";
import { ReactComponent as Sun } from "../images/icon-sun.svg";
import { ReactComponent as Moon } from "../images/icon-moon.svg";

class App extends Component {
  state = {
    tasks: [
      { id: "task-1", title: "Jog around the park", active: false },
      { id: "task-2", title: "10 minutes meditation", active: true },
      { id: "task-3", title: "Read for 1 hour", active: true },
      { id: "task-4", title: "Pick up groceries", active: true },
      {
        id: "task-5",
        title: "Complete Todo App on Frontend Mentor",
        active: true,
      },
      { id: "task-6", title: "Cook something delicious", active: false },
      { id: "task-7", title: "Do something creative", active: false },
      { id: "task-8", title: "Rest", active: true },
    ],
    newTask: "",
    filteredTasks: "",
    highestUsedTaskNumber: 8,

    isThemeDark: true,
  };

  filters = [
    { title: "All", id: "allTasks", selected: true },
    { title: "Active", id: "activeTasks", selected: false },
    { title: "Completed", id: "completedTasks", selected: false },
  ];

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
    let newTaskNumber = this.state.highestUsedTaskNumber + 1;

    if (this.state.newTask.length < 3) {
      alert("New task must have at least 3 letters");
    } else {
      const newTasks = this.state.tasks.push({
        id: `task-${newTaskNumber}`,
        title: this.state.newTask,
        active: true,
      });

      newTaskNumber++;

      this.setState({
        task: newTasks,
        newTask: "",
        highestUsedTaskNumber: newTaskNumber,
      });
    }
  }

  deleteTask(id) {
    let tasks = this.state.tasks;
    const toDelete = tasks.findIndex((task) => task.id === id);

    tasks.splice(toDelete, 1);
    this.setState({
      tasks,
    });
  }

  handleCheckbox(id) {
    const tasks = this.state.tasks;
    const index = tasks.findIndex((task) => task.id === id);
    tasks[index].active = !tasks[index].active;

    const selectedFilter = this.filters.find((filter) => filter.selected);
    let filteredTasks = this.state.filteredTasks;
    if (selectedFilter.id === "activeTasks") {
      filteredTasks = tasks.filter((task) => task.active);
    } else {
      filteredTasks = tasks;
    }
    this.setState({
      tasks,
      filteredTasks,
    });
  }

  filterTaskList(e) {
    const selectedFilter = e.target;
    let filteredTasks = this.state.tasks;
    this.filters.forEach((filter) => {
      if (selectedFilter.id === filter.id) {
        filter.selected = true;
      } else {
        filter.selected = false;
      }
    });
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
    let filteredTasks = this.state.filteredTasks;
    const selectedFilter = this.filters.find((filter) => filter.selected);

    if (selectedFilter.id === "completedTasks") {
      filteredTasks = "";
    } else {
      filteredTasks = tasks;
    }

    this.setState({
      tasks,
      filteredTasks,
    });
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    else if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const newTasks = this.state.tasks;
    const draggedTask = newTasks.find((task) => task.id === draggableId);
    newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, draggedTask);

    this.setState({
      tasks: newTasks,
    });
  };

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
        <DragDropContext onDragEnd={this.onDragEnd}>
          <TaskList
            tasks={this.state.tasks}
            filteredTasks={this.state.filteredTasks}
            filters={this.filters}
            theme={this.state.isThemeDark}
            delete={this.deleteTask.bind(this)}
            checkbox={this.handleCheckbox.bind(this)}
            filter={this.filterTaskList.bind(this)}
            clearCompleted={this.clearCompleted.bind(this)}
          />
        </DragDropContext>
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

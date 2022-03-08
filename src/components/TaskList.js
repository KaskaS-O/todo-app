import React from "react";
import Task from "./Task";
import TaskManage from "./TaskManage";
import FilterPanel from "./FilterPanel";

const TaskList = (props) => {
  let tasks = props.tasks;
  if (!props.filteredTasks) {
    tasks = props.tasks.map((task) => (
      <Task
        key={task.title}
        title={task.title}
        active={task.active}
        theme={props.theme}
        delete={props.delete}
        checkbox={props.checkbox}
      />
    ));
  } else {
    tasks = props.filteredTasks.map((task) => (
      <Task
        key={task.title}
        title={task.title}
        active={task.active}
        theme={props.theme}
        delete={props.delete}
        checkbox={props.checkbox}
      />
    ));
  }

  return (
    <>
      <div className={`task-list ${props.theme ? "dark" : "light"}`}>
        <ul className="task-list__list">{tasks}</ul>
        <TaskManage
          tasks={props.tasks}
          theme={props.theme}
          clearCompleted={props.clearCompleted}
        />
      </div>
      <FilterPanel
        tasks={props.tasks}
        theme={props.theme}
        filter={props.filter}
      />
    </>
  );
};

export default TaskList;

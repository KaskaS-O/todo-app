import React from "react";
import Task from "./Task";
import TaskManage from "./TaskManage";
import FilterPanel from "./FilterPanel";

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => (
    <Task
      key={task.title}
      title={task.title}
      active={task.active}
      theme={props.theme}
      delete={props.delete}
    />
  ));
  return (
    <>
      <div className={`task-list ${props.theme ? "dark" : "light"}`}>
        <ul className="task-list__list">{tasks}</ul>
        <TaskManage tasks={props.tasks} theme={props.theme} />
      </div>
      <FilterPanel tasks={props.tasks} theme={props.theme} />
    </>
  );
};

export default TaskList;

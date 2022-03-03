import React from "react";
import Task from "./Task";
import TaskManage from "./TaskManage";

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => (
    <Task key={task.title} title={task.title} active={task.active} />
  ));
  return (
    <div className="task-list">
      <ul className="task-list__list">{tasks}</ul>
      <TaskManage />
    </div>
  );
};

export default TaskList;

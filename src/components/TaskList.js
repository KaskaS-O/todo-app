import React from "react";
import Task from "./Task";
import TaskManage from "./TaskManage";

const TaskList = () => {
  return (
    <div>
      <ul>
        <Task />
      </ul>
      <TaskManage />
    </div>
  );
};

export default TaskList;

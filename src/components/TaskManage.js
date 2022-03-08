import React from "react";

const TaskManage = (props) => {
  const activeTasks = props.tasks.filter((task) => task.active);

  return (
    <div
      className={`task-list__manage-tasks manage-tasks ${
        props.theme ? "dark" : "light"
      }`}
    >
      <span className="manage-tasks__active">{`${activeTasks.length} items left`}</span>
      <button className="manage-tasks__clear" onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default TaskManage;

import React from "react";

const TaskManage = () => {
  return (
    <div className="task-list__manage-tasks manage-tasks">
      <span className="manage-tasks__active">Liczba zadań</span>
      <button className="manage-tasks__clear">Clear Completed</button>
    </div>
  );
};

export default TaskManage;

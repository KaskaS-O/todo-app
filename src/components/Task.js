import React from "react";
import img from "../images/icon-cross.svg";

const Task = (props) => {
  return (
    <li className="task-list__task task dark">
      <label className="task__title">
        <input className="task__checkbox" type="checkbox" />
        <span class="task__checkmark"></span>
        {props.title}
      </label>
      <div className="task__delete">
        <img src={img} alt="close" />
      </div>
    </li>
  );
};

export default Task;

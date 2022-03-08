import React from "react";
import img from "../images/icon-cross.svg";

const Task = (props) => {
  return (
    <li
      className={`task-list__task task ${props.theme ? "dark" : "light"} ${
        props.active ? null : "done"
      }`}
    >
      <label className="task__title">
        <input
          className="task__checkbox"
          type="checkbox"
          onChange={() => props.checkbox(props.title)}
        />
        <span className="task__checkmark"></span>
        {props.title}
      </label>
      <div className="task__delete" onClick={() => props.delete(props.title)}>
        <img src={img} alt="delete" />
      </div>
    </li>
  );
};

export default Task;

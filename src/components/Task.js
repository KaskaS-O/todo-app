import React from "react";
import { ReactComponent as Cross } from "../images/icon-cross.svg";

const Task = (props) => {
  return (
    <li className="task-list__task task">
      <input className="task__checkbox" type="checkbox" />
      <span className="task__title txt txt--white">{props.title}</span>
      <Cross className="task__delete" />
    </li>
  );
};

export default Task;

import React from "react";
import { Draggable } from "react-beautiful-dnd";
import img from "../images/icon-cross.svg";

const Task = (props) => {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`task-list__task task  
      ${props.theme ? "dark" : "light"} 
      ${props.active ? null : "done"}`}
        >
          <label className="task__title">
            <input
              className="task__checkbox"
              type="checkbox"
              onChange={() => props.checkbox(props.id)}
            />
            <span className="task__checkmark"></span>
            {props.title}
          </label>
          <div className="task__delete" onClick={() => props.delete(props.id)}>
            <img src={img} alt="delete" />
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default Task;

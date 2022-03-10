import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import TaskManage from "./TaskManage";
import FilterPanel from "./FilterPanel";

const TaskList = (props) => {
  let tasks = props.tasks;
  const selectedFilter = props.filters.find((filter) => filter.selected);

  if (!props.filteredTasks) {
    if (selectedFilter.id === "completedTasks") {
      tasks = "";
    } else {
      tasks = props.tasks.map((task, index) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          active={task.active}
          index={index}
          theme={props.theme}
          delete={props.delete}
          checkbox={props.checkbox}
        />
      ));
    }
  } else {
    tasks = props.filteredTasks.map((task, index) => (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        active={task.active}
        index={index}
        theme={props.theme}
        delete={props.delete}
        checkbox={props.checkbox}
      />
    ));
  }

  return (
    <div className={`task-list ${props.theme ? "dark" : "light"}`}>
      <Droppable droppableId="drop">
        {(provided) => (
          <ul
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="task-list__list"
          >
            {tasks}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <TaskManage
        tasks={props.tasks}
        theme={props.theme}
        clearCompleted={props.clearCompleted}
      />
      <FilterPanel
        tasks={props.tasks}
        filters={props.filters}
        theme={props.theme}
        filter={props.filter}
      />
    </div>
  );
};

export default TaskList;

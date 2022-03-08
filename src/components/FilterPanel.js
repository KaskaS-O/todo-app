import React from "react";

const FilterPanel = (props) => {
  return (
    <div className={`filter-panel ${props.theme ? "dark" : "light"}`}>
      <span
        className="filter-panel__filter"
        id="allTasks"
        onClick={props.filter}
      >
        All
      </span>
      <span
        className="filter-panel__filter"
        id="activeTasks"
        onClick={props.filter}
      >
        Active
      </span>
      <span
        className="filter-panel__filter"
        id="completedTasks"
        onClick={props.filter}
      >
        Completed
      </span>
    </div>
  );
};

export default FilterPanel;

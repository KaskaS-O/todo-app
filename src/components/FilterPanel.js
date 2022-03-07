import React from "react";

const FilterPanel = (props) => {
  return (
    <div className={`filter-panel ${props.theme ? "dark" : "light"}`}>
      <span className="filter-panel__filter active">All</span>
      <span className="filter-panel__filter">Active</span>
      <span className="filter-panel__filter">Completed</span>
    </div>
  );
};

export default FilterPanel;

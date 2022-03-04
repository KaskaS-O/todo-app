import React from "react";

const FilterPanel = () => {
  return (
    <div className="filter-panel dark">
      <span className="filter-panel__filter active">All</span>
      <span className="filter-panel__filter">Active</span>
      <span className="filter-panel__filter">Completed</span>
    </div>
  );
};

export default FilterPanel;

import React from "react";

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <span className="filter-panel__filter">All</span>
      <span className="filter-panel__filter">Active</span>
      <span className="filter-panel__filter">Completed</span>
    </div>
  );
};

export default FilterPanel;

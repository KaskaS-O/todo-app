import React from "react";

const FilterPanel = (props) => {
  const filters = props.filters.map((filter) => (
    <span
      className={`filter-panel__filter ${filter.selected ? "selected" : null}`}
      key={filter.id}
      id={filter.id}
      onClick={props.filter}
    >
      {filter.title}
    </span>
  ));
  return (
    <div className={`filter-panel ${props.theme ? "dark" : "light"}`}>
      {filters}
    </div>
  );
};

export default FilterPanel;

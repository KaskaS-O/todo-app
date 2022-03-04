import React from "react";

const CreateTaskPanel = (props) => {
  return (
    <form className="create-todo dark">
      <button className="create-todo__btn">
        <div className="create-todo__icon"></div>
      </button>
      <input
        className="create-todo__input"
        type="text"
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default CreateTaskPanel;

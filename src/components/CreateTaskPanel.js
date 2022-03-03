import React from "react";

const CreateTaskPanel = (props) => {
  return (
    <form className="create-todo">
      <button className="create-todo__btn"></button>
      <input
        className="create-todo__input txt txt--grey"
        type="text"
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default CreateTaskPanel;

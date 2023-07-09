import React from "react";
const textColorClass = {
  1: "text-danger",
  2: "text-primary",
  3: "text-success",
};

const Item = ({ task, onDelete }) => {
  return (
    <li
      style={{
        padding: "3px 10px",
      }}
      className={
        "list-group-item d-flex justify-content-between align-items-center " +
        textColorClass[3]
      }
    >
      {task.name}
      <button
        onClick={onDelete}
        style={{ color: "red" }}
        type="button"
        className="btn-close"
        aria-label="Close"
      ></button>
    </li>
  );
};

export default Item;

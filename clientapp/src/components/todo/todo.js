import { useEffect, useState } from "react";
import useToDoList from "./useToDoList";
import InputBox from "./inputBox";
import Item from "./itemRow";

const ToDo = ({ todos = [] }) => {
  const [todoList, addtask, updateTask, deleteTask, clearAll] = useToDoList({
    initialData: todos,
  });

  return (
    <div
      className="container"
      style={{
        width: "50%",
      }}
    >
      <div
        className="d-flex justify-content-between align-items-left"
        style={{ padding: "3px" }}
      >
        <h2>To-Do List</h2>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => clearAll()}
        >
          Clear All
        </button>
      </div>

      <InputBox addTask={addtask} />
      {todoList.length ? (
        <ul
          style={{
            padding: "0",
            maxHeight: "300px",
            overflowX: "hidden",
            overflowY: "auto ",
          }}
          className="ist-group list-group-horizontal"
        >
          {todoList.map((task) => {
            return (
              <Item
                key={task.name}
                task={task}
                onDelete={() => deleteTask(task.id)}
              />
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default ToDo;

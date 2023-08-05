import { useEffect, useState } from "react";
import useToDoList from "./useToDoList";
import InputBox from "./inputBox";
import Item from "./itemRow";
import axios from "axios";

const ToDo = ({ todos = [] }) => {
  useEffect(() => {
    axios.get("/todo").then((data) => {
      console.log(data);
      setTasks(data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [todoList, addtask, updateTask, deleteTask, clearAll, setTasks] =
    useToDoList({
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
                key={task.id}
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

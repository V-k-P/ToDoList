import { useState } from "react";

const useToDoList = ({ initialData = [] }) => {
  const [todoList, setTodoList] = useState(initialData);

  const setTasks = (list) => {
    setTodoList(() => list);
  };

  const addTask = (name, priority) => {
    setTodoList((list) => {
      return [
        ...list,
        {
          id: new Date().toISOString(),
          name,
          priority,
        },
      ];
    });
  };

  const updateTask = (id, name, priority) => {
    setTodoList((list) => {
      return [
        ...list.map((task) => {
          if (task.id === id) {
            task.name = name;
            task.priority = priority;
          }
          return task;
        }),
      ];
    });
  };

  const deleteTask = (id) => {
    setTodoList((list) => {
      return [...list.filter((task) => task.id !== id)];
    });
  };

  const clearAll = () => {
    setTodoList(() => []);
  };

  return [todoList, addTask, updateTask, deleteTask, clearAll, setTasks];
};

export default useToDoList;

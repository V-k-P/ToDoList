import { renderHook, act, render } from "@testing-library/react";
import useToDoList from "./useToDoList";
let testData = [
  {
    id: "1",
    name: "first",
    priority: 1,
  },
  {
    id: "2",
    name: "second",
    priority: 2,
  },
  {
    id: "3",
    name: "third",
    priority: 3,
  }
];
describe("Use todo hook", () => {
  test("has empty list of tasks", () => {
    const { result } = renderHook(useToDoList, {
      initialProps: {
        initialData: [],
      },
    });
    const [todoList, addTask, updateTask, deleteTask] = result.current;
    expect(todoList.length).toBe(0);
    expect(addTask).toBeInstanceOf(Function);
    expect(updateTask).toBeInstanceOf(Function);
    expect(deleteTask).toBeInstanceOf(Function);
  });

  test("has initial list of tasks", () => {
    const { result } = renderHook(useToDoList, {
      initialProps: {
        initialData: testData,
      },
    });
    const [todoList] = result.current;
    expect(todoList.length).toBe(3);
  });

  test("Add delete and update is working", () => {
    const { result } = renderHook(useToDoList, {
      initialProps: {
        initialData: testData,
      },
    });
    const [todoList, addTask, updateTask, deleteTask, clearAll] =
      result.current;
    act(() => {
      addTask("4", "four", 1);
    });
    act(() => {
      addTask("5", "five", 2);
    });

    expect(result.current[0].length).toBe(5);
    // testing update
    act(() => {
      updateTask("1", "first updated", 1);
    });
    //console.lof()
    expect(result.current[0][0].name).toEqual("first updated");

    act(() => {
      deleteTask("2");
    });
    expect(result.current[0].length).toBe(4);

    act(() => clearAll());
    expect(result.current[0].length).toBe(0);
  });
});

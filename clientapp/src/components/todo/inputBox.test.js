import { render, screen, waitFor, within, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import InputBox from "./inputBox";

describe("inputbox", () => {
  test("to text box and button are present", () => {
    render(<InputBox addTask={jest.fn()} />);
    const txt = screen.getByPlaceholderText("Type Task Name");
    expect(txt).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Add",
      })
    ).toBeInTheDocument();
  });

  test("textbox value persist", async () => {
    user.setup();
    render(<InputBox addTask={jest.fn()} />);
    const txt = screen.getByPlaceholderText("Type Task Name");
    await act(async () => {
      return await user.type(txt, "first");
    });
    expect(txt.value).toBe("first");
  });

  test("add task is called", async () => {
    const add = jest.fn();
    render(<InputBox addTask={add} />);
    const txt = screen.getByPlaceholderText("Type Task Name");
    let button = screen.getByRole("button", {
      name: "Add",
    });
    await act(async () => {
      return await user.type(txt, "first");
    });
    await act(async () => {
      return await user.click(button);
    });
    expect(add).toBeCalled();
  });

  test("textbox empty after adding", async () => {
    user.setup();
    render(<InputBox addTask={jest.fn()} />);
    const txt = screen.getByPlaceholderText("Type Task Name");

    let button = screen.getByRole("button", {
      name: "Add",
    });
    await act(async () => {
      return await user.type(txt, "first task");
    });
    await act(async () => {
      return await user.click(button);
    });
    expect(screen.getByPlaceholderText("Type Task Name").value).toBe("");
  });

  test("enable disable button add", async () => {
    render(<InputBox addTask={jest.fn()} />);
    const txt = screen.getByPlaceholderText("Type Task Name");
    expect(txt).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: "Add",
      })
    ).toBeInTheDocument();
    let button = screen.getByRole("button", {
      name: "Add",
    });
    expect(button).toBeDisabled();

    await act(async () => {
      return await user.type(txt, "ddsfds");
    });
    expect(button).toBeEnabled();
  });
});

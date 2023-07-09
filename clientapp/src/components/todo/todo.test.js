import { render, screen, within, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import ToDo from "./todo";
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
  },
];
describe("to do list", () => {
  test("todo list label is present", () => {
    render(<ToDo />);
    const header = screen.getByRole("heading", {
      level: 2,
    });
    expect(header).toBeInTheDocument();
  });

  test("list not present if no task", () => {
    render(<ToDo todos={[]} />);
    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });

  test("list items are present if no task", () => {
    render(<ToDo todos={testData} />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(3);
  });

  test("add item to list", async () => {
    user.setup();
    render(<ToDo />);
    let txt = screen.getByPlaceholderText("Type Task Name");
    let button = screen.getByRole("button", {
      name: "Add",
    });
    await act(async () => {
      return await user.type(txt, "first task");
    });
    await act(async () => {
      return await user.click(button);
    });

    const list = await screen.findByRole("list");
    expect(list).toBeInTheDocument();

    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(1);
  });

  test("delete item to list", async () => {
    user.setup();
    render(<ToDo todos={testData} />);
    let list = await screen.findByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(3);
    const { getByRole } = within(items[0]);
    // delete ites
    await act(async () => {
      return await user.click(getByRole("button"));
    });
    list = await screen.findByRole("list");
    expect(within(list).getAllByRole("listitem").length).toBe(2);
  });

  test("test Clear All", async () => {
    user.setup();
    render(<ToDo todos={testData} />);
    let clearAllBtn = screen.getByRole("button", {
      name: "Clear All",
    });
    await act(async () => {
      return await user.click(clearAllBtn);
    });

    let list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });
});

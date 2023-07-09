import { render, screen, within, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import Item from "./itemRow";
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

describe("itemrow", () => {
  test("list item is present", async () => {
    render(<Item task={testData[0]} />);
    const item = screen.getByRole("listitem");
    expect(item).toBeInTheDocument();
    expect(item).toHaveTextContent(testData[0].name);
    const { getByRole } = within(item);
    expect(
      getByRole("button", {
        name: "Close",
      })
    ).toBeInTheDocument();
  });

  test("check item priority p1 class", async () => {
    render(<Item task={testData[0]} />);
    const item = screen.getByRole("listitem");
    expect(item).toHaveClass("text-success");
  });

  test("delete is called", async () => {
    user.setup();
    const deleteItem = jest.fn();
    render(<Item task={testData[0]} onDelete={deleteItem} />);
    await act(async () => {
      return await user.click(
        screen.getByRole("button", {
          name: "Close",
        })
      );
    });
    expect(deleteItem).toBeCalledTimes(1);
  });
});

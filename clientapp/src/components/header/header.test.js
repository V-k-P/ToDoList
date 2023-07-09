import { render, screen, within } from "@testing-library/react";
import Header from "./header";
//import {expect, test, describe } from "@jest/globals";

describe("header", () => {
  test("image logo exists", () => {
    render(<Header />);
    const title = screen.getByText("Demo App");
    //console.log(title, "********************");
    expect(title).not.toBeInTheDocument();
  });

  test("links are present", () => {
    render(<Header />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();

    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(1);

    const { getByText } = within(items[0]);
    expect(getByText("To-Do")).toBeInTheDocument();
  });
});

import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { screen } from "@testing-library/react";

import { Task } from "@/components";

const data = {
  description: "Estudar ReactJS - Hooks e Custom Hooks",
  taskId: "123"
};

describe("Task", () => {
  it("should render currectly", () => {
    renderWithTheme(<Task {...data} checked={false} />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(
      screen.getByText("Estudar ReactJS - Hooks e Custom Hooks")
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should render the task with status created", () => {
    const { container } = renderWithTheme(<Task {...data} checked={false} />);

    expect(screen.getByRole("checkbox")).not.toBeChecked();
    expect(
      screen.getByText("Estudar ReactJS - Hooks e Custom Hooks")
    ).toHaveStyle({
      color: "#F2F2F2",
      "text-decoration": "none"
    });

    expect(container).toMatchSnapshot();
  });

  it("should render the task with status done", () => {
    renderWithTheme(<Task {...data} checked={true} />);

    expect(screen.getByRole("checkbox")).toBeChecked();
    expect(
      screen.getByText("Estudar ReactJS - Hooks e Custom Hooks")
    ).toHaveStyle({
      color: "#808080",
      "text-decoration": "line-through"
    });
  });
});

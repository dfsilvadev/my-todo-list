import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { screen } from "@testing-library/react";

import { TaskList } from "@/components";

import { tasks } from "@mocks/tasks";

describe("TaskList", () => {
  it("should render task counters", () => {
    renderWithTheme(<TaskList tasks={tasks} />);

    expect(screen.queryAllByRole("info", { name: /count info/i }).length).toBe(
      2
    );

    expect(screen.getByText("Tarefas criadas")).toBeInTheDocument();
    expect(screen.getByText("Concluídas")).toBeInTheDocument();
  });
  it("should render task cards correctly", () => {
    renderWithTheme(<TaskList tasks={tasks} />);

    expect(
      screen.queryAllByRole("listitem", { name: /task card/i }).length
    ).toBe(tasks.length);

    tasks.forEach((task) => {
      expect(screen.getByText(task.description)).toBeInTheDocument();
    });
  });
});

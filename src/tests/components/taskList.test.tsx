import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { screen, waitFor } from "@testing-library/react";

import { TaskList } from "@/components";

import useTaskContext from "@/hooks/useTasksContext";

import { tasks } from "@mocks/tasks";

jest.mock("@/hooks/useTasksContext");

const mockUseTaskContext = useTaskContext as jest.MockedFunction<
  typeof useTaskContext
>;

describe("TaskList", () => {
  beforeEach(async () => {
    await waitFor(() => {
      mockUseTaskContext.mockReturnValue({
        tasks,
        createTask: jest.fn(),
        updateTask: jest.fn()
      });
    });
  });

  it("should render task counters", () => {
    renderWithTheme(<TaskList />);

    expect(screen.queryAllByRole("info", { name: /count info/i }).length).toBe(
      2
    );

    expect(screen.getByText("Tarefas criadas")).toBeInTheDocument();
    expect(screen.getByText("Concluídas")).toBeInTheDocument();
  });
  it("should render task cards correctly", () => {
    renderWithTheme(<TaskList />);

    expect(
      screen.queryAllByRole("listitem", { name: /task card/i }).length
    ).toBe(tasks.length);

    tasks.forEach((task) => {
      expect(screen.getByText(task.description)).toBeInTheDocument();
    });
  });
});

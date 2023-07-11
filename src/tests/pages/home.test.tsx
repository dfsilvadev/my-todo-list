import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { screen, waitFor } from "@testing-library/react";

import { HomePage } from "@/pages";

import useTaskContext from "@/hooks/useTasksContext";

import { tasks } from "@mocks/tasks";

jest.mock("@/hooks/useTasksContext");

const mockUseTaskContext = useTaskContext as jest.MockedFunction<
  typeof useTaskContext
>;

describe("Home", () => {
  it("should render homepage correctly", async () => {
    await waitFor(() => {
      mockUseTaskContext.mockReturnValue({
        tasks,
        createTask: jest.fn(),
        updateTask: jest.fn()
      });
    });

    renderWithTheme(<HomePage />);

    expect(screen.getByRole("img", { name: "logo" })).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Adicione uma nova tarefa")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Criar" })).toBeInTheDocument();
    expect(screen.queryAllByRole("info").length).toBe(2);
    expect(screen.queryAllByRole("badge").length).toBe(2);
    expect(screen.queryAllByRole("listitem").length).toBe(3);
  });
});

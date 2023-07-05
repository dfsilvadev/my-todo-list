import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { screen } from "@testing-library/react";

import { Counter, TaskCountInfo } from "@/components";

describe("TaskCountInfo", () => {
  it("should render with the 'created' variant by default", () => {
    renderWithTheme(
      <TaskCountInfo badge={<Counter value="5" />}>
        Tarefas criadas
      </TaskCountInfo>
    );

    expect(screen.getByRole("info", { name: /count info/i })).toHaveStyle({
      color: "#4EA8DE"
    });
  });

  it("should render with variant 'done' and badge value '2 of 5'", () => {
    renderWithTheme(
      <TaskCountInfo badge={<Counter value="2 de 5" />} variant="done">
        Concluídas
      </TaskCountInfo>
    );

    expect(screen.getByRole("info", { name: /count info/i })).toHaveStyle({
      color: "#9164fa"
    });

    expect(screen.getByRole("badge", { name: /counter/i })).toHaveTextContent(
      "2 de 5"
    );
  });

  it("should render the value '5' on the badge", () => {
    renderWithTheme(
      <TaskCountInfo badge={<Counter value="5" />}>
        Tarefas criadas
      </TaskCountInfo>
    );

    expect(screen.getByRole("badge", { name: /counter/i })).toHaveTextContent(
      "5"
    );
  });
});

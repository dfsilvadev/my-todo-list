import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { screen } from "@testing-library/react";

import { Empty } from "@/components";

describe("Empty", () => {
  it("should render currectly", () => {
    renderWithTheme(<Empty />);

    expect(
      screen.getByRole("img", { name: /clipboard icon/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Você ainda não tem tarefas cadastradas/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Crie tarefas e organize seus itens a fazer/i)
    ).toBeInTheDocument();
  });
});

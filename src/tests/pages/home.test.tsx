import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { screen } from "@testing-library/react";

import { HomePage } from "@/pages";

describe("Home", () => {
  it("should render homepage correctly", () => {
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

import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { screen } from "@testing-library/react";

import { Form } from "@/components";

describe("Form", () => {
  it("should render currectly", () => {
    renderWithTheme(<Form />);

    const input = screen.getByPlaceholderText(/Adicione uma nova tarefa/i);
    const button = screen.getByRole("button", { name: /Criar/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

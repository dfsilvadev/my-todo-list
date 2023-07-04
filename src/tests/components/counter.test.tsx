import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { screen } from "@testing-library/react";

import { Counter } from "@/components";

describe("Counter", () => {
  it("should render number '3'", () => {
    const counter = "3";
    renderWithTheme(<Counter value={counter} />);

    expect(screen.getByRole("badge", { name: /counter/i })).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("should render number '2 de 5'", () => {
    const counter = "2 de 5";
    renderWithTheme(<Counter value={counter} />);

    expect(screen.getByRole("badge", { name: /counter/i })).toBeInTheDocument();
    expect(screen.getByText("2 de 5")).toBeInTheDocument();
  });
});

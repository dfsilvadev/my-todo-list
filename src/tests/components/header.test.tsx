import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { screen } from "@testing-library/react";

import { Header } from "@/components";

describe("Header", () => {
  it("render currectly header", () => {
    renderWithTheme(<Header />);

    expect(screen.getByRole("img", { name: /logo/i })).toBeInTheDocument();
    expect(screen.getByRole("banner")).toHaveStyle({
      width: "100vw",
      height: "12.5rem",
      backgroundColor: "#0D0D0D",
      display: "grid",
      "place-items": "center"
    });
  });
});

import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { screen } from "@testing-library/react";
import { PlusCircle } from "phosphor-react";

import { Button } from "@/components";

describe("Button", () => {
  it("render the medium button by default", () => {
    renderWithTheme(<Button>Criar</Button>);

    const button = screen.getByRole("button", { name: /Criar/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      height: "3.25rem",
      padding: "1rem",
      "font-size": "1rem"
    });
  });

  it("render an icon", () => {
    renderWithTheme(
      <Button icon={<PlusCircle weight="bold" data-testid="icon" />}>
        Criar
      </Button>
    );

    expect(screen.getByTestId(/icon/i)).toBeInTheDocument();
  });
});

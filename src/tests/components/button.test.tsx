import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { screen } from "@testing-library/react";
import { PlusCircle } from "phosphor-react";

import { Button } from "@/components";

describe("<Button />", () => {
  it("should render the medium button by default", () => {
    const { container } = renderWithTheme(<Button>Buy now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "4rem",
      padding: "0.8rem 3.2rem",
      "font-size": "1rem"
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the small button when size small is passed", () => {
    renderWithTheme(<Button size="small">Buy now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "3rem",
      "font-size": "0.875rem"
    });
  });

  it("should render the large button when size large is passed", () => {
    renderWithTheme(<Button size="large">Buy now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      height: "5rem",
      padding: "0.8rem 4.8rem",
      "font-size": "1.2rem"
    });
  });

  it("should render the full width button when fullWidth option is passed", () => {
    renderWithTheme(<Button fullWidth>Buy now</Button>);
    expect(screen.getByRole("button", { name: /Buy now/i })).toHaveStyle({
      width: "100%"
    });
  });

  it("should render an icon", () => {
    renderWithTheme(
      <Button icon={<PlusCircle size={20} weight="bold" data-testid="icon" />}>
        Buy now
      </Button>
    );
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render a minimal", () => {
    renderWithTheme(
      <Button
        icon={<PlusCircle size={20} weight="bold" data-testid="icon" />}
        minimal
      >
        Buy now
      </Button>
    );

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyle({
      background: "none"
    });

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyleRule(
      "background",
      "#0D0D0D",
      {
        modifier: ":hover"
      }
    );
  });

  it("should render a disabled Button", () => {
    renderWithTheme(<Button disabled>Buy now</Button>);

    expect(screen.getByRole("button", { name: /buy now/i })).toHaveStyleRule(
      "cursor",
      "not-allowed",
      {
        modifier: ":disabled"
      }
    );
  });

  it("should render button as a link", () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    );

    expect(screen.getByRole("link", { name: /buy now/i })).toHaveAttribute(
      "href",
      "/link"
    );
  });
});

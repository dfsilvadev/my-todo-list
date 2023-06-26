import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { screen } from "@testing-library/react";

import { Logo } from "@/components";

import logoSVG from "@/assets/logo.svg";

const props = {
  src: logoSVG,
  title: "Logo Todo App",
  alt: "Logo Todo App",
  "aria-label": "logo"
};

describe("Logo", () => {
  it("render currectly", () => {
    renderWithTheme(<Logo {...props} />);

    const logo = screen.getByRole("img", { name: /logo/i });

    expect(logo).toHaveAttribute("src", props.src);
    expect(logo).toHaveAttribute("title", props.title);
    expect(logo).toHaveAttribute("alt", props.alt);
  });
});

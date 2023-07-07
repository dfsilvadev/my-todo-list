import { renderWithTheme } from "@/utils/tests/renderWithTheme";
import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Checkbox } from "@/components";

describe("<Checkbox />", () => {
  it("should render with label", () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute("for", "check");
  });

  it("should render without label", () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByLabelText("checkbox")).not.toBeInTheDocument();
  });

  it("should dispatch onCkeck(true) when status change", async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" onCheck={onCheck} />
    );

    expect(onCheck).not.toHaveBeenCalled();

    act(() => {
      userEvent.click(screen.getByRole("checkbox"));
    });

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it("should dispatch onCkeck(false) when status change", async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox
        label="checkbox label"
        labelFor="check"
        onCheck={onCheck}
        isChecked
      />
    );

    act(() => {
      userEvent.click(screen.getByRole("checkbox"));
    });

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it("should be accessible with tab", async () => {
    const { container } = renderWithTheme(
      <Checkbox label="Checkbox" labelFor="Checkbox" />
    );

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();

    expect(container.firstChild).toMatchSnapshot();
  });
});

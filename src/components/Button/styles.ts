import styled, { DefaultTheme, css } from "styled-components";

import { ButtonProps } from "./types";

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, "size" | "fullWidth" | "minimal">;

const wrapperModifiers = {
  small: () => css`
    height: 3rem;
    padding: 0.8rem 1rem;
    font-size: 0.875rem;
  `,
  medium: () => css`
    height: 4rem;
    padding: 0.8rem 3.2rem;
    font-size: 1rem;
  `,
  large: () => css`
    height: 5rem;
    padding: 0.8rem 4.8rem;
    font-size: 1.2rem;
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    svg {
      width: 1.5rem;
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;

    &:hover {
      background: ${theme.colors.gray300};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, minimal, hasIcon, disabled }) => css`
    background: ${theme.colors.blueLight};
    padding: 0.5rem;
    color: ${theme.colors.gray100};
    font-weight: ${theme.font.weight.bold};
    border: 0;
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    ${!!size && wrapperModifiers[size]}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!minimal && wrapperModifiers.minimal(theme)}
    ${!!hasIcon && wrapperModifiers.withIcon}
    ${!!disabled && wrapperModifiers.disabled}

    &:hover {
      background: ${minimal ? theme.colors.gray700 : theme.colors.blueDark};
    }
  `}
`;

import styled, { DefaultTheme, css } from "styled-components";

import { InputComponentProps } from "./types";

const variant = {
  withError: (theme: DefaultTheme) => css`
    outline: 0;
    box-shadow: 0 0 0 2px ${theme.colors.danger};

    &:hover,
    &:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${theme.colors.danger};
    }
  `
};

export const InputComponent = styled.div<InputComponentProps>`
  ${({ theme, error }) => css`
    flex: 1;

    input {
      width: 100%;
      border-radius: 0.5rem;
      border: 0;
      background: ${theme.colors.gray500};
      color: ${theme.colors.gray100};
      padding: 1rem;

      &::placeholder {
        color: ${theme.colors.gray300};
      }

      &:hover,
      &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${theme.colors.purpleDark};
      }

      ${error && variant.withError(theme)}
    }
  `}
`;

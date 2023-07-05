import styled, { DefaultTheme, css } from "styled-components";

import { ITaskCountInfoProps } from "./types";

const wrapperModifiers = {
  created: (theme: DefaultTheme) => css`
    color: ${theme.colors.blueLight};
  `,
  done: (theme: DefaultTheme) => css`
    color: ${theme.colors.purpleLight};
  `
};

export const Wrapper = styled.div<Pick<ITaskCountInfoProps, "variant">>`
  ${({ theme, variant }) => css`
    font-size: 0.875rem;
    font-weight: ${theme.font.weight.bold};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    ${!!variant && wrapperModifiers[variant](theme)}
  `}
`;

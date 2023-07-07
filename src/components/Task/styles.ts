import styled, { DefaultTheme, css } from "styled-components";

import { TaskDescriptionProps } from "./types";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.gray500};
    padding: 1rem;
    border: 1px solid ${theme.colors.gray400};
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.06);

    display: flex;
    align-items: center;
    gap: 1rem;

    & button:hover {
      color: ${theme.colors.danger};
    }
  `}
`;

const taskDescriptionVariant = {
  created: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray100};
    text-decoration: none;
  `,
  done: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray300};
    text-decoration: line-through;
  `
};

export const TaskDescription = styled.p<TaskDescriptionProps>`
  ${({ theme, status }) => css`
    font-size: 0.875rem;
    line-height: 140%;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;

    ${taskDescriptionVariant[status](theme)}
  `}
`;

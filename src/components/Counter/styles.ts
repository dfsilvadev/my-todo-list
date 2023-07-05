import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray400};
    padding: 0.125rem 0.5rem;
    border-radius: 62.4375rem;
    font-size: 0.75rem;
    font-weight: ${theme.font.weight.bold};
    line-height: normal;
    color: ${theme.colors.gray200};
  `}
`;

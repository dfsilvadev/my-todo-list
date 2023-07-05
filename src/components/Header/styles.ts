import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100vw;
    height: 12.5rem;
    background-color: ${theme.colors.gray700};

    display: grid;
    place-items: center;
  `}
`;

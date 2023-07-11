import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: 4rem 1.5rem;
    border-top: 1px solid ${theme.colors.gray400};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    gap: 1rem;
  `}
`;

export const TextEmptyWrapper = styled.div`
  text-align: center;
`;

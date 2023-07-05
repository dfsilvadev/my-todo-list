import styled, { css } from "styled-components";

export const ButtonContent = styled.button`
  ${({ theme }) => css`
    height: 3.25rem;
    background: ${theme.colors.blueDark};
    color: ${theme.colors.gray100};
    border: 0;
    border-radius: 0.5rem;
    padding: 1rem;
    font-size: ${theme.font.sizes.default};
    font-weight: ${theme.font.weight.bold};

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
      background: ${theme.colors.blueLight};
    }
  `}
`;

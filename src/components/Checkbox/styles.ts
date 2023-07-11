import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: 0.2rem solid ${theme.colors.blueLight};
    border-radius: 100%;
    transition: background border 0.15s ease-in-out;
    position: relative;
    outline: none;

    &:before {
      content: "";
      width: 0.3rem;
      height: 0.6rem;
      border: 0.15rem solid ${theme.colors.gray100};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      right: 0.3rem;
      opacity: 0;
      transition: 0.15s ease-in-out;
    }

    &:hover {
      border-color: ${theme.colors.blueDark};
      background: ${theme.colors.gray500};
    }

    &:checked {
      border-color: ${theme.colors.purpleDark};
      background: ${theme.colors.purpleDark};

      &:before {
        opacity: 1;
      }

      &:hover {
        border-color: ${theme.colors.purpleLight};
        background: ${theme.colors.purpleLight};
      }
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.bold};
    line-height: 1.8rem;
  `}
`;

import { ForwardRefRenderFunction, forwardRef } from "react";
import * as S from "./styles";

import { ButtonType, IButtonProps } from "./types";

const Button: ForwardRefRenderFunction<ButtonType, IButtonProps> = (
  { children, icon, ...props },
  ref
) => {
  return (
    <S.ButtonContent ref={ref} {...props}>
      {!!children && children}
      {!!icon && icon}
    </S.ButtonContent>
  );
};

export default forwardRef(Button);

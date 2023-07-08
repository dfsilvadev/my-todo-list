import { forwardRef, ForwardRefRenderFunction } from "react";

import * as S from "./styles";
import { ButtonProps } from "./types";

const Button: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = "medium",
    fullWidth = false,
    minimal = false,
    icon,
    ...props
  },
  ref
) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      hasIcon={!!icon}
      minimal={minimal}
      ref={ref}
      {...props}
    >
      {!!children && <span>{children}</span>}
      {!!icon && icon}
    </S.Wrapper>
  );
};

export default forwardRef(Button);

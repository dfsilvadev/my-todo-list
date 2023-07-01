import * as S from "./styles";

import { IButtonProps } from "./types";

const Button = ({ children, icon }: IButtonProps) => {
  return (
    <S.ButtonContent>
      {!!children && children}
      {!!icon && icon}
    </S.ButtonContent>
  );
};

export default Button;

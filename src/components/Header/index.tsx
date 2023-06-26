import { Logo } from "@/components";

import * as S from "./styles";

import logoSVG from "@/assets/logo.svg";

const Header = () => {
  return (
    <S.Wrapper role="banner">
      <Logo
        src={logoSVG}
        title="Logo Todo App"
        alt="Logo Todo App"
        aria-label="logo"
      />
    </S.Wrapper>
  );
};

export default Header;

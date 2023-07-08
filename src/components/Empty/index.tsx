import clipboardSVG from "@assets/clipboard.svg";

import * as S from "./styles";

const Empty = () => {
  return (
    <S.Wrapper>
      <img
        src={clipboardSVG}
        alt="clipboard icon"
        title="clipboard icon"
        aria-label="clipboard icon"
      />

      <S.TextEmptyWrapper>
        <h4>Você ainda não tem tarefas cadastradas</h4>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </S.TextEmptyWrapper>
    </S.Wrapper>
  );
};

export default Empty;

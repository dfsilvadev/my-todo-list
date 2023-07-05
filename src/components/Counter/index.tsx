import * as S from "./styles";

import { ICounterProps } from "./types";

const Counter = ({ value }: ICounterProps) => {
  return (
    <S.Wrapper role="badge" aria-label="counter">
      {value}
    </S.Wrapper>
  );
};

export default Counter;

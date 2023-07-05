import { Button, Input } from "@/components";

import * as S from "./styles";

const Form = () => {
  return (
    <S.Wrapper>
      <Input type="text" name="task" placeholder="Adicione uma nova tarefa" />
      <Button type="submit">Criar</Button>
    </S.Wrapper>
  );
};

export default Form;

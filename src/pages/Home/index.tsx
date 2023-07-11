import { Container, Form, Header, TaskList } from "@/components";

import * as S from "./styles";

const Home = () => {
  return (
    <S.Wrapper>
      <Header />

      <Container>
        <Form />

        <TaskList />
      </Container>
    </S.Wrapper>
  );
};

export default Home;

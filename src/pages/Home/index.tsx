import { Container, Form, Header, TaskList } from "@/components";

import { tasks } from "@mocks/tasks";

import * as S from "./styles";

const Home = () => {
  return (
    <S.Wrapper>
      <Header />

      <Container>
        <Form />
        <TaskList tasks={tasks} />
      </Container>
    </S.Wrapper>
  );
};

export default Home;

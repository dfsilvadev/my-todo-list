import { Counter, Empty, Task, TaskCountInfo } from "@/components";

import * as S from "./styles";

import { ITaskListProps } from "./types";

const TaskList = ({ tasks }: ITaskListProps) => {
  return (
    <S.Wrapper role="list" aria-label="task list">
      <S.HeaderList>
        <TaskCountInfo badge={<Counter value="3" />} variant="created">
          Tarefas criadas
        </TaskCountInfo>
        <TaskCountInfo badge={<Counter value="1 de 3" />} variant="done">
          Concluídas
        </TaskCountInfo>
      </S.HeaderList>

      <S.BodyList>
        {tasks.length ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              description={task.description}
              status={task.status}
            />
          ))
        ) : (
          <Empty />
        )}
      </S.BodyList>
    </S.Wrapper>
  );
};

export default TaskList;

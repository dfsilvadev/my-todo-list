import { Counter, Empty, Task, TaskCountInfo } from "@/components";

import useTaskContext from "@/hooks/useTasksContext";

import * as S from "./styles";

const TaskList = () => {
  const { tasks } = useTaskContext();

  const countFinishedTask = tasks.filter((task) => task.checked);

  return (
    <S.Wrapper role="list" aria-label="task list">
      <S.HeaderList>
        <TaskCountInfo
          badge={<Counter value={tasks.length} />}
          variant="created"
        >
          Tarefas criadas
        </TaskCountInfo>
        <TaskCountInfo
          badge={
            <Counter
              value={
                !countFinishedTask.length
                  ? "0"
                  : `${countFinishedTask.length} de ${tasks.length}`
              }
            />
          }
          variant="done"
        >
          Concluídas
        </TaskCountInfo>
      </S.HeaderList>

      <S.BodyList>
        {tasks.length ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              description={task.description}
              checked={task.checked}
              taskId={task.id}
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

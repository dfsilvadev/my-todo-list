import { useState } from "react";
import { Trash } from "phosphor-react";

import { Button, Checkbox } from "@/components";

import useTaskContext from "@/hooks/useTasksContext";

import * as S from "./styles";

import { ITaskProps } from "./types";

const Task = ({ description, checked, taskId }: ITaskProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const { updateTask } = useTaskContext();

  const onCheck = (status: boolean) => {
    setIsChecked(status);
    updateTask(taskId, status);
  };

  return (
    <S.Wrapper role="listitem" aria-label="task card">
      <Checkbox isChecked={isChecked} onCheck={onCheck} />

      <S.TaskDescription status={isChecked ? "done" : "created"}>
        {description}
      </S.TaskDescription>

      <Button
        type="button"
        minimal
        size="small"
        icon={<Trash size={20} weight="bold" />}
      />
    </S.Wrapper>
  );
};

export default Task;

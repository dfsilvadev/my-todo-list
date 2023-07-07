import { Trash } from "phosphor-react";

import { Button, Checkbox } from "@/components";

import * as S from "./styles";

import { ITaskProps } from "./types";

const Task = ({ description, status }: ITaskProps) => {
  return (
    <S.Wrapper>
      <Checkbox isChecked={status === "done"} />

      <S.TaskDescription status={status}>{description}</S.TaskDescription>

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

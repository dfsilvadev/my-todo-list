import { FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import { Button, TextField } from "@/components";

import useTaskContext from "@/hooks/useTasksContext";

import * as S from "./styles";

import { ITask } from "@components/Task/types";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  const { createTask } = useTaskContext();

  const onInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const id = Math.floor(Date.now() * Math.random());

    const data: ITask = {
      id: String(id),
      description: inputValue,
      status: "created",
      checked: false,
      createdAt: new Date()
    };

    createTask(data);
    setInputValue("");
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <TextField
        placeholder="Adicione uma nova tarefa"
        initialValue={inputValue}
        onInputValue={onInputChange}
      />
      <Button
        type="submit"
        size="small"
        icon={<PlusCircle size={20} weight="bold" />}
      >
        Criar
      </Button>
    </S.Wrapper>
  );
};

export default Form;

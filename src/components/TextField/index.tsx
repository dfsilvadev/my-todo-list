import { ChangeEvent, useState } from "react";

import * as S from "./styles";

import { TextFieldProps } from "./types";

const TextField = ({
  initialValue = "",
  error = false,
  onInputValue,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInputValue && onInputValue(newValue);
  };

  return (
    <S.TextFieldComponent error={error}>
      <input type="text" value={value} onChange={onChange} {...props} />
    </S.TextFieldComponent>
  );
};

export default TextField;

import { InputHTMLAttributes } from "react";

export type TextFieldComponentProps = Pick<TextFieldProps, "error">;

type TextFieldType = InputHTMLAttributes<HTMLInputElement>;

export type TextFieldProps = {
  onInputValue?: (value: string) => void;
  error?: boolean;
  initialValue?: string;
} & TextFieldType;

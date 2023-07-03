import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonType = HTMLButtonElement;

type ButtonHTMLAttributesType = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IButtonProps extends ButtonHTMLAttributesType {
  children?: ReactNode;
  icon?: ReactNode;
}

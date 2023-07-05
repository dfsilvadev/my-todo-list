import { ReactNode } from "react";

export interface ITaskCountInfoProps {
  children: string;
  variant?: "created" | "done";
  badge: ReactNode;
}

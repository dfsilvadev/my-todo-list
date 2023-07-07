export interface ITaskProps {
  description: string;
  status: "created" | "done";
}

export type TaskDescriptionProps = Pick<ITaskProps, "status">;

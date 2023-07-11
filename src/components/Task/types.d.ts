export interface ITask {
  id: string;
  description: string;
  status: "created" | "done";
  checked: boolean;
  createdAt: Date;
}

export interface ITaskProps {
  description: string;
  checked: boolean;
  taskId: string;
}

export type TaskDescriptionProps = {
  status: "created" | "done";
};

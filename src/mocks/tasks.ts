export interface ITask {
  id: number;
  description: string;
  status: "created" | "done";
  createdAt: Date;
}

export const tasks: ITask[] = [
  {
    id: 1,
    description: "Task I",
    status: "created",
    createdAt: new Date("2023-06-21 09:00:00")
  },
  {
    id: 2,
    description: "Task II",
    status: "created",
    createdAt: new Date("2023-06-21 18:20:00")
  },
  {
    id: 3,
    description: "Task III",
    status: "done",
    createdAt: new Date("2023-06-21 09:00:00")
  }
];

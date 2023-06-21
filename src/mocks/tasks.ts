export interface ITask {
  id: number;
  description: string;
  status: "incomplete" | "complete";
  createdAt: Date;
}

export const tasks: ITask[] = [
  {
    id: 1,
    description: "Task I",
    status: "incomplete",
    createdAt: new Date("2023-06-21 09:00:00")
  },
  {
    id: 2,
    description: "Task II",
    status: "incomplete",
    createdAt: new Date("2023-06-21 18:20:00")
  },
  {
    id: 3,
    description: "Task III",
    status: "complete",
    createdAt: new Date("2023-06-21 09:00:00")
  }
];

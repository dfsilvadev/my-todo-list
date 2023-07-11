import { ITask } from "@/components/Task/types";

export const tasks: ITask[] = [
  {
    id: "1",
    description: "Estudar ReactJS - Hooks e custom hooks.",
    status: "created",
    checked: false,
    createdAt: new Date("2023-06-21 09:00:00")
  },
  {
    id: "2",
    description: "Aprender Redux.",
    status: "created",
    checked: false,
    createdAt: new Date("2023-06-21 18:20:00")
  },
  {
    id: "3",
    description: "Lavar o carro.",
    status: "done",
    checked: true,
    createdAt: new Date("2023-06-21 09:00:00")
  }
];

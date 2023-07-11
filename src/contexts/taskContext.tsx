import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState
} from "react";

import { axiosInstance } from "@/services/axios-instance";

import { ITask } from "@/components/Task/types";

interface ITaskContextProviderProps {
  children: ReactNode;
}

interface ITaskContextData {
  tasks: ITask[];
  createTask: (task: ITask) => Promise<void>;
  updateTask: (id: string, status: boolean) => Promise<void>;
}

export const TaskContext = createContext({} as ITaskContextData);

export function TaskContextProvider({ children }: ITaskContextProviderProps) {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const getAllTasks = useCallback(async () => {
    const response = await axiosInstance.get("tasks");
    const {
      data: { tasks }
    } = response;

    setTasks(() => [...tasks]);
  }, []);

  useEffect(() => {
    getAllTasks();
  }, [getAllTasks]);

  const createTask = useCallback(async (task: ITask) => {
    const response = await axiosInstance.post("tasks", task);
    const {
      data: { tasks }
    } = response;

    setTasks((currentState) => [...currentState, tasks]);
  }, []);

  const updateTask = useCallback(
    async (id: string, checked: boolean) => {
      await axiosInstance.put(`tasks/${id}`, { checked });
      getAllTasks();
    },
    [getAllTasks]
  );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

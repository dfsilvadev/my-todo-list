import { useContext } from "react";

import { TaskContext } from "@contexts/taskContext";

const useTaskContext = () => useContext(TaskContext);

export default useTaskContext;

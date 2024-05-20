import { TTask } from "../types";
import { Task } from "./Task";

type TTaskListProps = {
  taskList: TTask[];
};

export const TaskList = ({ taskList }: TTaskListProps) => {
  return (
    <div className="w-full p-1 flex flex-col gap-1">
      {taskList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

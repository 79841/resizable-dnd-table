"use client";
import { useColumnRefListContext } from "../contexts/column-ref-list";
import { TTask } from "../types";
import { TaskCell } from "./cell/TaskCell";

type TTaskProps = {
  task: TTask;
};
export const Task = ({ task }: TTaskProps) => {
  const { columnRefList } = useColumnRefListContext();
  return (
    <div className="flex justify-between items-center border rounded-md h-8 text-sm">
      <TaskCell columnRef={columnRefList["ID"]}>{task.id}</TaskCell>
      <TaskCell columnRef={columnRefList["Title"]}>{task.title}</TaskCell>
      <TaskCell columnRef={columnRefList["Description"]}>
        {task.description}
      </TaskCell>
      <TaskCell columnRef={columnRefList["Status"]}>{task.status}</TaskCell>
      <TaskCell columnRef={columnRefList["Actions"]}>{task.actions}</TaskCell>
    </div>
  );
};

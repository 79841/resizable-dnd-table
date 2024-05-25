"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useColumnRefListContext } from "../contexts/column-ref-list";
import { TTask } from "../types";
import { TaskCell } from "./cell/TaskCell";

type TTaskProps = {
  task: TTask;
};
export const Task = ({ task }: TTaskProps) => {
  const { columnRefList } = useColumnRefListContext();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="flex justify-between items-center border rounded-md h-8 text-sm touch-none"
    >
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

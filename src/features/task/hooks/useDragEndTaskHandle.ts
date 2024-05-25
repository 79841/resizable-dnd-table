import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
import { TTask } from "..";

export const useDragEndTaskHandle = (tasks: TTask[]) => {
  const [taskList, setTaskList] = useState<TTask[]>(tasks);

  const getTaskPos = (id: string) =>
    taskList.findIndex((task) => task.id === id);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over === null) return;

    if (active.id === over.id) return;

    setTaskList((taskList: TTask[]) => {
      const originalPos = getTaskPos(active.id.toString());
      const newPos = getTaskPos(over.id.toString());

      return arrayMove(taskList, originalPos, newPos);
    });
  };
  return [taskList, handleDragEnd] as const;
};

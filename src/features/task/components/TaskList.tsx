"use client";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { TTask } from "../types";
import { Task } from "./Task";

type TTaskListProps = {
  taskList: TTask[];
  onDragEnd: (event: DragEndEvent) => void;
};

export const TaskList = ({ taskList, onDragEnd }: TTaskListProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      onDragEnd={onDragEnd}
      sensors={sensors}
      collisionDetection={closestCorners}
    >
      <div className="w-full p-1 flex flex-col gap-1">
        <SortableContext
          items={taskList}
          strategy={verticalListSortingStrategy}
        >
          {taskList.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};

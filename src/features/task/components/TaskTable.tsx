"use client";

import { ColumnRefListContextProvider } from "../contexts/column-ref-list";
import { useDragEndTaskHandle } from "../hooks/useDragEndTaskHandle";
import { ColumnList } from "./ColumnList";
import { TaskList } from "./TaskList";

export const TaskTable = () => {
  const tasks = [
    {
      id: "1",
      title: "Title 1",
      description: "Description 1",
      status: "Status 1",
      actions: "Actions 1",
    },
    {
      id: "2",
      title: "Title 2",
      description: "Description 2",
      status: "Status 2",
      actions: "Actions 2",
    },
    {
      id: "3",
      title: "Title 3",
      description: "Description 3",
      status: "Status 3",
      actions: "Actions 3",
    },
    {
      id: "4",
      title: "Title 4",
      description: "Description 4",
      status: "Status 4",
      actions: "Actions 4",
    },
    {
      id: "5",
      title: "Title 5",
      description: "Description 5",
      status: "Status 5",
      actions: "Actions 5",
    },
    {
      id: "6",
      title: "Title 6",
      description: "Description 6",
      status: "Status 6",
      actions: "Actions 6",
    },
  ];

  const columnList: Record<string, string> = {
    id: "ID",
    title: "Title",
    description: "Description",
    status: "Status",
    actions: "Actions",
  };

  const [taskList, handleDragEnd] = useDragEndTaskHandle(tasks);

  return (
    <div className="w-full">
      <ColumnRefListContextProvider>
        <ColumnList columnList={columnList} />
        <TaskList taskList={taskList} onDragEnd={handleDragEnd} />
      </ColumnRefListContextProvider>
    </div>
  );
};

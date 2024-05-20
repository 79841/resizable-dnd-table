"use client";
import { ResizablePanel } from "@/components/ui/resizable";
import { useEffect, useRef } from "react";
import { useColumnRefListContext } from "../contexts/column-ref-list";

type TColumnProps = {
  columnName: string;
};
export const Column = ({ columnName }: TColumnProps) => {
  const columnRef = useRef<HTMLTableCellElement>(null);
  const { addColumnRef } = useColumnRefListContext();

  useEffect(() => {
    addColumnRef(columnName, columnRef);
  }, [addColumnRef, columnName, columnRef]);

  return (
    <ResizablePanel minSize={5}>
      <div
        ref={columnRef}
        className="w-full h-full flex items-center justify-center"
      >
        {columnName}
      </div>
    </ResizablePanel>
  );
};

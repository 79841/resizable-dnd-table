"use client";
import { ResizablePanel } from "@/components/ui/resizable";
import { PropsWithChildren, memo, useEffect, useRef } from "react";
import { useColumnRefListContext } from "../contexts/column-ref-list";

type TColumnProps = {
  columnKey: string;
  defaultSize?: number;
} & PropsWithChildren;
export const Column = memo(function Column({
  columnKey,
  defaultSize,
  children,
}: TColumnProps) {
  const columnRef = useRef<HTMLTableCellElement>(null);
  const { addColumnRef } = useColumnRefListContext();

  useEffect(() => {
    addColumnRef(columnKey, columnRef);
  }, [addColumnRef, columnKey, columnRef]);

  return (
    <ResizablePanel minSize={5} defaultSize={defaultSize} className="h-full">
      <div
        ref={columnRef}
        className="w-full h-full flex items-center justify-center"
      >
        {/* {columnName} */}
        {children}
      </div>
    </ResizablePanel>
  );
});

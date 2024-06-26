"use client";
import { PropsWithChildren } from "react";
import { ColumnRefListContextProvider } from "../contexts/column-ref-list";

type ResizableDndTableProps = PropsWithChildren;

export const ResizableDndTable = ({ children }: ResizableDndTableProps) => {
  return (
    <ColumnRefListContextProvider>
      <div
        className="w-full flex flex-col h-full"
        style={{ overflow: "visible" }}
      >
        {children}
      </div>
    </ColumnRefListContextProvider>
  );
};

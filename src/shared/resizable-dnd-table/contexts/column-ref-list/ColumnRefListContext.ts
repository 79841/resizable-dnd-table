"use client";
import { RefObject, createContext, useContext } from "react";

export type ColumnRefListContextType = {
  columnRefList: Record<string, RefObject<HTMLTableCellElement>>;
  addColumnRef: (
    columnName: string,
    columnRef: RefObject<HTMLTableCellElement>
  ) => void;
};

export const ColumnRefListContext = createContext<ColumnRefListContextType>({
  columnRefList: {},
  addColumnRef: (
    columnName: string,
    columnRef: RefObject<HTMLTableCellElement>
  ) => {},
});

export const useColumnRefListContext = () => {
  return useContext(ColumnRefListContext);
};

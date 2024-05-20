"use client";
import { RefObject, createContext, useContext } from "react";

export type TColumnRefListContextType = {
  columnRefList: Record<string, RefObject<HTMLTableCellElement>>;
  addColumnRef: (
    columnName: string,
    columnRef: RefObject<HTMLTableCellElement>
  ) => void;
};

export const ColumnRefListContext = createContext<TColumnRefListContextType>({
  columnRefList: {},
  addColumnRef: (
    columnName: string,
    columnRef: RefObject<HTMLTableCellElement>
  ) => {},
});

export const useColumnRefListContext = () => {
  return useContext(ColumnRefListContext);
};

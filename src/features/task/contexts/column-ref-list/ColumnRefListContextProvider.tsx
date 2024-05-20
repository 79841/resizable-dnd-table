"use client";
import { RefObject, useCallback, useState } from "react";
import { ColumnRefListContext } from "./ColumnRefListContext";

type TColumnRefListContextProviderProps = {
  children: React.ReactNode;
};
export const ColumnRefListContextProvider = ({
  children,
}: TColumnRefListContextProviderProps) => {
  const [columnRefList, setColumnRefList] = useState<
    Record<string, RefObject<HTMLTableCellElement>>
  >({});
  const addColumnRef = useCallback(
    (columnName: string, columnRef: RefObject<HTMLTableCellElement>) => {
      setColumnRefList((prev) => ({ ...prev, [columnName]: columnRef }));
    },
    []
  );

  return (
    <ColumnRefListContext.Provider value={{ columnRefList, addColumnRef }}>
      {children}
    </ColumnRefListContext.Provider>
  );
};

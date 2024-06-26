"use client";
import { PropsWithChildren, memo, useEffect, useState } from "react";
import { Item, useColumnRefListContext } from "..";
export type ItemCellTemplateProps = {
  item?: Item;
  columnKey: string;
  // render: (data: any) => ReactNode;
} & PropsWithChildren;
export const ItemCellTemplate = memo(function ItemCellTemplate({
  item,
  columnKey,
  // render,
  children,
}: ItemCellTemplateProps) {
  const { columnRefList } = useColumnRefListContext();
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (!columnRefList[columnKey] || !columnRefList[columnKey].current) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const { width } =
        columnRefList[columnKey].current!.getBoundingClientRect();
      setWidth(width);
    });

    resizeObserver.observe(columnRefList[columnKey].current!);

    return () => {
      resizeObserver.disconnect();
    };
  }, [columnKey, columnRefList]);

  return (
    <div className="pl-2 overflow-hidden text-nowrap" style={{ width }}>
      {/* {item && columnKey in item && render(item[columnKey])} */}
      {children}
    </div>
  );
});

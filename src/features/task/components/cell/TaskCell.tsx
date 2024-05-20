import { PropsWithChildren, RefObject, useEffect, useState } from "react";

type TTaskCellProps = {
  columnRef: RefObject<HTMLDivElement>;
} & PropsWithChildren;
export const TaskCell = ({ columnRef, children }: TTaskCellProps) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (!columnRef || !columnRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      if (!columnRef.current) return;
      const { width } = columnRef.current.getBoundingClientRect();
      setWidth(width);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [columnRef]);

  return (
    <div className="pl-2 overflow-hidden text-nowrap" style={{ width }}>
      {children}
    </div>
  );
};

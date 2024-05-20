"use client";
import { useEffect, useState } from "react";

type TTaskActionsCellProps = {
  actions: string;
  columnRef: React.RefObject<HTMLDivElement>;
};
export const TaskActionsCell = ({
  actions,
  columnRef,
}: TTaskActionsCellProps) => {
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
    <div className="border" style={{ width }}>
      {actions}
    </div>
  );
};

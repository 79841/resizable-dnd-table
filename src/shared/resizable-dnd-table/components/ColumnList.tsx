import {
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Children, Fragment, PropsWithChildren } from "react";

type ColumnListProps = PropsWithChildren;

export const ColumnList = ({ children }: ColumnListProps) => {
  const childrenArray = Children.toArray(children);
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full flex items-center border-b h-10"
      style={{ height: "2.5rem" }}
    >
      {childrenArray.map((child, index) => (
        <Fragment key={index}>
          {child}
          {childrenArray.length - 1 !== index && (
            <ResizableHandle className="h-10" />
          )}
        </Fragment>
      ))}
    </ResizablePanelGroup>
  );
};

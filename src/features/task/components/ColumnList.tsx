import {
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Column } from "./Column";

type TColumnListProps = {
  columnList: Record<string, string>;
};
export const ColumnList = ({ columnList }: TColumnListProps) => {
  const { id, title, description, status, actions } = columnList;
  return (
    <div className="w-full h-10 border-b">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full flex items-center"
      >
        <Column columnName={id} />
        <ResizableHandle className="h-1/2" />
        <Column columnName={title} />
        <ResizableHandle className="h-1/2" />
        <Column columnName={description} />
        <ResizableHandle className="h-1/2" />
        <Column columnName={status} />
        <ResizableHandle className="h-1/2" />
        <Column columnName={actions} />
      </ResizablePanelGroup>
    </div>
  );
};

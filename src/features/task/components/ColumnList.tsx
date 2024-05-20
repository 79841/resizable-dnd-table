import {
  ResizableHandle,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Column } from "./Column";

type TColumnListProps = {
  columnList: string[];
};
export const ColumnList = ({ columnList }: TColumnListProps) => {
  return (
    <div className="w-full h-10 border-b">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full flex items-center"
      >
        {columnList.map((column, index) => {
          return (
            <>
              <Column key={column} columnName={column} />
              {columnList.length - 1 !== index && (
                <ResizableHandle key={`${column}-handle`} className="h-1/2" />
              )}
            </>
          );
        })}
      </ResizablePanelGroup>
    </div>
  );
};

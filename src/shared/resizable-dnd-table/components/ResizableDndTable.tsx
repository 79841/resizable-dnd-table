"use client";
import { ColumnRefListContextProvider } from "../contexts/column-ref-list";
import { useDragEndItemHandle } from "../hooks/useDragEndItemHandle";
import { Item } from "../types";
import { Column } from "./Column";
import { ColumnList } from "./ColumnList";
import { ItemCellTemplate } from "./ItemCellTemplate";
import { ItemList } from "./ItemList";
import { ItemRowTemplate } from "./ItemRowTemplate";

type ResizableDndTableProps = {
  initialItemList: Item[];
};

export const ResizableDndTable = ({
  initialItemList,
}: ResizableDndTableProps) => {
  const [itemList, handleDragEnd] = useDragEndItemHandle(initialItemList);
  return (
    <ColumnRefListContextProvider>
      <div
        className="w-full flex flex-col h-full"
        style={{ overflow: "visible" }}
      >
        <ColumnList>
          <Column columnKey="id" defaultSize={20}>
            ID
          </Column>
          <Column columnKey="title" defaultSize={20}>
            Title
          </Column>
          <Column columnKey="description" defaultSize={20}>
            Description
          </Column>
          <Column columnKey="status" defaultSize={20}>
            Status
          </Column>
          <Column columnKey="actions" defaultSize={20}>
            Actions
          </Column>
        </ColumnList>
        <ItemList itemList={itemList} onDragEnd={handleDragEnd}>
          {itemList.map((item) => (
            <ItemRowTemplate key={item.id} id={item.id}>
              <ItemCellTemplate columnKey="id">
                <div>{item.id}</div>
              </ItemCellTemplate>
              <ItemCellTemplate columnKey="title">
                <div>{item.title}</div>
              </ItemCellTemplate>
              <ItemCellTemplate columnKey="description">
                <div>{item.description}</div>
              </ItemCellTemplate>
              <ItemCellTemplate columnKey="status">
                <div>{item.status}</div>
              </ItemCellTemplate>
              <ItemCellTemplate columnKey="actions">
                <div>{item.actions}</div>
              </ItemCellTemplate>
            </ItemRowTemplate>
          ))}
        </ItemList>
      </div>
    </ColumnRefListContextProvider>
  );
};

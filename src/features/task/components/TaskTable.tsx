"use client";
import { items } from "@/data/Items";
import { Item, ResizableDndTable } from "@/shared/resizable-dnd-table";
import { Column } from "@/shared/resizable-dnd-table/components/Column";
import { ColumnList } from "@/shared/resizable-dnd-table/components/ColumnList";
import { ItemCellTemplate } from "@/shared/resizable-dnd-table/components/ItemCellTemplate";
import { ItemList } from "@/shared/resizable-dnd-table/components/ItemList";
import { ItemRowTemplate } from "@/shared/resizable-dnd-table/components/ItemRowTemplate";

type TableRowProps = { item: Item };

const TableRow = ({ item }: TableRowProps) => {
  return (
    <ItemRowTemplate id={item.id}>
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
  );
};

export const TaskTable = () => {
  return (
    <ResizableDndTable>
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
      <ItemList
        itemList={items}
        render={(item: Item) => <TableRow item={item} key={`item-${item.id}`} />}
      />
    </ResizableDndTable>
  );
};

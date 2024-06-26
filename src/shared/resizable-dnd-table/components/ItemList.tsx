"use client";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { ReactNode, memo } from "react";
import { Item } from "..";
import { useDragEndItemHandle } from "../hooks/useDragEndItemHandle";

type ITemListProps = {
  itemList: Item[];
  render: (item: Item) => ReactNode;
};

export const ItemList = memo(function ItemList({
  itemList,
  render,
}: ITemListProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const [items, handleDragEnd] = useDragEndItemHandle(itemList);

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={sensors}
      collisionDetection={closestCorners}
      modifiers={[restrictToVerticalAxis]}
    >
      <div className="flex flex-col gap-1 p-1 w-full flex-1 ">
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => render(item))}
        </SortableContext>
      </div>
    </DndContext>
  );
});

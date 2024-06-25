"use client";
import {
  DndContext,
  DragEndEvent,
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
import { PropsWithChildren, memo } from "react";
import { Item } from "..";

type ITemListProps = {
  itemList: Item[];
  onDragEnd: (event: DragEndEvent) => void;
} & PropsWithChildren;

export const ItemList = memo(function ItemList({
  itemList,
  onDragEnd,
  children,
}: ITemListProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      onDragEnd={onDragEnd}
      sensors={sensors}
      collisionDetection={closestCorners}
      modifiers={[restrictToVerticalAxis]}
    >
      <div className="flex flex-col gap-1 p-1 w-full flex-1 ">
        <SortableContext
          items={itemList}
          strategy={verticalListSortingStrategy}
        >
          {/* {itemList.map((item) => (
            <ItemRowTemplate key={item.id} item={item}>
              {React.Children.map(children, (child) =>
                React.isValidElement<ItemCellTemplateProps>(child)
                  ? React.cloneElement(child, { item })
                  : child
              )}
            </ItemRowTemplate>
          ))} */}
          {children}
        </SortableContext>
      </div>
    </DndContext>
  );
});

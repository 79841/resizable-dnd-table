import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useCallback, useState } from "react";
import { Item } from "..";

export const useDragEndItemHandle = (initialItemList: Item[]) => {
  const [itemList, setItemList] = useState(initialItemList);
  const getITemPos = useCallback(
    (id: string) => itemList.findIndex((item) => item.id === id),
    [itemList]
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (over === null) return;
      if (active.id === over.id) return;

      setItemList((itemList: Item[]) => {
        const originalPos = getITemPos(active.id.toString());
        const newPos = getITemPos(over.id.toString());

        return arrayMove(itemList, originalPos, newPos);
      });
    },
    [getITemPos]
  );
  return [itemList, handleDragEnd] as const;
};

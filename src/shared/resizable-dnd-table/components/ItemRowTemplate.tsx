"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ReactNode, memo } from "react";

type ItemRowTemplateProps = {
  id: string;
  children: ReactNode;
};

export const ItemRowTemplate = memo(function ItemRowTemplate({
  // item,
  id,
  children,
}: ItemRowTemplateProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    // useSortable({ id: item!.id })
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="flex justify-between items-center border min-h-8 rounded-md h-8 text-sm touch-none focus:outline-gray-400"
    >
      {children}
    </div>
  );
});

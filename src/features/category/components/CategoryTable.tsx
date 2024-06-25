import { ResizableDndTable } from "@/shared/resizable-dnd-table";
import { TCategory } from "../types/Category";

export const CategoryTable = () => {
  const columnList: Record<string, string> = {
    id: "ID",
    category: "Category",
  };
  const categoryList: TCategory[] = [
    { id: "1", category: "category1" },
    { id: "2", category: "category2" },
    { id: "3", category: "category3" },
  ];

  return <ResizableDndTable initialItemList={categoryList} />;
};

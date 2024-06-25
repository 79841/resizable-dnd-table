import { ResizableDndTable } from "@/shared/resizable-dnd-table";

export const TaskTable = () => {
  const initialItemList = [
    {
      id: "1",
      title: "Title 1",
      description: "Description 1",
      status: "Status 1",
      actions: "Actions 1",
    },
    {
      id: "2",
      title: "Title 2",
      description: "Description 2",
      status: "Status 2",
      actions: "Actions 2",
    },
    {
      id: "3",
      title: "Title 3",
      description: "Description 3",
      status: "Status 3",
      actions: "Actions 3",
    },
    {
      id: "4",
      title: "Title 4",
      description: "Description 4",
      status: "Status 4",
      actions: "Actions 4",
    },
    {
      id: "5",
      title: "Title 5",
      description: "Description 5",
      status: "Status 5",
      actions: "Actions 5",
    },
    // {
    //   id: "6",
    //   title: "Title 6",
    //   description: "Description 6",
    //   status: "Status 6",
    //   actions: "Actions 6",
    // },
    // {
    //   id: "11",
    //   title: "Title 1",
    //   description: "Description 1",
    //   status: "Status 1",
    //   actions: "Actions 1",
    // },
    // {
    //   id: "12",
    //   title: "Title 2",
    //   description: "Description 2",
    //   status: "Status 2",
    //   actions: "Actions 2",
    // },
    // {
    //   id: "13",
    //   title: "Title 3",
    //   description: "Description 3",
    //   status: "Status 3",
    //   actions: "Actions 3",
    // },
    // {
    //   id: "14",
    //   title: "Title 4",
    //   description: "Description 4",
    //   status: "Status 4",
    //   actions: "Actions 4",
    // },
    // {
    //   id: "15",
    //   title: "Title 5",
    //   description: "Description 5",
    //   status: "Status 5",
    //   actions: "Actions 5",
    // },
    // {
    //   id: "16",
    //   title: "Title 6",
    //   description: "Description 6",
    //   status: "Status 6",
    //   actions: "Actions 6",
    // },
  ];
  return <ResizableDndTable initialItemList={initialItemList} />;
};

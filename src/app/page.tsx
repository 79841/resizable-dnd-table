import { TaskTable } from "@/features/task/components/TaskTable";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <div className="w-[1000px] h-[600px]">
        <TaskTable />
      </div>
    </main>
  );
}

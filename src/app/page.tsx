import { TaskTable } from "@/features/task";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-[1000px]">
      <TaskTable />
    </main>
  );
}

import { useEffect } from "react";
import TaskCard from "../../components/TaskCard";
import { useTask } from "../../context/TaskContextProvider";

export default function Home() {
  const { tasks, loadTask } = useTask();

  useEffect(() => {
    loadTask();
  }, []);

  const renderMain = () => {
    if (tasks.length === 0) return <h2>No task yet.</h2>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  };

  return (
    <>
      <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
      <section className="grid grid-cols-4 gap-3">{renderMain()}</section>
    </>
  );
}

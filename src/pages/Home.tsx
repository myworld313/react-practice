
import { useState } from "react";

type Task = { id: string; text: string };

function Home() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([
    { id: crypto.randomUUID(), text: "Learn diff tab" },
  ]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (!newTask.trim()) return;
    setTasks((prev) => [...prev, { id: crypto.randomUUID(), text: newTask }]);
    setNewTask("");
  }

  return (
    <div>
      <h1>Welcome Home</h1>

      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>

      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Add task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
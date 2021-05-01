import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

import AddTask from "./components/AddTask";
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Doctor's appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },

    {
      id: "2",
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: false,
    },
    {
      id: "3",
      text: "Food Shoping",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
  ]);
  const [isVisible ,setVisible]=useState(false)
  const addTask = (task) => {
    console.log(task);
    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));

    console.log("yonas ", { id });
  };

  const onDoubleClick = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

 const changeVisible=(visibility)=>{

  setVisible(visibility)
 }


  return (
    <div className="container">
      <Header title="TASK TRACKER" onAddTask={changeVisible} />
    {isVisible &&   <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          onDoubleClick={onDoubleClick}
          onDelete={deleteTask}
          tasks={tasks}
        />
      ) : (
        <h3
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          No Tasks Yet
        </h3>
      )}
    </div>
  );
};

export default App;

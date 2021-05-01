import Task from "./Task";
const Tasks = ({ tasks, onDelete, onDoubleClick }) => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            onDoubleClick={onDoubleClick}
            onDelete={onDelete}
            key={task.id}
            task={task}
          />
        );
      })}
    </div>
  );
};

export default Tasks;

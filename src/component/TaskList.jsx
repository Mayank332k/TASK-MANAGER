import Task from "./Task";

const TaskList = ({ DummyData, toggleTask, deleteTask }) => {
  return (
    <>
      {DummyData.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </>
  );
};

export default TaskList;

import { useState } from "react";
import Parent from "./component/Parent";
import DottedHeader from "./component/Welcome";
import Header from "./component/Header";
import InputBox from "./component/InputBox";
import TaskList from "./component/TaskList";
import Choices from "./component/Choices";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);
  const [choice, setchoice] = useState("all");

  function toggleTask(id) {
    setdata(
      data.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const deleteTask = (id) => {
    setdata(data.filter((task) => task.id !== id));
  };

  const addtask = (text) => {
    {
      if (text.length === 0) {
        alert("Enter valid value 🫂");
        return;
      }
    }
    setdata([
      ...data,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ]);
  };

  const filteredData =
    choice === "completed"
      ? data.filter((task) => task.completed === true)
      : data;

  return (
    <Parent>
      <Header />
      <InputBox addtask={addtask} />
      {data.length != 0 && <Choices choice={choice} setchoice={setchoice} />}
      {data.length === 0 && <DottedHeader />}
      <TaskList
        DummyData={filteredData}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </Parent>
  );
}

export default App;

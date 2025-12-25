import { useState, useEffect } from "react";
import Parent from "./component/Parent";
import DottedHeader from "./component/Welcome";
import Header from "./component/Header";
import InputBox from "./component/InputBox";
import TaskList from "./component/TaskList";
import Choices from "./component/Choices";
import Info from "./component/GeneralText";
import "./App.css";

function App() {
  const [data, setdata] = useState([]);
  const [choice, setchoice] = useState("all");

  // Load tasks from localStorage on first render
  useEffect(() => {
    const savedData = localStorage.getItem("tasks");
    if (savedData) {
      setdata(JSON.parse(savedData));
    }
  }, []);

  // Save tasks to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  const addtask = (text) => {
    if (text.length === 0) {
      alert("Enter a valid value 🫂...");
      return;
    }

    setdata([
      // data and values declared here!!! // menas the structure of data!
      ...data,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ]);
  };

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
      {choice === "completed" && filteredData.length === 0 && <Info />}
      <TaskList
        DummyData={filteredData}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </Parent>
  );
}

export default App;

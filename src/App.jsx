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

  useEffect(() => {
    fetch("http://10.151.252.138:3000/tasks")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Load tasks from localStorage on first render
  useEffect(() => {
    const savedData = localStorage.getItem("tasks");
    if (savedData) {
      setdata(JSON.parse(savedData));
    }
  }, []);

  //Save tasks to localStorage whenever data changes-
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const addtask = async (text) => {
    if (text.length === 0) {
      alert("Enter a valid value 🫂...");
      return;
    }

    try {
      const res = await fetch("http://10.151.252.138:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const newTask = await res.json();

      setdata([...data, newTask]);
    } catch (err) {
      console.log(err);
    }
  };

  function toggleTask(id) {
    setdata(
      data.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`http://10.151.252.138:3000/tasks/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        console.log("Delete failed");
        return;
      }

      setdata(data.filter((task) => task.id !== id));
    } catch (err) {
      console.log(err);
    }
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

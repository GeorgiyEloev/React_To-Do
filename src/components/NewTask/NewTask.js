import React, { useState } from "react";
import axios from "axios";
import "./NewTask.scss";

const NewTask = ({ setAllTasks, sortAndAddEditor }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const addTask = async () => {
    if (name.trim()) {
      await axios
        .post("http://localhost:8000/createTask", {
          name,
          text: !text.trim() ? "Описание отсутствует" : text,
          isCheck: false,
        })
        .then((res) => {
          setText("");
          setName("");
          setAllTasks(sortAndAddEditor(res.data.data));
        });
    } else {
      alert('Поле "Задача" пустое!!!');
    }
  };

  const delAllTasks = async () => {
    await axios.delete("http://localhost:8000/delAllTasks").then((res) => {
      setAllTasks(sortAndAddEditor(res.data.data));
    });
  };

  return (
    <div className="main">
      <h1>To-Do List</h1>
      <div className="newAdd">
        <div className="new-task">
          <p>Задача:</p>
          <input
            value={name}
            type="text"
            id="add-name"
            onChange={(event) => setName(event.target.value.trim())}
          />
          <p>Описание:</p>
          <input
            value={text}
            type="text"
            id="add-task"
            onChange={(event) => setText(event.target.value.trim())}
          />
        </div>
        <button onClick={() => addTask()}>Add</button>
        <button onClick={() => delAllTasks()}>Delet All Tasks</button>
      </div>
    </div>
  );
};

export default NewTask;

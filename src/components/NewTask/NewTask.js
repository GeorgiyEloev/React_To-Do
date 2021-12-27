import React, { useState } from "react";
import axios from "axios";
import "./NewTask.scss";

const NewTask = ({ setAllTasks, sortAndAddEditor }) => {
  const [dataNew, dataEdit] = useState({
    name: "",
    text: "",
  });

  const { name, text } = dataNew;

  const addTask = async () => {
    if (name.trim()) {
      await axios
        .post("http://localhost:8000/createTask", {
          name: name.trim(),
          text: !text.trim() ? "Описание отсутствует" : text,
          isCheck: false,
        })
        .then((res) => {
          dataEdit({
            name: "",
            text: "",
          });
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
          <textarea
            rows="3"
            value={name}
            id="add-name"
            onChange={(event) =>
              dataEdit({ name: event.target.value, text: text })
            }
						keyUp={() =>{
							this.style.height = "15px";
							this.style.height = (this.scrollHeight + 15)+"px";
						}}
          />
          <p>Описание:</p>
          <textarea
            rows="3"
            value={text}
            id="add-task"
            onChange={(event) =>
              dataEdit({ name: name, text: event.target.value })
            }
          />
        </div>
        <button onClick={() => addTask()}>Add</button>
        <button onClick={() => delAllTasks()}>Delet All Tasks</button>
      </div>
    </div>
  );
};

export default NewTask;

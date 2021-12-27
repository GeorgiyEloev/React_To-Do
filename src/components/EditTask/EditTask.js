import React, { useState } from "react";
import good from "../../img/good.png";
import close from "../../img/close.png";
import "./EditTask.scss";
import "../Task/Task.scss";

const EditTask = ({ index, item, allTasks, changeBD, openEditor }) => {
  const [dataNew, dataEdit] = useState({
    name: item.name,
    text: item.text,
  });

  const { name, text } = dataNew;

  const updateBD = (id) => {
    allTasks[id].name = name.trim();
    allTasks[id].text = text.trim();
    allTasks[id].editor = !allTasks[id].editor;
    changeBD(id);
  };

  return (
    <div className="page">
      <div className="editName">
        <h2>Change:</h2>
        <input
          type="text"
          className="sizeName"
          value={name}
          onChange={(event) =>
            dataEdit({ name: event.target.value, text: text })
          }
        />
      </div>
      <input
        type="text"
        className="editText"
        value={text}
        onChange={(event) => dataEdit({ name: name, text: event.target.value })}
      />
      <div className="edit">
        <img src={good} onClick={() => updateBD(index)} />
        <img src={close} onClick={() => openEditor(index)} />
      </div>
    </div>
  );
};

export default EditTask;

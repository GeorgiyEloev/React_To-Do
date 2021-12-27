import React, { useState } from "react";
import good from "../../img/good.png";
import close from "../../img/close.png";
import "./EditTask.scss";
import "../Task/Task.scss";

const EditTask = ({ index, item, allTasks, changeBD, openEditor }) => {
  const [nameNew, setName] = useState(name);
  const [textNew, setText] = useState(text);

  const { _id, name, text, isCheck } = item;

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
          value={nameNew}
          onChange={(event) => setName(event.target.value.trim())}
        />
      </div>
      <input
        type="text"
        className="editText"
        value={textNew}
        onChange={(event) => setText(event.target.value.trim())}
      />
      <div className="edit">
        <img src={good} onClick={() => updateBD(index)} />
        <img src={close} onClick={() => openEditor(index)} />
      </div>
    </div>
  );
};

export default EditTask;

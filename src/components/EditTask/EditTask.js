import React, { useState } from "react";
import good from "../../img/good.png";
import close from "../../img/close.png";
import "../Task/Task.scss";
import "./EditTask.scss";

const EditTask = ({ index, item, allTasks, changeBD, openEditor }) => {
  const { _id, name, text, isCheck } = item;

  const [nameNew, setName] = useState(name);
  const [textNew, setText] = useState(text);

  const updateBD = (index) => {
		allTasks[index].name = name.trim()
    changeBD(index);
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
        <img src={good} onClick={() => changeBD(index)} />
        <img src={close} onClick={() => openEditor(index)} />
      </div>
    </div>
  );
};

export default EditTask;

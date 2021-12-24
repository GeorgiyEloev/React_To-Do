import React from "react";
import edit from "../../img/edit.png";
import delet from "../../img/delet.png";
import "./Task.scss";

const Task = ({ index, item, allTasks, changeBD, openEditor, delTask }) => {
  const { _id, name, text, isCheck, value } = item;
  let paramTask = { className: "page" };
  let paramName = {};
  let paramText = { className: "text-task" };
  let paramEdit = { src: edit, onClick: () => openEditor(index) };
  const paramCheck = {
    type: "checkbox",
    className: "check",
    checked: isCheck,
    onChange: () => onChangeCheckbox(index),
  };
  const paramDelete = { src: delet, onClick: () => delTask(index) };

  if (isCheck) {
    paramTask.className = "page done";
    paramName.className = "done-task";
    paramText.className = "text-task done-task";
    paramEdit.className = "delImg";
  }

  const onChangeCheckbox = (index) => {
    allTasks[index].isCheck = !allTasks[index].isCheck;
    changeBD(index);
  };

  return (
    <div {...paramTask}>
      <h2 {...paramName}>{name}</h2>
      <p {...paramText}>{text}</p>
      <div className="edit">
        <img {...paramEdit} />
        <input {...paramCheck} />
        <img {...paramDelete} />
      </div>
    </div>
  );
};

export default Task;

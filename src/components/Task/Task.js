import React from "react";
import edit from "../../img/edit.png";
import delet from "../../img/delet.png";
import "./Task.scss";

const Task = ({ index, item, allTasks, changeBD, openEditor, delTask }) => {
  const { _id, name, text, isCheck, value } = item;

  const paramCheck = {
    type: "checkbox",
    className: "check",
    checked: isCheck,
    onChange: () => onChangeCheckbox(index),
  };

  const onChangeCheckbox = (index) => {
    allTasks[index].isCheck = !allTasks[index].isCheck;
    changeBD(index);
  };

  return (
    <>
      {isCheck ? (
        <div className="page done">
          <h2 className="done-task">{name}</h2>
          <p className="text-task done-task">{text}</p>
          <div className="edit">
            <img src= {edit} onClick= {() => openEditor(index)} className = "delImg" />
            <input {...paramCheck} />
            <img src={delet} onClick={() => delTask(index)} />
          </div>
        </div>
      ) : (
        <div className="page">
          <h2>{name}</h2>
          <p className="text-task">{text}</p>
          <div className="edit">
            <img src= {edit} onClick= {() => openEditor(index)} />
            <input {...paramCheck} />
            <img src={delet} onClick={() => delTask(index)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Task;

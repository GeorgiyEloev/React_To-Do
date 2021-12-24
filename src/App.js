import axios from "axios";
import React, { useState, useEffect } from "react";
import NewTask from "./components/NewTask/NewTask";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  const [allTasks, setAllTasks] = useState([]);

  const sortAndAddEditor = (tasks) => {
    let newAllTasks = tasks;

    newAllTasks.map((task) => {
      task.editor = false;
    });
    newAllTasks = newAllTasks.sort((obj1, obj2) => {
      return obj1.isCheck - obj2.isCheck;
    });

    return newAllTasks;
  };

  useEffect(async () => {
    await axios.get("http://localhost:8000/allTasks").then((res) => {
      setAllTasks(sortAndAddEditor(res.data.data));
    });
  }, []);

  const changeBD = async (index) => {
    const { _id, name, text, isCheck } = allTasks[index];
    await axios
      .patch("http://localhost:8000/updateTask", {
        _id,
        name,
        text,
        isCheck,
      })
      .then((res) => {
        setAllTasks(sortAndAddEditor(res.data.data));
      });
  };

  const openEditor = (index) => {
    allTasks[index].editor = !allTasks[index].editor;
    setAllTasks([...allTasks]);
  };

  const delTask = async (index) => {
    await axios
      .delete(`http://localhost:8000/deleteTask?_id=${allTasks[index]._id}`)
      .then((res) => {
        setAllTasks(sortAndAddEditor(res.data.data));
      });
  };

  return (
    <>
      <NewTask setAllTasks={setAllTasks} />
      <TaskList
        allTasks={allTasks}
        changeBD={changeBD}
        openEditor={openEditor}
				delTask={delTask}
      />
    </>
  );
};

export default App;

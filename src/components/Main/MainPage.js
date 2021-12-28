import React from "react";
import NewTask from "../NewTask/NewTask";
import TaskList from "../TaskList/TaskList";

const MainPage = ({
  allTasks,
  changeBD,
  openEditor,
  delTask,
  setAllTasks,
  sortAndAddEditor,
}) => {
  return (
    <>
      <NewTask setAllTasks={setAllTasks} sortAndAddEditor={sortAndAddEditor} />
      <TaskList
        allTasks={allTasks}
        changeBD={changeBD}
        openEditor={openEditor}
        delTask={delTask}
      />
    </>
  );
};

export default MainPage;
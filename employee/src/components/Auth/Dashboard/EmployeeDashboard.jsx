import React from "react";
import Header from "../other/Header.jsx";
import TaskListNumber from "../other/TaskListNumber.jsx";
import TaskList from "../Tasklist/TaskList.jsx";

function EmployeeDashboard({data}) {

  return (
    <div>
      <div className="p-10 bg-[#1c1c1c] h-screen">
      
        <Header data={data}/>
         <TaskListNumber data={data}/>
         <TaskList data={data}/>
      </div>
    </div>
  );
}

export default EmployeeDashboard;

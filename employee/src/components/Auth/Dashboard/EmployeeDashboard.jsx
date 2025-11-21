import React from "react";
import Header from "../other/Header.jsx";
import TaskListNumber from "../other/TaskListNumber.jsx";
import TaskList from "../Tasklist/TaskList.jsx";

function EmployeeDashboard() {
  return (
    <div>
      <div className="p-10 bg-[#1c1c1c] h-screen">
       
        <Header />
         <TaskListNumber/>
         <TaskList/>
      </div>
    </div>
  );
}

export default EmployeeDashboard;

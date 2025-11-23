import React, { useContext } from "react";
import Header from "../other/Header.jsx";
import TaskListNumber from "../other/TaskListNumber.jsx";
import TaskList from "../Tasklist/TaskList.jsx";
import { AuthContext } from "../../../context/AuthProvider";
import { getLocalStorage } from "../../../utils/localStorage";

function EmployeeDashboard(props) {
  // Read latest auth data from context (provider may expose [state,setState])
  const ctx = useContext(AuthContext);
  let auth = null;
  if (Array.isArray(ctx)) {
    auth = ctx[0];
  } else {
    auth = ctx;
  }

  // Determine current logged-in employee (prefer freshest data from context/localStorage)
  const stored = JSON.parse(localStorage.getItem("loggedInUser")) || {};
  const authFromLS = getLocalStorage();
  const employees = auth?.employees ?? authFromLS?.employees ?? [];

  let currentData = props.data;
  if (stored?.role === "employee") {
    const email = stored?.data?.email;
    const found = employees.find((e) => e.email === email);
    if (found) currentData = found;
  }

  return (
    <div>
      <div className="p-10 bg-[#1c1c1c] h-screen">
        <Header changeUser={props.changeUser} data={currentData} />
        <TaskListNumber data={currentData} />
        <TaskList data={currentData} />
      </div>
    </div>
  );
}

export default EmployeeDashboard;

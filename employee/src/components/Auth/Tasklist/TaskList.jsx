import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../../context/AuthProvider";
import { getLocalStorage } from "../../../utils/localStorage";

function TaskList({ data }) {
  const ctx = useContext(AuthContext);
  let auth = null;
  let setAuth = null;
  if (Array.isArray(ctx)) {
    [auth, setAuth] = ctx;
  } else {
    auth = ctx;
  }

  const tasks = data?.tasks ?? [];

  const updateTaskAt = (index, updates) => {
    const authObj = auth ?? getLocalStorage();
    const employees = Array.isArray(authObj?.employees)
      ? [...authObj.employees]
      : JSON.parse(localStorage.getItem("employees")) || [];
    const email = data?.email;

    const updatedEmployees = employees.map((emp) => {
      if (emp.email !== email) return emp;
      const oldTask = emp.tasks?.[index] || {};
      const newTask = { ...(oldTask || {}), ...updates };
      const tasksUpdated = Array.isArray(emp.tasks)
        ? emp.tasks.map((t, i) => (i === index ? newTask : t))
        : [newTask];
      const taskCounts = Object.assign({}, emp.taskCounts || {});
      const statuses = ["newTask", "active", "completed", "failed"];
      statuses.forEach((s) => {
        const oldVal = oldTask?.[s] ? 1 : 0;
        const newVal = newTask?.[s] ? 1 : 0;
        taskCounts[s] = (taskCounts[s] || 0) + (newVal - oldVal);
      });
      return { ...emp, tasks: tasksUpdated, taskCounts };
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    if (typeof setAuth === "function") {
      setAuth((prev) => ({ ...(prev || {}), employees: updatedEmployees }));
    }
  };

  return (
    <div
      id="tasklist"
      className="h-auto overflow-x-auto flex items-center justify-start gap-5 whitespace-nowrap w-full py-5 mt-10"
    >
      {tasks.map((elem, idx) => {
        if (elem?.active)
          return (
            <AcceptTask
              key={elem.id ?? idx}
              data={elem}
              onComplete={() =>
                updateTaskAt(idx, { active: false, completed: true })
              }
              onFail={() => updateTaskAt(idx, { active: false, failed: true })}
            />
          );
        if (elem?.newTask)
          return (
            <NewTask
              key={elem.id ?? idx}
              data={elem}
              onAccept={() =>
                updateTaskAt(idx, { newTask: false, active: true })
              }
              onFail={() => updateTaskAt(idx, { newTask: false, failed: true })}
            />
          );
        if (elem?.completed)
          return <CompleteTask key={elem.id ?? idx} data={elem} />;
        if (elem?.failed)
          return <FailedTask key={elem.id ?? idx} data={elem} />;
        return null;
      })}
    </div>
  );
}

export default TaskList;

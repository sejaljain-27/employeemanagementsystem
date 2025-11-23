import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { getLocalStorage } from "../../../utils/localStorage";

function CreateTask() {
  // Read auth context (provider exposes [state,setState])
  const ctx = useContext(AuthContext);
  let auth = null;
  let setAuth = null;
  if (Array.isArray(ctx)) {
    [auth, setAuth] = ctx;
  } else {
    auth = ctx;
  }

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    // Read employees from context when available, otherwise from localStorage
    const authObj = auth ?? getLocalStorage();
    const data = Array.isArray(authObj?.employees)
      ? [...authObj.employees]
      : JSON.parse(localStorage.getItem("employees")) || [];

    // Update the employee record immutably
    const updated = data.map((elem) => {
      if (assignTo === elem.firstName) {
        const tasks = Array.isArray(elem.tasks)
          ? [...elem.tasks, task]
          : [task];
        const taskCounts = Object.assign({}, elem.taskCounts || {});
        taskCounts.newTask = (taskCounts.newTask || 0) + 1;
        return { ...elem, tasks, taskCounts };
      }
      return elem;
    });

    // Persist to localStorage
    localStorage.setItem("employees", JSON.stringify(updated));

    // If provider exposes setState, update it so lists update in UI
    if (typeof setAuth === "function") {
      setAuth((prev) => ({ ...(prev || {}), employees: updated }));
    }

    // Clear form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");

    alert("Task Created!");
  };
  return (
    <div className="mt-10 w-full">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap gap-10 w-full p-8 bg-[#111111] rounded-2xl border border-[#2a2a2a]"
      >
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Make a UI design"
              className="px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              className="px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              type="text"
              placeholder="employee name"
              className="px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              type="text"
              placeholder="design, dev, etc"
              className="px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <h3 className="text-lg font-medium">Description</h3>

          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            rows="10"
            placeholder="Enter Task Description"
            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-gray-400"
          ></textarea>
        </div>

        {/* BUTTON */}
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-10 py-3 rounded-xl transition-all"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;

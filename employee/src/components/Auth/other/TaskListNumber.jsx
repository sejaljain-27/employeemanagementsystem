import React from "react";

function TaskListNumber({ data }) {
  const counts = data?.taskCounts || {};

  // Derive counts from tasks if taskCounts missing
  const tasks = data?.tasks ?? [];
  const derived = {
    newTask: (counts.newTask ?? tasks.filter((t) => t.newTask).length) || 0,
    completed:
      (counts.completed ?? tasks.filter((t) => t.completed).length) || 0,
    active: (counts.active ?? tasks.filter((t) => t.active).length) || 0,
    failed: (counts.failed ?? tasks.filter((t) => t.failed).length) || 0,
  };

  return (
    <div className="flex mt-10 justify-between gap-5 screen ">
      <div className=" rounded-xl px-9 py-6 w-[45%] bg-blue-400 ">
        <h2 className="text-2xl font-semibold">{derived.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className=" rounded-xl px-9 py-6 w-[45%] bg-green-400 ">
        <h2 className="text-2xl font-semibold">{derived.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className=" rounded-xl px-9 py-6 w-[45%] bg-yellow-400 ">
        <h2 className="text-2xl font-semibold">{derived.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className=" rounded-xl px-9 py-6 w-[45%] bg-red-400 ">
        <h2 className="text-2xl font-semibold">{derived.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;

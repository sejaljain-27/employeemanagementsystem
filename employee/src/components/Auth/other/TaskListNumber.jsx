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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      <div className="rounded-xl px-6 py-4 bg-blue-400 flex flex-col items-start sm:items-center">
        <h2 className="text-xl md:text-2xl font-semibold">{derived.newTask}</h2>
        <h3 className="text-sm md:text-xl font-medium text-white/90 mt-1">
          New Task
        </h3>
      </div>

      <div className="rounded-xl px-6 py-4 bg-green-400 flex flex-col items-start sm:items-center">
        <h2 className="text-xl md:text-2xl font-semibold">
          {derived.completed}
        </h2>
        <h3 className="text-sm md:text-xl font-medium text-white/90 mt-1">
          Completed
        </h3>
      </div>

      <div className="rounded-xl px-6 py-4 bg-yellow-400 flex flex-col items-start sm:items-center">
        <h2 className="text-xl md:text-2xl font-semibold">{derived.active}</h2>
        <h3 className="text-sm md:text-xl font-medium text-white/90 mt-1">
          Accepted
        </h3>
      </div>

      <div className="rounded-xl px-6 py-4 bg-red-400 flex flex-col items-start sm:items-center">
        <h2 className="text-xl md:text-2xl font-semibold">{derived.failed}</h2>
        <h3 className="text-sm md:text-xl font-medium text-white/90 mt-1">
          Failed
        </h3>
      </div>
    </div>
  );
}

export default TaskListNumber;

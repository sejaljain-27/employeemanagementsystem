import React from "react";

const NewTask = ({ data, onAccept, onFail }) => {
  const { category, taskDate, taskTitle, taskDescription } = data || {};
  return (
    <div className="w-full sm:w-[320px] p-5 bg-blue-600 text-white rounded-xl shadow-sm shrink-0">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {category || "General"}
        </h3>
        <h4 className="text-sm">{taskDate || ""}</h4>
      </div>
      <h2 className="mt-4 text-2xl font-semibold leading-tight">
        {taskTitle || "Untitled Task"}
      </h2>
      <p className="mt-2 text-sm text-white/90">{taskDescription || ""}</p>
      <div className="mt-4 flex gap-3">
        <button
          onClick={onAccept}
          className="flex-1 rounded-md bg-green-500 hover:bg-green-600 transition-colors duration-150 py-2 text-sm"
        >
          Accept Task
        </button>
        <button
          onClick={onFail}
          className="flex-1 rounded-md bg-red-500 hover:bg-red-600 transition-colors duration-150 py-2 text-sm"
        >
          Mark as failed
        </button>
      </div>
    </div>
  );
};

export default NewTask;

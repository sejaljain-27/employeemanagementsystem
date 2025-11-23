import React from "react";

const AcceptTask = ({ data, onComplete, onFail }) => {
  const { category, taskDate, taskTitle, taskDescription } = data || {};
  return (
    <div className="w-full sm:w-[320px] p-5 bg-yellow-500 text-black rounded-xl shadow-sm shrink-0">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded text-white">
          {category || "General"}
        </h3>
        <h4 className="text-sm">{taskDate || ""}</h4>
      </div>
      <h2 className="mt-4 text-2xl font-semibold leading-tight">
        {taskTitle || "Untitled Task"}
      </h2>
      <p className="mt-2 text-sm text-black/90">{taskDescription || ""}</p>
      <div className="flex justify-between mt-4 gap-3">
        <button
          onClick={onComplete}
          className="flex-1 bg-green-600 hover:bg-green-700 transition-colors duration-150 py-2 px-3 text-sm rounded-md text-white"
        >
          Mark as completed
        </button>
        <button
          onClick={onFail}
          className="flex-1 bg-red-500 hover:bg-red-600 transition-colors duration-150 py-2 px-3 text-sm rounded-md text-white"
        >
          Mark as failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;

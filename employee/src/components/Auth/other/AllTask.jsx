import React, { useContext } from "react";

import { AuthContext } from "../../../context/AuthProvider";

function AllTask() {
  // Read auth context; provider may expose either [state,setState] or the state object
  const ctx = useContext(AuthContext);
  let userData = null;
  if (Array.isArray(ctx)) {
    userData = ctx[0];
  } else {
    userData = ctx;
  }
  // console.log(authData);

  return (
    <div className="bg-transparent p-2 mt-4">
      {/* Header */}
      <div className="bg-red-400 rounded-md px-4 py-3 mb-3 shadow-sm">
        <div className="max-w-full mx-auto grid grid-cols-5 gap-4 items-center">
          <div className="text-white font-semibold text-lg pl-2">
            Employee Name
          </div>
          <div className="text-white font-semibold text-lg text-center">
            New Task
          </div>
          <div className="text-white font-semibold text-lg text-center">
            Active Task
          </div>
          <div className="text-white font-semibold text-lg text-center">
            Completed
          </div>
          <div className="text-white font-semibold text-lg text-center">
            Failed
          </div>
        </div>
      </div>

      <div className="space-y-3 max-h-[60vh] overflow-auto">
        {userData?.employees?.map((elem, idx) => (
          <div
            key={elem.id ?? idx}
            className="max-w-full mx-auto grid grid-cols-5 gap-4 items-center bg-black rounded-md p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold">
                {(elem.firstName || "U").charAt(0)}
              </div>
              <div>
                <div className="font-medium text-white text-lg">
                  {elem.firstName}
                </div>
                <div className="text-sm text-white/80">{elem.email}</div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="text-blue-700 font-medium">
                {elem.taskCounts.newTask}
              </a>
            </div>

            <div className="text-center text-yellow-200 font-medium">
              {elem.taskCounts?.active ??
                elem.taskCount?.active ??
                (elem.tasks ? elem.tasks.filter((t) => t.active).length : 0) ??
                0}
            </div>

            <div className="text-center text-white/90 font-medium">
              {elem.taskCounts?.completed ??
                elem.taskCount?.completed ??
                (elem.tasks
                  ? elem.tasks.filter((t) => t.completed).length
                  : 0) ??
                0}
            </div>

            <div className="text-center text-red-200 font-medium">
              {elem.taskCounts?.failed ??
                elem.taskCount?.failed ??
                (elem.tasks ? elem.tasks.filter((t) => t.failed).length : 0) ??
                0}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTask;

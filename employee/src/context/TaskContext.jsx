//all task data will be stored in taskcontext and will be provided to all components from here
import React from "react";

function TaskContext({ children }) {
  return <>{children}</>;
}

export default TaskContext;

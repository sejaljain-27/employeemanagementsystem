import React from "react";
import Header from "../other/Header.jsx";
import CreateTask from "../other/CreateTask.jsx";
import AllTask from "../other/AllTask.jsx";

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen w-full p-4 md:p-10">
      <div className="max-w-5xl mx-auto w-full">
        <Header changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;

import React, { useEffect } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard.jsx";
import { setLocalStorage } from "./utils/localStorage.jsx";

const App = () => {
  // Initialize localStorage once on mount
  useEffect(() => {
    setLocalStorage();
  }, []);

  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard/> */}
    </>
  );
};

export default App;

import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";
import { getLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  // Support both provider shapes: either the context is [state,setState] or the state object itself
  const ctx = useContext(AuthContext);
  let userData = null;
  let setUserDataFromContext = null;
  if (Array.isArray(ctx)) {
    [userData, setUserDataFromContext] = ctx;
  } else {
    userData = ctx;
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    // Normalize inputs to avoid trailing-space/case issues
    const submittedEmail = (email || "").toString().trim().toLowerCase();
    const submittedPassword = (password || "").toString();

    // Use auth data from context when available, otherwise read from localStorage via helper
    const authFromLS = getLocalStorage();
    const adminList = userData?.admin ?? authFromLS?.admin ?? [];
    const employeesList = userData?.employees ?? authFromLS?.employees ?? [];

    console.log("Login attempt:", { submittedEmail });
    console.log("Admin list:", adminList);
    console.log("Employees count:", employeesList?.length);

    const adminMatch = adminList.find(
      (a) =>
        (a.email || "").toString().trim().toLowerCase() === submittedEmail &&
        a.password === submittedPassword
    );
    console.log("adminMatch:", !!adminMatch);
    if (adminMatch) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    const employee = employeesList.find(
      (e) =>
        (e.email || "").toString().trim().toLowerCase() === submittedEmail &&
        e.password === submittedPassword
    );
    console.log("employeeMatch:", !!employee);
    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee })
      );
      return;
    }

    alert("Invalid Credentials or auth data not loaded yet.");
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;

import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  //  const [userData,SetUserData] = useContext(AuthContext)
  const authdata = useContext(AuthContext);
  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)  
    }
  },[])

  

  const handleLogin = (email, password) => {
    // First check admin list from authdata
    const adminMatch = authdata?.admin?.find(
      (a) => a.email === email && a.password === password
    );
    if (adminMatch) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }
    const employee = authdata?.employees?.find(
      (e) => e.email === email && e.password === password
    );
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
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;

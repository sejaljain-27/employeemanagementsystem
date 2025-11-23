import React from "react";

function Header(props) {
  // Determine username: prefer props.data, then loggedInUser from storage
  const username =
    props?.data?.firstName ||
    JSON.parse(localStorage.getItem("loggedInUser"))?.data?.firstName ||
    "User";

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    if (typeof props.changeUser === "function") {
      props.changeUser(null);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{username}👋</span>{" "}
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white rounded-sm px-5 py-2"
      >
        Log out
      </button>
    </div>
  );
}

export default Header;

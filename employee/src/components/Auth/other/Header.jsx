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
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
      <h1 className="text-xl md:text-2xl font-medium leading-snug">
        Hello <br />
        <span className="text-2xl md:text-3xl font-semibold">{username}👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base md:text-lg font-medium text-white rounded-sm px-4 md:px-5 py-2 md:py-2 mt-2 md:mt-0"
      >
        Log out
      </button>
    </div>
  );
}

export default Header;

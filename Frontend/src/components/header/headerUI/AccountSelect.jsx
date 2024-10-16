import React, { useEffect, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
function AccountSelect() {
  const [auth, setAuth] = useState(false);
  const [userDropDown, setuserDropDown] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      setAuth(true);
    }
  }, []);

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuth(false);
  };

  return (
    <div className="h-full flex items-center justify-center col-start-5 row-start-1 md:row-auto md:col-auto select-none text-center cursor-pointer">
      {auth ? (
        <>
          <div
            className="flex items-center border gap-2 px-2 hidden md:flex"
            onClick={() => setuserDropDown(!userDropDown)}
          >
            <p>Account</p>

            {userDropDown ? (
              <MdOutlineArrowDropUp />
            ) : (
              <MdOutlineArrowDropDown />
            )}
          </div>
          <BiUserCircle
            className="text-3xl block md:hidden"
            onClick={() => setuserDropDown(!userDropDown)}
          />
          {userDropDown && (
            <div className="absolute top-12 right-44 bg-white border rounded shadow-lg p-2">
              <button onClick={handleLogout} className="text-red-500">
                Logout
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="border h-10 w-[100px] flex items-center justify-center rounded-lg">
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default AccountSelect;

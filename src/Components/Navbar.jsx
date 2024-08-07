import { Link, NavLink } from "react-router-dom";
import logo from "/logodesign.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";
import swal from "sweetalert";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive
              ? "text-orange-500 rounded-none border-4 border-t-0 border-x-0 border-b-orange-500"
              : "";
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/allcraft"}
          className={({ isActive }) => {
            return isActive
              ? "text-orange-500 rounded-none border-4 border-t-0 border-x-0 border-b-orange-500"
              : "";
          }}
        >
          All Art & craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/addcraft"}
          className={({ isActive }) => {
            return isActive
              ? "text-orange-500 rounded-none border-4 border-t-0 border-x-0 border-b-orange-500"
              : "";
          }}
        >
          Add Craft Item
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/mylist"}
          className={({ isActive }) => {
            return isActive
              ? "text-orange-500 rounded-none border-4 border-t-0 border-x-0 border-b-orange-500"
              : "";
          }}
        >
          My Art&Craft List
        </NavLink>
      </li>
    </>
  );

  // sign out
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        swal({
          text: "Logout successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "warning",
        });
      });
  };
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[9] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {links}
          </ul>
        </div>

        <img
          src={logo}
          alt="logo"
          className="h-8 lg:h-16 w-8 lg:w-16 rounded-full"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{links}</ul>
      </div>
      {/* nev end */}
      <div className="navbar-end space-x-0 lg:space-x-2">
        <div>
          <label className="cursor-pointer grid place-items-center  ">
            <input
              onChange={handleToggle}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
        {user ? (
          <div>
            <div className="flex justify-center items-center">
              <div
                className="tooltip tooltip-left flex items-center"
                data-tip={user.displayName}
              >
                <div className="avatar ">
                  <div className="w-7 lg:w-12 rounded-full ">
                    <img src={user.photoURL} alt="Profile" />
                  </div>
                </div>
              </div>
              <div />
              <button
                className="btn-sm btn lg:btn lg:bg-orange-500 lg:text-white lg:ml-2  bg-orange-500 text-white hover:text-orange-500"
                onClick={handleSignOut}
              >
                <span>
                  <FaSignOutAlt />
                </span>
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <div>
            <Link to={"/login"}>
              <a className="btn btn-sm lg:min-h-0 lg:h-10 lg:w-20 text-white bg-orange-500">
                Login
              </a>
            </Link>
            <Link to={"/register"}>
              <a className="btn btn-sm lg:min-h-0 lg:h-10 lg:w-20 text-white bg-orange-500">
                Register
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

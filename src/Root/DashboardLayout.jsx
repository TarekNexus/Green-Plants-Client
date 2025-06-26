import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import logo from "../assets/f-logo.png";
const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none ">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {/* <ProFastLogo></ProFastLogo>  */}
          <Link to="/" className="btn-ghost hover:bg-transparent">
            <div className="flex items-center gap-2 mb-7">
              <img className="w-8 sm:w-10 md:w-12" src={logo} alt="Logo" />
              <h2 className=" sm:block text-lg sm:text-xl md:text-2xl font-bold text-green-700 hover:text-green-800 transition-colors">
                Green Plants
              </h2>
            </div>
          </Link>

          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              📊 Overview
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/allItems"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              🪴 All Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/addItems"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              🌱 Add Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/MyItem"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              🍀 My Plants
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;

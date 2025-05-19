import { Link, NavLink } from "react-router-dom";
import "./navber.css";
import logo from "../assets/f-logo.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navber = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign-out successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <nav className="sticky top-0 z-20">
      <div className="navbar w-full px-4 sm:px-8 md:px-12 lg:px-28 mx-auto border-b border-gray-200 text-black bg-white/20 backdrop-blur-sm">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/all-plants" className={({ isActive }) => isActive ? "active" : ""}>All Plants</NavLink>
              </li>
              <li>
                <NavLink to="/Add-Plant" className={({ isActive }) => isActive ? "active" : ""}>Add Plant</NavLink>
              </li>
              <li>
                <NavLink to="/my-plants" className={({ isActive }) => isActive ? "active" : ""}>My Plants</NavLink>
              </li>
              {!user && (
                <>
                  <li>
                    <NavLink to="/auth/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/auth/register" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="btn-ghost hover:bg-transparent">
            <div className="flex items-center gap-2">
              <img className="w-8 sm:w-10 md:w-12" src={logo} alt="Logo" />
              <h2 className="hidden sm:block text-lg sm:text-xl md:text-2xl font-bold text-green-700 hover:text-green-800 transition-colors">
                Green Plants
              </h2>
            </div>
          </Link>
        </div>

        {/* Rest of the navbar code remains exactly the same */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-plants" className={({ isActive }) => isActive ? "active" : ""}>All Plants</NavLink>
            </li>
            <li>
              <NavLink to="/Add-Plant" className={({ isActive }) => isActive ? "active" : ""}>Add Plant</NavLink>
            </li>
            <li>
              <NavLink to="/my-plants" className={({ isActive }) => isActive ? "active" : ""}>My Plants</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {loading ? (
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
              <span className="loading loading-spinner text-green-600"></span>
            </div>
          ) : user ? (
            <>
              <div className="mr-2 sm:mr-6 flex items-center gap-2 sm:gap-3">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-gray-300"
                  title={user.displayName}
                />
              </div>
              <button
                onClick={handleLogOut}
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white font-semibold border-none bg-green-600 hover:bg-green-700 rounded-3xl shadow-md transition duration-300"
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base btn text-white border-none font-semibold bg-green-600 hover:bg-green-700 rounded-3xl shadow-md transition duration-300 mr-2 sm:mr-6"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base btn text-white border-none font-semibold bg-green-600 hover:bg-green-700 rounded-3xl shadow-md transition duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navber; 
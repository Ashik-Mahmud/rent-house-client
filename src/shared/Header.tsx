import { useEffect, useState } from "react";
import { BrowserView } from "react-device-detect";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/store";
import { logout } from "../features/AuthSlice";
import useAuth from "../hooks/useAuth";
import { authUserInterface } from "../interfaces/UserInterface";

type Props = {};

const Header = (props: Props) => {
  const { name } = useAppSelector((state) => state.appOption);
  const {
    user,
    setUser,
    updatedUser: data,
  } = useAuth<authUserInterface | any>({});

  const [scrollSize, setScrollSize] = useState(0);

  /* Handle Logout */
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/login");
  };

  /* Handle Scroll */

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollSize(window.scrollY);
    });
  }, [scrollSize]);

  console.log(scrollSize);

  const NavbarMenus = (
    <>
      <li tabIndex={0}>
        <NavLink to="/houses" className="justify-between">
          Find Houses
        </NavLink>
      </li>
      <li>
        <NavLink to="/reviews">Public Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

      {user?.isAuthenticated && (
        <li>
          <Link to="/dashboard">
            Dashboard{" "}
            <small className="badge badge-xs badge-success text-xs font-poppins absolute right-0 top-0 text-[.6rem] font-thin">
              New
            </small>
          </Link>
        </li>
      )}
      {!user?.isAuthenticated && (
        <Link className="btn btn-success sm:ml-10 btn-sm mt-2" to={"/login"}>
          Login
        </Link>
      )}
    </>
  );

  return (
    <header
      className={`bg-base-100 py-3 uppercase shadow-sm font-poppins  transition-all ${
        scrollSize > 80 ? " fixed left-0 top-0 w-full z-40" : " relative"
      }`}
    >
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavbarMenus}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            {name}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{NavbarMenus}</ul>
        </div>

        <div className="navbar-end">
          <BrowserView>
            <div className="form-control mr-4">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered"
              />
            </div>
          </BrowserView>
          {user?.isAuthenticated && (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar online"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={
                      data?.profileImage
                        ? data?.profileImage
                        : user?.user?.avatar
                    }
                    alt={data?.name}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/settings">Settings</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          )}
          {/* */}
        </div>
      </div>
    </header>
  );
};

export default Header;

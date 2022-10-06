import { BrowserView } from "react-device-detect";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useHandleLogout from "../hooks/useHandleLogout";
import { authUserInterface } from "../interfaces/UserInterface";

type Props = {};

const Header = (props: Props) => {
  const [users, setUsers] = useAuth<authUserInterface | any>({});

  /* Handle Logout */
  const [handleLogout] = useHandleLogout();

  const logout = () => {
    setUsers(null);
    handleLogout();
  };

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

      {users?.isAuthenticated && (
        <li>
          <Link to="/dashboard">
            Dashboard{" "}
            <small className="badge badge-xs badge-success text-xs font-poppins absolute right-0 top-0 text-[.6rem] font-thin">
              New
            </small>
          </Link>
        </li>
      )}
      {!users?.isAuthenticated && (
        <Link className="btn btn-md btn-success sm:ml-10 " to={"/login"}>
          Login
        </Link>
      )}
    </>
  );

  return (
    <header className="bg-base-200 py-3 uppercase shadow-lg">
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
            HouseLagbe?
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
          {users?.isAuthenticated && (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar online"
              >
                <div className="w-10 rounded-full">
                  <img src={users?.user?.avatar} alt="" />
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
                  <button onClick={logout}>Logout</button>
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

import { Link, NavLink } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
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
      <li>
        <Link to="/dashboard">
          Dashboard{" "}
          <small className="badge badge-xs badge-success text-xs font-poppins absolute right-0 top-0 text-[.6rem] font-thin">
            New
          </small>
        </Link>
      </li>

      <Link className="btn btn-md btn-success ml-10" to={"/login"}>
        Login
      </Link>
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
          <div className="form-control mr-4">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between" href="/">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a href="/">Settings</a>
              </li>
              <li>
                <a href="/">Logout</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

import { BiPlus } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import { Link } from "react-router-dom";
import DashboardContent from "./Dashboard/DashboardContent";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div className="grid place-items-center ">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5">
          {/*  <!-- Page content here --> */}
          <div className="dashboard-header bg-white p-2 rounded shadow flex items-center justify-between">
            <div className="flex items-center gap-3">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-ghost text-xl border drawer-button lg:hidden"
              >
                <BsGrid />
              </label>
              <span className="text-2xl font-bold font-poppins px-3">
                Welcome to <span className="text-success">hasHouse?</span> Admin
                Panel
              </span>
            </div>
            <div className="flex items-center gap-5">
              <Link
                to=""
                className="flex items-center gap-2 btn btn-success btn-outline rounded-sm btn-sm"
              >
                Post House <BiPlus />
              </Link>
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" alt="/" />
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
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <DashboardContent />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/*  <!-- Sidebar content here --> */}

            <li>
              <a href="/">Sidebar Item 1</a>
            </li>
            <li>
              <a href="/">Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

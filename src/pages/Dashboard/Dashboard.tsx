import { AiOutlineUser } from "react-icons/ai";
import { BiPlus, BiUser } from "react-icons/bi";
import {
  BsBookFill,
  BsCardChecklist,
  BsGear,
  BsGrid,
  BsHeart,
  BsHouse,
  BsMessenger,
  BsReceipt,
} from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

type Props = {};

const Dashboard = (props: Props) => {
  const menuArray = [
    {
      id: 1,
      title: "Dashboard",
      icon: <BsGrid />,
      link: "/dashboard",
    },
    {
      id: 2,
      title: "My Houses",
      icon: <BsHouse />,
      link: "/dashboard/houses",
    },
    {
      id: 3,
      title: "Add House",
      icon: <BiPlus />,
      link: "/dashboard/houses/add",
    },
    {
      id: 4,
      title: "My Bookings",
      icon: <BsBookFill />,
      link: "/dashboard/bookings",
    },
    {
      id: 5,
      title: "My Reviews",
      icon: <BsHeart />,
      link: "/dashboard/reviews",
    },

    {
      id: 6,
      title: "Profile",
      icon: <BiUser />,
      link: "/dashboard/profile",
    },

    {
      id: 7,
      title: "Payments",
      icon: <BsCardChecklist />,
      link: "/dashboard/payments",
    },
    {
      id: 8,
      title: "Messages",
      icon: <BsMessenger />,
      link: "/dashboard/messages",
    },
    {
      id: 9,
      title: "Settings",
      icon: <BsGear />,
      link: "/dashboard/settings",
    },
    {
      id: 10,
      title: "Users",
      icon: <AiOutlineUser />,
      link: "/dashboard/users",
    },
    {
      id: 11,
      title: "Blogs",
      icon: <BsBookFill />,
      link: "/dashboard/blogs",
    },
    {
      id: 12,
      title: "Request From Users",
      icon: <BsReceipt />,
      link: "/dashboard/request-from-users",
    },
    {
      id: 13,
      title: "Houses",
      icon: <BsHouse />,
      link: "/dashboard/admin/houses",
    },
    {
      id: 14,
      title: "Bookings",
      icon: <BsBookFill />,
      link: "/dashboard/purchase/bookings",
    },
  ];

  return (
    <div className="grid place-items-center ">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5">
          {/*  <!-- Page content here --> */}
          <div className="dashboard-header bg-white p-2 rounded shadow flex items-center justify-between sticky top-1 z-50">
            <div className="flex items-center gap-3">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-ghost text-xl border drawer-button lg:hidden"
              >
                <BsGrid />
              </label>
              <span className="text-2xl font-bold font-poppins px-3">
                Welcome to <span className="text-success">houseLagbe?</span>{" "}
                Admin Panel
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
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-[#081A51] text-base-content ">
            <div className="logo text-center">
              <Link
                to="/"
                className="text-3xl font-poppins my-5 block text-success font-bold"
              >
                houseLagbe?
              </Link>
              <button className="btn btn-warning btn-xs mb-5">Logout</button>
            </div>
            {/*  <!-- Sidebar content here --> */}
            {menuArray.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className="menu-item text-white">
                  <span className="menu-btn">
                    <span className="btn btn-ghost rounded-full btn-sm">
                      {item.icon}
                    </span>
                  </span>
                  <span className="menu-title">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

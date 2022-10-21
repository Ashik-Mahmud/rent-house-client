import axios from "axios";
import { useEffect, useState } from "react";
import {
  BrowserView,
  MobileView,
  osName,
  osVersion,
} from "react-device-detect";
import toast from "react-hot-toast";
import { AiOutlineUser } from "react-icons/ai";
import {
  BiGitPullRequest,
  BiHomeAlt,
  BiLogOut,
  BiPlus,
  BiUser,
} from "react-icons/bi";
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
import { useQuery } from "react-query";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { logout } from "../../features/AuthSlice";
import {
  setApprovedHouseCount,
  setPendingHouseCount,
  setRejectedHouseCount,
} from "../../features/HouseSlice";
import { setPendingCount } from "../../features/RequestSlice";
import useAuth from "../../hooks/useAuth";

import { authUserInterface } from "../../interfaces/UserInterface";

type Props = {};

const Dashboard = (props: Props) => {
  const dispatch = useAppDispatch();

  const [isPhone, setIsPhone] = useState<boolean>(true);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const {
    user,
    setUser,
    updatedUser: data,
    isLoading,
  } = useAuth<authUserInterface | any>({});
  const role = data?.role;

  let menuArray = [
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
      id: 7,
      title: "Payments",
      icon: <BsCardChecklist />,
      link: "/dashboard/payments",
    },
    {
      id: 4,
      title: "My Reviews",
      icon: <BsHeart />,
      link: "/dashboard/reviews",
    },
    {
      id: 5,
      title: "Profile",
      icon: <BiUser />,
      link: "/dashboard/profile",
    },
    {
      id: 8,
      title: "Feature Requests & Bugs",
      icon: <BiGitPullRequest />,
      link: "/dashboard/feature-request",
    },
    {
      id: 6,
      title: "Settings",
      icon: <BsGear />,
      link: "/dashboard/settings",
    },
  ];

  if (role === "customer") {
    menuArray = [
      {
        id: 1,
        title: "Dashboard",
        icon: <BsGrid />,
        link: "/dashboard",
      },
      {
        id: 2,
        title: "My Reviews",
        icon: <BsHeart />,
        link: "/dashboard/reviews",
      },
      {
        id: 3,
        title: "My Bookings",
        icon: <BsBookFill />,
        link: "/dashboard/bookings",
      },
      {
        id: 6,
        title: "Bookings",
        icon: <BsBookFill />,
        link: "/dashboard/purchase/bookings",
      },
      {
        id: 4,
        title: "Profile",
        icon: <BiUser />,
        link: "/dashboard/profile",
      },
      {
        id: 7,
        title: "Feature Requests & Bugs",
        icon: <BiGitPullRequest />,
        link: "/dashboard/feature-request",
      },
      {
        id: 5,
        title: "Settings",
        icon: <BsGear />,
        link: "/dashboard/settings",
      },
    ];
  }

  if (role === "admin") {
    menuArray = [
      {
        id: 9,
        title: "Dashboard",
        icon: <BsGrid />,
        link: "/dashboard",
      },
      {
        id: 4,
        title: "Houses",
        icon: <BsHouse />,
        link: "/dashboard/admin/houses",
      },
      {
        id: 1,
        title: "Users",
        icon: <AiOutlineUser />,
        link: "/dashboard/users",
      },
      {
        id: 2,
        title: "Messages",
        icon: <BsMessenger />,
        link: "/dashboard/messages",
      },
      {
        id: 3,
        title: "Request From Users",
        icon: <BsReceipt />,
        link: "/dashboard/request-from-users",
      },
      {
        id: 5,
        title: "Profile",
        icon: <BiUser />,
        link: "/dashboard/profile",
      },
      {
        id: 6,
        title: "Settings",
        icon: <BsGear />,
        link: "/dashboard/settings",
      },
    ];
  }

  if (role === "manager") {
    menuArray = [
      {
        id: 9,
        title: "Dashboard",
        icon: <BsGrid />,
        link: "/dashboard",
      },
      {
        id: 4,
        title: "Houses",
        icon: <BsHouse />,
        link: "/dashboard/admin/houses",
      },
      {
        id: 2,
        title: "Messages",
        icon: <BsMessenger />,
        link: "/dashboard/messages",
      },
      {
        id: 3,
        title: "Request From Users",
        icon: <BsReceipt />,
        link: "/dashboard/request-from-users",
      },
      {
        id: 5,
        title: "Profile",
        icon: <BiUser />,
        link: "/dashboard/profile",
      },
      {
        id: 6,
        title: "Settings",
        icon: <BsGear />,
        link: "/dashboard/settings",
      },
    ];
  }

  if (data?.blogAllowed) {
    menuArray.push({
      id: 12,
      title: "Blogs",
      icon: <BsBookFill />,
      link: "/dashboard/blogs",
    });
  }

  /* Try to fetch blog using UseQuery */
  const { data: countData } = useQuery(
    ["fetchUnapprovedData", user],
    async () => {
      if (isLoading) return;
      if (role === "admin" || role === "manager") {
        const res = await axios.get(
          `http://localhost:5000/api/v1/request/all-request`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        return res?.data;
      }
    }
  );

  /* Get Unapproved House */
  const { data: unapprovedHouses } = useQuery("unapprovedHouses", async () =>
    getHouseCount("unapproved")
  );
  /* Get approved House */
  const { data: approvedHouses } = useQuery("approvedHouses", async () =>
    getHouseCount("approved")
  );
  /* Get Reject House */
  const { data: rejectHouses } = useQuery("rejectHouses", async () =>
    getHouseCount("rejected")
  );
  /* function to get house count */
  const getHouseCount = async (slug: string) => {
    if (role === "admin" || role === "manager") {
      const res = await axios.get(
        `http://localhost:5000/api/v1/admin/houses/${slug}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      return res?.data;
    }
  };

  useEffect(() => {
    dispatch(setPendingCount(countData?.unapprovedCount));
    dispatch(setPendingHouseCount(unapprovedHouses?.data?.count));
    dispatch(setApprovedHouseCount(approvedHouses?.data?.count));
    dispatch(setRejectedHouseCount(rejectHouses?.data?.count));
  }, [countData, dispatch, unapprovedHouses, approvedHouses, rejectHouses]);

  /* Handle Logout */

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
    dispatch(logout());
    toast.success("Logout Successfully");
  };

  const { requestBlogCount, requestHouseCount, pendingCount } = useAppSelector(
    (state) => state.request
  );
  const { pendingHouseCount } = useAppSelector((state) => state.housesReqCount);

  const { name } = useAppSelector((state) => state.appOption);

  let title: string = "";

  if (requestBlogCount > 0) {
    title = "Blog Requests";
  }
  if (requestHouseCount > 0) {
    title = "House Requests";
  }

  if (requestBlogCount > 0 && requestHouseCount > 0) {
    title = "House/Blog Requests";
  }

  return (
    <>
      <div className="grid place-items-center ">
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content p-5">
            {/*  <!-- Page content here --> */}
            <div className="dashboard-header bg-white p-2 rounded shadow sm:flex items-center justify-between sticky top-1 z-50">
              <div className="flex items-center sm:gap-3">
                <label
                  htmlFor="my-drawer-2"
                  className="btn btn-ghost text-xl border drawer-button lg:hidden"
                >
                  <BsGrid />
                </label>
                <span className="text-xl sm:text-2xl font-bold font-poppins px-3">
                  <MobileView>
                    Welcome to{" "}
                    <Link to="/" className="text-success">
                      {name}
                    </Link>
                  </MobileView>
                  <BrowserView>
                    Welcome to{" "}
                    <Link to="/" className="text-success">
                      {name}
                    </Link>{" "}
                    <span className="capitalize">
                      {data?.role === "user" ? "House Holder" : data?.role}
                    </span>{" "}
                    Panel
                  </BrowserView>
                </span>
              </div>
              <div className="flex-col sm:flex-row flex items-center gap-5 justify-center">
                <div className="deviceAt text-slate-400">
                  <span>
                    Browsing at {osName} {osVersion}
                  </span>
                </div>
                <div className="active-user flex items-center gap-1 text-sm text-green-500 select-none capitalize">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  {data?.role === "user" ? "House Holder" : data?.role}
                </div>
                {!pathname.includes("/dashboard/houses/add") && (
                  <>
                    {role !== "customer" &&
                    role !== "admin" &&
                    role !== "manager" ? (
                      <>
                        <Link
                          to="/dashboard/houses/add"
                          className="flex items-center gap-2 btn btn-success btn-outline rounded-sm btn-sm"
                        >
                          Post House <BiPlus />
                        </Link>
                      </>
                    ) : null}
                    {role === "customer" && (
                      <Link
                        to="/houses"
                        className="flex items-center gap-2 btn btn-success  rounded-sm btn-sm"
                      >
                        Find Houses <BiHomeAlt />
                      </Link>
                    )}
                  </>
                )}

                <div className="dropdown dropdown-end ">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={
                          data?.profileImage
                            ? "http://localhost:5000/profiles/" +
                              data?.profileImage
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
                    {!pathname.includes("/dashboard/profile") && (
                      <li>
                        <Link
                          to="/dashboard/profile"
                          className="justify-between"
                        >
                          Profile
                          <span className="badge">New</span>
                        </Link>
                      </li>
                    )}
                    {!pathname.includes("/dashboard/settings") && (
                      <li>
                        <Link to="/dashboard/settings">Settings</Link>
                      </li>
                    )}
                    <li>
                      <button onClick={handleLogout}>Logout</button>
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
              <div className="logo text-center mt-3">
                <Link to="/dashboard/profile" className="avatar mb-2">
                  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        data?.profileImage
                          ? "http://localhost:5000/profiles/" +
                            data?.profileImage
                          : user?.user?.avatar
                      }
                      alt={data?.name}
                    />
                  </div>
                </Link>
                <div className="info">
                  <Link
                    to="/dashboard/profile"
                    className="text-lg text-base-200"
                  >
                    {data?.name}
                  </Link>
                  <small className="text-gray-400 mb-3 block capitalize">
                    {data?.role === "user" ? "House Holder" : data?.role}
                  </small>
                </div>
                <button
                  className="btn  btn-warning btn-circle btn-sm mb-5 absolute right-4 top-3 text-xl "
                  title="Logout"
                  onClick={handleLogout}
                >
                  <BiLogOut />
                </button>
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
                    {item.title === "Blogs" && (
                      <span className="badge rounded-full text-numbers badge-ghost">
                        New
                      </span>
                    )}
                    {pendingCount > 0 && item.title === "Request From Users" && (
                      <span
                        className="btn btn-circle btn-xs  btn-info "
                        title={title}
                      >
                        {pendingCount > 9 ? "+9" : pendingCount}
                      </span>
                    )}
                    {pendingHouseCount > 0 && item.title === "Houses" && (
                      <span
                        className="btn btn-circle btn-xs  btn-info "
                        title={"Unapproved Houses"}
                      >
                        {pendingHouseCount > 9 ? "+9" : pendingHouseCount}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {isPhone && (
        <MobileView className="grid place-items-center justify-center min-h-screen fixed z-50 bg-[#ffffffce] left-0 top-0 backdrop-blur-sm">
          <div className="px-2 text-center font-poppins">
            <span className="text-center block my-4 text-green-500">
              Active on {osName} {osVersion}
            </span>
            <h3 className="text-3xl font-bold">
              Get Better <br /> User Experience for Dashboard Use Desktop{" "}
            </h3>
            <button
              onClick={() => setIsPhone(false)}
              className="close mt-6 btn btn-primary rounded-full btn-sm cursor-pointer"
            >
              Any way
            </button>
          </div>
        </MobileView>
      )}
    </>
  );
};

export default Dashboard;

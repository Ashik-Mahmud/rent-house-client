import { BiCheck, BiX } from "react-icons/bi";
import { Link, Outlet, useLocation } from "react-router-dom";

type Props = {};

const RequestFromUsers = (props: Props) => {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="p-5 my-5 bg-white">
        <h3 className="text-2xl font-bold">Request From Users</h3>
        <div className="request-content">
          <div className="request-tabs flex items-center mt-5 rounded overflow-hidden">
            <Link
              to="/dashboard/request-from-users/for-blogs"
              className={`p-3 px-6  ${
                pathname.includes("for-blogs") ||
                pathname === "/dashboard/request-from-users"
                  ? "bg-secondary text-white"
                  : "bg-base-300 text-secondary"
              }`}
            >
              For Blogs <span className="badge badge-ghost">5</span>
            </Link>
            <Link
              to="/dashboard/request-from-users/for-house-holder"
              className={`p-3 px-6  ${
                pathname.includes("for-house-holder")
                  ? "bg-secondary text-white"
                  : "bg-base-300 text-secondary"
              }`}
            >
              For House Holder <div className="badge badge-ghost">3</div>
            </Link>
          </div>
          <div className="users-request-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestFromUsers;

export const RequestFromUserRow = () => {
  return (
    <tr>
      <td>1</td>
      <td>John Doe</td>
      <td>
        <a href="mailto:jhone@doe.com">jhone@doe.com</a>
      </td>
      <td>
        <a href="tel:+880123456789">+880123456789</a>
      </td>
      <td>Customer</td>
      <td>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </td>
      <td>
        <button className="badge badge-success badge-lg text-sm font-poppins cursor-pointer">
          <BiCheck /> Confirm
        </button>
        <button className="badge badge-error ml-3 badge-lg text-sm font-poppins cursor-pointer">
          <BiX /> Remove
        </button>
      </td>
    </tr>
  );
};

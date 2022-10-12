import { BiCheck, BiX } from "react-icons/bi";
import { BsLink45Deg } from "react-icons/bs";
import { Link, Outlet, useLocation } from "react-router-dom";
import swal from "sweetalert";
import { AxiosRequest } from "../../../api/Axios";

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

type rowType = {
  data: any;
  ind: number;
};
export const RequestFromUserRow = ({ data, ind }: rowType) => {
  /* Handle Confirm Blog Request */
  const handleConfirmBlogReq = async () => {
    try {
      const isConfirm = await swal({
        title: "Really?",
        text: "You wont be able to revert this!",
        icon: "warning",
        buttons: ["cancel", "confirm!"],
        dangerMode: true,
      });

      const sendingContent = {
        author: data.author,
      };

      if (isConfirm) {
        // User pressed the confirm button
        // Will make an api call to confirm user blog
        const { data: info } = await AxiosRequest.patch(
          `/approve-blog/${data?._id}`,
          sendingContent
        );

        console.log(sendingContent, info);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr>
      <td>{ind + 1}</td>
      <td>{data?.author?.name}</td>
      <td>
        <a href="mailto:jhone@doe.com">{data?.author?.email}</a>
      </td>
      <td>
        <a href="tel:+880123456789">+{data?.author?.phone}</a>
      </td>
      <td>Customer</td>
      <td>
        {data?.author?.isVerified ? (
          <span className="badge badge-success">verified</span>
        ) : (
          <span className="badge badge-warning">not verified</span>
        )}
      </td>

      <td className="w-40">
        <span className="" title={data?.notes || "No notes found."}>
          Message
        </span>
      </td>
      <td>
        {data?.blogUrl ? (
          <a
            href={data?.blogUrl}
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-bold text-center block"
          >
            <BsLink45Deg />
          </a>
        ) : (
          "Nill"
        )}
      </td>
      <td>
        <button
          className="badge badge-success badge-lg text-sm font-poppins cursor-pointer"
          onClick={handleConfirmBlogReq}
        >
          <BiCheck /> Confirm
        </button>
        <button className="badge badge-error ml-3 badge-lg text-sm font-poppins cursor-pointer">
          <BiX /> Remove
        </button>
      </td>
    </tr>
  );
};

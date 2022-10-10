import { useState } from "react";
import {
  BsCheck2,
  BsFacebook,
  BsInstagram,
  BsPen,
  BsTrash,
  BsTwitter,
} from "react-icons/bs";
import { GiChessQueen } from "react-icons/gi";
import { toast } from "react-toastify";
import { AxiosUser } from "../../../api/Axios";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";

type Props = {
  data: any;
  ind: number;
  refetch: () => void;
};

const UserRow = ({ data, ind, refetch }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [changeRole, setChangeRole] = useState<string>("");
  const [changeStatus, setChangeStatus] = useState<string>("");
  const { updatedUser } = useAuth<authUserInterface | any>({});

  /* Handle Change Role */
  const handleChangeRole = async (id: string) => {
    if (!changeRole) return toast.error("Select Role");
    adminAction(changeRole, id, "/change-role");
  };

  /* Handle Change Status */
  const handleStatus = async (id: string) => {
    if (!changeStatus) return toast.error("Select Status");
    adminAction(changeStatus, id, "/change-status");
  };

  /* Common function for changing */
  const adminAction = async (changeText: string, id: string, url: string) => {
    const isConfirm = window.confirm("Are you sure?");
    try {
      if (isConfirm) {
        const { data } = await AxiosUser.patch(`/admin${url}`, {
          query: changeText,
          id: id,
        });
        toast.success(data?.message);
        refetch();
        setIsEdit(false);
      }
    } catch (err) {
      toast.error((err as any)?.response?.data?.message);
    }
  };

  return (
    <tr>
      <td className="text-left">
        {data?.name || "not available"}{" "}
        {data?._id === updatedUser?._id && (
          <span
            className="text-green-400 text-xl cursor-pointer tooltip tooltip-success"
            data-tip="Active User"
          >
            *
          </span>
        )}
      </td>
      <td className="text-left">
        <span className="text-gray-500">{data?.email || "not available"}</span>
      </td>
      <td className="text-left">
        <span className="text-gray-500">{data?.phone || "not available"}</span>
      </td>
      <td>Dhaka/Bangladesh</td>
      <td>
        <div className="flex items-center gap-3">
          {data?.facebookLink && (
            <a
              href={data?.facebookLink}
              target="_blank"
              className="btn btn-xs btn-ghost"
              rel="noreferrer"
            >
              <BsFacebook />
            </a>
          )}
          {data?.instagramLink && (
            <a
              href={data?.instagramLink}
              target="_blank"
              className="btn btn-xs btn-ghost"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
          )}

          {data?.twitterLink && (
            <a
              href={data?.twitterLink}
              target="_blank"
              className="btn btn-xs btn-ghost"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
          )}
          {!data?.facebookLink &&
            !data?.twitterLink &&
            !data?.instagramLink &&
            "not available"}
        </div>
      </td>
      <td className="text-left">
        {isEdit ? (
          <div className="flex items-center gap-2 ">
            <select
              name=""
              id=""
              className="outline-none cursor-pointer  rounded-md w-24"
              onChange={(e) => setChangeRole(e.target.value)}
            >
              <option value="">select</option>
              <option value="customer">Customer</option>
              <option value="user">User - House Holder</option>
              <option value="admin">Admin</option>
            </select>
            <div className=" select-none flex items-center gap-1">
              <span
                className="text-success cursor-pointer text-2xl tooltip"
                data-tip="Save Changes"
                onClick={() => handleChangeRole(data?._id)}
              >
                <BsCheck2 />
              </span>
              <span
                onClick={() => setIsEdit(false)}
                className="text-danger cursor-pointer text-2xl tooltip text-error"
                data-tip="Cancel Changes"
              >
                &times;
              </span>
            </div>
          </div>
        ) : (
          <span className="text-gray-500 capitalize flex gap-1">
            {data?.role === "user"
              ? "House Holder"
              : data?.role || "not available"}
            {data?.role === "admin" && (
              <span
                title="High Position"
                className="block mt-px text-yellow-500"
              >
                <GiChessQueen />
              </span>
            )}
          </span>
        )}
      </td>
      <td className="text-left">
        {isEdit ? (
          <div className="flex items-center gap-2 ">
            <select
              name=""
              id=""
              className="outline-none cursor-pointer  rounded-md w-24"
              onChange={(e) => setChangeStatus(e.target.value)}
            >
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <div className=" select-none flex items-center gap-1">
              <span
                className="text-success cursor-pointer text-2xl tooltip"
                data-tip="Save Changes"
                onClick={() => handleStatus(data?._id)}
              >
                <BsCheck2 />
              </span>
              <span
                onClick={() => setIsEdit(false)}
                className="text-danger cursor-pointer text-2xl tooltip text-error"
                data-tip="Cancel Changes"
              >
                &times;
              </span>
            </div>
          </div>
        ) : (
          <span
            className={`text-green-500 ${
              data?.status === "active" ? "text-green-500" : "text-secondary"
            } capitalize`}
          >
            {data?.status || "not available"}
          </span>
        )}
      </td>
      <td className="text-left">
        <div className="flex items-center gap-3">
          {!isEdit ? (
            <button
              className={`${
                data?._id === updatedUser?._id &&
                "pointer-events-none text-gray-300"
              }`}
              onClick={() => setIsEdit(true)}
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <BsPen />
              </span>
            </button>
          ) : (
            <button onClick={() => setIsEdit(false)}>
              <span className="text-2xl flex items-center justify-center">
                &times;
              </span>
            </button>
          )}

          <button
            className={`${
              data?._id === updatedUser?._id &&
              "pointer-events-none text-gray-300"
            }`}
          >
            <span className="w-5 h-5 flex items-center justify-center">
              <BsTrash />
            </span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;

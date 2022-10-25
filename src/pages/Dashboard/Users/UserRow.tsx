import { useEffect, useState } from "react";
import {
  BsCheck2,
  BsFacebook,
  BsInstagram,
  BsPen,
  BsTrash,
  BsTwitter,
} from "react-icons/bs";
import { GiChessQueen } from "react-icons/gi";
import { MdVerified } from "react-icons/md";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { AxiosUser } from "../../../api/Axios";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import { useDeleteUserForAdminMutation } from "../../../services/AuthApi";

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

  /* Delete Rtk Query */
  const [deleteUser, { data: deleteData, error, isSuccess }] =
    useDeleteUserForAdminMutation();

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
    const isConfirm = await swal({
      title: "Are you sure?",
      text: "After done It's role change to create whatever you put",
      icon: "warning",
      buttons: ["Cancel", "Okay"],
    });
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

  /* Handle Delete User by Admin */
  const handleDeleteUserByAdmin = async (id: string) => {
    const isConfirm = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ["Cancel", "Okay"],
    });
    if (isConfirm) {
      await deleteUser(id);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(deleteData?.message);
    }
    if (error) {
      toast.error((error as any)?.data.message);
    }
  }, [isSuccess, deleteData, error]);

  return (
    <tr>
      <td className="text-left">
        <div className="flex items-center gap-2">
          {data?.name || "not available"}{" "}
          {data?.isVerified && (
            <span
              className="text-info tooltip tooltip-info cursor-pointer"
              data-tip="verified"
            >
              <MdVerified />
            </span>
          )}
        </div>
      </td>
      <td className="text-left">
        <span className="text-gray-500">
          {data?.email || "not available"}
          {data?._id === updatedUser?._id && (
            <span
              className="text-green-400 text-xl cursor-pointer tooltip tooltip-success"
              data-tip="Active User"
            >
              *
            </span>
          )}
        </span>
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
              <option value="manager">Manager</option>
            </select>
            <div className=" select-none flex items-center gap-1">
              <span
                className="text-success cursor-pointer text-2xl tooltip"
                data-tip="Save Changes"
                onClick={() => handleChangeRole(data?._id)}
              >
                <BsCheck2 />
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
            </div>
          </div>
        ) : (
          <span
            className={`badge ${
              data?.status === "active" ? " badge-success" : " badge-warning"
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
              <span className="text-2xl flex items-center justify-center text-error">
                &times;
              </span>
            </button>
          )}

          <button
            className={`${
              data?._id === updatedUser?._id &&
              "pointer-events-none text-gray-300"
            }`}
            onClick={() => handleDeleteUserByAdmin(data?._id)}
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

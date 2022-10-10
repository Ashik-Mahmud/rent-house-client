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

type Props = {
  data: any;
  ind: number;
};

const UserRow = ({ data, ind }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <tr>
      <td className="text-left">{data?.name || "not available"}</td>
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
            >
              <option value="customer">Customer</option>
              <option value="user">User - House Holder</option>
              <option value="admin">Admin</option>
            </select>
            <div className=" select-none flex items-center gap-1">
              <span
                className="text-success cursor-pointer text-2xl tooltip"
                data-tip="Save Changes"
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
            >
              <option value="">Active</option>
              <option value="">Inactive</option>
            </select>
            <div className=" select-none flex items-center gap-1">
              <span
                className="text-success cursor-pointer text-2xl tooltip"
                data-tip="Save Changes"
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
            <button className="" onClick={() => setIsEdit(true)}>
              <span className="w-5 h-5 flex items-center justify-center">
                <BsPen />
              </span>
            </button>
          ) : (
            <button className="" onClick={() => setIsEdit(false)}>
              <span className="text-2xl flex items-center justify-center">
                &times;
              </span>
            </button>
          )}

          <button className="">
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

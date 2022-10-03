import { useState } from "react";
import {
  BsCheck2,
  BsFacebook,
  BsInstagram,
  BsPen,
  BsTrash,
  BsTwitter,
} from "react-icons/bs";

type Props = {};

const UserRow = (Props: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <tr>
      <td className="text-left">John Doe</td>
      <td className="text-left">
        <span className="text-gray-500">jhon@doe.com</span>
      </td>
      <td className="text-left">
        <span className="text-gray-500">01700000000</span>
      </td>
      <td>Dhaka/Bangladesh</td>
      <td>
        <div className="flex items-center gap-3">
          <a href="/" className="btn btn-xs btn-ghost">
            <BsFacebook />
          </a>
          <a href="/" className="btn btn-xs btn-ghost">
            <BsTwitter />
          </a>
          <a href="/" className="btn btn-xs btn-ghost">
            <BsInstagram />
          </a>
        </div>
      </td>
      <td className="text-left">
        {isEdit ? (
          <div className="flex items-center gap-2 ">
            <select
              name=""
              id=""
              className="outline-none cursor-pointer  rounded-md"
            >
              <option value="">Customer</option>
              <option value="">Admin</option>
              <option value="">User - House Holder</option>
            </select>
            <div className=" select-none flex items-center gap-3">
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
          <span className="text-gray-500">Customer</span>
        )}
      </td>
      <td className="text-left">
        <span className="text-green-500">Active</span>
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

import { BiBath, BiBed, BiCheck, BiTrashAlt } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {};

const RejectedRow = (props: Props) => {
  return (
    <tr>
      <th>1</th>
      <td>
        {" "}
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://placeimg.com/400/225/arch"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="badge badge-ghost">
            <BiBed /> 4
          </div>
          <div className="badge badge-ghost">
            <BiBath /> 4
          </div>
        </div>
      </td>
      <td>Rent</td>
      <td>
        <div className="badge badge-ghost text-xs">
          Ashik Mahmud / ashikmahmud@gmail.com
        </div>
      </td>
      <td>122000/m</td>
      <td>
        <div className="badge badge-error">rejected</div>
      </td>
      <td>
        <Link to="/house/4334232" className="tooltip" data-tip="View House">
          <BsEyeFill />
        </Link>
      </td>
      <td>
        <div className="flex items-center gap-2">
          <label
            htmlFor="permission-yes-modal"
            className="flex items-center gap-1 bg-success rounded px-2 cursor-pointer"
          >
            <BiCheck /> <small>Approved</small>
          </label>
        </div>
      </td>
      <td>
        <button className="text-error text-lg">
          <BiTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default RejectedRow;
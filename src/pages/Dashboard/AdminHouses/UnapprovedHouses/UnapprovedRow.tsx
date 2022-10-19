import { BiBath, BiBed, BiCheck, BiTrashAlt } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {
  house: any;
  ind: number;
};

const UnapprovedRow = ({ ind, house }: Props) => {
  return (
    <tr>
      <th>{ind + 1}</th>
      <td>
        {" "}
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={
                  house?.image
                    ? "http://localhost:5000/previews/" + house?.image
                    : "https://placeimg.com/400/225/arch"
                }
                alt={house?.name}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{house?.name}</div>
            <div className="text-sm opacity-50">{house?.address}</div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="badge badge-ghost">
            <BiBed /> {house?.bedrooms}
          </div>
          <div className="badge badge-ghost">
            <BiBath /> {house?.bathrooms}
          </div>
        </div>
      </td>
      <td> {house?.houseType}</td>
      <td>
        <div className="badge badge-ghost text-xs">
          {house?.owner?.name} / {house?.owner?.email}
        </div>
      </td>
      <td>{house?.price}</td>
      <td>
        <div className="badge badge-ghost">{house?.status} </div>
      </td>
      <td>
        <Link
          to={`/house/${house?._id}`}
          className="tooltip"
          data-tip="View House"
        >
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
          <label
            htmlFor="permission-no-modal"
            className="flex items-center gap-2 bg-warning rounded px-2 cursor-pointer"
          >
            &times; <small>Rejected</small>{" "}
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

export default UnapprovedRow;

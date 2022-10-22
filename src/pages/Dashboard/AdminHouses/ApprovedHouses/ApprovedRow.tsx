import { BiBath, BiBed, BiBlock } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import RejectedHouseModal from "../UnapprovedHouses/RejectedHouseModal";

type Props = {
  house: any;
  ind: number;
  refetch: () => void;
};

const ApprovedRow = ({ ind, house, refetch }: Props) => {
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
                    ? "${base_backend_url}/previews/" + house?.image
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
        <div className="badge badge-success">{house?.status} </div>
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
            htmlFor="permission-no-modal"
            className="flex items-center gap-1 bg-warning rounded p-1 px-2 cursor-pointer"
          >
            <BiBlock /> <small>Blocked</small>{" "}
          </label>
          <RejectedHouseModal houseId={house?._id} refetch={refetch} />
        </div>
      </td>
    </tr>
  );
};

export default ApprovedRow;

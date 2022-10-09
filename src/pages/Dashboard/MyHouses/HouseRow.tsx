import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

type Props = {
  approved?: boolean;
  house: any;
  index: number;
};

const HouseRow = ({ approved, house, index }: Props) => {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-3">
        H-{house._id.slice(0, 5)}
        {index}
      </td>
      <td className="py-3">
        {house?.name.length > 18
          ? house?.name.slice(0, 18) + "..."
          : house?.name}
      </td>
      <td className="py-3">{house?.address}</td>

      <td className="py-3">{house?.bedrooms}</td>
      <td className="py-3">{house?.bathrooms}</td>
      <td className="py-3">{house?.price}</td>
      <td className="py-3">{house?.bathrooms}</td>
      <td className="py-3">
        <div
          className={`badge badge-${
            house.status === "approved" ? "success" : "warning"
          } text-xs `}
        >
          {house.status}
        </div>
      </td>
      <td>
        <div className="badge badge-secondary">{house?.likes}</div>
      </td>
      <td className="py-3">
        <Link
          data-tip="View Reviews"
          to="/dashboard/houses/reviews/3423"
          className="btn btn-xs btn-circle btn-info flex items-center gap-2 text-xs tooltip"
        >
          10
        </Link>
      </td>
      <td className="py-3 ">
        <Link
          data-tip="View Questions"
          to="/dashboard/houses/questions/3423"
          className="btn btn-xs btn-circle btn-accent flex items-center gap-2 text-xs tooltip"
        >
          40
        </Link>
      </td>
      <td className="py-3 ">
        <Link
          data-tip="View Reports"
          to="/dashboard/houses/reports/3423"
          className="btn btn-xs btn-circle btn-warning flex items-center gap-2 text-xs tooltip"
        >
          5
        </Link>
      </td>
      <td className="py-3 ">
        <Link
          data-tip="View House"
          to={`/house/${house._id}`}
          className="btn btn-xs btn-circle btn-primary flex items-center gap-2 text-xs tooltip"
        >
          <AiFillEye />
        </Link>
      </td>
      <td className="py-3 ">
        <Link
          data-tip="Edit House"
          to="/dashboard/houses/edit/4343"
          className="btn btn-xs btn-circle btn-success flex items-center gap-2 text-xs tooltip"
        >
          <AiFillEdit />
        </Link>
      </td>
      <td className="py-3 ">
        <Link
          data-tip="Delete House"
          to="/"
          className="btn btn-xs btn-circle btn-error flex items-center gap-2 text-xs tooltip tooltip-left"
        >
          <AiFillDelete />
        </Link>
      </td>
    </tr>
  );
};

export default HouseRow;

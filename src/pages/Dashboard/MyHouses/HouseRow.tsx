import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

type Props = {
  approved?: boolean;
};

const HouseRow = ({ approved }: Props) => {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-3">H-1234</td>
      <td className="py-3">House 1</td>
      <td className="py-3">123 Main St</td>

      <td className="py-3">NY</td>
      <td className="py-3">10001</td>
      <td className="py-3">$1,200</td>
      <td className="py-3">Apartment</td>
      <td className="py-3">
        <div
          className={`badge badge-${approved ? "success" : "warning"} text-xs `}
        >
          {approved ? "Approved" : "Pending"}
        </div>
      </td>
      <td>
        <div className="badge badge-secondary">1544</div>
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
          to="/house/43342323"
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

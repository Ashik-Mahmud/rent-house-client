import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useDeleteHouseByIdMutation } from "../../../services/HouseApi";

type Props = {
  approved?: boolean;
  house: any;
  index: number;
  refetch: () => void;
};

const HouseRow = ({ approved, house, index, refetch }: Props) => {
  const [deleteHouseById, { isLoading }] = useDeleteHouseByIdMutation();
  /* Handle Delete House by Owner */
  const handleDeleteHouses = async (id: string) => {
    const isConfirm = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this house!",
      icon: "warning",
      buttons: ["Cancel", `${isLoading ? "deleting..." : "Yes, delete it!"}`],
      dangerMode: true,
    });
    if (isConfirm) {
      try {
        await deleteHouseById(id);
        swal("Deleted!", "Your house has been deleted!", "success");
        refetch();
      } catch (error) {
        swal("Oops!", "Something went wrong!", "error");
      }
    }
  };

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
        {house?.status === "approved" && (
          <div
            className="tooltip tooltip-success text-xs badge badge-success"
            data-tip="Approved by Admin"
          >
            <span>approved</span>
          </div>
        )}{" "}
        {house?.status === "pending" && (
          <div
            className="tooltip  tooltip-warning text-xs badge badge-warning"
            data-tip="Waiting for Admin Approval"
          >
            <span>pending</span>
          </div>
        )}
        {house?.status === "rejected" && (
          <div
            className="tooltip tooltip-error badge badge-error text-xs"
            data-tip="Rejected by Admin"
          >
            <span>Rejected</span>
          </div>
        )}
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
          to={`/dashboard/houses/edit/${house._id}`}
          className="btn btn-xs btn-circle btn-success flex items-center gap-2 text-xs tooltip"
        >
          <AiFillEdit />
        </Link>
      </td>
      <td className="py-3 ">
        <span
          onClick={() => handleDeleteHouses(house._id)}
          data-tip="Delete House"
          className="btn btn-xs btn-circle btn-error flex items-center gap-2 text-xs tooltip tooltip-left"
        >
          <AiFillDelete />
        </span>
      </td>
    </tr>
  );
};

export default HouseRow;

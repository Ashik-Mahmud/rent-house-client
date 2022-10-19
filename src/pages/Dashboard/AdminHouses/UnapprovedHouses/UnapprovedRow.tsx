import axios from "axios";
import { BiBath, BiBed, BiCheck, BiTrashAlt } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";

type Props = {
  house: any;
  ind: number;
  refetch: () => void;
};

const UnapprovedRow = ({ ind, house, refetch }: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  /* Handle Approved Houses */
  const handleApprovedHouse = async (id: string) => {
    const isConfirm = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ["cancel", "okay"],
      dangerMode: true,
    });
    if (isConfirm) {
      const { data } = await axios.patch(
        `http://localhost:5000/api/v1/admin/accept/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      swal(`${data?.message}`, {
        icon: "success",
      });
      refetch();
    }
  };

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
            <div
              className="font-bold tooltip tooltip-success"
              data-tip={house?.name}
            >
              {house?.name.slice(0, 15) + "..."}
            </div>
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
        <div
          className="badge badge-ghost text-xs tooltip tooltip-success"
          data-tip={house?.owner?.name + " / " + house?.owner?.email}
        >
          {house?.owner?.name} / {house?.owner?.email.slice(0, 15) + "..."}
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
            onClick={() => handleApprovedHouse(house?._id)}
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

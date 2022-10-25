import { BiBath, BiBed, BiTrashAlt } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
type Props = {};

const BookingRow = (props: Props) => {
  return (
    <tr>
      <th>{1}</th>
      <th>
        <div className="flex items-center space-x-3">
          <div className="avatar online placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <span className="text-xl">AM</span>
            </div>
          </div>
          <div>
            <div className="font-bold">Ashik Mahmud</div>
            <div className="text-sm opacity-50">customer</div>
          </div>
        </div>
      </th>
      <th>
        <div className="flex items-center space-x-3">
          <div className="text-sm opacity-50">Email</div>
          <div className="font-bold">ashik@gmail.com</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-sm opacity-50">Phone</div>
          <div className="font-bold">01700000000</div>
        </div>
      </th>
      <td>
        <Link
          to="/house/634329861a24d7beb5fcd615"
          className="flex items-center space-x-3"
        >
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={"https://placeimg.com/400/225/arch"} alt={""} />
            </div>
          </div>
          <div>
            <div className="font-bold">Rajpur Villa</div>
            <div className="text-sm opacity-50">Dhaka/bangladesh</div>
          </div>
        </Link>
      </td>
      <td>
        <div>
          <div className="badge badge-ghost">
            <BiBed /> 4
          </div>
          <div className="badge badge-ghost">
            <BiBath /> 5
          </div>
        </div>
      </td>
      <td> 1254545</td>
      <td>
        <span className="badge badge-ghost">Stripe</span>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="text-sm opacity-50">Paid</div>
          <div className="font-bold">100</div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost">FDSFASD4564</span>
      </td>
      <td>
        <div className="badge badge-success"> booked </div>
      </td>

      <td>
        <div className="flex items-center gap-2">
          <Link to="" className="btn btn-circle btn-ghost btn-sm">
            <BsEye />
          </Link>
          <button className="btn btn-ghost btn-circle btn-sm text-error">
            <BiTrashAlt />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BookingRow;

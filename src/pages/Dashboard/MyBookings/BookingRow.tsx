import { BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";

type Props = {};

const BookingRow = (props: Props) => {
  return (
    <tr>
      <td className="border-b dark:border-dark-5">John</td>
      <td className="border-b dark:border-dark-5">
        <div className="flex items-center text-theme-9">
          <a href="mailto:ashik@gmail.com">ashik@gmail.com</a>
        </div>
      </td>
      <td className="border-b dark:border-dark-5">+880 123456789</td>
      <td className="border-b dark:border-dark-5">House 1</td>
      <td className="border-b dark:border-dark-5">1000</td>
      <td className="border-b dark:border-dark-5">
        <span className="badge badge-warning">asdf4343423</span>
      </td>
      <td className="border-b dark:border-dark-5">
        <span className="badge badge-success">Booked</span>
      </td>
      <td className="border-b dark:border-dark-5">
        <Link to="" className="tooltip" data-tip="Show House Details For User">
          <BiShow />
        </Link>
      </td>
    </tr>
  );
};

export default BookingRow;

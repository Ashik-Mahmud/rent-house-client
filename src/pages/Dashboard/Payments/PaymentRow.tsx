import { BiTrash } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {};

const PaymentRow = (props: Props) => {
  return (
    <tr>
      <th>1</th>
      <td>Cy Ganderton</td>
      <td>H-43323</td>
      <td>Quality Control </td>
      <td>dasf4343324</td>
      <td>
        <div className="badge badge-success">success</div>
      </td>
      <td>
        <Link
          to="/"
          className="tooltip text-xl text-primary"
          data-tip="View House"
        >
          <BsEye />
        </Link>
      </td>
      <td>
        <button
          className="text-center text-error text-lg tooltip"
          data-tip="Delete Payment"
        >
          <BiTrash />
        </button>
      </td>
    </tr>
  );
};

export default PaymentRow;

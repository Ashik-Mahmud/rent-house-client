import { BiSearchAlt2 } from "react-icons/bi";
import PaymentRow from "./PaymentRow";

type Props = {};

const Payments = (props: Props) => {
  return (
    <div>
      <div className="p-5 my-4 bg-white">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Payments</h3>
          <div className="flex items-center justify-between gap-2  border p-3 rounded">
            <div className="flex items-center gap-2">
              <div className="icon">
                <BiSearchAlt2 />
              </div>
              <input
                type="text"
                className="form-control outline-none pl-4 w-full"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="payments-content my-7">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>House ID</th>
                  <th>House</th>
                  <th>Transaction ID</th>
                  <th>Status</th>
                  <th>View</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <PaymentRow />
                <PaymentRow />
                <PaymentRow />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;

import {
  BiChevronLeft,
  BiChevronRight,
  BiExport,
  BiSearchAlt2,
} from "react-icons/bi";
import PaymentRow from "./PaymentRow";

type Props = {};

const Payments = (props: Props) => {
  return (
    <div>
      <div className="p-5 my-4 bg-white">
        <div className="flex-col  sm:flex-row flex grid-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Payments</h1>
            <small className="badge badge-success">House Holder</small>
          </div>
          <div className="flex items-center justify-between gap-2 mt-4 sm:mt-0  border p-3 rounded">
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
        <div className="export-btn my-5">
          <button className="badge badge-ghost badge-lg flex items-center gap-2 font-poppins">
            Export Collection <BiExport className="text-xl" />
          </button>
        </div>
        <div className="payments-content mb-7">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
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
          <div className="pagination flex items-center gap-3 justify-end mt-5">
            <a
              href="/"
              className="pagination__link w-7 h-7 grid place-items-center btn-ghost rounded-full"
            >
              <BiChevronLeft />
            </a>
            <a
              href="/"
              className="pagination__link w-7 h-7 grid place-items-center btn-ghost btn-active rounded-full"
            >
              1
            </a>
            <a
              href="/ "
              className="pagination__link w-7 h-7 grid place-items-center btn-ghost rounded-full"
            >
              2
            </a>
            <a
              href="/"
              className="pagination__link w-7 h-7 grid place-items-center btn-ghost rounded-full"
            >
              3
            </a>
            <a
              href="/"
              className="pagination__link w-7 h-7 grid place-items-center btn-ghost rounded-full"
            >
              <BiChevronRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;

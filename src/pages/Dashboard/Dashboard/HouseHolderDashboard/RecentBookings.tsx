import { BiAddToQueue, BiBath, BiBed } from "react-icons/bi";
import { Link } from "react-router-dom";

type Props = {};

const RecentBookings = (props: Props) => {
  return (
    <div className="p-5 bg-white rounded shadow">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">Recent Bookings</h3>
        <Link to="/dashboard/payments" className="text-primary">
          View All
        </Link>
      </div>
      <div className="my-5 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>CUSTOMER</th>
              <th>INFO</th>
              <th>HOUSES</th>
              <th>Bed/Bath rooms</th>
              <th>Price</th>
              <th>Transaction ID</th>
              <th>status</th>

              <th>permission</th>
            </tr>
          </thead>
          <tbody>
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
                <span className="badge badge-ghost">FDSFASD4564</span>
              </td>
              <td>
                <div className="badge badge-success"> booked </div>
              </td>

              <td>
                <div className="flex items-center gap-2">
                  <Link
                    to="/dashboard/payments"
                    className="flex items-center gap-1 bg-info rounded p-1 px-2 cursor-pointer"
                  >
                    <BiAddToQueue /> <small>Action</small>{" "}
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBookings;

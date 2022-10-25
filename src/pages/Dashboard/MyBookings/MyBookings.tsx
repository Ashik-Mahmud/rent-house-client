import axios from "axios";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useQuery } from "react-query";
import GlobalLoader from "../../../components/GlobalLoader";
import { base_backend_url } from "../../../configs/config";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import BookingRow from "./BookingRow";

type Props = {};

const MyBookings = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});

  /* Get Already Booked Statement */
  const { data, isLoading } = useQuery("bookings", async () => {
    const { data } = await axios.get(`${base_backend_url}/api/v1/bookings`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return data;
  });
  if (isLoading) return <GlobalLoader />;

  console.log(data);

  return (
    <div>
      <div className="myBookings p-5 my-7 bg-white">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">My Bookings</h1>
          <small className="badge badge-success">Customer</small>
        </div>
        <div className="myBookings__content my-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>House Holder</th>
                  <th>INFO</th>
                  <th>HOUSES</th>
                  <th>Bed/Bath rooms</th>
                  <th>Price</th>
                  <th>Method</th>
                  <th>Money</th>
                  <th>Transaction ID</th>
                  <th>status</th>

                  <th>permission</th>
                </tr>
              </thead>
              <tbody>
                <BookingRow />
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

export default MyBookings;

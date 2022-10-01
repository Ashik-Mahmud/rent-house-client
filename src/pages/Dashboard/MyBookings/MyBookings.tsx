import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import BookingRow from "./BookingRow";

type Props = {};

const MyBookings = (props: Props) => {
  return (
    <div>
      <div className="myBookings p-5 my-7 bg-white">
        <h3 className="text-2xl font-bold">My Bookings</h3>
        <div className="myBookings__content my-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="border-b-2 dark:border-dark-5 whitespace-nowrap">
                    Name
                  </th>
                  <th className="border-b-2 dark:border-dark-5 whitespace-nowrap">
                    Email
                  </th>
                  <th className="border-b-2 dark:border-dark-5 whitespace-nowrap">
                    Phone
                  </th>
                  <th className="border-b-2 dark:border-dark-5 whitespace-nowrap">
                    House
                  </th>
                  <th className="border-b-2 dark:border-dark-5 whitespace-nowrap">
                    Price
                  </th>
                  <th className="border-b-2 dark:border-dark-5 whitespace-nowrap">
                    Transaction ID
                  </th>
                  <th className="border-b-2 dark:border-dark-5 whitespace-nowrap">
                    Status
                  </th>
                  <th className="border-b-2 dark:border-dark-5 whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <BookingRow />
                <BookingRow />
                <BookingRow />
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

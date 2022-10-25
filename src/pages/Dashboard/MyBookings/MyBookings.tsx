import axios from "axios";
import { useState } from "react";
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

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(1);

  /* Get Already Booked Statement */
  const { data, isLoading } = useQuery("bookings", async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/payment/payment-statement`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return data;
  });

  /* Handle Pagination */
  const totalPages = Math.ceil(data?.data?.count / limit);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  /* Handle Next */
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  /* Handle Previous */
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="myBookings p-5 my-7 bg-white">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">My Bookings</h1>
          <small className="badge badge-success">Customer</small>
        </div>
        <div className="myBookings__content my-5">
          {isLoading ? (
            <GlobalLoader />
          ) : (
            <div className="overflow-x-auto">
              {data?.data?.payments?.length > 0 ? (
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th></th>
                      <th>House Holder</th>
                      <th>INFO</th>
                      <th>HOUSES</th>

                      <th>Method</th>
                      <th>Money</th>
                      <th>Transaction ID</th>
                      <th>status</th>

                      <th>permission</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data?.payments?.map((payment: any) => (
                      <BookingRow payment={payment} key={payment?._id} />
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center">
                  <h1 className="text-2xl font-bold">No Bookings Found</h1>
                </div>
              )}
            </div>
          )}

          {limit < totalPages && (
            <div className="pagination flex items-center gap-3 justify-end mt-5">
              <a
                href="/"
                className="pagination__link w-7 h-7 grid place-items-center btn-ghost rounded-full"
              >
                <BiChevronLeft />
              </a>
              {pages.map((page) => (
                <span
                  key={page}
                  className={`pagination__link w-7 h-7 grid place-items-center btn-ghost rounded-full cursor-pointer ${
                    currentPage === page && "btn-active"
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </span>
              ))}

              <a
                href="/"
                className="pagination__link w-7 h-7 grid place-items-center btn-ghost rounded-full"
              >
                <BiChevronRight />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;

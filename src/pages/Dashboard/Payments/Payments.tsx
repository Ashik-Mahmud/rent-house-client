import axios from "axios";
import { useState } from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiExport,
  BiSearchAlt2,
} from "react-icons/bi";
import { useQuery } from "react-query";
import GlobalLoader from "../../../components/GlobalLoader";
import { base_backend_url } from "../../../configs/config";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import PaymentRow from "./PaymentRow";

type Props = {};

const Payments = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  /* Get Already Booked Statement */
  const { data, isLoading, refetch } = useQuery(
    ["bookings", currentPage, limit],
    async () => {
      const { data } = await axios.get(
        `${base_backend_url}/api/v1/payment/holder/payment-statement?page=${currentPage}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      return data;
    }
  );

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

  console.log(data);

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
          {isLoading ? (
            <GlobalLoader />
          ) : (
            <div className="overflow-x-auto">
              {data?.data?.payments?.length > 0 ? (
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th></th>
                      <th>CUSTOMER</th>
                      <th>INFO</th>
                      <th>HOUSES</th>
                      <th>Bed/Bath rooms</th>
                      <th>Price</th>
                      <th>Method</th>
                      <th>Transaction ID</th>
                      <th>status</th>

                      <th>permission</th>
                    </tr>
                  </thead>
                  <tbody>
                    <PaymentRow />
                    <PaymentRow />
                    <PaymentRow />
                  </tbody>
                </table>
              ) : (
                <div className="text-center">
                  <h1 className="text-2xl font-bold">No Payments Yet</h1>
                </div>
              )}
            </div>
          )}

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

import axios from "axios";
import * as FileSaver from "file-saver";
import { useEffect, useState } from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiExport,
  BiSearchAlt2,
} from "react-icons/bi";
import { useQuery } from "react-query";
import swal from "sweetalert";
import * as XLSX from "xlsx";
import GlobalLoader from "../../../components/GlobalLoader";
import { base_backend_url } from "../../../configs/config";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import PaymentRow from "./PaymentRow";
type Props = {};

const Payments = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const [paymentData, setPaymentData] = useState<any>([]);

  /* Get Already Booked Statement */
  const { data, isLoading } = useQuery(
    ["bookings", currentPage, limit, search],
    async () => {
      const { data } = await axios.get(
        `${base_backend_url}/api/v1/payment/holder/payment-statement?page=${currentPage}&limit=${limit}&search=${search}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
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

  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  /* Handle Exports Payments */
  const exportPayments = async (payments: any) => {
    const filename = await swal({
      title: "Are you sure?",
      text: "You want to export this payments?",
      content: {
        element: "input",
        attributes: {
          placeholder: "Put the file name here",
          type: "text",
        },
      },
    });
    if (!filename) {
      swal("Cancelled", "Your did't put any name :)", "error");
      return;
    }
    if (filename?.length < 6) {
      swal("Error", "File name must be at least 5 characters", "error");
      return;
    }

    const ws = XLSX.utils.json_to_sheet(payments);
    XLSX.utils.sheet_add_aoa(
      ws,
      [
        [
          "Index",
          "House Name",
          "House Id",
          "Charge Amount",
          "Transaction Id",
          "Method",
          "Customer Name",
          "Customer Email",
          "Customer Number",
          "Customer Id",
          "Date",
        ],
      ],
      {
        origin: "A1",
      }
    );
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, filename + fileExtension);
    swal("Success", "Your file has been exported", "success");
  };

  useEffect(() => {
    const exportData = data?.data?.payments.map(
      (payment: any, index: number) => {
        return {
          Index: index + 1,
          "House Name": payment?.house?.name,
          "House Id": payment?.house?._id,
          Amount: payment?.money,
          "Transaction Id": payment?.transactionId,
          Method: payment?.method,
          "Customer Name": payment?.user?.name,
          "Customer Email": payment?.user?.email,
          "Customer Number": payment?.user?.phone,
          "Customer Id": payment?.user?._id,
          Date: payment?.createdAt,
        };
      }
    );

    setPaymentData(exportData);
  }, [data]);

  return (
    <div>
      <div className="p-5 my-4 bg-white">
        <div className="flex-col  sm:flex-row flex grid-4 items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Payments</h1>
            <small className="badge badge-success">House Holder</small>
            <select
              onChange={(e) => setLimit(Number(e.target.value))}
              className="select select-xs select-bordered"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
          <div className="flex items-center justify-between gap-2 mt-4 sm:mt-0  border p-3 rounded sm:w-72">
            <div className="flex items-center gap-2 w-full">
              <div className="icon">
                <BiSearchAlt2 />
              </div>
              <input
                type="text"
                onInput={(e) => setSearch(e.currentTarget.value)}
                className="form-control outline-none pl-4 w-full"
                placeholder="Search by TRANSACTION ID"
              />
            </div>
          </div>
        </div>
        <div className="export-btn my-5">
          <button
            className="flex items-center gap-2 font-poppins rounded-none btn btn-sm btn-info "
            onClick={() => exportPayments(paymentData)}
          >
            Export Payments <BiExport className="text-xl" />
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
                      <th>AMOUNT</th>
                      <th>Method</th>
                      <th>Transaction ID</th>
                      <th>status</th>

                      <th>permission</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data?.payments?.map((payment: any) => (
                      <PaymentRow key={payment?._id} payment={payment} />
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center">
                  <h1 className="text-2xl font-bold">No Payments Yet</h1>
                </div>
              )}
            </div>
          )}

          {limit < totalPages && (
            <div className="pagination flex items-center gap-3 justify-end mt-5">
              <button
                onClick={handlePrevious}
                className={`pagination__link w-7 h-7 grid place-items-center btn-ghost rounded-full cursor-pointer ${
                  currentPage === 1 &&
                  "pointer-events-none bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                <BiChevronLeft />
              </button>
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

              <span
                className={`pagination__link w-7 h-7 grid place-items-center btn-ghost rounded-full cursor-pointer ${
                  currentPage === totalPages &&
                  "pointer-events-none bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
                onClick={handleNext}
              >
                <BiChevronRight />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payments;

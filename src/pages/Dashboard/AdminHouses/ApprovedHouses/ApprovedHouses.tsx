import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useQuery } from "react-query";
import GlobalLoader from "../../../../components/GlobalLoader";
import NoDataComponent from "../../../../components/NoDataComponent";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import ApprovedRow from "./ApprovedRow";

type Props = {};

const ApprovedHouses = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});

  /*  for pagination  */
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(3);
  /* Get Approved House */
  const {
    data: approvedHouses,
    isLoading,
    refetch,
  } = useQuery("unapprovedHouses", () => getApprovedHouses());

  /* Get Approved Houses Function */
  const getApprovedHouses = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/v1/admin/houses/approved",
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return data;
  };

  /* pagination code */
  const totalItems = approvedHouses?.data?.count;
  const totalPages = Math.ceil(totalItems / limit);
  let paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(i);
  }

  useEffect(() => {
    setCurrentPage(currentPage);
    setLimit(limit);
    refetch();
  }, [limit, currentPage, refetch]);

  return (
    <div className="">
      <div className="approvedHouse p-3 sm:p-5 my-4 bg-white">
        <div className="title flex items-center justify-between bg-gray-50 p-3 rounded">
          <MobileView>
            <h3 className="text-2xl font-bold">Approved</h3>
          </MobileView>
          <BrowserView>
            <h3 className="text-2xl font-bold">Approved Houses</h3>
          </BrowserView>
          <div className="recent">
            <select
              name=""
              id=""
              className="cursor-pointer font-poppins outline-none p-1 rounded border border-base-300"
            >
              <option value="">Recent</option>
              <option value="">Oldest</option>
            </select>
          </div>
        </div>
        <div className="approved-houses-content py-6">
          <div className="overflow-x-auto">
            {isLoading ? (
              <GlobalLoader />
            ) : approvedHouses?.data?.houses?.length > 0 ? (
              <table className="table w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Image</th>
                    <th>Bedrooms & Bathrooms</th>
                    <th>House Type</th>
                    <th>User - Name/Email</th>
                    <th>Price</th>
                    <th>status</th>
                    <th>View</th>
                    <th>permission</th>
                  </tr>
                </thead>
                <tbody>
                  {approvedHouses?.data?.houses?.map(
                    (house: any, ind: number) => (
                      <ApprovedRow key={house?._id} ind={ind} house={house} />
                    )
                  )}
                </tbody>
              </table>
            ) : (
              <NoDataComponent />
            )}
          </div>
          {/* Pagination */}
          {limit < totalItems && (
            <div className="pagination flex items-center justify-end my-3">
              {paginationButtons?.map((page: number) => (
                <span
                  className={`btn btn-circle btn-ghost btn-sm ${
                    page === currentPage && "btn-active"
                  }`}
                  key={page}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApprovedHouses;

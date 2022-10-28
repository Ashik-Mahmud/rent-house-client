import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useQuery } from "react-query";
import { useAppDispatch } from "../../../../app/store";
import GlobalLoader from "../../../../components/GlobalLoader";
import NoDataComponent from "../../../../components/NoDataComponent";
import { base_backend_url } from "../../../../configs/config";
import { setRejectedHouseCount } from "../../../../features/HouseSlice";
import useAuth from "../../../../hooks/useAuth";
import useTitle from "../../../../hooks/useTitle";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import RejectedRow from "./RejectedRow";

type Props = {};

const RejectedHouses = (props: Props) => {
  useTitle("Rejected Houses");
  const { user } = useAuth<authUserInterface | any>({});
  /*  for pagination  */
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(3);
  const [filter, setFilter] = useState<string>("-createdAt");
  const dispatch = useAppDispatch();
  /* Get Approved House */
  const {
    data: rejectedHouses,
    isLoading,
    refetch,
  } = useQuery(["rejectedHouses", limit, filter, currentPage], () =>
    getApprovedHouses()
  );

  /* Get Approved Houses Function */
  const getApprovedHouses = async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/admin/houses/rejected?page=${currentPage}&limit=${limit}&filter=${filter}`,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
    return data;
  };

  /* pagination code */
  const totalItems = rejectedHouses?.data?.count;
  const totalPages = Math.ceil(totalItems / limit);
  let paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(i);
  }

  useEffect(() => {
    setCurrentPage(currentPage);
    setLimit(limit);
    setFilter(filter);
    refetch();
    dispatch(setRejectedHouseCount(totalItems));
  }, [limit, currentPage, refetch, filter, dispatch, totalItems]);

  return (
    <>
      {" "}
      <div>
        <div className="p-3 sm:p-5 my-5 bg-white">
          <div className="title flex items-center justify-between bg-gray-50 p-3 rounded">
            <MobileView>
              <h3 className="text-2xl font-bold">Rejected </h3>
            </MobileView>
            <BrowserView>
              <h3 className="text-2xl font-bold">Rejected Houses</h3>
            </BrowserView>
            <div className="recent">
              <select
                name=""
                id=""
                onChange={(e) => setFilter(e.target.value)}
                className="cursor-pointer font-poppins outline-none p-1 rounded border border-base-300"
              >
                <option value="-createdAt">Recent</option>
                <option value="createdAt">Oldest</option>
              </select>
            </div>
          </div>
          <div className="unapproved-houses-content my-5">
            <div className="overflow-x-auto">
              {isLoading ? (
                <GlobalLoader />
              ) : rejectedHouses?.data?.houses?.length > 0 ? (
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
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rejectedHouses?.data?.houses.map(
                      (house: any, ind: number) => (
                        <RejectedRow
                          refetch={refetch}
                          key={house?._id}
                          house={house}
                          ind={ind}
                        />
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
    </>
  );
};

export default RejectedHouses;

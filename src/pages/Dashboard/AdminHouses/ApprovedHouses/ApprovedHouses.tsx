import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { useQuery } from "react-query";
import { useAppDispatch } from "../../../../app/store";
import GlobalLoader from "../../../../components/GlobalLoader";
import NoDataComponent from "../../../../components/NoDataComponent";
import { base_backend_url } from "../../../../configs/config";
import { setApprovedHouseCount } from "../../../../features/HouseSlice";
import useAuth from "../../../../hooks/useAuth";
import useTitle from "../../../../hooks/useTitle";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import ApprovedRow from "./ApprovedRow";

type Props = {};

const ApprovedHouses = (props: Props) => {
  useTitle("Approved Houses");
  const { user } = useAuth<authUserInterface | any>({});

  /*  for pagination  */
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const [filter, setFilter] = useState<string>("-createdAt");
  const dispatch = useAppDispatch();
  /* Get Approved House */
  const {
    data: approvedHouses,
    isLoading,
    refetch,
  } = useQuery(["approvedHouses", limit, filter, currentPage], () =>
    getApprovedHouses()
  );

  /* Get Approved Houses Function */
  const getApprovedHouses = async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/admin/houses/approved?page=${currentPage}&limit=${limit}&filter=${filter}`,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
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
    setFilter(filter);
    refetch();
    dispatch(setApprovedHouseCount(totalItems));
  }, [limit, currentPage, refetch, filter, dispatch, totalItems]);

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
              onChange={(e) => setFilter(e.target.value)}
              className="cursor-pointer font-poppins outline-none p-1 rounded border border-base-300"
            >
              <option value="-createdAt">Recent</option>
              <option value="createdAt">Oldest</option>
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
                      <ApprovedRow
                        refetch={refetch}
                        key={house?._id}
                        ind={ind}
                        house={house}
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
  );
};

export default ApprovedHouses;

import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { AxiosRequest } from "../../../api/Axios";
import { useAppDispatch } from "../../../app/store";
import GlobalLoader from "../../../components/GlobalLoader";
import { setRequestHouseCount } from "../../../features/RequestSlice";
import HouseReqRow from "./HouseReqRow";
type Props = {};

const ForHouseHolderRequest = (props: Props) => {
  /* Pagination code */
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const dispatch = useAppDispatch();

  /* Try to fetch blog using UseQuery */
  const { data, refetch, isLoading } = useQuery("fetchBlog", async () => {
    const res = await AxiosRequest.get(
      `/all-request?page=${currentPage}&limit=${limit}&role=householder` // fetch if user has blog
    ); // fetch if user has blog
    return res?.data;
  });

  /* Pagination Func */
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data?.count / limit); i++) {
    pageNumbers.push(i);
  }

  /* Handling Error and Data */
  useEffect(() => {
    setCurrentPage(currentPage);
    setLimit(limit);
    dispatch(setRequestHouseCount(data?.count));
  }, [limit, currentPage, data, dispatch]);

  console.log(data);

  return (
    <>
      <div className="request-table mt-5 overflow-x-auto">
        {isLoading ? (
          <GlobalLoader />
        ) : data?.req.length > 0 ? (
          <table className="table table-compact table-striped w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Users</th>
                <th>Email</th>
                <th>Phone</th>

                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.req.map((req: any, ind: number) => (
                <HouseReqRow
                  key={req._id}
                  data={req}
                  ind={ind}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="py-6">
            <h1 className="text-center font-bold">No Request Yet.</h1>
          </div>
        )}
      </div>
      {/* Pagination */}
      <div className="pagination flex items-center justify-center mt-10 gap-2">
        <a href="/" className="btn btn-circle btn-ghost btn-sm">
          1
        </a>
        <a href="/" className="btn btn-circle btn-ghost btn-sm btn-active">
          2
        </a>
        <a href="/" className="btn btn-circle btn-ghost btn-sm">
          3
        </a>
      </div>
    </>
  );
};

export default ForHouseHolderRequest;

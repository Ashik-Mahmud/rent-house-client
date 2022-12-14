import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useAppDispatch } from "../../../app/store";
import GlobalLoader from "../../../components/GlobalLoader";
import NoDataComponent from "../../../components/NoDataComponent";
import { base_backend_url } from "../../../configs/config";
import {
  setPendingCount,
  setRequestBlogCount,
} from "../../../features/RequestSlice";
import useAuth from "../../../hooks/useAuth";
import useTitle from "../../../hooks/useTitle";
import { authUserInterface } from "../../../interfaces/UserInterface";
import { RequestFromUserRow } from "./RequestFromUsers";

type Props = {};

const ForBlogsRequest = (props: Props) => {
  useTitle("Request For Blogs");
  const { user } = useAuth<authUserInterface | any>({});
  /* Pagination code */
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const dispatch = useAppDispatch();

  /* Try to fetch blog using UseQuery */
  const { data, refetch, isLoading } = useQuery("fetchBlog", async () => {
    const res = await axios.get(
      `${base_backend_url}/api/v1/request/all-request?page=${currentPage}&limit=${limit}&role=blog`,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
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
    dispatch(setRequestBlogCount(data?.count));
    dispatch(setPendingCount(data?.unapprovedCount));
  }, [limit, currentPage, data, dispatch, refetch]);

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
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>role</th>
                <th>Is Verified</th>

                <th>Message</th>
                <th>Blog Link</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.req.map((req: any, ind: number) => (
                <RequestFromUserRow
                  key={req._id}
                  data={req}
                  ind={ind}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <NoDataComponent />
        )}
      </div>
      {/* Pagination */}
      {data?.count > limit ? (
        <div className="pagination flex items-center justify-center mt-10 gap-2">
          {pageNumbers.map((num: number, ind: number) => (
            <span
              key={num + ind}
              className={`btn btn-circle btn-ghost btn-sm cursor-pointer ${
                currentPage === num && "btn-active"
              }`}
              onClick={() => {
                setCurrentPage(num);
                refetch();
              }}
            >
              {num}
            </span>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default ForBlogsRequest;

import { useEffect, useState } from "react";
import GlobalLoader from "../../../components/GlobalLoader";
import { useGetAllBlogRequesterQuery } from "../../../services/RequestApi";
import { RequestFromUserRow } from "./RequestFromUsers";

type Props = {};

const ForBlogsRequest = (props: Props) => {
  /* Pagination code */
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const { data, isLoading, error } = useGetAllBlogRequesterQuery({
    page: currentPage,
    limit: limit,
  });

  useEffect(() => {
    setCurrentPage(1);
    setLimit(5);
  }, []);

  /* Handling Error and Data */
  useEffect(() => {
    if (error) console.error(error);
    if (!data?.count) console.info("Local Developer info", data);
  }, [data, error]);

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
                <RequestFromUserRow key={req._id} data={req} ind={ind} />
              ))}
            </tbody>
          </table>
        ) : (
          <h1 className="text-center font-bold">No data</h1>
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

export default ForBlogsRequest;

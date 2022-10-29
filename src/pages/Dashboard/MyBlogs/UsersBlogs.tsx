import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GlobalLoader from "../../../components/GlobalLoader";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import { useGetBlogsByUidQuery } from "../../../services/BlogApi";
import BlogRow from "./BlogRow";
type Props = {};

const UsersBlogs = (props: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});

  /* Pagination State */
  const [limit, setLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  /* Search State */
  const [searchKey, setSearchKey] = useState<string>("");

  const { data, isLoading, refetch } = useGetBlogsByUidQuery({
    uid: updatedUser?._id,
    page: currentPage,
    limit,
    q: searchKey,
  });

  /* Pagination Calc */
  const totalPages = Math.ceil(data?.data?.count / limit);
  let pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  /* Handle Page Change */
  const handlePageChange = (page: number) => {
    setCurrentPage(page as number);
  };

  /* Handle Input Change */
  const handleInputChange = async (e: any) => {
    const { value } = e.target;
    setSearchKey(value);
  };

  window.addEventListener("keyup", (e: any) => {
    if (e.key === "Enter") setCurrentPage(1);
  });

  useEffect(() => {
    setSearchKey(searchKey);
    setCurrentPage(currentPage);
    refetch();
  }, [currentPage, refetch, searchKey]);

  return (
    <div>
      <div className="p-3 sm:p-5 my-5 bg-white">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <h1 className="text-3xl font-bold">My Blogs</h1>
            <div>
              <span className="badge badge-ghost">
                Limit per page{" "}
                <select
                  name="limit"
                  id=""
                  className="btn btn-circle btn-ghost"
                  onChange={(e) => setLimit(Number(e.target.value))}
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </span>
            </div>
          </div>
          <div className="search w-full sm:w-72">
            <input
              type="search"
              placeholder="Search by Name or Category"
              className="input input-bordered w-full"
              onInput={handleInputChange}
            />
          </div>
        </div>
        {/* Blogs Table */}
        <div className="overflow-x-auto my-5 font-bangla">
          {isLoading ? (
            <GlobalLoader />
          ) : data?.data?.blogs.length > 0 ? (
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Views</th>
                  <th>Likes</th>
                  <th>status</th>
                  <th>Open</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.blogs?.map((blog: any, ind: number) => (
                  <BlogRow blog={blog} ind={ind} key={blog?._id} />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-5">
              <h2 className="text-2xl font-bold">No Blogs</h2>
              <Link
                to="/dashboard/blogs/add"
                className="btn btn-sm btn-ghost mt-5"
              >
                Add New
              </Link>
            </div>
          )}
        </div>
      </div>
      {data?.data?.count > limit && (
        <div className="pagination flex items-center justify-center gap-2">
          {pageNumbers?.map((page) => (
            <span
              key={page}
              onClick={() => handlePageChange(page)}
              className={`btn btn-circle btn-ghost btn-sm cursor-pointer ${
                page === currentPage && "btn-active"
              }`}
            >
              {page}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersBlogs;

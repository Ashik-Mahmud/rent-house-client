import axios from "axios";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useQuery } from "react-query";
import { base_backend_url } from "../../../configs/config";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import UserRow from "./UserRow";
type Props = {};

const Users = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  const [filterRole, setFilterRole] = useState<string>("All");
  const [limitPerPage, setLimitPerPage] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, refetch, isLoading, error } = useQuery(
    ["users", currentPage, limitPerPage, filterRole],
    () => getAllUserForAdmin()
  );

  const getAllUserForAdmin = async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/users/admin?page=${currentPage}&limit=${limitPerPage}&role=${filterRole}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return data;
  };

  if (error) {
    console.log(error);
  }

  /* Page Count */
  const itemsPerPage = 2;
  const totalItems: number = isLoading ? 0 : data?.count || 0;
  const totalPage: number = Math.ceil(totalItems / itemsPerPage);
  let page = 1;

  /* Pagination functions */
  const nextPage = () => {
    page = page + 1;
    if (page > totalPage) page = totalPage;
    setCurrentPage(page);
    refetch();
  };

  const prevPage = () => {
    page = page - 1;
    if (page < 1) page = 1;
    setCurrentPage(page);
    refetch();
  };

  return (
    <div>
      <div className="users-area p-5 my-4 bg-white">
        <div className="title flex-col items-start sm:items-center sm:flex-row flex  justify-between gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Users Management</h1>
            <small className="badge badge-success">Admin</small>
            <div className="flex items-center gap-2 font-poppins badge badge-ghost">
              Limit Per Page
              <select
                name=""
                id=""
                className="btn btn-ghost btn-circle outline-none"
                onChange={(e) => setLimitPerPage(Number(e.target.value))}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="active-user">
              <span className="bg-green-500 w-3 h-3 rounded-full inline-block mr-2"></span>
              <span>Active</span>
            </div>
            <select
              name=""
              className="select select-bordered select-sm"
              id=""
              onChange={(e) => setFilterRole(e.target.value)}
            >
              <option value="All">All</option>
              <option value="customer">Customers</option>
              <option value="user">Houses Holder</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>
        <div className="users-table mt-5 overflow-x-auto">
          {isLoading ? (
            <div className="w-full flex items-center justify-center">
              Loading ...
            </div>
          ) : data?.count === 0 || undefined ? (
            <div className="w-full flex items-center justify-center">
              No Users Found!
            </div>
          ) : (
            <table className="table w-full table-compact">
              <thead>
                <tr>
                  <th className="text-left">Name</th>
                  <th className="text-left">Email</th>
                  <th className="text-left">Phone</th>
                  <th className="text-left">Address</th>
                  <th className="text-left">Social Handle</th>
                  <th className="text-left w-36">Role</th>
                  <th className="text-left  w-36">Status</th>
                  <th className="text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {error && (
                  <tr>
                    <td colSpan={8}>Something Went Wrong!</td>
                  </tr>
                )}
                {data?.data?.map((d: any, i: number) => (
                  <UserRow data={d} ind={i} key={d?._id} refetch={refetch} />
                ))}
              </tbody>
            </table>
          )}

          {!isLoading && data?.count !== 0 && limitPerPage < data?.count && (
            <div className="pagination mt-5 flex items-center gap-6">
              <div className="pagination-previous">
                <button
                  className={`btn btn-ghost ${
                    currentPage === 1
                      ? "pointer-events-none"
                      : "pointer-events-auto"
                  }`}
                  onClick={prevPage}
                >
                  <span className="w-5 h-5 flex items-center justify-center">
                    <BsChevronLeft />
                  </span>
                </button>
              </div>
              <div className="pagination-next">
                <button
                  className={`btn btn-ghost ${
                    currentPage === totalPage
                      ? "pointer-events-none"
                      : "pointer-events-auto"
                  }`}
                  onClick={nextPage}
                >
                  <span className="w-5 h-5 flex items-center justify-center">
                    <BsChevronRight />
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;

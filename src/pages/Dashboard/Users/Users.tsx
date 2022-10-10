import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useGetAllUsersForAdminQuery } from "../../../services/AuthApi";
import UserRow from "./UserRow";
type Props = {};

const Users = (props: Props) => {
  const { data, isLoading, error } = useGetAllUsersForAdminQuery();

  if (error) {
    console.log(error);
  }

  console.log(data, isLoading);

  return (
    <div>
      <div className="users-area p-5 my-4 bg-white">
        <div className="title flex-col items-start sm:items-center sm:flex-row flex  justify-between gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Users Management</h1>
            <small className="badge badge-success">Admin</small>
          </div>
          <div className="flex items-center gap-3">
            <div className="active-user">
              <span className="bg-green-500 w-3 h-3 rounded-full inline-block mr-2"></span>
              <span>Active</span>
            </div>
            <select name="" className="select select-bordered select-sm" id="">
              <option value="">Customers</option>
              <option value="">Houses Holder</option>
              <option value="">Admin</option>
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
                <UserRow />
                <UserRow />
                <UserRow />
              </tbody>
            </table>
          )}

          {!isLoading && data?.count !== 0 && (
            <div className="pagination mt-5 flex items-center gap-6">
              <div className="pagination-previous">
                <button className="btn btn-ghost">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <BsChevronLeft />
                  </span>
                </button>
              </div>
              <div className="pagination-next">
                <button className="btn btn-ghost">
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

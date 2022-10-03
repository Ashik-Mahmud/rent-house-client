import { BsChevronLeft, BsChevronRight, BsPen, BsTrash } from "react-icons/bs";

type Props = {};

const Users = (props: Props) => {
  return (
    <div>
      <div className="users-area p-5 my-4 bg-white">
        <div className="title flex items-center justify-between ">
          <h2 className="text-2xl font-bold">Total Users</h2>
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
        <div className="users-table mt-5">
          <table className="table w-full table-compact">
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Email</th>
                <th className="text-left">Phone</th>
                <th className="text-left">Role</th>
                <th className="text-left">Status</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left">John Doe</td>
                <td className="text-left">
                  <span className="text-gray-500">jhon@doe.com</span>
                </td>
                <td className="text-left">
                  <span className="text-gray-500">01700000000</span>
                </td>
                <td className="text-left">
                  <span className="text-gray-500">Customer</span>
                </td>
                <td className="text-left">
                  <span className="text-green-500">Active</span>
                </td>
                <td className="text-left">
                  <div className="flex items-center gap-3">
                    <button className="">
                      <span className="w-5 h-5 flex items-center justify-center">
                        <BsPen />
                      </span>
                    </button>
                    <button className="">
                      <span className="w-5 h-5 flex items-center justify-center">
                        <BsTrash />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
        </div>
      </div>
    </div>
  );
};

export default Users;

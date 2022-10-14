import { Link, Outlet, useLocation } from "react-router-dom";

type Props = {};

const AdminHouses = (props: Props) => {
  const { pathname } = useLocation();
  return (
    <div>
      <div className="p-5 my-5 bg-white">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Houses</h1>
          <small className="badge badge-success">admin</small>
        </div>
        <div className="py-5 ">
          <div className="toggle-houses flex-col sm:flex-row items-stretch flex sm:items-center justify-center rounded overflow-hidden">
            <Link
              to="/dashboard/admin/houses/unapproved"
              className={`p-4 text-lg font-poppins rounded-none ${
                pathname.includes("unapproved") ||
                pathname === "/dashboard/admin/houses"
                  ? "bg-success"
                  : "bg-gray-50"
              } border-r`}
            >
              Unapproved Houses <div className="badge badge-ghost">5</div>
            </Link>
            <Link
              to="/dashboard/admin/houses/approved"
              className={`p-4 text-lg font-poppins rounded-none ${
                pathname.includes("houses/approved")
                  ? "bg-success"
                  : "bg-gray-50"
              } border-r`}
            >
              Approved Houses <div className="badge badge-ghost">10</div>
            </Link>
            <Link
              to="/dashboard/admin/houses/rejected"
              className={`p-4 text-lg font-poppins rounded-none ${
                pathname.includes("rejected") ? "bg-success" : "bg-gray-50"
              }  border-r`}
            >
              Reject Houses <div className="badge badge-ghost">2</div>
            </Link>
          </div>
          <div className="houses-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHouses;

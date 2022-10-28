import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/store";
import useTitle from "../../../hooks/useTitle";

type Props = {};

const AdminHouses = (props: Props) => {
  useTitle("Admin Houses");
  const { pathname } = useLocation();
  const { approvedHouseCount, rejectedHouseCount, unapprovedHouseCount } =
    useAppSelector((state) => state.housesReqCount);

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
              Unapproved Houses{" "}
              <div className="badge badge-ghost">{unapprovedHouseCount}</div>
            </Link>
            <Link
              to="/dashboard/admin/houses/approved"
              className={`p-4 text-lg font-poppins rounded-none ${
                pathname.includes("houses/approved")
                  ? "bg-success"
                  : "bg-gray-50"
              } border-r`}
            >
              Approved Houses{" "}
              <div className="badge badge-ghost">{approvedHouseCount}</div>
            </Link>
            <Link
              to="/dashboard/admin/houses/rejected"
              className={`p-4 text-lg font-poppins rounded-none ${
                pathname.includes("rejected") ? "bg-success" : "bg-gray-50"
              }  border-r`}
            >
              Reject Houses{" "}
              <div className="badge badge-ghost">{rejectedHouseCount}</div>
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

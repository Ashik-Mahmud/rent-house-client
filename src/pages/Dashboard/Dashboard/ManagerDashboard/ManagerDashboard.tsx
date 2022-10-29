import axios from "axios";
import { BiUserCheck } from "react-icons/bi";
import { BsBook, BsHouse, BsHouseDoor, BsHouseDoorFill } from "react-icons/bs";
import { useQuery } from "react-query";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import useTitle from "../../../../hooks/useTitle";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import DashboardSkeletonLoader from "../DashboardSkeletonLoader";
import BarCharts from "./BarCharts";
import RecentHouseRequest from "./RecentHouseRequest";
type Props = {};
const ManagerDashboard = (props: Props) => {
  useTitle("Manager Dashboard");
  const { user } = useAuth<authUserInterface | any>({});
  /* Get All the houses count for admin */
  const { data: houses, isLoading: houseLoading } = useQuery(
    "houses",
    async () => {
      const { data } = await axios.get(
        `${base_backend_url}/api/v1/admin/get-houses-count`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      return data;
    }
  );

  if (houseLoading) {
    return <DashboardSkeletonLoader />;
  }

  return (
    <div className="py-5">
      {" "}
      {/* Dashboard Statistic */}
      <div className="stats gap-4 shadow flex justify-between">
        <div className="stat ">
          <div className="stat-figure text-secondary">
            <BsHouse className="text-3xl text-success" />
          </div>
          <div className="stat-title">Approved Houses</div>
          <div className="stat-value text-success">{houses?.approved}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div className="stat ">
          <div className="stat-figure text-secondary">
            <BsHouseDoorFill className="text-3xl text-info" />
          </div>
          <div className="stat-title">Unapproved Houses</div>
          <div className="stat-value text-info">{houses?.unapproved}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <BsHouseDoor className="text-3xl text-error" />
          </div>
          <div className="stat-title">Total Rejected Houses</div>
          <div className="stat-value text-error">{houses?.rejected}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-primary">
            <BsBook className="text-3xl text-primary" />
          </div>
          <div className="stat-title">Total Blogs</div>
          <div className="stat-value text-primary">{houses?.blogs}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <BiUserCheck className="text-3xl text-primary" />
          </div>
          <div className="stat-title">Total Register Users</div>
          <div className="stat-value">{houses?.users}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      {/* End */}
      {/* Recent Bookings */}
      <div className="my-5">
        <RecentHouseRequest />
      </div>
      {/* End */}
      <div className="charts gap-6 shadow my-5 grid grid-cols-1 md:grid-cols-1 ">
        <BarCharts houses={houses} />
      </div>
    </div>
  );
};

export default ManagerDashboard;

import { BiUserCheck } from "react-icons/bi";
import { BsBook, BsHouse, BsHouseDoor, BsHouseDoorFill } from "react-icons/bs";
import { useAppSelector } from "../../../../app/store";
import BarCharts from "./BarCharts";
import RecentHouseRequest from "./RecentHouseRequest";
type Props = {};
const ManagerDashboard = (props: Props) => {
  const { approvedHouseCount, rejectedHouseCount, pendingHouseCount } =
    useAppSelector((state) => state.housesReqCount);
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
          <div className="stat-value text-success">{approvedHouseCount}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div className="stat ">
          <div className="stat-figure text-secondary">
            <BsHouseDoorFill className="text-3xl text-info" />
          </div>
          <div className="stat-title">Unapproved Houses</div>
          <div className="stat-value text-info">{pendingHouseCount}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <BsHouseDoor className="text-3xl text-error" />
          </div>
          <div className="stat-title">Total Rejected Houses</div>
          <div className="stat-value text-error">{rejectedHouseCount}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-primary">
            <BsBook className="text-3xl text-primary" />
          </div>
          <div className="stat-title">Total Blogs</div>
          <div className="stat-value text-primary">{10}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <BiUserCheck className="text-3xl text-primary" />
          </div>
          <div className="stat-title">Total Blogs Likes</div>
          <div className="stat-value">{155}</div>
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
        <BarCharts />
      </div>
    </div>
  );
};

export default ManagerDashboard;

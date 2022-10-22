import axios from "axios";
import { BiUserCheck } from "react-icons/bi";
import { BsBook, BsHouse, BsHouseDoor, BsHouseDoorFill } from "react-icons/bs";
import { useQuery } from "react-query";
import { useAppSelector } from "../../../../app/store";
import GlobalLoader from "../../../../components/GlobalLoader";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import { useGetAllBlogsQuery } from "../../../../services/BlogApi";
import BarCharts from "./BarCharts";
import RecentHouseRequest from "./RecentHouseRequest";
import UsersCharts from "./UsersCharts";

type Props = {};

const AdminDashboard = (props: Props) => {
  const { approvedHouseCount, rejectedHouseCount, pendingHouseCount } =
    useAppSelector((state) => state.housesReqCount);
  const { data: blogs, isLoading: loading2 } = useGetAllBlogsQuery({} as any);

  const { user, updatedUser } = useAuth<authUserInterface | any>({});
  const { data, isLoading } = useQuery(["users"], () => getAllUserForAdmin());
  const getAllUserForAdmin = async () => {
    if (updatedUser?.role === "admin") {
      const { data } = await axios.get(
        `${base_backend_url}/api/v1/users/admin`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      return data;
    }
  };

  if (loading2 || isLoading) return <GlobalLoader />;

  return (
    <div className="my-5">
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
          <div className="stat-value text-primary">{blogs?.count}</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <BiUserCheck className="text-3xl text-primary" />
          </div>
          <div className="stat-title">Total Register Users</div>
          <div className="stat-value">{data?.count}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      {/* End */}

      {/* Recent Bookings */}
      <div className="my-5">
        <RecentHouseRequest />
      </div>
      {/* End */}
      {/* Charts Area */}

      <div className="charts gap-6 shadow my-5 grid grid-cols-1 md:grid-cols-2 ">
        <UsersCharts />
        <BarCharts />
      </div>
    </div>
  );
};

export default AdminDashboard;

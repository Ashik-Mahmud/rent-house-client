import axios from "axios";
import { useQuery } from "react-query";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import RecentBookedHouses from "./RecentBookedHouses";
import StatisticChart from "./StatisticChart";

type Props = {};

const CustomerDashboard = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  /* Send Request to get All the reports for this Customer */
  const { data, isLoading, error } = useQuery(
    ["GET_CUSTOMER_REPORTS"],
    async () => {
      const { data } = await axios.get(
        `${base_backend_url}/api/v1/payment/get-all-reports`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      return data;
    }
  );

  console.log(data);

  return (
    <div className="my-5">
      {/* Dashboard Statistic */}
      <div className="stats gap-4 shadow flex justify-between">
        <div className="stat ">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Booked House</div>
          <div className="stat-value">31</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Total Reviews</div>
          <div className="stat-value">40</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Blogs</div>
          <div className="stat-value text-primary">5</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Blog Total Likes</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      {/* End */}

      {/* Recent Bookings */}
      <div className="my-5">
        <RecentBookedHouses />
      </div>
      {/* End */}
      {/* Charts Area */}

      <div className="charts gap-6 shadow my-5 grid grid-cols-1 h-60">
        <StatisticChart />
      </div>
    </div>
  );
};

export default CustomerDashboard;

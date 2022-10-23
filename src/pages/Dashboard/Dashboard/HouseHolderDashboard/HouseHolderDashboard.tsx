import axios from "axios";
import { BiBookAlt, BiCommentAdd } from "react-icons/bi";
import { BsCoin, BsHouse } from "react-icons/bs";
import { useQuery } from "react-query";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import HouseReportChart from "./HouseReportChart";
import MostLovesHouse from "./MostLovesHouse";
import RecentBookings from "./RecentBookings";
type Props = {};

const HouseHolderDashboard = (props: Props) => {
  const { updatedUser, user } = useAuth<authUserInterface | any>({});

  /* Get All the Houses Activities  */
  const { data, isLoading, refetch } = useQuery(["houses"], () =>
    getMyHouses()
  );
  const getMyHouses = async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/houses/get-house-by-user/${updatedUser?._id}`,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
    return data;
  };
  const approvedHousesCount = data?.data.filter(
    (house: any) => house.status === "approved"
  ).length;

  const pendingHousesCount = data?.data.filter(
    (house: any) => house.status === "pending"
  ).length;

  const rejectedHousesCount = data?.data.filter(
    (house: any) => house.status === "rejected"
  ).length;

  return (
    <div className="my-5">
      {/* Dashboard Statistic */}
      <div className="stats gap-4 shadow flex justify-between">
        <div className="stat ">
          <div className="stat-figure text-success">
            <BsHouse className="text-2xl" />
          </div>
          <div className="stat-title">Approved Houses</div>
          <div className="stat-value text-success">{approvedHousesCount}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div className="stat ">
          <div className="stat-figure text-info">
            <BsHouse className="text-2xl" />
          </div>
          <div className="stat-title">Unapproved Houses</div>
          <div className="stat-value text-info">{pendingHousesCount}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div className="stat ">
          <div className="stat-figure text-error">
            <BsHouse className="text-2xl" />
          </div>
          <div className="stat-title">Rejected Houses</div>
          <div className="stat-value text-error">{rejectedHousesCount}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <BiCommentAdd className="text-2xl" />
          </div>
          <div className="stat-title">Your Reviews</div>
          <div className="stat-value">4</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>{" "}
        <div className="stat">
          <div className="stat-figure text-primary">
            <BsCoin className="text-2xl" />
          </div>
          <div className="stat-title">Payments/Bookings</div>
          <div className="stat-value text-primary">20</div>
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
          <div className="stat-title">Total Reports</div>
          <div className="stat-value">10</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>{" "}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <BiBookAlt className="text-2xl" />
          </div>
          <div className="stat-title">My Blogs</div>
          <div className="stat-value">4</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
      </div>
      {/* End */}

      {/* Recent Bookings */}
      <div className="my-5">
        <RecentBookings />
      </div>
      {/* End */}
      {/* Charts Area */}

      <div className="charts gap-6 shadow my-5 grid grid-cols-1 md:grid-cols-2 ">
        <HouseReportChart />
        <MostLovesHouse />
      </div>
    </div>
  );
};

export default HouseHolderDashboard;

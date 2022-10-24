import axios from "axios";
import Chart from "react-apexcharts";
import { useQuery } from "react-query";
import GlobalLoader from "../../../../components/GlobalLoader";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
type Props = {};
const HouseReportChart = (props: Props) => {
  /* Send Request to get Notification */
  const { user } = useAuth<authUserInterface | any>({});
  const { data: notifications, isLoading: loading } = useQuery(
    "notification",
    () => getAllNotification()
  );

  const getAllNotification = async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/request/notifications`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return data?.data;
  };

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    labels: ["Questions", "Reviews", "Reports", "Bookings"],
  };
  /* const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]; */

  const series = [5, 4, 5, 6];

  if (loading) return <GlobalLoader />;

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold p-5">Houses insights</h2>
      <Chart options={options} series={series} type="donut" width={"80%"} />
    </div>
  );
};

export default HouseReportChart;

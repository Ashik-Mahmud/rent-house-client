import Chart from "react-apexcharts";
import GlobalLoader from "../../../../components/GlobalLoader";
type Props = { reports: any; loading: boolean };
const HouseReportChart = ({ reports, loading }: Props) => {
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

  const series = [reports?.questions, reports?.reviews, reports?.reports, 6];
  if (loading) return <GlobalLoader />;

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold p-5">Houses insights</h2>
      <Chart options={options} series={series} type="donut" width={"80%"} />
    </div>
  );
};

export default HouseReportChart;

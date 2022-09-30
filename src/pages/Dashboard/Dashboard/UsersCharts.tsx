import Chart from "react-apexcharts";
type Props = {};
const UsersCharts = (props: Props) => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    labels: ["Users", "Customers", "Admin"],
  };
  /* const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]; */

  const series = [44, 55, 41];

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold p-5">Register Users Variations</h2>
      <Chart options={options} series={series} type="donut" width={"80%"} />
    </div>
  );
};

export default UsersCharts;

import Chart from "react-apexcharts";
type Props = {};

const BarCharts = (props: Props) => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Total Bookings",
        "Total Reviews",
        "Total Likes",
        "Total Reports",
        "Total Houses",
      ],
    },
  };
  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49],
    },
  ];

  return (
    <div className="p-7 bg-white">
      <h3 className="text-lg font-bold">Details for Maximum Subject</h3>
      <Chart options={options} series={series} type="bar" width="100%" />
    </div>
  );
};

export default BarCharts;

import Chart from "react-apexcharts";
type Props = {
  data: any;
};
const StatisticChart = ({ data }: Props) => {
  const series = [
    {
      name: "series-1",
      data: [data?.blogs, data?.house, data?.reviews, data?.likes],
    },
  ];
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Total Blogs",
        "Booked Houses",
        "My Total Reviews",
        "Blog Likes",
      ],
    },
  };

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold p-5">Activities insights</h2>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="400"
      />
    </div>
  );
};

export default StatisticChart;

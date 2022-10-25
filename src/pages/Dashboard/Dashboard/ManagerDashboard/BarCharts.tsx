import Chart from "react-apexcharts";
import GlobalLoader from "../../../../components/GlobalLoader";
import { useGetAllReviewsQuery } from "../../../../services/ReviewApi";
type Props = {
  houses: any;
  blogs: any;
};

const BarCharts = ({ houses, blogs }: Props) => {
  const { data: reviews, isLoading: loading1 } = useGetAllReviewsQuery(
    {} as any
  );

  if (loading1) return <GlobalLoader />;

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [
        "Unapproved Houses",
        "Approved Houses",
        "Rejected Houses",
        "Reviews",
        "Blogs",
      ],
    },
  };
  const series = [
    {
      name: "series-1",
      data: [
        houses?.unapproved,
        houses?.approved,
        houses?.rejected,
        reviews?.data?.length,
        blogs,
      ],
    },
  ];

  return (
    <div className="p-7 bg-white">
      <h3 className="text-lg font-bold">Details for Maximum Subject</h3>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height={"400"}
      />
    </div>
  );
};

export default BarCharts;

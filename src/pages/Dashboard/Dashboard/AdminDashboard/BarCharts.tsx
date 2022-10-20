import Chart from "react-apexcharts";
import { useAppSelector } from "../../../../app/store";
import GlobalLoader from "../../../../components/GlobalLoader";
import { useGetAllBlogsQuery } from "../../../../services/BlogApi";
import { useGetAllReviewsQuery } from "../../../../services/ReviewApi";
type Props = {};

const BarCharts = (props: Props) => {
  const { approvedHouseCount, pendingHouseCount, rejectedHouseCount } =
    useAppSelector((state) => state.housesReqCount);

  const { data: reviews, isLoading: loading1 } = useGetAllReviewsQuery(
    {} as any
  );
  const { data: blogs, isLoading: loading2 } = useGetAllBlogsQuery({} as any);

  if (loading1 || loading2) return <GlobalLoader />;

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
        pendingHouseCount,
        approvedHouseCount,
        rejectedHouseCount,
        reviews?.data?.length,
        blogs?.count,
      ],
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

import Chart from "react-apexcharts";
import { useAppSelector } from "../../../../app/store";
import { useGetAllReviewsQuery } from "../../../../services/ReviewApi";
type Props = {};

const BarCharts = (props: Props) => {
  const { approvedHouseCount, pendingHouseCount, rejectedHouseCount } =
    useAppSelector((state) => state.housesReqCount);

  const { data: reviews } = useGetAllReviewsQuery({} as any);

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
        49,
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

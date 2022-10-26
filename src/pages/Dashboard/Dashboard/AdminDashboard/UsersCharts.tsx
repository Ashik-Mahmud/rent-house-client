import axios from "axios";
import Chart from "react-apexcharts";
import { useQuery } from "react-query";
import GlobalLoader from "../../../../components/GlobalLoader";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
type Props = {};
const UsersCharts = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});

  const { data, isLoading } = useQuery(["users"], () => getAllUserForAdmin());
  const getAllUserForAdmin = async () => {
    const { data } = await axios.get(`${base_backend_url}/api/v1/users/admin`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    return data;
  };

  if (isLoading) return <GlobalLoader />;

  const users = data?.data?.filter((user: any) => user.role === "user");
  const customers = data?.data?.filter((user: any) => user.role === "customer");
  const admins = data?.data?.filter((user: any) => user.role === "admin");
  const managers = data?.data?.filter((user: any) => user.role === "manager");
  const usersCount = users?.length;
  const customersCount = customers?.length;
  const adminsCount = admins?.length;
  const managersCount = managers?.length;
  const series = [usersCount, customersCount, adminsCount, managersCount];
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    labels: ["House Holder", "Customer", "Admin", "Manager"],
  };
  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold p-5">Register Users Variations</h2>
      {isLoading ? (
        <GlobalLoader />
      ) : (
        <Chart options={options} series={series} type="donut" width={"80%"} />
      )}
    </div>
  );
};

export default UsersCharts;

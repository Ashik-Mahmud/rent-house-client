import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import GlobalLoader from "../../../../components/GlobalLoader";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import PaymentRow from "../../Payments/PaymentRow";

type Props = {};

const RecentBookings = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  /* Get Already Booked Statement */
  const { data, isLoading } = useQuery(["bookings"], async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/payment/holder/payment-statement`,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
    return data;
  });

  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <div className="p-5 bg-white rounded shadow font-poppins">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">Recent Bookings</h3>
        <Link to="/dashboard/payments" className="text-primary">
          View All
        </Link>
      </div>
      <div className="my-5 overflow-x-auto">
        {data?.data?.payments?.length > 0 ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>CUSTOMER</th>
                <th>INFO</th>
                <th>HOUSES</th>
                <th>Bed/Bath rooms</th>
                <th>Price</th>
                <th>Transaction ID</th>
                <th>status</th>

                <th>permission</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.payments?.slice(0, 2).map((payment: any) => (
                <PaymentRow key={payment?._id} payment={payment} />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center">
            <h3 className="text-lg font-bold">No Booking Found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentBookings;

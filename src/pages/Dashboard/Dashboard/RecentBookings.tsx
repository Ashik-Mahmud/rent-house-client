type Props = {};

const RecentBookings = (props: Props) => {
  return (
    <div className="p-5 bg-white rounded shadow">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">Recent Bookings</h3>
        <a href="/" className="text-primary">
          View All
        </a>
      </div>
      <div className="my-5 overflow-x-auto">
        <table className="w-full table">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 text-left">Booking ID</th>
              <th className="py-3 text-left">Customer</th>
              <th className="py-3 text-left">Date</th>
              <th className="py-3 text-left">Status</th>
              <th className="py-3 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3">B-1234</td>
              <td className="py-3">John Doe</td>
              <td className="py-3">12/12/2020</td>
              <td className="py-3">Pending</td>
              <td className="py-3">$1,200</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3">B-1234</td>
              <td className="py-3">John Doe</td>
              <td className="py-3">12/12/2020</td>
              <td className="py-3">Pending</td>
              <td className="py-3">$1,200</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3">B-1234</td>
              <td className="py-3">John Doe</td>
              <td className="py-3">12/12/2020</td>
              <td className="py-3">Pending</td>
              <td className="py-3">$1,200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBookings;

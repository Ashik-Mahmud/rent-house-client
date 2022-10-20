import { BiBath, BiBed, BiMoney, BiTrophy } from "react-icons/bi";
import { Link } from "react-router-dom";
type Props = {};
const RecentBookedHouses = (props: Props) => {
  return (
    <div className="p-5 bg-white rounded shadow">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">Recent Booked House</h3>
        <Link to="/dashboard/admin/houses" className="text-primary">
          View All
        </Link>
      </div>
      <div className="my-0 overflow-x-auto grid grid-cols-3 p-5 gap-5">
        <RecentBookedHouseRow />
        <RecentBookedHouseRow />
        <RecentBookedHouseRow />
      </div>
    </div>
  );
};

export default RecentBookedHouses;

const RecentBookedHouseRow = () => {
  return (
    <div className="card card-side  bg-base-100 shadow border px-3 rounded">
      <figure className="w-2/6">
        <img
          src="https://placeimg.com/400/225/arch"
          className="h-40 w-full object-cover rounded"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-0 px-6 py-4 w-2/3">
        <h2 className="card-title">Raj Vila!</h2>
        <small>Gaibandha/Dhaka</small>
        <ul className="flex items-center flex-wrap gap-3 font-poppins text-sm">
          <li className="flex items-center gap-2">
            <BiBed /> 3
          </li>
          <li className="flex items-center gap-2">
            <BiBath /> 2
          </li>
          <li className="flex items-center gap-2">
            <BiTrophy /> Family
          </li>
          <li className="flex items-center gap-2">
            <BiMoney /> 154554
          </li>
        </ul>
        <p className="text-xs font-poppins my-1">
          Lorem ipsum dolor sit amet consectetur adip magnam?
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-xs">View Details</button>
        </div>
      </div>
    </div>
  );
};

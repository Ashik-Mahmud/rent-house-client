import { BiBath, BiBed, BiMoney, BiTrophy } from "react-icons/bi";
import { Link } from "react-router-dom";
type Props = {
  data: any;
};
const RecentBookedHouses = ({ data }: Props) => {
  return (
    <div className="p-5 bg-white rounded shadow">
      <div className="flex justify-between">
        <h3 className="text-lg font-bold">Recent Booked House</h3>
        <Link to="/dashboard/purchase/bookings" className="text-primary">
          View All
        </Link>
      </div>
      {data?.bookedHouse?.length > 0 ? (
        <div className="my-0 overflow-x-auto grid grid-cols-3 p-5 gap-5">
          {data?.bookedHouse?.map((house: any) => (
            <RecentBookedHouseRow key={house?._id} house={house} />
          ))}
        </div>
      ) : (
        <div className="text-center text-danger py-10 text-xl">
          No House Booked Yet
        </div>
      )}
    </div>
  );
};

export default RecentBookedHouses;

const RecentBookedHouseRow = ({ house }: any) => {
  return (
    <div className="card card-side  bg-base-100 shadow border px-3 rounded">
      <figure className="w-2/6">
        <img
          src={
            house?.house?.image?.img
              ? house?.house?.image?.img
              : "https://placeimg.com/400/225/arch"
          }
          className="h-40 w-full object-cover rounded"
          alt={house?.house?.name}
        />
      </figure>
      <div className="card-body p-0 px-6 py-4 w-2/3">
        <h2 className="card-title">{house?.house?.name}</h2>
        <small>{house?.house?.address}</small>
        <ul className="flex items-center flex-wrap gap-3 font-poppins text-sm">
          <li className="flex items-center gap-2">
            <BiBed /> {house?.house?.bedrooms}
          </li>
          <li className="flex items-center gap-2">
            <BiBath /> {house?.house?.bathrooms}
          </li>
          <li className="flex items-center gap-2">
            <BiTrophy /> {house?.house?.houseType}
          </li>
          <li className="flex items-center gap-2">
            <BiMoney /> {house?.money}
          </li>
        </ul>
        <p className="text-xs font-poppins my-1">
          {house?.house?.description?.slice(0, 70)}...
        </p>
        <div className="card-actions justify-end">
          <Link
            to={`/house/${house?.house?._id}`}
            className="btn btn-primary btn-xs"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

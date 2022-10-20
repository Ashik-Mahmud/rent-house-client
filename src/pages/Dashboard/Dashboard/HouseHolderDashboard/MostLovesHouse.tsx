import { BiBath, BiBed, BiMoney, BiTrophy } from "react-icons/bi";

type Props = {};

const MostLovesHouse = (props: Props) => {
  return (
    <div className="p-7 bg-white">
      <h3 className="text-lg font-bold">Most Loves Houses</h3>
      <div className="content grid grid-cols-1 sm:grid-cols-2 gap-5 py-5">
        <LovesHouseCard />
        <LovesHouseCard />
      </div>
    </div>
  );
};

const LovesHouseCard = () => {
  return (
    <div className="card   bg-base-100 shadow border p-3 rounded">
      <figure>
        <img
          src="https://placeimg.com/400/225/arch"
          className="h-40 w-full object-cover rounded"
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-0 px-6 py-4">
        <h2 className="card-title">
          Raj Vila! <div className="badge badge-success">1k</div>
        </h2>
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

export default MostLovesHouse;

import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {};

const MostLovesHouse = (props: Props) => {
  return (
    <div className="p-7 bg-white">
      <h3 className="text-lg font-bold">Most Loves Houses</h3>
      <div className="content grid grid-cols-1 sm:grid-cols-1 gap-5 py-5">
        <LovesHouseCard />
        <LovesHouseCard />
        <LovesHouseCard />
      </div>
    </div>
  );
};

const LovesHouseCard = () => {
  return (
    <div className="card card-side bg-base-100 shadow border rounded-none p-1">
      <figure>
        <img
          src="https://placeimg.com/200/280/arch"
          alt="Movie"
          className="h-32"
        />
      </figure>
      <div className="card-body py-4">
        <h2 className="card-title">
          Rajbari New Villa{" "}
          <div className="badge badge-success badge-lg ">1k Views</div>
        </h2>
        <p className="text-gray-500">Rajbar, Rangpur</p>
        <ul className="flex items-center gap-5 flex-wrap">
          <li>
            Price - <div className="badge badge-ghost">1200/m</div>
          </li>
          <li>
            House Type - <div className="badge badge-ghost">Rent</div>
          </li>
          <li>
            Category - <div className="badge badge-ghost">Duplex</div>
          </li>
        </ul>
      </div>
      <div className="card-end flex items-center gap-4">
        <p className="tooltip tooltip-left" data-tip="View House">
          <Link to="/house/4343" className="btn btn-ghost btn-circle ">
            <BsEye />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MostLovesHouse;

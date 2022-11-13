import { Link } from "react-router-dom";
import HouseHolderModal from "./HouseHolderModal";

type Props = {
  house: any;
};

const BookedHouseCard = ({ house }: Props) => {
  return (
    <div className="card p-2 bg-base-100 shadow-xl rounded-none">
      <figure>
        <img
          src={
            house?.image?.img
              ? house?.image?.img
              : "https://placeimg.com/400/225/arch"
          }
          alt={house?.name}
          className="w-full"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title">
          {house?.name || "No Name"}
          <div className="badge badge-success">Booked</div>
        </h2>
        <small>Rangpur, Dhaka</small>
        <ul className="text-sm font-poppins">
          <li>
            Price -{" "}
            <b>
              {house?.price} {house?.houseType === "Rent" ? "/month" : "/taka"}
            </b>
          </li>
          <li>
            Type - <b>{house?.houseType}</b>
          </li>
        </ul>

        <div className="mt-5">
          <Link
            to={`/house/${house?._id}`}
            className="btn btn-ghost rounded btn-sm"
          >
            View
          </Link>
          <label
            htmlFor={"owners-details-modal" + house?.owner?._id}
            className="bg-blue-200 p-1 px-3 text-blue-500 rounded cursor-pointer ml-2"
          >
            House Holder Details
          </label>
          <HouseHolderModal owner={house?.owner} />
        </div>
      </div>
    </div>
  );
};

export default BookedHouseCard;

import { BsEye, BsQuestionCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import HouseReviewCard from "./HouseReviewCard";

type Props = {};

const HouseReviews = (props: Props) => {
  return (
    <div>
      <div className="p-5 my-4 bg-white">
        {/* Houses Card */}
        <div className="card sm:card-side bg-base-100 p-3 border py-1">
          <figure>
            <img
              src="https://placeimg.com/200/280/arch"
              alt="Movie"
              className="w-full h-40 sm:h-32 rounded-md"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Rajbari New Villa</h2>
            <p className="card-subtitle text-gray-500">Rajbar, Rangpur</p>
            <ul className="flex flex-wrap items-center gap-5">
              <li>
                Price - <div className="badge badge-ghost">1200/m</div>
              </li>
              <li>
                House Type - <div className="badge badge-ghost">Rent</div>
              </li>
              <li>
                Category - <div className="badge badge-ghost">Duplex</div>
              </li>
              <li>
                House Use For -{" "}
                <div className="badge badge-ghost">Residential</div>
              </li>
            </ul>
          </div>
          <div className="card-end flex items-center gap-4">
            <p className="tooltip" data-tip="View House">
              {" "}
              <Link to="/house/4343" className="btn btn-ghost btn-circle ">
                <BsEye />
              </Link>
            </p>
            <p className="tooltip tooltip-left" data-tip="View Questions">
              {" "}
              <Link to="/house/4343" className="btn btn-ghost btn-circle ">
                <BsQuestionCircleFill />
              </Link>
            </p>
          </div>
        </div>

        {/* Houses Reviews */}
        <div className="houses-reviews py-6 grid grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 gap-5">
          <HouseReviewCard />
          <HouseReviewCard />
          <HouseReviewCard />
          <HouseReviewCard />
          <HouseReviewCard />
          <HouseReviewCard />
          <HouseReviewCard />
          <HouseReviewCard />
        </div>
        <div className="pagination flex justify-center py-4">
          <button className="btn btn-ghost">Previous</button>
          <button className="btn btn-ghost">Next</button>
        </div>
      </div>
    </div>
  );
};

export default HouseReviews;

import { BiStar } from "react-icons/bi";
import { BsFillStarFill, BsTrash } from "react-icons/bs";

type Props = {};

const HouseReviewCard = (props: Props) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body gap-1 pb-1">
        <h2 className="card-title">Ashik Mahmud</h2>
        <small className="text-gray-400 my-0">ashikmahmud@gmail.com</small>
        <div className="stars flex items-center gap-2 text-success">
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BsFillStarFill />
          <BiStar />
        </div>
        <p className="text-sm text-gray-500 mt-3">
          If a dog chews shoes whose shoes does he choose?If a dog chews shoes
          whose shoes does he choose?If a dog chews shoes whose shoes does he
          choose?{" "}
          <span className="readme text-success cursor-pointer">Read more</span>
        </p>
      </div>
      <div className="flex justify-end px-3 pb-3">
        <p data-tip="Trash Review" className="tooltip tooltip-left">
          <button className="btn btn-ghost text-error btn-circle ">
            <BsTrash />
          </button>
        </p>
      </div>
    </div>
  );
};

export default HouseReviewCard;

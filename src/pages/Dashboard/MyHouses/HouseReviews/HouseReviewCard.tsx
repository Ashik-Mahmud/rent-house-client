import { BiStar } from "react-icons/bi";
import { BsFillStarFill, BsTrash } from "react-icons/bs";

import { useState } from "react";
type Props = {
  review: any;
};

const HouseReviewCard = ({ review }: Props) => {
  const [isShow, setIsShow] = useState(false);
  /* stars */
  let stars = [];
  for (let i = 0; i < review.rating; i++) {
    stars.push(<BsFillStarFill key={i} className="text-success" />);
  }
  for (let i = 0; i < 5 - review.rating; i++) {
    stars.push(<BiStar key={i} className="text-success" />);
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body gap-1 pb-1">
        <h2 className="card-title">{review?.author?.name || "loading..."}</h2>
        <small className="text-gray-400 my-0">
          {review?.author?.email || "loading..."}
        </small>
        <div className="stars flex items-center gap-2 text-success">
          {stars?.map((star) => star)}
        </div>
        <p className="text-sm text-gray-500 mt-3">
          {isShow
            ? review?.comment
            : review?.comment.length > 100
            ? review?.comment?.slice(0, 100) + "..."
            : review?.comment || "loading..."}
          {review?.comment.length > 100 && (
            <span
              className="readme text-success cursor-pointer select-none"
              onClick={() => setIsShow((state) => !state)}
            >
              {" "}
              {isShow ? "show less" : "show more"}
            </span>
          )}
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

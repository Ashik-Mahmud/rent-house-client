import { BiStar } from "react-icons/bi";
import { BsCheck, BsFillStarFill, BsTrash } from "react-icons/bs";

import axios from "axios";
import cogoToast from "cogo-toast";
import { useState } from "react";
import swal from "sweetalert";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
type Props = {
  review: any;
  refetch: () => void;
};

const HouseReviewCard = ({ review, refetch }: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  const [isShow, setIsShow] = useState(false);
  /* stars */
  let stars = [];
  for (let i = 0; i < review.rating; i++) {
    stars.push(<BsFillStarFill key={i} className="text-success" />);
  }
  for (let i = 0; i < 5 - review.rating; i++) {
    stars.push(<BiStar key={i} className="text-success" />);
  }

  /* Handle Delete Review */
  /* Handle Delete */
  const handleDelete = async () => {
    const isConfirm = await swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: ["cancel", "yes, delete it"],
      dangerMode: true,
    });

    if (isConfirm) {
      try {
        const { data: deleteData } = await axios.delete(
          `${base_backend_url}/api/v1/reviews/delete-review/${review?._id}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        if (deleteData.success) {
          cogoToast.success("Review deleted successfully");
          refetch();
        }
      } catch (error) {
        cogoToast.error("Something went wrong");
      }
    }
  };

  /* Handle Accept Review */
  const handleAccept = async () => {
    const isConfirm = await swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: ["cancel", "yes, accept it"],
      dangerMode: true,
    });
    if (isConfirm) {
      try {
        const { data: acceptData } = await axios.patch(
          `${base_backend_url}/api/v1/reviews/accept-review/${review?._id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        if (acceptData.success) {
          cogoToast.success("Review accepted successfully");
          refetch();
        }
      } catch (error) {
        cogoToast.error("Something went wrong");
      }
    }
  };

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
      <div className="flex justify-end px-3 pb-3 gap-3">
        {!review?.isAccepted && (
          <p
            data-tip="Accept Review"
            className="tooltip tooltip-left tooltip-success"
          >
            <button
              onClick={handleAccept}
              className="btn btn-success btn-xs btn-circle text-2xl"
            >
              <BsCheck />
            </button>
          </p>
        )}

        <p
          data-tip="Trash Review"
          className="tooltip tooltip-left tooltip-error"
        >
          <button
            onClick={handleDelete}
            className="btn btn-ghost btn-xs text-error btn-circle "
          >
            <BsTrash />
          </button>
        </p>
      </div>
    </div>
  );
};

export default HouseReviewCard;

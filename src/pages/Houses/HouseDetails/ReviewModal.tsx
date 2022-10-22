import axios from "axios";
import cogoToast from "cogo-toast";
import { useRef, useState } from "react";
import { Rating } from "react-simple-star-rating";
import { PulseLoader } from "react-spinners";
import { base_backend_url } from "../../../configs/config";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
type Props = {
  houseId: string;
  refetch: () => void;
};

const ReviewModal = ({ houseId, refetch }: Props) => {
  const { updatedUser, user } = useAuth<authUserInterface | any>({});
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

  const ratingChanged = (newRating: number) => {
    setRating(newRating);
  };

  /* Handle Submit Review */
  const handleSubmitReview = async () => {
    if (!updatedUser?._id)
      return cogoToast.error("Please login to review this house");

    if (!rating) {
      cogoToast.error("Please give a rating");
      return;
    }

    if (review.length < 10) {
      cogoToast.error("Review must be at least 10 characters long");
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${base_backend_url}/api/v1/reviews/create-review-for-house`,
        {
          comment: review,
          rating,
          house: houseId,
          author: updatedUser?._id,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      if (data.success) {
        cogoToast.success("Review added successfully");
        setReview("");
        setRating(5);
        setLoading(false);
        (formRef as any).current.reset();
        refetch();
      } else {
        cogoToast.error("Something went wrong");
        setLoading(false);
      }
    } catch (err) {
      cogoToast.error((err as any)?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <>
      <form action="" ref={formRef}>
        <input type="checkbox" id="review-modal" className="modal-toggle" />
        <div className="modal modal-middle sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Leave Your Review</h3>
            <p className="py-4 text-error">
              Make sure ask the related question about this House unless your
              question will not be approved.
            </p>
            <div className="modal-body">
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="">Stars</label>
                <Rating
                  onClick={ratingChanged}
                  showTooltip
                  initialValue={rating}
                  tooltipArray={[
                    "Terrible",
                    "Bad",
                    "Average",
                    "Great",
                    "Prefect",
                  ]}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Review Comment</label>
                <textarea
                  name=""
                  className="textarea textarea-bordered w-full"
                  id=""
                  cols={5}
                  placeholder="Review"
                  onChange={(e) => setReview(e.target.value)}
                  value={review}
                  rows={3}
                ></textarea>
              </div>
            </div>
            <div className="modal-action">
              <label
                htmlFor="review-modal"
                onClick={() => {
                  setReview("");
                  setRating(0);
                }}
                className="btn btn-warning"
              >
                Cancel
              </label>
              {loading ? (
                <button type="button" className="btn btn-success">
                  <PulseLoader size={8} />
                </button>
              ) : (
                <button
                  onClick={handleSubmitReview}
                  type="button"
                  className="btn btn-success"
                >
                  Submit Review
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ReviewModal;

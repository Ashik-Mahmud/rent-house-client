import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactStars from "react-stars";
import SendVerifyEmail from "../../../components/SendVerifyEmail";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";

type Props = {};

const AddReview = (props: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});
  const isVerify = updatedUser?.isVerified;
  const { handleSubmit, register } = useForm();

  const [rating, setRating] = useState(1);

  const handleReviewFormSubmit = handleSubmit(async (data) => {
    const reviewContent = { ...data, ratings: rating };
    console.log(reviewContent);
  });

  const ratingChanged = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div>
      <form onSubmit={handleReviewFormSubmit} className="p-4 my-5 bg-white">
        <div className="review-content">
          {isVerify ? (
            <div>
              <div className="form-control">
                <label htmlFor="title" className="label">
                  Ratings
                </label>
                <ReactStars
                  count={5}
                  size={35}
                  color2={"#ffd700"}
                  onChange={ratingChanged}
                />
              </div>
              <div className="form-control my-4">
                <label htmlFor="content" className="mb-4 ">
                  Content
                </label>
                <textarea
                  id="content"
                  cols={4}
                  className="w-full p-5 border outline-none rounded"
                  placeholder="What's your mind about this houseLagbe?"
                  rows={6}
                  {...register("content", { required: true })}
                ></textarea>
              </div>
              <div className="my-3">
                <button className="btn btn-success rounded-none">
                  Save Review
                </button>
              </div>
            </div>
          ) : (
            <SendVerifyEmail
              title="Verify to Add Reviews"
              desc="You could'nt leave review if you are not verify your account"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default AddReview;

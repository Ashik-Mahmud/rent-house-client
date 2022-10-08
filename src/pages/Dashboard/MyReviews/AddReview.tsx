import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ReactStars from "react-stars";
import { toast } from "react-toastify";
import SendVerifyEmail from "../../../components/SendVerifyEmail";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import {
  AddReviewType,
  useAddReviewMutation,
} from "../../../services/ReviewApi";

type Props = {};

const AddReview = (props: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});
  const isVerify = updatedUser?.isVerified;
  const { handleSubmit, register, reset } = useForm();
  const [AddReview, { data, isSuccess, error }] = useAddReviewMutation();

  const [rating, setRating] = useState(1);
  const ratingChanged = (newRating: number) => {
    setRating(newRating);
  };
  const handleReviewFormSubmit = handleSubmit(async (data) => {
    const reviewContent: AddReviewType = {
      content: data.content,
      rating: rating,
      author: {
        userId: updatedUser?._id,
        name: updatedUser?.name,
        email: updatedUser?.email,
      },
    };

    try {
      // rest of the code
      await AddReview(reviewContent);
      reset();
    } catch (error) {
      // error handling
      toast.error((error as any).message);
    }
  });

  useEffect(() => {
    if (error) {
      toast.error((error as any)?.data?.message);
    }
    if (isSuccess) {
      // show some loader or message
      toast((data as any)?.message, {
        position: "bottom-center",
        type: "success",
      });
    }
  }, [data, isSuccess, error]);

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

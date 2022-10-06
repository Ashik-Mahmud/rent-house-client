import ReactStars from "react-stars";
import SendVerifyEmail from "../../../components/SendVerifyEmail";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";

type Props = {};

const AddReview = (props: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});

  const isVerify = updatedUser?.isVerified;
  return (
    <div>
      <div className="p-4 my-5 bg-white">
        <div className="review-content">
          {isVerify ? (
            <form action="">
              <div className="form-control">
                <label htmlFor="title" className="label">
                  Ratings
                </label>
                <ReactStars count={5} size={35} color2={"#ffd700"} />
              </div>
              <div className="form-control my-4">
                <label htmlFor="content" className="mb-4 ">
                  Content
                </label>
                <textarea
                  name="content"
                  id="content"
                  cols={4}
                  className="w-full p-5 border outline-none rounded"
                  placeholder="What's your mind about this houseLagbe?"
                  rows={6}
                ></textarea>
              </div>
              <div className="my-3">
                <button className="btn btn-success rounded-none">
                  Save Review
                </button>
              </div>
            </form>
          ) : (
            <SendVerifyEmail
              title="Verify to Add Reviews"
              desc="You could'nt leave review if you are not verify your account"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddReview;

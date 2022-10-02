import ReactStars from "react-stars";

type Props = {};

const AddReview = (props: Props) => {
  return (
    <div>
      <div className="p-4 my-5 bg-white">
        <div className="review-content">
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
                placeholder="What's your mind about this hasHouse?"
                rows={6}
              ></textarea>
            </div>
            <div className="my-3">
              <button className="btn btn-success rounded-none">
                Save Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;

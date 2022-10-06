import ReactStars from "react-stars";

type Props = {};

const ReviewModal = (props: Props) => {
  return (
    <>
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
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Type Name here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Type Email here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="">Stars</label>
              <ReactStars count={5} size={24} color2={"#ffd700"} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Review Comment</label>
              <textarea
                name=""
                className="textarea textarea-bordered w-full"
                id=""
                cols={5}
                placeholder="Review"
                rows={3}
              ></textarea>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="review-modal" className="btn btn-success">
              Submit Review
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewModal;

type Props = {};

const BookedHouseCard = (props: Props) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-success">Booked</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="mt-5">
          <button className="btn btn-ghost rounded">View</button>
          <label
            htmlFor="owners-details-modal"
            className="btn btn-ghost rounded"
          >
            House Holder Details
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookedHouseCard;

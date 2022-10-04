type Props = {};

const BookedHouseCard = (props: Props) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Rajbar New Villa
          <div className="badge badge-success">Booked</div>
        </h2>
        <small>Rangpur, Dhaka</small>
        <ul className="text-sm font-poppins">
          <li>
            Price - <b>1200/m</b>
          </li>
          <li>
            Type - <b>Rent</b>
          </li>
        </ul>

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

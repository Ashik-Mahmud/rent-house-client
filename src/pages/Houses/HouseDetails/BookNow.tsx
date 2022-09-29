import {
  BiBookmarks,
  BiCard,
  BiEnvelope,
  BiPhoneIncoming,
  BiUser,
} from "react-icons/bi";

type Props = {};

const BookNow = (props: Props) => {
  return (
    <div>
      <input type="checkbox" id="book-now-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Congratulations you come across to book this house.
          </h3>
          <p className="py-4">
            For books this house you will get you bit charge for maintaining
            this website and make this features more helpful for you.
          </p>
          <div className="modal-body">
            {/* Name */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">Put your name</h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BiUser />
                </div>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Name"
                />
              </div>
            </div>
            {/* End */}
            <div className="flex items-stretch justify-between gap-2">
              {/* Email */}
              <div className="name border  rounded p-3 relative mt-10 flex-1">
                <div className="name-title absolute -top-4 bg-white border rounded p-1">
                  <h3 className="text-xs font-poppins">Put your Email</h3>
                </div>
                <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                  <div className="icon">
                    <BiEnvelope />
                  </div>
                  <input
                    type="email"
                    className="form-control outline-none pl-4 w-full"
                    placeholder="Email"
                  />
                </div>
              </div>
              {/* End */}
              {/* PHone */}
              <div className="name border  rounded p-3 relative mt-10 flex-1">
                <div className="name-title absolute -top-4 bg-white border rounded p-1">
                  <h3 className="text-xs font-poppins">Put your Phone</h3>
                </div>
                <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                  <div className="icon">
                    <BiPhoneIncoming />
                  </div>
                  <input
                    type="text"
                    className="form-control outline-none pl-4 w-full"
                    placeholder="Phone"
                  />
                </div>
              </div>
              {/* End */}
            </div>
            {/* Card Number */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">Put your Card Number</h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BiCard />
                </div>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Card Number"
                />
              </div>
            </div>
            {/* End */}
            {/* Notes Number */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">Put your Notes</h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BiBookmarks />
                </div>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Notes"
                />
              </div>
            </div>
            {/* End */}
          </div>
          <div className="modal-action">
            <label htmlFor="book-now-modal" className="btn btn-warning">
              Cancel
            </label>
            <button className="btn btn-primary">Pay 100 tk for Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;

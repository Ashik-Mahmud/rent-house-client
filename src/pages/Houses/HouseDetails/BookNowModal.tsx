import {
  BiCard,
  BiEnvelope,
  BiKey,
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
            Please fill up the form below and we will contact you
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
            {/* Password */}
            <div className="name border  rounded p-3 pb-1 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins flex items-center gap-3">
                  Put your Password{" "}
                </h3>
              </div>
              <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BiKey />
                </div>
                <input
                  type="password"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Password"
                />
              </div>
              <small className="text-gray-400 text-xs">
                It used for login not your card password
              </small>
            </div>
            {/* End */}
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
            <div className="my-3 flex items-center gap-2 font-poppins mt-6">
              <input
                type="checkbox"
                name="permission"
                className="checkbox"
                id="permission"
              />{" "}
              <label htmlFor="permission">
                Accept all the Condition & Policy
              </label>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="book-now-modal" className="btn btn-warning">
              Cancel
            </label>
            <button className="btn btn-primary">
              Pay 100 tk for Details & Track
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;

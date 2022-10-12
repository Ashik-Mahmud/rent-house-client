import { BiPen } from "react-icons/bi";

type Props = {};

const RequestModalForHouseHolder = (props: Props) => {
  return (
    <div>
      <input
        type="checkbox"
        id="my-modal-for-house-holder"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-for-house-holder"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Request For House Holder Account.
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <form action="">
            {/* url */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">
                  Why You want be a House holder?
                </h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BiPen />
                </div>
                <textarea
                  name=""
                  id=""
                  cols={5}
                  rows={4}
                  className="w-full font-poppins text-md textarea"
                  placeholder="Write Notes"
                ></textarea>
              </div>
            </div>
            {/* End */}
            <div className="my-5 ">
              <button className="btn btn-success mr-3">Send Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestModalForHouseHolder;

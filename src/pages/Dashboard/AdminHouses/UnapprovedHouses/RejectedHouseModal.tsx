import { BiReceipt } from "react-icons/bi";

type Props = {};

const RejectedHouseModal = (props: Props) => {
  return (
    <div>
      <input
        type="checkbox"
        id="permission-no-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-xl">Reject Notes</h3>

          <div className="modal-body">
            {/* Name */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">Put Reject Notes</h3>
              </div>
              <label
                htmlFor="choose-file"
                className="input-group flex items-center my-2 "
              >
                <div className="icon text-lg">
                  <BiReceipt />
                </div>
              </label>
              <textarea
                name=""
                id=""
                cols={5}
                rows={6}
                className="w-full font-poppins outline-none border p-4 rounded"
                placeholder="Why are you reject?"
              ></textarea>
            </div>
            {/* End */}
          </div>
          <div className="modal-action">
            <label htmlFor="permission-no-modal" className="btn btn-warning">
              Cancel
            </label>
            <button className="btn btn-success">Rejected</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectedHouseModal;

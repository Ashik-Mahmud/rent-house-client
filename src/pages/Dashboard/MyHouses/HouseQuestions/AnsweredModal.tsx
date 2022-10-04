import { MdQuestionAnswer } from "react-icons/md";

type Props = {};

const AnsweredModal = (props: Props) => {
  return (
    <div>
      <input
        type="checkbox"
        id="answered-question-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-xl">Answered to this Question</h3>

          <div className="modal-body">
            {/* Name */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">Question</h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <p className="text-md font-poppins">
                  What is the best way to get a house in the city of New York?
                </p>
              </div>
            </div>
            {/* End */}

            {/* Password */}
            <div className="name border  rounded p-3 pb-1 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins flex items-center gap-3">
                  Write Answer
                </h3>
              </div>
              <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2">
                <div className="icon">
                  <MdQuestionAnswer />
                </div>
                <textarea
                  name=""
                  id=""
                  cols={5}
                  rows={6}
                  className="w-full text-md font-poppins outline-none"
                  placeholder="Write Answer"
                ></textarea>
              </div>
            </div>
            {/* End */}
          </div>
          <div className="modal-action">
            <label
              htmlFor="answered-question-modal"
              className="btn btn-warning"
            >
              Cancel
            </label>
            <button className="btn btn-success">Publish Answer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnsweredModal;

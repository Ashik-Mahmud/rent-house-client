import { BsPlus } from "react-icons/bs";

type Props = {
  data: any;
};

const Question = ({ data }: Props) => {
  return (
    <div>
      {/* Question Area */}
      <div className="question-area font-poppins bg-white p-10 my-4">
        <div className="title mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mt-3">Question & Answer</h3>
            <span className="w-10 h-1 bg-success block"></span>
          </div>

          {data?.allowQuestion === "Yes" && (
            <label
              htmlFor="question-modal"
              className=" modal-button btn btn-success rounded-none btn-sm flex items-center gap-2"
            >
              Add Question <BsPlus />
            </label>
          )}
        </div>
        <div className="question-answer">
          <ul className="flex gap-1 items-center ">
            <li
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-slate-50   w-full"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-xl font-medium ">
                <b>Q1:</b> Do you have an any discount offer for this house?
              </div>
              <div className="collapse-content bg-white peer-checked:pt-5">
                <p>
                  <b>Ans: </b>
                  Yeah! you got a 30% cash off. If you are purchase whole
                  offeres with all the facilities unless not. Thanks
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Question;

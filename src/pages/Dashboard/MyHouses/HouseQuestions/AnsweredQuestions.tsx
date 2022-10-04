import { BiTrashAlt } from "react-icons/bi";
import { MdOutlineQuestionAnswer } from "react-icons/md";

type Props = {};

const AnsweredQuestions = (props: Props) => {
  return (
    <div>
      <div className="p-2 my-1 bg-white">
        {/* Unanswered Tables */}
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Questions</th>
                <th>Status</th>
                <th>Answered</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>How to get discount?</td>
                <td>
                  <span className="badge badge-ghost">pending</span>
                </td>
                <td>
                  <span className="badge badge-warning">No</span>
                </td>
                <td>
                  <div className="flex items-center gap-4">
                    <label
                      htmlFor="answered-question-modal"
                      className="text-success cursor-pointer tooltip text-xl"
                      data-tip="Answer to the Question"
                    >
                      <MdOutlineQuestionAnswer />
                    </label>
                    <span
                      className="text-error cursor-pointer tooltip text-xl"
                      data-tip="Remove this Question"
                    >
                      <BiTrashAlt />
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Cy Ganderton</td>
                <td>How to get discount?</td>
                <td>
                  <span className="badge badge-ghost">pending</span>
                </td>
                <td>
                  <span
                    className="badge badge-success cursor-pointer tooltip"
                    data-tip="yeah you got from my side"
                  >
                    Yes
                  </span>
                </td>
                <td>
                  <div className="flex items-center gap-4">
                    <label
                      htmlFor="answered-question-modal"
                      className="text-base-300 cursor-pointer tooltip text-xl select-none pointer-events-none"
                      data-tip="Answer to the Question"
                    >
                      <MdOutlineQuestionAnswer />
                    </label>
                    <span
                      className="text-error cursor-pointer tooltip text-xl"
                      data-tip="Remove this Question"
                    >
                      <BiTrashAlt />
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* End */}
        {/* Pagination */}
        <div className="flex items-center justify-between  text-sm mt-10">
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Show</span>
            <select className="select select-bordered w-20 select-xs">
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
            </select>
            <span className="text-gray-600">entries</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Page 1 of 10</span>
            <button className="btn btn-ghost btn-sm">Previous</button>
            <button className="btn btn-ghost btn-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnsweredQuestions;

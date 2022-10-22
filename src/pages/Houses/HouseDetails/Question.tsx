import axios from "axios";
import { useState } from "react";
import { BiCommentDetail, BiEdit, BiTrash } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { useQuery } from "react-query";
import { base_backend_url } from "../../../configs/config";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
type Props = {
  data: any;
};

const Question = ({ data }: Props) => {
  const { updatedUser, user } = useAuth<authUserInterface | any>({});
  const [openQuestions, setOpenQuestions] = useState(false);

  const { data: questions } = useQuery("question", () =>
    getQuestionsByAuthor()
  );

  const getQuestionsByAuthor = async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/questions/questions-by-author/${updatedUser?._id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return data;
  };

  console.log(questions?.data);

  return (
    <div>
      {/* Question Area */}
      <div className="question-area font-poppins bg-white p-10 my-4">
        <div className="title mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mt-3">Question & Answer</h3>
            <span className="w-10 h-1 bg-success block"></span>
          </div>

          {data?.allowQuestion === "Yes" &&
            data?.owner?._id !== updatedUser?._id && (
              <div className="flex items-center gap-3">
                {updatedUser?._id && (
                  <button
                    onClick={() => setOpenQuestions((state) => !state)}
                    className=" modal-button btn btn-ghost rounded-full btn-sm flex items-center gap-2"
                  >
                    {openQuestions ? ` View Answer ` : `Your Questions `}
                    <BiCommentDetail />
                  </button>
                )}

                <label
                  htmlFor="question-modal"
                  className=" modal-button btn btn-success rounded-none btn-sm flex items-center gap-2"
                >
                  Add Question <BsPlus />
                </label>
              </div>
            )}
        </div>
        <div className="question-answer">
          {openQuestions ? (
            <div data-theme="winter">
              <h3 className="text-xl font-bold font-poppins my-4">
                Your Asked Questions
              </h3>
              <div className="overflow-x-auto">
                <table className="table w-full table-compact">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Question</th>
                      <th>Answer</th>
                      <th className="w-20">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>How to get?</td>
                      <td>
                        <span className="badge badge-ghost">none</span>
                      </td>
                      <td>
                        <div>
                          <button className="btn btn-ghost btn-sm">
                            <BiEdit />
                          </button>
                          <button className="btn btn-ghost btn-sm">
                            <BiTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;

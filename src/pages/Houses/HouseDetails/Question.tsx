import axios from "axios";
import cogoToast from "cogo-toast";
import { useState } from "react";
import { BiCommentDetail, BiEdit, BiTrash } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import swal from "sweetalert";
import GlobalLoader from "../../../components/GlobalLoader";
import { base_backend_url } from "../../../configs/config";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
type Props = {
  data: any;
  loading: boolean;
  questions: any;
  newFetch: () => void;
};

const Question = ({ data, questions, loading: isLoading, newFetch }: Props) => {
  const { updatedUser, user } = useAuth<authUserInterface | any>({});
  const [openQuestions, setOpenQuestions] = useState(false);

  const handleDeleteQuestion = async (questionId: string) => {
    const isConfirm = await swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: ["cancel", "yes, delete it"],
      dangerMode: true,
    });

    if (isConfirm) {
      const { data } = await axios.delete(
        `${base_backend_url}/api/v1/questions/delete-question/${questionId}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      if (data.success) {
        cogoToast.success("Question deleted successfully");
        newFetch();
      } else {
        cogoToast.error("Something went wrong");
      }
    }
  };

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
                {isLoading ? (
                  <GlobalLoader />
                ) : questions?.data?.length > 0 ? (
                  <table className="table w-full table-compact">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>status</th>
                        <th className="w-20">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {questions?.data?.map((question: any, ind: number) => (
                        <tr>
                          <th>{ind + 1}</th>
                          <td>{question?.question}</td>
                          <td>
                            {question?.question?.answer ? (
                              question?.question?.answer
                            ) : (
                              <span className="badge badge-ghost">
                                no answer
                              </span>
                            )}
                          </td>
                          <td>
                            {question?.question?.accepted ? (
                              <span className="badge badge-success">
                                accepted
                              </span>
                            ) : (
                              <span className="badge badge-warning">
                                pending
                              </span>
                            )}
                          </td>
                          <td>
                            <div className="flex items-center gap-3">
                              <button className="btn btn-ghost btn-xs">
                                <BiEdit />
                              </button>
                              <button
                                onClick={() =>
                                  handleDeleteQuestion(question?.question?._id)
                                }
                                className="rounded-full text-error"
                              >
                                <BiTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center">
                    <h3 className="text-xl font-bold font-poppins my-4">
                      No Question Found
                    </h3>
                  </div>
                )}
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

import axios from "axios";
import cogoToast from "cogo-toast";
import { useState } from "react";
import { BiCommentDetail, BiTrash } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import { useQuery } from "react-query";
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

  /* Get All Approved Questions  */
  const {
    data: approvedQuestions,
    isLoading: approvedQuestionsLoading,
    refetch,
  } = useQuery(["approvedQuestions"], () => getApprovedQuestions());

  const getApprovedQuestions = async () => {
    const response = await axios.get(
      `${base_backend_url}/api/v1/questions/all/${data?._id}`
    );

    return response.data;
  };

  /* Delete Question */
  const handleDeleteQuestion = async (questionId: string) => {
    const isConfirm = await swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: ["cancel", "yes, delete it"],
      dangerMode: true,
    });

    if (isConfirm) {
      const { data: res } = await axios.delete(
        `${base_backend_url}/api/v1/questions/delete-question/${questionId}?houseId=${data?._id}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      if (res.success) {
        cogoToast.success("Question deleted successfully");
        newFetch();
        refetch();
      } else {
        cogoToast.error("Something went wrong");
      }
    }
  };

  return (
    <div>
      {/* Question Area */}
      <div className="question-area font-poppins bg-white sm:p-10 my-4">
        <div className="title mb-6 flex flex-col sm:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mt-3">Question & Answer</h3>
            <span className="w-10 h-1 bg-success block"></span>
          </div>

          {data?.allowQuestion === "Yes" &&
            data?.owner?._id !== updatedUser?._id && (
              <div className="flex items-center gap-3 mt-5 sm:mt-0">
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
        <div className="question-answer px-4 sm:px-1">
          {openQuestions ? (
            <div data-theme="winter">
              <h3 className="text-lg font-bold font-poppins my-4">
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
                        <tr key={question?._id}>
                          <th>{ind + 1}</th>
                          <td>{question?.question}</td>
                          <td>
                            {question?.answer !== "none" ? (
                              <span
                                className="badge badge-success"
                                title={question?.answer}
                              >
                                yes
                              </span>
                            ) : (
                              <span className="badge badge-ghost">
                                no answer
                              </span>
                            )}
                          </td>
                          <td>
                            {question?.accepted ? (
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
                            <div className="flex items-center justify-center">
                              <button
                                onClick={() =>
                                  handleDeleteQuestion(question?._id)
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
            <>
              {approvedQuestionsLoading ? (
                <GlobalLoader />
              ) : (
                <>
                  {approvedQuestions?.data?.length > 0 ? (
                    <ul className="flex gap-1 items-center flex-col py-4">
                      {approvedQuestions?.data?.map(
                        (question: any, ind: number) => (
                          <li
                            key={question?._id}
                            tabIndex={0}
                            className="collapse collapse-plus border border-base-300 bg-slate-50   w-full"
                          >
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title text-md font-medium flex items-center gap-3 ">
                              <b>Q{ind + 1}:</b>
                              {/* User Avatar */}
                              <div
                                className="user-avatar z-50"
                                title={question?.author?.name}
                              >
                                <img
                                  src={
                                    question?.author?.profileImage
                                      ? question?.author?.profileImage
                                      : question?.author?.avatar
                                  }
                                  alt={question?.author?.name}
                                  className="w-8 h-8 rounded-full border-2 border-success object-cover "
                                />
                              </div>
                              <span>{question?.question}</span>
                            </div>
                            <div className="collapse-content bg-white peer-checked:pt-5">
                              <p>
                                <b>Ans: </b>
                                {question?.answer}
                              </p>
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                  ) : (
                    <div className="text-center">
                      <h3 className="text-xl font-bold font-poppins my-4">
                        No Question Found
                      </h3>
                      {updatedUser?._id !== data?.owner?._id && (
                        <label
                          htmlFor="question-modal"
                          className="btn btn-success btn-xs "
                        >
                          Ask
                        </label>
                      )}
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;

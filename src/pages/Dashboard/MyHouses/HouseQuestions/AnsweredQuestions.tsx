import axios from "axios";
import cogoToast from "cogo-toast";
import { useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import GlobalLoader from "../../../../components/GlobalLoader";
import NoDataComponent from "../../../../components/NoDataComponent";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import AnsweredModal from "./AnsweredModal";

type Props = {};

const AnsweredQuestions = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  const { houseId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const { data, isLoading, refetch } = useQuery(
    ["houseQuestions", currentPage, perPage],
    () => getQuestionByHouseId()
  );

  const getQuestionByHouseId = async () => {
    const response = await axios.get(
      `${base_backend_url}/api/v1/questions/questions-for-house/${houseId}?page=${currentPage}&limit=${perPage}`,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
    return response.data;
  };

  /* Handle Delete Question by ID */
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
        refetch();
      } else {
        cogoToast.error("Something went wrong");
      }
    }
  };

  /* Pagination Handler */
  const totalPage = Math.ceil(data?.count / perPage);
  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      refetch();
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      refetch();
    }
  };

  if (isLoading) {
    return <GlobalLoader />;
  }
  return (
    <>
      <div data-theme="winter">
        {data?.data?.length > 0 ? (
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
                  {data?.data?.map((question: any, ind: number) => (
                    <tr key={question?._id}>
                      <th>{ind + 1}</th>
                      <td>
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-12">
                              <img
                                src={`${base_backend_url}/profiles/${question?.author?.profileImage}`}
                                alt=""
                                className="w-full h-full rounded-full object-cover"
                              />
                            </div>
                            <div>
                              <h3
                                className="text-lg font-bold tooltip"
                                data-tip={question?.author?.email}
                              >
                                {question?.author?.name}
                              </h3>
                              <p className="text-gray-500 capitalize">
                                {question?.author?.role === "user"
                                  ? "House Holder"
                                  : question?.author?.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{question?.question}</td>
                      <td>
                        {question?.accepted ? (
                          <span className="badge badge-success">accepted</span>
                        ) : (
                          <span className="badge badge-warning">pending</span>
                        )}
                      </td>
                      <td>
                        {question?.answer === "none" ? (
                          <span className="badge badge-warning">No</span>
                        ) : (
                          <span
                            className="badge badge-success tooltip"
                            data-tip={question?.answer}
                          >
                            yes
                          </span>
                        )}
                      </td>
                      <td>
                        <div className="flex items-center gap-4">
                          <AnsweredModal
                            question={question?.question}
                            questionId={question?._id}
                            refetch={refetch}
                            answer={question?.answer}
                          />
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
                            onClick={() => handleDeleteQuestion(question?._id)}
                          >
                            <BiTrashAlt />
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* End */}
            {/* Pagination */}
            {perPage < data?.count && (
              <div className="pagination flex items-center justify-between mt-20 mb-6 px-7">
                <div className="flex items-center gap-2 text-sm">
                  Show{" "}
                  <select
                    name=""
                    id=""
                    className="select select-sm select-bordered rounded-none tooltip tooltip-info"
                    title="Limit for showing"
                    onChange={(event) => setPerPage(Number(event.target.value))}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                  </select>
                  entries
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <button
                      className="btn btn-sm btn-ghost"
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>

                    <button
                      className="btn btn-sm btn-ghost "
                      disabled={currentPage === totalPage}
                      onClick={handleNextPage}
                    >
                      Next
                    </button>
                  </div>
                  <span>
                    Page <b>{currentPage} </b> of <b>{totalPage}</b>
                  </span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
            <NoDataComponent />
          </div>
        )}
      </div>
    </>
  );
};

export default AnsweredQuestions;

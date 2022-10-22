import axios from "axios";
import cogoToast from "cogo-toast";
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
  console.log(houseId);

  const { data, isLoading, refetch } = useQuery("houseQuestions", () =>
    getQuestionByHouseId()
  );

  const getQuestionByHouseId = async () => {
    const response = await axios.get(
      `${base_backend_url}/api/v1/questions/questions-for-house/${houseId}`,
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

  if (isLoading) {
    return <GlobalLoader />;
  }
  return (
    <>
      <div>
        <div className="p-2 my-1 bg-white">
          {/* Unanswered Tables */}
          <div className="overflow-x-auto">
            {data?.data?.length > 0 ? (
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
                          <span className="badge badge-success">yes</span>
                        )}
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
            ) : (
              <div className="text-center">
                <NoDataComponent />
              </div>
            )}
          </div>
          {/* End */}
          {/* Pagination */}
          <div className="flex-col sm:flex-row flex items-center justify-between  text-sm mt-10">
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
      <AnsweredModal />
    </>
  );
};

export default AnsweredQuestions;

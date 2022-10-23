import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import GlobalLoader from "../../../../components/GlobalLoader";
import NoDataComponent from "../../../../components/NoDataComponent";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import AnsweredQuestionRow from "./AnsweredQuestionRow";

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
          <div className="p-2 my-1 bg-white font-poppins">
            {/* Unanswered Tables */}
            <div className="overflow-x-auto font-poppins">
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
                    <AnsweredQuestionRow
                      key={question?._id}
                      question={question}
                      ind={ind}
                      refetch={refetch}
                      houseId={houseId}
                    />
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

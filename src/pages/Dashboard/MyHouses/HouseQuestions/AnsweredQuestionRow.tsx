import axios from "axios";
import cogoToast from "cogo-toast";
import { BiTrashAlt } from "react-icons/bi";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import swal from "sweetalert";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import AnsweredModal from "./AnsweredModal";

type Props = {
  question: any;
  ind: number;
  refetch: () => void;
  houseId: any;
};

const AnsweredQuestionRow = ({ question, ind, refetch, houseId }: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
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
        `${base_backend_url}/api/v1/questions/delete-question/${questionId}?houseId=${houseId}`,
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

  return (
    <tr>
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
                className="text-sm font-bold tooltip"
                data-tip={question?.author?.email}
              >
                {question?.author?.name}
              </h3>
              <p className="text-gray-500 text-xs capitalize">
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
          <span className="badge badge-success" title={question?.answer}>
            yes
          </span>
        )}
      </td>
      <td>
        <div className="flex items-center gap-4">
          <label
            htmlFor={`answered-question-modal-${question?._id}`}
            className="text-success cursor-pointer tooltip text-xl"
            data-tip={`Answer to the Question `}
          >
            <MdOutlineQuestionAnswer />
          </label>
          <AnsweredModal
            question={question?.question}
            questionId={question?._id}
            refetch={refetch}
            answer={question?.answer}
          />

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
  );
};

export default AnsweredQuestionRow;

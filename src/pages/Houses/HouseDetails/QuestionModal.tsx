/* Question Modal */

import axios from "axios";
import cogoToast from "cogo-toast";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { base_backend_url } from "../../../configs/config";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";

type Props = {
  houseId: string;
  newFetch: () => void;
};

const QuestionModal = ({ houseId, newFetch }: Props) => {
  const { updatedUser, user } = useAuth<authUserInterface | any>({});

  const { handleSubmit, register, reset } = useForm();

  const questionModalForm = handleSubmit(async (formData) => {
    const { question } = formData;
    if (!question) return cogoToast.warn("Please fill up the Question field");
    if (!updatedUser?._id)
      return cogoToast.warn("Please login to ask a question");

    const questionContent = {
      question,
      author: updatedUser?._id,
    };

    const { data } = await axios.post(
      `${base_backend_url}/api/v1/questions/ask-question/${houseId}`,
      questionContent,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );

    if (data.success) {
      reset();
      swal("Success", data.message, "success");
      cogoToast.success("Question sent successfully");
      newFetch();
    } else {
      cogoToast.error("Something went wrong");
    }
  });

  return (
    <>
      <form action="" onSubmit={questionModalForm} className="font-poppins">
        <input type="checkbox" id="question-modal" className="modal-toggle" />
        <div className="modal modal-middle sm:modal-middle ">
          <div className="modal-box rounded-none">
            <h3 className="font-bold text-lg">Leave Your Question</h3>
            <p className="py-4 text-error">
              Make sure ask the related question about this House unless your
              question will not be approved.
            </p>
            <div className="modal-body">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Question</label>
                <textarea
                  className="textarea textarea-bordered w-full rounded-none"
                  id=""
                  cols={5}
                  placeholder="Ask Question"
                  rows={3}
                  {...register("question")}
                ></textarea>
              </div>
            </div>
            <div className="modal-action">
              <label
                htmlFor="question-modal"
                className="btn btn-error rounded-none"
              >
                Cancel
              </label>
              <button className="btn btn-success rounded-none">
                Submit Question
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuestionModal;

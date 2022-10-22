import axios from "axios";
import cogoToast from "cogo-toast";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdQuestionAnswer } from "react-icons/md";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";

type Props = {
  question: string;
  questionId: string;
  refetch: () => void;
  answer: string;
};

const AnsweredModal = ({ question, questionId, refetch, answer }: Props) => {
  /* Handle Answer to the Question */
  const { user } = useAuth<authUserInterface | any>({});
  const { handleSubmit, register, reset, setValue } = useForm();

  const handleAnswer = handleSubmit(async (data) => {
    if (!data?.answer) {
      return cogoToast.error("Please enter your answer");
    }

    const { data: response } = await axios.patch(
      `${base_backend_url}/api/v1/questions/answer-question`,
      {
        questionId,
        answer: data.answer,
      },
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );

    if (response.success) {
      cogoToast.success("Answered Successfully");
      reset();
      refetch();
    }
  });

  useEffect(() => {
    setValue("answer", answer);
  }, [answer, setValue]);

  return (
    <form onSubmit={handleAnswer}>
      <input
        type="checkbox"
        id="answered-question-modal"
        className="modal-toggle"
      />
      <div className="modal modal-middle sm:modal-middle">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-xl">Answered to this Question</h3>

          <div className="modal-body">
            {/* Name */}
            <div className="name border  rounded p-3 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">Question</h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <p className="text-md font-poppins">{question}</p>
              </div>
            </div>
            {/* End */}

            {/* Password */}
            <div className="name border  rounded p-3 pb-1 relative mt-10 flex-1">
              <div className="name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins flex items-center gap-3">
                  Write Answer
                </h3>
              </div>
              <div className="input-group flex items-center my-1 border p-3 rounded-md mt-2">
                <div className="icon">
                  <MdQuestionAnswer />
                </div>
                <textarea
                  id=""
                  cols={5}
                  rows={6}
                  className="w-full text-md font-poppins outline-none"
                  placeholder="Write Answer"
                  {...register("answer")}
                ></textarea>
              </div>
            </div>
            {/* End */}
          </div>
          <div className="modal-action">
            <label
              htmlFor="answered-question-modal"
              className="btn btn-warning"
            >
              Cancel
            </label>
            <button className="btn btn-success">Publish Answer</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AnsweredModal;

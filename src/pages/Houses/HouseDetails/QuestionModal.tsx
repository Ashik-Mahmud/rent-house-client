/* Question Modal */

type Props = {};

const QuestionModal = (props: Props) => {
  return (
    <>
      <input type="checkbox" id="question-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Leave Your Question</h3>
          <p className="py-4 text-error">
            Make sure ask the related question about this House unless your
            question will not be approved.
          </p>
          <div className="modal-body">
            <div className="flex flex-col gap-2 mb-5">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="Type Name here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Question</label>
              <textarea
                name=""
                className="textarea textarea-bordered w-full"
                id=""
                cols={5}
                placeholder="Ask Question"
                rows={3}
              ></textarea>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="question-modal" className="btn btn-success">
              Submit Question
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionModal;

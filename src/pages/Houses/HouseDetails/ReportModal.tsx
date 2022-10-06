type Props = {};

const ReportModal = (props: Props) => {
  return (
    <>
      <input type="checkbox" id="send-report-modal" className="modal-toggle" />
      <div className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Report <span className="text-success">Rajbari New Villa</span>
          </h3>
          <p className="py-4 text-error">
            Please notes why are you report for this houses in details
          </p>
          <div className="modal-body">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Why are you report?</label>
              <textarea
                name=""
                className="textarea textarea-bordered w-full"
                id=""
                cols={5}
                placeholder="Write why are you report?"
                rows={8}
              ></textarea>
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="send-report-modal" className="btn btn-warning">
              Cancel
            </label>
            <button className="btn btn-success">Submit Report</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportModal;

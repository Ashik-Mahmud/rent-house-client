import { useForm } from "react-hook-form";

import axios from "axios";
import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import { base_backend_url } from "../../../configs/config";
type Props = {};

const ReportModal = (props: Props) => {
  const { handleSubmit, register, reset, watch } = useForm();
  const [isOther, setIsOther] = useState(false);

  /* Handle Report Modal */
  const handleReportForm = handleSubmit(async (data) => {
    const houseUrl = window.location.href;

    if (!data.reportType) {
      cogoToast.info("Please select a report type");
      return;
    }

    if (data.reportType === "Other" && !data.otherReportType) {
      cogoToast.info("Please enter a report reason");
      return;
    }

    if (!data.reportMessage) {
      cogoToast.info("Please enter a message");
      return;
    }

    if (data.reportType === "Other") {
      data.reportType = data.otherReportType;
    }
    const reportData = {
      ...data,
      houseUrl,
      house: houseUrl.split("/")[4],
    };

    try {
      const { data } = await axios.post(
        `${base_backend_url}/api/v1/reports/create`,
        reportData
      );
      if (data) {
        cogoToast.success("Report sent successfully");
        reset();
        setIsOther(false);
      }
    } catch (error) {
      cogoToast.error("Something went wrong");
    }
  });

  const reportType = watch("reportType");
  useEffect(() => {
    if (reportType === "Other") {
      setIsOther(true);
    } else {
      setIsOther(false);
    }
  }, [reportType]);

  return (
    <>
      <form action="" onSubmit={handleReportForm}>
        <input
          type="checkbox"
          id="send-report-modal"
          className="modal-toggle"
        />
        <div className="modal modal-middle sm:modal-middle font-poppins">
          <div className="modal-box">
            <label
              htmlFor="send-report-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">
              Report <span className="text-success">Rajbari New Villa</span>
            </h3>
            <p className="py-4 text-black">
              Please notes why are you report for this houses in details
            </p>
            <div className="modal-body">
              {/* report subject field*/}
              <div className="mb-4">
                <label
                  htmlFor="report-subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Report type
                </label>
                <div className="mt-1">
                  <select
                    id="report-type"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    {...register("reportType")}
                  >
                    <option value="Fake">Fake</option>
                    <option value="Spam">Spam</option>
                    <option value="Missing Information">Missing </option>
                    <option value="Violence">Violence</option>
                    <option value="Duplicate">Duplicate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* report other subject field*/}
              {isOther && (
                <div className="mb-4">
                  <label
                    htmlFor="report-subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Other Type
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="other-report-type"
                      {...register("otherReportType")}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              )}

              {/* report message field*/}
              <div className="mb-4">
                <label
                  htmlFor="report-message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Report Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="report-message"
                    {...register("reportMessage")}
                    rows={5}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Report
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ReportModal;

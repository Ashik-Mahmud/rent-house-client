import { useState } from "react";
type Props = {
  report: any;
};
const ReportCard = ({ report }: Props) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="report-houses-user card shadow p-5">
      <div>
        <h3 className="text-lg font-bold">{report?.reportType}</h3>
        <p className="text-gray-500 text-sm font-poppins">
          {isShow
            ? report?.reportMessage
            : report?.reportMessage?.length > 200
            ? report?.reportMessage?.slice(0, 200) + "..."
            : report?.reportMessage}

          {report?.reportMessage?.length > 200 && (
            <span
              className="text-success cursor-pointer select-none"
              onClick={() => setIsShow((state) => !state)}
            >
              {" "}
              {isShow ? "Show Less" : "Show More"}
            </span>
          )}
        </p>
        {/* Action Report */}
        <div className="report-houses-user-action flex items-center gap-4 mt-5">
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;

import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
type Props = {
  report: any;
  refetch: () => void;
};
const ReportCard = ({ report, refetch }: Props) => {
  const [isShow, setIsShow] = useState(false);
  const { user } = useAuth<authUserInterface | any>({});

  /* Handle Report Delete */
  const handleReportDelete = async () => {
    const isConfirm = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ["cancel", "delete"],
      dangerMode: true,
    });
    if (isConfirm) {
      const { data } = await axios.delete(
        `${base_backend_url}/api/v1/reports/delete/${report._id}?houseId=${report?.house}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (data.success) {
        swal("Report Deleted!", {
          icon: "success",
        });
      }
      refetch();
    }
  };

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
          <button
            className="btn btn-danger btn-sm"
            onClick={handleReportDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;

import axios from "axios";
import { BiCommentAdd } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import GlobalLoader from "../../../../components/GlobalLoader";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import { useGetHouseByHouseIdQuery } from "../../../../services/HouseApi";
import ReportCard from "./ReportCard";

type Props = {};

const ReportedHouses = (props: Props) => {
  const { houseId } = useParams();
  const { user } = useAuth<authUserInterface | any>({});

  const { data, isLoading } = useGetHouseByHouseIdQuery(houseId);

  const { data: reports, isLoading: reportsLoading } = useQuery(
    "reports",
    async () => {
      const { data } = await axios.get(
        `${base_backend_url}/api/v1/reports/reports-by-house/${houseId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      return data;
    }
  );
  console.log(reports?.data);

  if (isLoading || reportsLoading) {
    return <GlobalLoader />;
  }

  return (
    <div>
      <div className="p-4 my-4 bg-white">
        {/* Houses Card */}
        <div className="card sm:card-side bg-base-100 p-3 border py-1">
          <figure>
            <img
              src={
                data?.data?.image
                  ? base_backend_url + "/previews/" + data?.data?.image
                  : `https://placeimg.com/200/280/arch`
              }
              alt="Movie"
              className="w-full h-40 sm:h-32  rounded-md"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data?.data?.name}</h2>
            <p className="card-subtitle text-gray-500">{data?.data?.address}</p>
            <ul className="flex items-center gap-5 flex-wrap">
              <li>
                Price -{" "}
                <div className="badge badge-ghost">{data?.data?.price}</div>
              </li>
              <li>
                House Type -{" "}
                <div className="badge badge-ghost">{data?.data?.houseType}</div>
              </li>
              <li>
                Category -{" "}
                <div className="badge badge-ghost">{data?.data?.category}</div>
              </li>
              <li>
                House Use For -{" "}
                <div className="badge badge-ghost">
                  {data?.data?.houseUseFor}
                </div>
              </li>
            </ul>
          </div>
          <div className="card-end flex items-center gap-4">
            <p className="tooltip" data-tip="View House">
              {" "}
              <Link
                to={`/house/${data?.data?._id}`}
                className="btn btn-ghost btn-circle "
              >
                <BsEye />
              </Link>
            </p>
            <p
              className="tooltip tooltip-left"
              data-tip="View Reviews for this house"
            >
              {" "}
              <Link
                to={`/dashboard/houses/reviews/${data?.data?._id}`}
                className="btn btn-ghost btn-circle "
              >
                <BiCommentAdd />
              </Link>
            </p>
          </div>
        </div>
        {/* Reported Users */}
        <div className="report-houses-content my-5">
          <h3 className="text-2xl font-bold mb-6">Report's </h3>
          {reportsLoading ? (
            <GlobalLoader />
          ) : reports?.data?.length > 0 ? (
            <div className="report-houses-users grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {reports?.data?.map((report: any) => (
                <ReportCard key={report._id} report={report} />
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">No Reports Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportedHouses;

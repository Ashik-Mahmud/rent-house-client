import { BiCommentAdd } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReportCard from "./ReportCard";

type Props = {};

const ReportedHouses = (props: Props) => {
  return (
    <div>
      <div className="p-4 my-4 bg-white">
        {/* Houses Card */}
        <div className="card sm:card-side bg-base-100 p-3 border py-1">
          <figure>
            <img
              src="https://placeimg.com/200/280/arch"
              alt="Movie"
              className="w-full h-40 object-cover sm:h-32 rounded-md"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Rajbari New Villa</h2>
            <p className="card-subtitle text-gray-500">Rajbar, Rangpur</p>
            <ul className="flex flex-wrap items-center gap-5">
              <li>
                Price - <div className="badge badge-ghost">1200/m</div>
              </li>
              <li>
                House Type - <div className="badge badge-ghost">Rent</div>
              </li>
              <li>
                Category - <div className="badge badge-ghost">Duplex</div>
              </li>
              <li>
                House Use For -{" "}
                <div className="badge badge-ghost">Residential</div>
              </li>
            </ul>
          </div>
          <div className="card-end flex items-center gap-4">
            <p className="tooltip" data-tip="View House">
              {" "}
              <Link to="/house/4343" className="btn btn-ghost btn-circle ">
                <BsEye />
              </Link>
            </p>
            <p
              className="tooltip tooltip-left"
              data-tip="View Reviews for this house"
            >
              {" "}
              <Link to="/house/4343" className="btn btn-ghost btn-circle ">
                <BiCommentAdd />
              </Link>
            </p>
          </div>
        </div>
        {/* Reported Users */}
        <div className="report-houses-content my-5">
          <h3 className="text-2xl font-bold mb-6">Who Reports?</h3>
          <div className="report-houses-users grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <ReportCard />
            <ReportCard />
            <ReportCard />
            <ReportCard />
            <ReportCard />
            <ReportCard />
            <ReportCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportedHouses;

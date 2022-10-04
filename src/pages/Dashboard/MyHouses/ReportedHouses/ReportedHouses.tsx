import { BiCommentAdd } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {};

const ReportedHouses = (props: Props) => {
  return (
    <div>
      <div className="p-4 my-4 bg-white">
        {/* Houses Card */}
        <div className="card card-side bg-base-100 p-3 border py-1">
          <figure>
            <img
              src="https://placeimg.com/200/280/arch"
              alt="Movie"
              className="h-32 rounded-md"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Rajbari New Villa</h2>
            <p className="card-subtitle text-gray-500">Rajbar, Rangpur</p>
            <ul className="flex items-center gap-5">
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
          <h3 className="text-2xl font-bold">Who Reports?</h3>
          <div className="report-houses-users flex flex-wrap gap-4">
            <div className="report-houses-user">
              <div className="report-houses-user-img">
                <img src="https://placeimg.com/200/280/arch" alt="user" />
              </div>
              <div className="report-houses-user-info">
                <h4 className="text-xl font-bold">User Name</h4>
                <p className="text-gray-500">User Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportedHouses;

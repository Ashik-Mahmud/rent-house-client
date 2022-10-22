import { BiCommentAdd } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import GlobalLoader from "../../../../components/GlobalLoader";
import { useGetHouseByHouseIdQuery } from "../../../../services/HouseApi";
import AnsweredQuestions from "./AnsweredQuestions";

type Props = {};

const HouseQuestions = (props: Props) => {
  const { houseId } = useParams();

  const { data, isLoading } = useGetHouseByHouseIdQuery(houseId);

  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <>
      <div>
        <div className="p-5 my-4 bg-white">
          {/* Houses Card */}{" "}
          <div className="title mb-5">
            <h3 className="text-2xl font-bold mb-2">Manage Questions</h3>
          </div>
          <div className="card sm:card-side bg-base-100 p-3 border py-1">
            <figure>
              <img
                src="https://placeimg.com/200/280/arch"
                alt="Movie"
                className="w-full h-40 sm:h-32  rounded-md"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data?.data?.name}</h2>
              <p className="card-subtitle text-gray-500">
                {data?.data?.address}
              </p>
              <ul className="flex items-center gap-5 flex-wrap">
                <li>
                  Price -{" "}
                  <div className="badge badge-ghost">{data?.data?.price}</div>
                </li>
                <li>
                  House Type -{" "}
                  <div className="badge badge-ghost">
                    {data?.data?.houseType}
                  </div>
                </li>
                <li>
                  Category -{" "}
                  <div className="badge badge-ghost">
                    {data?.data?.category}
                  </div>
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
          {/* Houses Questions */}
          <div className="house-questions mt-4">
            <div className="houses-questions-content py-5">
              <AnsweredQuestions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseQuestions;

import axios from "axios";
import { BiCommentAdd } from "react-icons/bi";
import { BsArrowLeft, BsEye } from "react-icons/bs";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import GlobalLoader from "../../../../components/GlobalLoader";
import NoDataComponent from "../../../../components/NoDataComponent";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";
import { useGetHouseByHouseIdQuery } from "../../../../services/HouseApi";
import HouseReviewCard from "./HouseReviewCard";
type Props = {};

const HouseReviews = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  const { houseId } = useParams<{ houseId: string }>();
  const { data, isLoading } = useGetHouseByHouseIdQuery(houseId);
  const navigate = useNavigate();

  /* Get All Review For This Houses */
  const {
    data: reviews,
    isLoading: reviewsLoading,
    refetch: newRefetch,
  } = useQuery("reviews", async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/reviews/get-reviews-by-house-id/${houseId}`,
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    return data;
  });

  if (isLoading || reviewsLoading) return <GlobalLoader />;
  return (
    <div>
      <div className="p-5 my-4 bg-white">
        {/* Houses Card */}
        <div className="card sm:card-side bg-base-100 p-3 border py-1">
          <figure>
            <img
              src={
                data?.data?.image?.img
                  ? data?.data?.image?.img
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
                to={`/dashboard/houses/questions/${data?.data?._id}`}
                className="btn btn-ghost btn-circle "
              >
                <BiCommentAdd />
              </Link>
            </p>
          </div>
        </div>

        {/* Houses Reviews */}
        <div className="flex items-center gap-4 my-6">
          <span className="cursor-pointer text-xl" onClick={() => navigate(-1)}>
            <BsArrowLeft />
          </span>
          <h3 className="text-2xl font-bold">Review's </h3>
        </div>
        {reviews?.internal?.data?.length > 0 ? (
          <div className="houses-reviews py-6 grid grid-col-1 sm:grid-col-2 md:grid-col-3 lg:grid-cols-4 gap-5">
            {reviews?.internal?.data?.map((review: any) => (
              <HouseReviewCard
                key={review._id}
                review={review}
                house={houseId}
                refetch={newRefetch}
              />
            ))}
          </div>
        ) : (
          <NoDataComponent />
        )}

        <div className="pagination flex justify-center py-4">
          <button className="btn btn-ghost">Previous</button>
          <button className="btn btn-ghost">Next</button>
        </div>
      </div>
    </div>
  );
};

export default HouseReviews;

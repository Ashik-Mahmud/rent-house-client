import axios from "axios";
import { BsPlus } from "react-icons/bs";
import { useQuery } from "react-query";
import Slider from "react-slick";
import GlobalLoader from "../../../components/GlobalLoader";
import { base_backend_url } from "../../../configs/config";
import slickSettings from "../../../configs/slickConfig";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import HouseReviewCard from "./HouseReviewCard";
import ReviewModal from "./ReviewModal";

type Props = { data: any };

const Reviews = ({ data }: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});

  const {
    data: reviewData,
    isLoading,
    refetch,
  } = useQuery("reviews", async () => {
    const { data: res } = await axios.get(
      `${base_backend_url}/api/v1/reviews/get-reviews-by-house-id/${data._id}`
    );
    return res;
  });

  return (
    <>
      {/* Review Area */}
      <div className="review-area font-poppins bg-white p-10 my-4">
        <div className="title mb-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 justify-between">
          <div>
            <h3 className="text-2xl font-bold mt-3">House Reviews</h3>
            <span className="w-10 h-1 bg-success block"></span>
          </div>

          {data.allowReview === "Yes" && data?.owner?._id !== updatedUser?._id && (
            <label
              htmlFor="review-modal"
              className=" modal-button btn btn-success rounded-none btn-sm flex items-center gap-2"
            >
              Add Review <BsPlus />
            </label>
          )}
        </div>
        <div className="question-answer">
          {isLoading ? (
            <GlobalLoader />
          ) : (
            <ul className="">
              {reviewData?.data?.length > 0 ? (
                <Slider {...slickSettings}>
                  {reviewData?.data?.map((review: any) => (
                    <HouseReviewCard
                      key={review._id}
                      data={review}
                      refetch={refetch}
                    />
                  ))}
                </Slider>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-bold">No Reviews Yet</h3>
                </div>
              )}
            </ul>
          )}
        </div>
      </div>
      <ReviewModal houseId={data?._id} refetch={refetch} />
    </>
  );
};

export default Reviews;

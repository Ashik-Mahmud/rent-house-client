import { BsPlus } from "react-icons/bs";
import Slider from "react-slick";
import slickSettings from "../../../configs/slickConfig";
import HouseReviewCard from "./HouseReviewCard";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <>
      {/* Review Area */}
      <div className="review-area font-poppins bg-white p-10 my-4">
        <div className="title mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mt-3">House Reviews</h3>
            <span className="w-10 h-1 bg-success block"></span>
          </div>

          <label
            htmlFor="review-modal"
            className=" modal-button btn btn-success rounded-none btn-sm flex items-center gap-2"
          >
            Add Review <BsPlus />
          </label>
        </div>
        <div className="question-answer">
          <ul className="">
            <Slider {...slickSettings}>
              <HouseReviewCard />
              <HouseReviewCard />
              <HouseReviewCard />
              <HouseReviewCard />
              <HouseReviewCard />
              <HouseReviewCard />
            </Slider>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Reviews;

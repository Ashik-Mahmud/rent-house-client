import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import slickSettings from "../../../configs/slickConfig";
import ReviewCard from "./ReviewCard";
type Props = {};
const PublicReviews = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center py-20 px-96">
          <h1 className="text-4xl font-bold text-center my-4">
            What Our Customers Say
          </h1>
          <p className="text-center">
            We have a huge collection of houses and apartments for sale and
            rent. You can choose your dream house from our huge collection of
            houses and apartments.
          </p>
        </div>
        {/* Reviews Content */}
        <div className="reviews-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7"></div>
        <Slider {...slickSettings}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Slider>
      </div>
    </div>
  );
};

export default PublicReviews;

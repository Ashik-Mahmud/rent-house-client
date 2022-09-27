import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SectionTitle from "../../../components/SectionTItle";
import slickSettings from "../../../configs/slickConfig";
import ReviewCard from "./ReviewCard";
type Props = {};
const PublicReviews = (props: Props) => {
  return (
    <div>
      <div className="container mx-auto">
        <SectionTitle
          title="What customers says?"
          desc="There are many feedbacks we take from publics and make us more development and our 90% customers are satisfied with my services"
        />
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

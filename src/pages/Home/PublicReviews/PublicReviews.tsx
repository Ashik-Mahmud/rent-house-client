import axios from "axios";
import { useQuery } from "react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import GlobalLoader from "../../../components/GlobalLoader";
import NoDataComponent from "../../../components/NoDataComponent";
import SectionTitle from "../../../components/SectionTItle";
import { base_backend_url } from "../../../configs/config";
import slickSettings from "../../../configs/slickConfig";
import ReviewCard from "./ReviewCard";
type Props = {};

const Fade = require("react-reveal/Fade");
const PublicReviews = (props: Props) => {
  const { data, isLoading } = useQuery("reviews", async () => {
    const { data } = await axios.get(`${base_backend_url}/api/v1/reviews/all`);
    return data;
  });

  if (isLoading) return <GlobalLoader />;

  if (data?.data?.length === 0) {
    return <NoDataComponent />;
  }

  return (
    <div>
      <div className="container mx-auto">
        <SectionTitle
          title="What customers says?"
          desc="There are many feedbacks we take from publics and make us more development and our 90% customers are satisfied with my services"
        />
        {/* Reviews Content */}
        <Fade top distance="20px">
          <div className="reviews-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7"></div>
          <Slider {...slickSettings}>
            {data?.data?.slice(0, 10)?.map((review: any, ind: number) => (
              <ReviewCard key={review?._id} review={review} />
            ))}
          </Slider>
        </Fade>
      </div>
    </div>
  );
};

export default PublicReviews;

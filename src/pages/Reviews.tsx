import SectionTitle from "../components/SectionTItle";
import ReviewCard from "./Home/PublicReviews/ReviewCard";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <section>
      <div className="container mx-auto py-10 text-center">
        <SectionTitle
          title="Total Reviews"
          desc="Yah! here you will get all the reviews which one public leave for us"
        />
        <div className="review-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </section>
  );
};

export default Reviews;

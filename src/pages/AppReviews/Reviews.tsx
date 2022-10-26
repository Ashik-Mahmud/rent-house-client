import AppReviewCard from "./AppReviewCard";

import { ScrollToTop } from "react-simple-scroll-up";
type Props = {};

const Reviews = (props: Props) => {
  return (
    <section>
      <ScrollToTop
        size={60}
        className="z-50"
        strokeFillColor="#36D399"
        bgColor="#fff"
        symbolSize={30}
        symbolColor="#36D399"
      />
      <div className="container mx-auto py-10 text-center font-poppins mb-10">
        <div className=" my-10 flex items-center justify-between">
          <div className="title text-left">
            <h3 className="text-3xl font-bold">Public Reviews About Us</h3>
            <div className="w-32 h-1 mt-3 bg-success"></div>
          </div>
          <input
            type="search"
            placeholder="Search by your name"
            className="input input-ghost input-bordered"
          />
        </div>
        <div className="review-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <AppReviewCard />
          <AppReviewCard />
          <AppReviewCard />
          <AppReviewCard />
          <AppReviewCard />
          <AppReviewCard />
          <AppReviewCard />
          <AppReviewCard />
          <AppReviewCard />
          <AppReviewCard />
          <AppReviewCard />
          <AppReviewCard />
        </div>
      </div>
    </section>
  );
};

export default Reviews;

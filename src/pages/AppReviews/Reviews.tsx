import AppReviewCard from "./AppReviewCard";

import axios from "axios";
import { useQuery } from "react-query";
import { ScrollToTop } from "react-simple-scroll-up";
import GlobalLoader from "../../components/GlobalLoader";
import NoDataComponent from "../../components/NoDataComponent";
import { base_backend_url } from "../../configs/config";
type Props = {};

const Reviews = (props: Props) => {
  /* Get All the Public review from Here */
  const { data, isLoading } = useQuery("reviews", async () => {
    const { data } = await axios.get(`${base_backend_url}/api/v1/reviews/all`);
    return data;
  });

  if (isLoading) return <GlobalLoader />;

  if (data?.data?.length === 0) {
    return <NoDataComponent />;
  }

  console.log(data);
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
          {data?.data?.map((review: any, ind: number) => (
            <AppReviewCard key={review?._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

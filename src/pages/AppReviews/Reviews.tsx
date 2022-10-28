import AppReviewCard from "./AppReviewCard";

import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ScrollToTop } from "react-simple-scroll-up";
import GlobalLoader from "../../components/GlobalLoader";
import NoDataComponent from "../../components/NoDataComponent";
import { base_backend_url } from "../../configs/config";
import useTitle from "../../hooks/useTitle";
type Props = {};

const Fade = require("react-reveal/Fade");

const Reviews = (props: Props) => {
  useTitle("Reviews");
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  /* pagination states */
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(8);

  /* Get All the Public review from Here */
  const { data, isLoading } = useQuery(
    ["reviews", limit, currentPage],
    async () => {
      const { data } = await axios.get(
        `${base_backend_url}/api/v1/reviews/all?limit=${limit}&page=${currentPage}`
      );
      return data;
    }
  );

  /* Handle Pagination */
  const totalPage = Math.ceil(data?.count / limit);
  let pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  /* Handle Next button */
  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  /* Handle Previous button */
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const searchedData = data?.data?.filter((item: any) => {
      return item?.author?.name?.toLowerCase()?.includes(search?.toLowerCase());
    });
    setSearchedData(searchedData);
  }, [search, data]);

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
        <Fade top distance="20px">
          <div className=" my-10 flex items-center justify-between">
            <div className="title text-left">
              <h3 className="text-3xl font-bold">Public Reviews About Us</h3>
              <div className="w-32 h-1 mt-3 bg-success"></div>
            </div>
            <input
              type="search"
              placeholder="Search by your name"
              className="input input-ghost input-bordered"
              onInput={(e) => setSearch(e.currentTarget.value)}
            />
          </div>
        </Fade>
        {isLoading ? (
          <GlobalLoader />
        ) : searchedData?.length > 0 ? (
          <Fade top distance="20px">
            <div className="review-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {searchedData?.map((review: any, ind: number) => (
                <AppReviewCard key={review?._id} review={review} />
              ))}
            </div>
          </Fade>
        ) : (
          <NoDataComponent />
        )}
        {limit < data?.count && (
          <div className="pagination flex items-center justify-center mt-10">
            {pageNumbers?.map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`${
                  currentPage === number
                    ? "bg-success text-white"
                    : "bg-gray-200 text-gray-500"
                } mx-1 px-3 py-1 rounded-full`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={handleNext}
              className={`${
                currentPage === totalPage
                  ? "bg-gray-200 text-gray-500 pointer-events-none"
                  : "bg-success text-white pointer-events-auto"
              } mx-1 px-3 py-1 rounded-full`}
            >
              Next
            </button>
            <button
              onClick={() => setCurrentPage(1)}
              className={`${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 pointer-events-none"
                  : "bg-success text-white pointer-events-auto"
              } mx-1 px-3 py-1 rounded-full`}
            >
              First
            </button>
            <button
              onClick={() => setCurrentPage(totalPage)}
              className={`${
                currentPage === totalPage
                  ? " bg-gray-200  text-gray-500  pointer-events-none"
                  : " bg-success  text-white pointer-events-auto"
              } mx-1 px-3 py-1 rounded-full`}
            >
              Last
            </button>

            <button
              onClick={handlePrevious}
              className={`${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 pointer-events-none"
                  : "bg-success text-white pointer-events-auto"
              } mx-1 px-3 py-1 rounded-full`}
            >
              Prev
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;

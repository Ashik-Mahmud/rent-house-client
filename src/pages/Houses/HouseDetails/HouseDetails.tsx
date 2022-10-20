import { useState } from "react";
import { BiMap } from "react-icons/bi";
import { BsArrowLeft, BsHeartFill } from "react-icons/bs";
import { FiMaximize2 } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdReportGmailerrorred } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import GlobalLoader from "../../../components/GlobalLoader";
import { useGetHouseByHouseIdQuery } from "../../../services/HouseApi";
import Address from "./Address";
import BookNow from "./BookNowModal";
import Gallery from "./Gallery";
import Others from "./Others";
import Owner from "./Owner";
import Question from "./Question";
import QuestionModal from "./QuestionModal";
import ReportModal from "./ReportModal";
import ReviewModal from "./ReviewModal";
import Reviews from "./Reviews";

/* Question Modal */

type Props = {};

const HouseDetails = (props: Props) => {
  /* Get House ID */
  const { houseId } = useParams<{ houseId: string }>();
  const { data, isLoading, error } = useGetHouseByHouseIdQuery(houseId);
  const [isBigImage, setIsBigImage] = useState(false);
  const navigate = useNavigate();

  if (isLoading) return <GlobalLoader />;
  if (error) {
    console.log(error);
    return (
      <h1 className="p-10 text-center text-3xl py-20">
        Oh nooo!!! Something went wrong. Please try again.
      </h1>
    );
  }

  return (
    <>
      <section>
        <div className="container mx-auto py-10 ">
          <div className="cards">
            <div className="card-header flex-col sm:flex-row flex items-center justify-between my-5 bg-white p-4 ">
              <div className="left flex items-center gap-4">
                <div
                  className="back text-3xl cursor-pointer tooltip"
                  data-tip="Backward"
                  onClick={() => navigate(-1)}
                >
                  <BsArrowLeft />{" "}
                </div>
                <h2 className="text-2xl font-bold">{data?.data?.name}</h2>
              </div>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="send-report-modal"
                  className="report tooltip flex items-center gap-2 btn btn-ghost"
                  data-tip="Report House"
                >
                  <MdReportGmailerrorred /> Report
                </label>
                <div
                  className="heart tooltip flex items-center gap-2 btn btn-ghost"
                  data-tip="Loved House"
                >
                  <BsHeartFill /> {data?.data?.likes}
                </div>
                <div className="flex items-center gap-2">
                  <BiMap /> {data?.data?.address}
                </div>
              </div>
            </div>
            <div className="card-bodies w-full relative">
              {/* Images */}
              <div
                className={`preview-image w-full p-5 bg-white ${
                  isBigImage && "w-screen h-screen fixed left-0 top-0 z-50"
                }`}
              >
                <div
                  onClick={() => setIsBigImage((state) => !state)}
                  className={`maximize  grid place-items-center bg-white absolute right-10 top-10 cursor-pointer w-10 h-10`}
                >
                  <FiMaximize2 />
                </div>
                <img
                  src={
                    data?.data?.image
                      ? "http://localhost:5000/previews/" + data?.data?.image
                      : "https://placeimg.com/400/225/arch"
                  }
                  alt={data?.data?.name}
                  className={`w-full  object-cover ${
                    isBigImage ? "h-full" : "h-96"
                  }`}
                />
              </div>
              {/* House Details */}
              <div className="house-details my-5 bg-white p-10">
                {/* Details */}
                <div className="details ">
                  <div className="title mb-6">
                    <h3 className="text-2xl font-bold mt-3">Details</h3>
                    <span className="w-10 h-1 bg-success block"></span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="flex items-center gap-2">
                            <GoHome /> Price
                          </td>
                          <th>
                            <span className="badge badge-ghost">
                              {data?.data?.price}/taka
                            </span>
                          </th>
                          <td className="flex items-center gap-2">
                            <GoHome /> House Type
                          </td>
                          <th>
                            <span className="badge badge-ghost">
                              {data?.data?.houseType}
                            </span>
                          </th>
                          <td className="flex items-center gap-2">
                            <GoHome /> Category
                          </td>
                          <th>
                            <span className="badge badge-ghost">
                              {data?.data?.category}
                            </span>
                          </th>
                          <td className="flex items-center gap-2">
                            <GoHome /> House Use For
                          </td>
                          <th>
                            <span className="badge badge-ghost">
                              {data?.data?.houseUseFor}
                            </span>
                          </th>
                          <td className="flex items-center gap-2">
                            <GoHome /> Bedrooms
                          </td>
                          <th>
                            <span className="badge badge-ghost">
                              {data?.data?.bedrooms} pcs
                            </span>
                          </th>
                          <td className="flex items-center gap-2">
                            <GoHome /> Bathrooms
                          </td>
                          <th>
                            <span className="badge badge-ghost">
                              {data?.data?.bathrooms} pcs
                            </span>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* End */}
                <div className="desc ">
                  <div className="title mb-6">
                    <h3 className="text-2xl font-bold mt-3">Description</h3>
                    <span className="w-10 h-1 bg-success block"></span>
                  </div>
                  <p className="h-52 sm:h-auto overflow-y-auto">
                    {data?.data?.description}
                  </p>
                </div>
              </div>

              <Address data={data?.data} />
              <Owner owner={data?.data?.owner} />
              <Others />
              <Gallery gallery={data?.data?.gallery} />
              <Question data={data?.data} />
              <Reviews />
            </div>
          </div>
        </div>
        <div className="book-now text-center mb-8">
          <label
            htmlFor="book-now-modal"
            className="btn btn-lg btn-success modal-button"
          >
            Book Now
          </label>
        </div>
      </section>

      {/* Modals */}
      <BookNow />
      <QuestionModal />
      <ReviewModal />
      <ReportModal />
    </>
  );
};

export default HouseDetails;

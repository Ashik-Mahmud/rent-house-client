import axios from "axios";
import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import { BiMap } from "react-icons/bi";
import { BsArrowLeft, BsHeart, BsHeartFill } from "react-icons/bs";
import { FiMaximize2 } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdReportGmailerrorred } from "react-icons/md";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import GlobalLoader from "../../../components/GlobalLoader";
import { base_backend_url } from "../../../configs/config";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import Address from "./Address";
import BookNow from "./BookNowModal";
import Gallery from "./Gallery";
import Others from "./Others";
import Owner from "./Owner";
import Question from "./Question";
import QuestionModal from "./QuestionModal";
import ReportModal from "./ReportModal";
import Reviews from "./Reviews";

/* Question Modal */

type Props = {};

const HouseDetails = (Props: Props) => {
  /* Get House ID */
  const { updatedUser, user } = useAuth<authUserInterface | any>({});
  const { houseId } = useParams<{ houseId: string }>();

  const { data, isLoading, error, refetch } = useQuery(
    ["houseDetails", houseId],
    () => getHouseDetails()
  );

  /* Get House Details Function */
  const getHouseDetails = async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/houses/${houseId}`
    );
    return data;
  };

  const [clicked, setClicked] = useState(false);

  const [isBigImage, setIsBigImage] = useState(false);
  const navigate = useNavigate();

  /* Handle Favorite */
  const handleFavorite = async () => {
    localStorage.setItem("favorite", JSON.stringify(!clicked));
    setClicked(() => {
      return localStorage.getItem("favorite") === "true" ? true : false;
    });
    const { data } = await axios.patch(
      `${base_backend_url}/api/v1/houses/like-count/${houseId}?like=${clicked}`
    );
    cogoToast.success(data.message);
    refetch();
  };

  useEffect(() => {
    const favoriteValue: any = localStorage.getItem("favorite");
    const parsedValue = JSON.parse(favoriteValue);
    setClicked(parsedValue || false);
  }, [clicked]);

  /* get question by user id */
  const {
    data: questions,
    isLoading: loading,
    refetch: newFetch,
  } = useQuery(["question"], () => updatedUser?._id && getQuestionsByAuthor());

  const getQuestionsByAuthor = async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/questions/questions-by-author/${user?.user?._id}?houseId=${houseId}`,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );

    return data;
  };

  if (isLoading || loading) return <GlobalLoader />;
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
                  data-tip={clicked ? "Dislike" : "Like"}
                  onClick={() => handleFavorite()}
                >
                  {clicked ? (
                    <BsHeartFill className="text-red-500" />
                  ) : (
                    <BsHeart />
                  )}{" "}
                  {data?.data?.likes}
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
                    data?.data?.image?.img
                      ? data?.data?.image?.img
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
              <Question
                data={data?.data}
                questions={questions}
                loading={loading}
                newFetch={newFetch}
              />
              <Reviews data={data?.data} />
            </div>
          </div>
        </div>
        <div className="book-now text-center mb-8">
          {data?.data?.owner?._id !== updatedUser?._id &&
            updatedUser?.role !== "admin" &&
            updatedUser?.role !== "manager" && (
              <label
                htmlFor="book-now-modal"
                className="btn btn-lg btn-success modal-button"
              >
                Book Now
              </label>
            )}
        </div>
      </section>

      {/* Modals */}
      <BookNow />
      <QuestionModal houseId={data?.data?._id} newFetch={newFetch} />

      <ReportModal
        title={data?.data?.name}
        houseId={data?.data?.name}
        userId={data?.data?.owner?._id}
      />
    </>
  );
};

export default HouseDetails;

import axios from "axios";
import { BiStar } from "react-icons/bi";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import GlobalLoader from "../../../components/GlobalLoader";
import SectionTitle from "../../../components/SectionTItle";
import { base_backend_url } from "../../../configs/config";

type Props = {};

const BestHouses = (props: Props) => {
  const { data, isLoading } = useQuery("bestHouse", async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/houses/top-4-houses`
    );
    return data?.data;
  });

  console.log(data);

  if (isLoading) {
    return <GlobalLoader />;
  }

  if (data?.length === 0) {
    return <div>no best product found.</div>;
  }
  return (
    <div className="font-poppins">
      <div className="container mx-auto">
        <SectionTitle
          title="Top 4 Best Houses"
          desc=" We have a huge collection of houses and apartments for sale and rent.
        You can choose your dream house from our huge collection of houses and
        apartments."
        />
      </div>
      <div className="container mx-auto">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${
            data?.length === 4 ? "xl:grid-cols-4" : "xl:grid-cols-3"
          }`}
        >
          {data?.map((house: any, ind: number) => (
            <div className="shadow p-5 rounded cursor-pointer" key={house?._id}>
              <img
                className="rounded object-cover w-full mb-4"
                src={
                  house?.image?.img
                    ? house?.image?.img
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWw_fKQ6H8mfIq0v-fvyUiJL0osaQODoC2og&usqp=CAU"
                }
                alt={house?.name}
              />
              <div className="title">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{house?.name}</h3>
                  <span className="bg-gray-200 p-1 rounded-md text-xs">
                    {house?.houseType}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-500">
                    {house?.price}{" "}
                    {house?.houseType === "Sale" ? "/taka" : "/month"}
                  </span>
                  {house?.isAvailable && (
                    <span className="text-xs text-sky-400">available</span>
                  )}
                </div>
              </div>
              <div className="info">
                <span className="category">{house?.category}</span>
                <p className="text-sm text-gray-500 mt-2">
                  {house?.description?.slice(0, 100) + "..."}
                </p>
                <Link to={`/house/${house?._id}`}>
                  <span className="p-2 rounded bg-sky-100 mt-4 px-4 flex items-center justify-between">
                    {" "}
                    View Details
                    <span title="Best Ratings">
                      <BiStar />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestHouses;

import axios from "axios";
import { BiBath, BiBed, BiMoney, BiTrophy } from "react-icons/bi";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import GlobalLoader from "../../../../components/GlobalLoader";
import NoDataComponent from "../../../../components/NoDataComponent";
import { base_backend_url } from "../../../../configs/config";
import useAuth from "../../../../hooks/useAuth";
import { authUserInterface } from "../../../../interfaces/UserInterface";

type Props = {};

const MostLovesHouse = (props: Props) => {
  const { user } = useAuth<authUserInterface | any>({});
  const { data, isLoading } = useQuery(["houses"], () =>
    getMostPopularHouses()
  );

  const getMostPopularHouses = async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/houses/top-3-houses-by-user`,
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      }
    );
    return data?.data;
  };

  if (isLoading) return <GlobalLoader />;
  return (
    <div className="p-7 bg-white">
      <h3 className="text-lg font-bold">Most Loves Houses</h3>
      {data?.length > 0 ? (
        <div className="content py-5">
          {data?.slice(0, 2).map((house: any) => (
            <LovesHouseCard key={house._id} house={house} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <NoDataComponent />
        </div>
      )}
    </div>
  );
};

const LovesHouseCard = ({ house }: any) => {
  return (
    <div className="card sm:card-side  bg-base-100 shadow border px-5 rounded mb-5">
      <figure>
        <img
          src={
            house?.image?.img
              ? house?.image?.img
              : "https://placeimg.com/400/225/arch"
          }
          className="h-40 w-full object-cover rounded"
          alt={house?.name || "house"}
        />
      </figure>
      <div className="card-body p-0 px-6 py-4">
        <h2 className="card-title">
          {house?.name || "loading..."}{" "}
          <div className="badge badge-success">{house?.views}</div>
          {house?.status === "pending" && (
            <span className="badge badge-warning">pending</span>
          )}
          {house?.status === "rejected" && (
            <span className="badge badge-error">rejected</span>
          )}
        </h2>
        <small>{house?.address}</small>
        <ul className="flex items-center flex-wrap gap-3 font-poppins text-sm">
          <li className="flex items-center gap-2">
            <BiBed /> {house?.bedrooms}
          </li>
          <li className="flex items-center gap-2">
            <BiBath /> {house?.bathrooms}
          </li>
          <li className="flex items-center gap-2">
            <BiTrophy /> {house?.category}
          </li>
          <li className="flex items-center gap-2">
            <BiMoney /> {house?.price}
          </li>
        </ul>
        <p className="text-xs font-poppins my-1">
          {house?.description?.slice(0, 100)}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/house/${house?._id}`} className="btn btn-primary btn-xs">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MostLovesHouse;

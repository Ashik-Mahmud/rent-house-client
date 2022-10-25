import axios from "axios";
import { BiSearch } from "react-icons/bi";
import { useQuery } from "react-query";
import GlobalLoader from "../../../components/GlobalLoader";
import NoDataComponent from "../../../components/NoDataComponent";
import { base_backend_url } from "../../../configs/config";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import BookedHouseCard from "./BookedHouseCard";

type Props = {};

const PurchaseHouse = (props: Props) => {
  const { user, updatedUser } = useAuth<authUserInterface | any>({});
  /* Send Request to get Booked Houses */
  const { data, isLoading } = useQuery("bookedHouses", async () => {
    const { data } = await axios.get(
      `${base_backend_url}/api/v1/payment/booked-houses`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    return data;
  });

  if (isLoading) {
    return <GlobalLoader />;
  }

  return (
    <>
      <div>
        <div className="p-4 my-4 bg-white">
          <div className="title flex-col sm:flex-row flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold">Booked House</h3>
              <small className="badge badge-success">customer</small>
            </div>
            <div className="flex items-center gap-3 mt-4 sm:mt-0">
              <div className="search flex items-center">
                <input
                  type="text"
                  placeholder="Search by House Name"
                  className="input-sm rounded-none outline-none"
                />
                <button className="btn btn-ghost rounded-full">
                  <BiSearch />
                </button>
              </div>
              <div className="recent">
                <select
                  name=""
                  id=""
                  className="cursor-pointer font-poppins outline-none p-1 rounded border border-base-300"
                >
                  <option value="">Recent</option>
                  <option value="">Oldest</option>
                </select>
              </div>
            </div>
          </div>
          {data?.data?.bookedHouses?.length > 0 ? (
            <div className="booked-houses grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10">
              {data?.data?.bookedHouses?.map((house: any) => (
                <BookedHouseCard key={house?._id} house={house} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <NoDataComponent />
            </div>
          )}

          <div className="pagination py-10">
            <div className="flex items-center justify-center gap-2">
              <button className="btn btn-ghost rounded-full">1</button>
              <button className="btn btn-ghost rounded-full">2</button>
              <button className="btn btn-ghost rounded-full btn-active">
                3
              </button>
              <button className="btn btn-ghost rounded-full">4</button>
              <button className="btn btn-ghost rounded-full">5</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseHouse;

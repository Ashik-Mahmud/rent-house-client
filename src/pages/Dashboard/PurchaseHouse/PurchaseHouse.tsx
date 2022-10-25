import axios from "axios";
import { useState } from "react";
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
  const { user } = useAuth<authUserInterface | any>({});
  const [filter, setFilter] = useState("-createdAt");
  const [search, setSearch] = useState("");

  /* pagination states */
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  /* Send Request to get Booked Houses */
  const { data, isLoading } = useQuery(
    ["bookedHouses", filter, search, currentPage, limit],
    async () => {
      const { data } = await axios.get(
        `${base_backend_url}/api/v1/payment/booked-houses?filter=${filter}&search=${search}&page=${currentPage}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      return data;
    }
  );

  /* Handle Pagination */
  const totalPages = Math.ceil(data?.data?.count / limit);
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
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
                  placeholder="Search by TransactionID"
                  className="input-sm rounded-none outline-none"
                  onInput={(e) => setSearch(e.currentTarget.value)}
                />
                <button className="btn btn-ghost rounded-full">
                  <BiSearch />
                </button>
              </div>
              <div className="recent">
                <select
                  name=""
                  id=""
                  onChange={(e) => setFilter(e.target.value)}
                  className="cursor-pointer font-poppins outline-none p-1 rounded border border-base-300"
                >
                  <option value="-createdAt">Recent</option>
                  <option value="createdAt">Oldest</option>
                </select>
              </div>
              <div className="limit">
                <select
                  name=""
                  id=""
                  onChange={(e) => setLimit(Number(e.target.value))}
                  className="cursor-pointer font-poppins outline-none p-1 rounded border border-base-300"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </div>
            </div>
          </div>

          {isLoading ? (
            <GlobalLoader />
          ) : data?.data?.bookedHouses?.length > 0 ? (
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

          {limit < totalPages && (
            <div className="pagination py-10">
              <div className="flex items-center justify-center gap-2">
                {pages?.map((page: number) => (
                  <button
                    className={`btn btn-ghost rounded-full ${
                      page === currentPage && "btn-active"
                    } `}
                    key={page}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PurchaseHouse;

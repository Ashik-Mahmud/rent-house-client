import axios from "axios";
import { useEffect, useState } from "react";
import { BsGrid1X2, BsGrid3X2 } from "react-icons/bs";
import { useQuery } from "react-query";
import GlobalLoader from "../../components/GlobalLoader";
import FilterSidebar from "./FilterSidebar";
import HouseCard from "./HouseCard";
type Props = {};

const Houses = (props: Props) => {
  const [gridView, setGridView] = useState(true);

  /* Handle Grid View With LocalStorage Database*/
  const handleGridView = () => {
    localStorage.setItem("gridView", JSON.stringify(!gridView));
    setGridView(() => {
      return localStorage.getItem("gridView") === "true" ? true : false;
    });
  };

  useEffect(() => {
    const getGridViewValue: any = localStorage.getItem("gridView");
    const parsedValue = JSON.parse(getGridViewValue);
    setGridView(parsedValue);
  }, [gridView]);

  /* Get All This Approved Houses */
  const [getAllDistrict, setGetAllDistrict] = useState([]);
  const [sortBy, setSortBy] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [filterByDistrict, setFilterByDistrict] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const { data, isLoading, isError, refetch } = useQuery(
    ["houses", perPage, currentPage, sortBy, filterByDistrict, searchKey],
    async () => getAllHousesWithFilter()
  );

  const getAllHousesWithFilter = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/houses?limit=${perPage}&page=${currentPage}&sortBy=${sortBy}&district=${filterByDistrict}&name=${searchKey}`
    );
    return data?.data;
  };

  /* Pagination Handler */
  const totalPage = Math.ceil(data?.totalHouses / perPage);

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
      refetch();
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      refetch();
    }
  };

  /* Handle Sort By */

  const handleSortBy = (e: any) => {
    setSortBy(e.target.value);
    refetch();
  };

  useEffect(() => {
    setGetAllDistrict(() => {
      return data?.allHouse.map((house: any) => house.district);
    });
  }, [data]);

  if (isError) {
    return (
      <div className="py-10 text-center">
        <h3 className="font-bold text-4xl">Something went wrong</h3>
      </div>
    );
  }

  return (
    <section id="houses" className="overflow-x-hidden">
      <div className="container mx-auto pb-20 pt-20 px-5">
        {/* <div className="house-title text-center font-bold p-6 bg-white my-5 rounded shadow">
          <h2 className="text-3xl">Welcome to HOUSES</h2>
        </div> */}
        <div className="house-content flex-col sm:flex-row flex items-start gap-10">
          {/* Filters Sidebar */}

          <FilterSidebar
            getAllDistrict={getAllDistrict}
            setFilterByDistrict={setFilterByDistrict}
            setSearchKey={setSearchKey}
          />

          {/* Filters Sidebar end */}
          {/* Content */}
          <div className="house-content-right border p-5 flex-grow bg-white">
            <div className="house-content-right-title">
              <div className="house-header sm:flex bg-slate-50 rounded-lg justify-between text-sm px-7 items-center">
                <div className="filter-by-recent flex items-center justify-start gap-6 flex-1">
                  <div className="flex items-center gap-2">
                    <b>{data?.houses?.length}</b> results{" "}
                  </div>
                  <div className="flex items-center gap-4 ">
                    <div className="w-20">Sort By</div>
                    <div className="input-group flex items-center my-2 border p-1 rounded-md mt-2">
                      <select
                        name=""
                        className="outline-none  w-full pl-4 cursor-pointer text-sm bg-slate-50"
                        id=""
                        onChange={(e) => handleSortBy(e)}
                      >
                        <option value="all">All</option>
                        <option value="-createdAt">Most Recent</option>
                        <option value="-views">Most Popular</option>
                        <option value="-price">Most Expensive</option>
                        <option value="price">Most Cheapest</option>
                        <option value="week">Last Weeks</option>
                        <option value="month">Last Month</option>
                        <option value="year">Last Year</option>
                        <option value="createdAt">Oldest</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold">Most Popular</h2>
                  <div className="grid-view">
                    <span
                      className="text-xl cursor-pointer bg-white p-2 block rounded"
                      onClick={handleGridView}
                    >
                      {gridView ? <BsGrid1X2 /> : <BsGrid3X2 />}
                    </span>
                  </div>
                </div>
              </div>

              {/* Houses Main Content */}
              {isLoading ? (
                <GlobalLoader />
              ) : data?.houses?.length > 0 ? (
                <>
                  {" "}
                  <div
                    className={`house-main-content p-6 grid  gap-6 ${
                      gridView
                        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                        : "grid-cols-1 "
                    }`}
                  >
                    {data?.houses?.map((house: any) => (
                      <HouseCard
                        key={house._id}
                        house={house}
                        gridView={gridView}
                      />
                    ))}
                  </div>
                  {/* House Main Content End */}
                  {/* pagination */}
                  {perPage < data?.totalHouses && (
                    <div className="pagination flex items-center justify-between mt-20 mb-6 px-7">
                      <div className="flex items-center gap-2 text-sm">
                        Show{" "}
                        <select
                          name=""
                          id=""
                          className="select select-sm select-bordered rounded-none tooltip tooltip-info"
                          title="Limit for showing"
                          onChange={(event) =>
                            setPerPage(Number(event.target.value))
                          }
                        >
                          <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="15">15</option>
                        </select>
                        entries
                      </div>
                      <div className="flex items-center gap-6">
                        <div>
                          <button
                            className="btn btn-sm btn-ghost"
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                          >
                            Previous
                          </button>

                          <button
                            className="btn btn-sm btn-ghost "
                            disabled={currentPage === totalPage}
                            onClick={handleNextPage}
                          >
                            Next
                          </button>
                        </div>
                        <span>
                          Page <b>{currentPage} </b> of <b>{totalPage}</b>
                        </span>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center text-2xl font-bold">
                  No Houses Found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Houses;

import FilterSidebar from "./FilterSidebar";
import HouseCard from "./HouseCard";

type Props = {};

const Houses = (props: Props) => {
  return (
    <section id="houses">
      <div className="container mx-auto pb-20">
        <div className="house-title text-center py-5 font-bold">
          <h2 className="text-3xl">Welcome to HOUSES</h2>
        </div>
        <div className="house-content flex items-start gap-10">
          {/* Filters Sidebar */}
          <FilterSidebar />
          {/* Filters Sidebar end */}
          {/* Content */}
          <div className="house-content-right border p-5 flex-grow bg-white">
            <div className="house-content-right-title">
              <div className="house-header flex bg-slate-50 rounded-lg justify-between text-sm px-7 items-center">
                <div className="filter-by-recent flex items-center justify-start gap-6 flex-1">
                  <div className="flex items-center gap-2">
                    <b>452445</b> results{" "}
                  </div>
                  <div className="flex items-center gap-4 ">
                    <div className="w-20">Sort By</div>
                    <div className="input-group flex items-center my-2 border p-1 rounded-md mt-2">
                      <select
                        name=""
                        className="outline-none  w-full pl-4 cursor-pointer text-sm bg-slate-50"
                        id=""
                      >
                        <option value="">All</option>
                        <option value="Bungalow">Most Recent</option>
                        <option value="Duplex">Last Weeks</option>
                        <option value="Flat">Last Month</option>
                        <option value="Flat">Last Year</option>
                      </select>
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold">Most Popular</h2>
              </div>

              {/* Houses Main Content */}
              <div className="house-main-content p-6 grid grid-cols-4 gap-6">
                <HouseCard />
                <HouseCard />
                <HouseCard />
                <HouseCard />
                <HouseCard />
                <HouseCard />
                <HouseCard />
                <HouseCard />
                <HouseCard />
                <HouseCard />
                <HouseCard />
                <HouseCard />
              </div>
              {/* House Main Content End */}
              {/* pagination */}
              <div className="pagination flex justify-center py-10">
                <div className="btn-group ">
                  <button className="w-10 h-10 rounded-full cursor-pointer text-xl font-bold font-poppins">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-full cursor-pointer text-xl font-bold font-poppins btn-active">
                    2
                  </button>
                  <button className="w-10 h-10 rounded-full cursor-pointer text-xl font-bold font-poppins">
                    3
                  </button>
                  <button className="w-10 h-10 rounded-full cursor-pointer text-xl font-bold font-poppins">
                    4
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Houses;

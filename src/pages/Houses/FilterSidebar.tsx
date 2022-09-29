import { BsSearch } from "react-icons/bs";
import { RiEqualizerLine } from "react-icons/ri";
import DuelSlider from "../../components/DuelSlider";

type Props = {};

const FilterSidebar = (props: Props) => {
  return (
    <>
      {/* Sidebar */}
      <div className="house-content-left  border p-6 bg-white shadow rounded-md">
        <div className="house-content-left-title flex items-center justify-between">
          <h2 className="text-xl font-bold">Filters Houses</h2>
          <div className="advance-filters cursor-pointer">
            <RiEqualizerLine />
          </div>
        </div>
        <div className="filters">
          {/* Filter by Name */}
          <div className="filter-by-name border  rounded p-3 relative mt-10">
            <div className="filter-by-name-title absolute -top-4 bg-white border rounded p-1">
              <h3 className="text-xs font-poppins">Filter by Name</h3>
            </div>
            <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
              <div className="icon">
                <BsSearch />
              </div>
              <input
                type="text"
                className="form-control outline-none pl-4"
                placeholder="Search by name"
              />
            </div>
          </div>
          {/* End */}
          {/* Filter by Category */}
          <div className="filter-by-name border  rounded p-3 relative mt-10">
            <div className="filter-by-name-title absolute -top-4 bg-white border rounded p-1">
              <h3 className="text-xs font-poppins">Filter by Category</h3>
            </div>
            <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
              <div className="icon">
                <BsSearch />
              </div>
              <select
                name=""
                className="outline-none w-full pl-4 cursor-pointer text-sm"
                id=""
              >
                <option value="">Select Category</option>
                <option value="Bungalow">Bungalow</option>
                <option value="Duplex">Duplex</option>
                <option value="Flat">Flat</option>
                <option value="Terrace">Terrace</option>
              </select>
            </div>
          </div>
          {/* End */}
          {/* Filter by Price */}
          <div className="filter-by-name border  rounded p-3 relative mt-10">
            <div className="filter-by-name-title absolute -top-4 bg-white border rounded p-1">
              <h3 className="text-xs font-poppins">Filter by Price</h3>
            </div>
            <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
              <DuelSlider />
            </div>
          </div>
          {/* End */}
          {/* Filter by House Type */}
          <div className="filter-by-name border  rounded p-3 relative mt-10">
            <div className="filter-by-name-title absolute -top-4 bg-white border rounded p-1">
              <h3 className="text-xs font-poppins">Filter by Type</h3>
            </div>
            <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2 select-none">
              <ul>
                <li className="flex items-center gap-4  mb-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="rent"
                  />{" "}
                  <label htmlFor="rent" className="cursor-pointer">
                    Rent
                  </label>
                </li>
                <li className="flex items-center gap-4 ">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm  rounded-full"
                    id="sale"
                  />{" "}
                  <label htmlFor="sale" className="cursor-pointer">
                    Sale
                  </label>
                </li>
              </ul>
            </div>
          </div>
          {/* End */}
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;

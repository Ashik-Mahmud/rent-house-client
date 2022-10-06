import { BsSearch } from "react-icons/bs";
import { RiEqualizerLine } from "react-icons/ri";
import DuelSlider from "../../components/DuelSlider";

type Props = {};

const FilterSidebar = (props: Props) => {
  return (
    <>
      {/* Advanced Filters Modal */}

      <input
        type="checkbox"
        id="advanced-filter-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Advanced Filters</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="filters">
            {/* Filter by Address */}
            <div className="filter-by-name border  rounded p-3 relative mt-10">
              <div className="filter-by-name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">Filter by Address</h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BsSearch />
                </div>
                <input
                  type="number"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Search by Address"
                />
              </div>
            </div>
            {/* End */}
            {/* Filter by City */}
            <div className="filter-by-name border  rounded p-3 relative mt-10">
              <div className="filter-by-name-title absolute -top-4 bg-white border rounded p-1">
                <h3 className="text-xs font-poppins">Filter by City</h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <div className="icon">
                  <BsSearch />
                </div>
                <select
                  name=""
                  className="outline-none  w-full pl-4 cursor-pointer text-sm"
                  id=""
                >
                  <option value="">Select City</option>
                  <option value="Bungalow">Dhaka</option>
                  <option value="Duplex">Rangpur</option>
                  <option value="Flat">Gobindagonj</option>
                  <option value="Terrace">Gaibanda</option>
                </select>
              </div>
            </div>
            {/* End */}
            <div className="flex justify-between items-stretch gap-5">
              {/* Filter by Bedrooms */}
              <div className="filter-by-name border  rounded p-3 relative mt-10 flex-1">
                <div className="filter-by-name-title absolute -top-4 bg-white border rounded p-1">
                  <h3 className="text-xs font-poppins">Filter by Bedrooms</h3>
                </div>
                <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                  <div className="icon">
                    <BsSearch />
                  </div>
                  <input
                    type="number"
                    className="form-control outline-none pl-4 w-full"
                    placeholder="Search by bedrooms"
                  />
                </div>
              </div>
              {/* End */}
              {/* Filter by Bathrooms */}
              <div className="filter-by-name border  rounded p-3 relative mt-10 flex-1">
                <div className="filter-by-name-title absolute -top-4 bg-white border rounded p-1">
                  <h3 className="text-xs font-poppins">Filter by Bathrooms</h3>
                </div>
                <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                  <div className="icon">
                    <BsSearch />
                  </div>
                  <input
                    type="number"
                    className="form-control outline-none pl-4 w-full"
                    placeholder="Search by Bathrooms"
                  />
                </div>
              </div>
              {/* End */}
            </div>

            <div className="flex justify-between items-stretch gap-5">
              {/* Filter by House Type */}
              <div className="filter-by-name border  rounded p-3 relative mt-10 flex-1">
                <div className="filter-by-name-title absolute -top-4 bg-white border rounded p-1">
                  <h3 className="text-xs font-poppins">Filter by Use For</h3>
                </div>
                <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2 select-none">
                  <ul>
                    <li className="flex items-center gap-4  mb-1">
                      <input
                        type="checkbox"
                        className="toggle toggle-sm  rounded-full"
                        id="Commercial"
                      />{" "}
                      <label htmlFor="Commercial" className="cursor-pointer">
                        Commercial
                      </label>
                    </li>
                    <li className="flex items-center gap-4 ">
                      <input
                        type="checkbox"
                        className="toggle toggle-sm  rounded-full"
                        id="residential"
                      />{" "}
                      <label htmlFor="residential" className="cursor-pointer">
                        Residential
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End */}
              {/* Filter by IsBachelor */}
              <div className="filter-by-name border  rounded p-3 relative mt-10 flex-1">
                <div className="filter-by-name-title absolute -top-4 bg-white border rounded p-1">
                  <h3 className="text-xs font-poppins">Filter by isBachelor</h3>
                </div>
                <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2 select-none">
                  <ul>
                    <li className="flex items-center gap-4  mb-1">
                      <input
                        type="checkbox"
                        className="toggle toggle-sm  rounded-full"
                        id="Yes"
                      />{" "}
                      <label htmlFor="Yes" className="cursor-pointer">
                        Yes
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End */}
            </div>
          </div>
          <div className="modal-action">
            <label htmlFor="advanced-filter-modal" className="btn btn-warning">
              Cancel
            </label>
            <button className="btn btn-success">Apply Filter</button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="house-content-left sm:sticky top-10  border p-6 bg-white shadow rounded-md w-full sm:w-auto">
        <div className="house-content-left-title flex items-center justify-between">
          <h2 className="text-xl font-bold">Filters Houses</h2>
          <label
            htmlFor="advanced-filter-modal"
            className="modal-button advance-filters cursor-pointer tooltip"
            data-tip="Advanced Filters"
          >
            <RiEqualizerLine />
          </label>
        </div>
        <div className="filters ">
          {/* Filter by District */}
          <div className="filter-by-name border  rounded p-3 relative mt-10">
            <div className="filter-by-name-title absolute -top-4 bg-white border rounded p-1">
              <h3 className="text-xs font-poppins">Filter by District</h3>
            </div>
            <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
              <div className="icon">
                <BsSearch />
              </div>
              <select
                name=""
                className="outline-none  w-full pl-4 cursor-pointer text-sm"
                id=""
              >
                <option value="">Select District</option>
                <option value="Bungalow">Dhaka</option>
                <option value="Duplex">Rangpur</option>
                <option value="Flat">Gobindagonj</option>
                <option value="Terrace">Gaibanda</option>
              </select>
            </div>
          </div>
          {/* End */}
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

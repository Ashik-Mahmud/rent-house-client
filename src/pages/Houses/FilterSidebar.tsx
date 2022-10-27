import { BsSearch } from "react-icons/bs";
import { RiEqualizerLine } from "react-icons/ri";
import DuelSlider from "../../components/DuelSlider";

type Props = {
  getAllDistrict: any;
  setFilterByDistrict: React.Dispatch<React.SetStateAction<string>>;
  setSearchKey: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setMinPrice: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>;
  priceFilter: any;
  setHouseType: any;
  setSearchAddress: React.Dispatch<React.SetStateAction<string>>;
  setBathrooms: React.Dispatch<React.SetStateAction<number>>;
  setBedrooms: React.Dispatch<React.SetStateAction<number>>;
  setIsBachelor: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterByCity: React.Dispatch<React.SetStateAction<string>>;
  setHouseUseFor: any;
  getAllCity: any;
};

const Fade = require("react-reveal/Fade");

const FilterSidebar = ({
  getAllDistrict,
  setFilterByDistrict,
  setSearchKey,
  setCategory,
  setMinPrice,
  setMaxPrice,
  priceFilter,
  setHouseType,
  setSearchAddress,
  setBathrooms,
  setIsBachelor,
  setBedrooms,
  setHouseUseFor,
  getAllCity,
  setFilterByCity,
}: Props) => {
  /* Handle Reset Filter */
  const handleResetFilter = () => {
    setFilterByDistrict("");
    setSearchKey("");
    setCategory("");
    setMinPrice(0);
    setMaxPrice(0);
    setHouseType("");
    setSearchAddress("");
    setBathrooms(0);
    setIsBachelor(false);
    setBedrooms(0);
    setHouseUseFor("");
    setFilterByCity("");
  };

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
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Search by Address"
                  onInput={(e) => setSearchAddress(e.currentTarget.value)}
                />
              </div>
            </div>
            {/* End */}
            <div className="flex justify-between items-center gap-5">
              {/* Filter by Price */}
              <div className="filter-by-name border  rounded p-3 relative mt-10 flex-1">
                <div className="filter-by-name-title absolute -top-4 bg-white border rounded p-1">
                  <h3 className="text-xs font-poppins">
                    Filter by Price Input
                  </h3>
                </div>
                <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                  <div className="icon">
                    <BsSearch />
                  </div>
                  <input
                    type="number"
                    className="form-control outline-none pl-4 w-20 text-sm"
                    placeholder="Min "
                    onBlur={(e) => setMinPrice(Number(e.target.value))}
                  />
                  <input
                    type="number"
                    className="form-control outline-none pl-4 w-20 text-sm"
                    placeholder="Max "
                    onBlur={(e) => setMaxPrice(Number(e.target.value))}
                  />
                </div>
              </div>
              {/* End */}
              {/* Filter by City */}
              <div className="filter-by-name border  rounded p-3 relative mt-10 flex-1">
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
                    onChange={(e) => setFilterByCity(e.target.value)}
                  >
                    <option value="">Select City</option>
                    {getAllCity?.map((city: string, ind: number) => (
                      <option key={city + ind} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* End */}
            </div>
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
                    onBlur={(e) => setBedrooms(Number(e.target.value))}
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
                    onBlur={(e) => setBathrooms(Number(e.target.value))}
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
                        onClick={(e: any) =>
                          setHouseUseFor((state: any) => {
                            return { ...state, commercial: e.target.checked };
                          })
                        }
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
                        onClick={(e: any) =>
                          setHouseUseFor((state: any) => {
                            return { ...state, residential: e.target.checked };
                          })
                        }
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
                        onClick={(e: any) => setIsBachelor(e.target.checked)}
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
            <button className="btn btn-primary" onClick={handleResetFilter}>
              Reset Filter
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Fade top distance="20px">
        <form className="house-content-left sm:sticky  top-10  border p-6 bg-white shadow rounded-md w-full sm:w-auto">
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
                  onChange={(e) => setFilterByDistrict(e.target.value)}
                >
                  <option value="">Select District</option>
                  {getAllDistrict?.map((district: string, ind: number) => (
                    <option key={district + ind} value={district}>
                      {district}
                    </option>
                  ))}
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
                  onInput={(e) => setSearchKey(e.currentTarget.value)}
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
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <option value="">Select Category</option>
                  <option value="General">General</option>
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
                <h3 className="text-xs font-poppins">Filter by Price Range</h3>
              </div>
              <div className="input-group flex items-center my-2 border p-3 rounded-md mt-2">
                <DuelSlider priceFilter={priceFilter} />
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
                      onClick={(e: any) =>
                        setHouseType((state: any) => {
                          return { ...state, rent: e.target.checked };
                        })
                      }
                    />{" "}
                    <label htmlFor="rent" className="cursor-pointer">
                      Rent
                    </label>
                  </li>
                  <li className="flex items-center gap-4 ">
                    <input
                      type="checkbox"
                      onClick={(e: any) =>
                        setHouseType((state: any) => {
                          return { ...state, sale: e.target.checked };
                        })
                      }
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
            <button
              type="reset"
              className="font-poppins text-sm mt-4 text-error underline"
              onClick={handleResetFilter}
            >
              Clear All
            </button>
          </div>
        </form>
      </Fade>
    </>
  );
};

export default FilterSidebar;

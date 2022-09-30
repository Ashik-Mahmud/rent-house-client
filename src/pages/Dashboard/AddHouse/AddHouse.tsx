import { BiBath, BiBed, BiMoney } from "react-icons/bi";
import { BsAlignEnd, BsHouse, BsLink, BsPen } from "react-icons/bs";
import HouseInput from "./HouseInput";

type Props = {};

const AddHouse = (props: Props) => {
  return (
    <div className="p-5 my-5 bg-white rounded">
      <h1 className="text-2xl font-bold">Add House</h1>
      <div className="mt-5">
        <form>
          <div className="flex flex-col md:flex-row gap-3">
            <HouseInput title="Put Your House Name" icon={<BsHouse />}>
              <input
                type="text"
                className="form-control outline-none pl-4 w-full"
                placeholder="Name"
              />
            </HouseInput>

            <HouseInput title="Put Your House Address" icon={<BsHouse />}>
              <input
                type="text"
                className="form-control outline-none pl-4 w-full"
                placeholder="Address"
              />
            </HouseInput>

            <HouseInput title="Put Your Category" icon={<BsHouse />}>
              <select className="outline-none  w-full pl-4 cursor-pointer text-sm">
                <option value="Bungalow">Bungalow</option>
                <option value="Duplex">Duplex</option>
                <option value="Flat">Flat</option>
                <option value="Terrace">Terrace</option>
              </select>
            </HouseInput>

            <HouseInput title="Select House Type" icon={<BsHouse />}>
              <select className="form-control outline-none pl-4 w-full">
                <option value="Rent">Rent</option>
                <option value="Sale">Sale</option>
              </select>
            </HouseInput>

            <HouseInput title="Select House Use For" icon={<BsHouse />}>
              <select className="form-control outline-none pl-4 w-full">
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </HouseInput>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <HouseInput title="Put Your House Price" icon={<BiMoney />}>
              <input
                type="text"
                className="form-control outline-none pl-4 w-full"
                placeholder="Price"
              />
            </HouseInput>

            <HouseInput
              title="Put Your House Bedrooms Quantity"
              icon={<BiBed />}
            >
              <input
                type="number"
                className="form-control outline-none pl-4 w-full"
                placeholder="bedrooms"
              />
            </HouseInput>

            <HouseInput title="Put Your Bathrooms Quantity" icon={<BiBath />}>
              <input
                type="number"
                className="form-control outline-none pl-4 w-full"
                placeholder="bathrooms"
              />
            </HouseInput>

            <HouseInput title="Put Your District" icon={<BsHouse />}>
              <input
                type="text"
                className="form-control outline-none pl-4 w-full"
                placeholder="District"
              />
            </HouseInput>

            <HouseInput title="Put Your City" icon={<BsAlignEnd />}>
              <input
                type="text"
                className="form-control outline-none pl-4 w-full"
                placeholder="City"
              />
            </HouseInput>
          </div>
          <HouseInput title="Put Your Description" icon={<BsPen />}>
            <textarea
              name=""
              id=""
              cols={10}
              rows={5}
              placeholder="Description"
              className="w-full outline-none"
            ></textarea>
          </HouseInput>
          <HouseInput title="Put Your Google Map Link" icon={<BsLink />}>
            <input
              type="url"
              className="form-control outline-none pl-4 w-full"
              placeholder="URL"
            />
          </HouseInput>
          {/* Start */}
          <div className="flex flex-col md:flex-row gap-3">
            <HouseInput title="IsBooked" icon={<BsHouse />}>
              <select className="form-control outline-none pl-4 w-full">
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </HouseInput>
            <HouseInput title="isBachelorRoom" icon={<BsHouse />}>
              <select className="form-control outline-none pl-4 w-full">
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </HouseInput>
            <HouseInput title="Allow Question" icon={<BsHouse />}>
              <select className="form-control outline-none pl-4 w-full">
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </HouseInput>
            <HouseInput title="Allow Question" icon={<BsHouse />}>
              <select className="form-control outline-none pl-4 w-full">
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </HouseInput>
            <HouseInput title="Allow Review" icon={<BsHouse />}>
              <select className="form-control outline-none pl-4 w-full">
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </HouseInput>
          </div>
          <HouseInput title="Others">
            <ul className="flex items-center flex-wrap gap-3 ">
              <li className="flex items-center gap-4  mb-1 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasDrawingRoom"
                />{" "}
                <label htmlFor="hasDrawingRoom" className="cursor-pointer">
                  hasDrawingRoom
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasDinningRoom"
                />{" "}
                <label htmlFor="hasDinningRoom" className="cursor-pointer">
                  hasDinningRoom
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasKitchen"
                />{" "}
                <label htmlFor="hasKitchen" className="cursor-pointer">
                  hasKitchen
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasStore"
                />{" "}
                <label htmlFor="hasStore" className="cursor-pointer">
                  hasStore
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasServantRoom"
                />{" "}
                <label htmlFor="hasServantRoom" className="cursor-pointer">
                  hasServantRoom
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasSwimmingPool"
                />{" "}
                <label htmlFor="hasSwimmingPool" className="cursor-pointer">
                  hasSwimmingPool
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasGym"
                />{" "}
                <label htmlFor="hasGym" className="cursor-pointer">
                  hasGym
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasLawn"
                />{" "}
                <label htmlFor="hasLawn" className="cursor-pointer">
                  hasLawn
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasGarage"
                />{" "}
                <label htmlFor="hasGarage" className="cursor-pointer">
                  hasGarage
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasCarParking"
                />{" "}
                <label htmlFor="hasCarParking" className="cursor-pointer">
                  hasCarParking
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasLift"
                />{" "}
                <label htmlFor="hasLift" className="cursor-pointer">
                  hasLift
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasGenerator"
                />{" "}
                <label htmlFor="hasGenerator" className="cursor-pointer">
                  hasGenerator
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasSecurity"
                />{" "}
                <label htmlFor="hasSecurity" className="cursor-pointer">
                  hasSecurity
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasCCTV"
                />{" "}
                <label htmlFor="hasCCTV" className="cursor-pointer">
                  hasCCTV
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasInternet"
                />{" "}
                <label htmlFor="hasInternet" className="cursor-pointer">
                  hasInternet
                </label>
              </li>
              <li className="flex items-center gap-4 flex-1">
                <input
                  type="checkbox"
                  className="toggle toggle-sm  rounded-full"
                  id="hasGas"
                />{" "}
                <label htmlFor="hasGas" className="cursor-pointer">
                  hasGas
                </label>
              </li>
            </ul>
          </HouseInput>
          <div>
            <HouseInput title="Image">
              <input type="file" name="preview-image" />
            </HouseInput>
            <HouseInput title="Galleries">
              <input type="file" name="gallery-image" multiple />
            </HouseInput>
          </div>
          <div className="py-5 my-3 flex justify-end gap-4">
            <button className="btn btn-warning btn-md" type="reset">
              Reset
            </button>
            <button className="btn btn-success btn-md">Save House</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHouse;

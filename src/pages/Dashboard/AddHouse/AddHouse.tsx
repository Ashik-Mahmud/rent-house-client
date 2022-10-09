import { useForm } from "react-hook-form";
import { BiBath, BiBed, BiMoney } from "react-icons/bi";
import { BsAlignEnd, BsHouse, BsLink, BsPen } from "react-icons/bs";
import SendVerifyEmail from "../../../components/SendVerifyEmail";
import useAuth from "../../../hooks/useAuth";
import { authUserInterface } from "../../../interfaces/UserInterface";
import HouseInput from "./HouseInput";

type Props = {};

const AddHouse = (props: Props) => {
  const { updatedUser } = useAuth<authUserInterface | any>({});

  const isVerify = updatedUser?.isVerified;

  /* Handle Add House Form Submit */
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddHouseFormSubmit = handleSubmit((data) => {
    console.log(data);
    reset();
  });

  return (
    <div className="p-5 my-5 bg-white rounded">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold">Add House</h1>
        <small className="badge badge-success">House Holder</small>
      </div>
      <div className="mt-5">
        {isVerify ? (
          <form onSubmit={handleAddHouseFormSubmit}>
            <div className="flex flex-col md:flex-row gap-3">
              <HouseInput title="Put Your House Name" icon={<BsHouse />}>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
              </HouseInput>

              <HouseInput title="Put Your House Address" icon={<BsHouse />}>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="Address"
                  {...register("address", { required: true })}
                />
              </HouseInput>

              <HouseInput title="Put Your Category" icon={<BsHouse />}>
                <select
                  className="outline-none  w-full pl-4 cursor-pointer text-sm"
                  {...register("category", { required: true })}
                >
                  <option value="Bungalow">Bungalow</option>
                  <option value="Duplex">Duplex</option>
                  <option value="Flat">Flat</option>
                  <option value="Terrace">Terrace</option>
                </select>
              </HouseInput>

              <HouseInput title="Select House Type" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("houseType", { required: true })}
                >
                  <option value="Rent">Rent</option>
                  <option value="Sale">Sale</option>
                </select>
              </HouseInput>

              <HouseInput title="Select House Use For" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("houseUseFor", { required: true })}
                >
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
                  {...register("price", { required: true })}
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
                  {...register("bedrooms", { required: true })}
                />
              </HouseInput>

              <HouseInput title="Put Your Bathrooms Quantity" icon={<BiBath />}>
                <input
                  type="number"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="bathrooms"
                  {...register("bathrooms", { required: true })}
                />
              </HouseInput>

              <HouseInput title="Put Your District" icon={<BsHouse />}>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="District"
                  {...register("district", { required: true })}
                />
              </HouseInput>

              <HouseInput title="Put Your City" icon={<BsAlignEnd />}>
                <input
                  type="text"
                  className="form-control outline-none pl-4 w-full"
                  placeholder="City"
                  {...register("city", { required: true })}
                />
              </HouseInput>
            </div>
            <HouseInput title="Put Your Description" icon={<BsPen />}>
              <textarea
                cols={10}
                rows={5}
                placeholder="Description"
                className="w-full outline-none"
                {...register("description", { required: true })}
              ></textarea>
            </HouseInput>
            <HouseInput title="Put Your Google Map Link" icon={<BsLink />}>
              <input
                type="url"
                className="form-control outline-none pl-4 w-full"
                placeholder="URL"
                {...register("googleMapLink", { required: true })}
              />
            </HouseInput>
            {/* Start */}
            <div className="flex flex-col md:flex-row gap-3">
              <HouseInput title="IsBooked" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("isBooked", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </HouseInput>
              <HouseInput title="isBachelorRoom" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("isBechelorRoom", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </HouseInput>
              <HouseInput title="Allow Question" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("allowQuestion", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </HouseInput>
              <HouseInput title="Is Available" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("isAvailable", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </HouseInput>
              <HouseInput title="Allow Review" icon={<BsHouse />}>
                <select
                  className="form-control outline-none pl-4 w-full"
                  {...register("allowReview", { required: true })}
                >
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
                    {...register("hasDrawingRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
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
                    {...register("hasDinningRoom")}
                  />{" "}
                  <label htmlFor="hasGas" className="cursor-pointer">
                    hasGas
                  </label>
                </li>
              </ul>
            </HouseInput>
            <div>
              <HouseInput title="Image">
                <input
                  type="file"
                  {...register("previewImage", { required: true })}
                  accept="image/*"
                />
              </HouseInput>
              <HouseInput title="Galleries">
                <input
                  type="file"
                  multiple
                  {...register("galleryImage", { required: true })}
                  accept="image/*"
                />
              </HouseInput>
            </div>
            <div className="py-5 my-3 flex justify-end gap-4">
              <button className="btn btn-warning btn-md" type="reset">
                Reset
              </button>
              <button className="btn btn-success btn-md">Save House</button>
            </div>
          </form>
        ) : (
          <SendVerifyEmail
            title="Verify to Add House"
            desc="You could'nt add house if you are not verify your account. please verify."
          />
        )}
      </div>
    </div>
  );
};

export default AddHouse;
